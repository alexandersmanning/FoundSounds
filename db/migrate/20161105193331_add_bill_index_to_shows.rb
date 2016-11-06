class AddBillIndexToShows < ActiveRecord::Migration
  def change
    add_column :shows, :billing_index, :integer
  end
end
