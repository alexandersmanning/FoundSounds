class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :img_url
      t.integer :api_id, null: false

      t.timestamps null: false
    end

    add_index :artists, :name
    add_index :artists, :api_id, unique: true
  end
end
