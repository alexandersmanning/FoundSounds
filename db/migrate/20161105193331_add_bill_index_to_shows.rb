class AddBillIndexToShows < ActiveRecord::Migration[5.2]
  def change
    add_column :shows, :billing_index, :integer
  end
end
