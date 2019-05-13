class CreateVenues < ActiveRecord::Migration[5.2]
  def change
    create_table :venues do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip_code, null: false
      t.string :url
      t.decimal :latitude, null: false
      t.decimal :longitude, null: false
      t.integer :api_id, null: false

      t.timestamps null: false
    end

    add_index :venues, :api_id, unique: true
    add_index :venues, [:name, :city], unique: true, name: 'by_name_city'
  end
end
