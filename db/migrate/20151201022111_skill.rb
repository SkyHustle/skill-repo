class Skill < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string   :name
      t.text     :details
      t.integer  :level, :default => 2

      t.timestamps
    end
  end
end
