class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.integer :venue_id, null: false
      t.datetime :date, null: false
      t.string :url
      t.integer :api_id, null: false

      t.timestamps null: false
    end

     add_index :shows, :api_id, unique: true
     add_index :shows, :venue_id
     add_index :shows, :date
  end
end
