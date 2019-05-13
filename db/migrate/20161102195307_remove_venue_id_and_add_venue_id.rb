class RemoveVenueIdAndAddVenueId < ActiveRecord::Migration[5.2]
  def change
    remove_column :shows, :venue_id
    add_column :shows, :venue_id, :integer
  end
end
