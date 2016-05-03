Rails.application.routes.draw do
  root to: 'site#index'

  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      resources :skills
    end
  end

  match '*path', via: [:options], to:  lambda {|_| [204, {'Content-Type' => 'text/plain'}, []]}
end
