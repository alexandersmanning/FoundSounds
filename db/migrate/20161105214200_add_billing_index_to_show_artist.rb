class AddBillingIndexToShowArtist < ActiveRecord::Migration[5.2]
  def change
    add_column :show_artists, :billing_index, :integer
    remove_column :shows, :billing_index, :integer
  end
end
