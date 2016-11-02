class RemoveVenueIdAndAddVenueIdAgain < ActiveRecord::Migration
  def change
     remove_column :shows, :venue_id, :integer
    add_column :shows, :venue_id, :integer, null: false
  end
end
