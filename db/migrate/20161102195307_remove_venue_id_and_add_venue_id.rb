class RemoveVenueIdAndAddVenueId < ActiveRecord::Migration
  def change
    remove_column :shows, :venue_id
    add_column :shows, :venue_id, :integer
  end
end
