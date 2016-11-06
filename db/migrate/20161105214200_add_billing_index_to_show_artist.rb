class AddBillingIndexToShowArtist < ActiveRecord::Migration
  def change
    add_column :show_artists, :billing_index, :integer
    remove_column :shows, :billing_index, :integer
  end
end
