class Skill < ActiveRecord::Base
  enum level: [:bad, :halfbad, :ok, :good, :fantastic]
end
