class AddImageUrltoVenues < ActiveRecord::Migration
  def change
    add_column :venues, :description, :text
  end
end
