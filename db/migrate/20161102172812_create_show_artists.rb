class CreateShowArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :show_artists do |t|
      t.integer :show_id, null: false
      t.integer :artist_id, null: false

      t.timestamps null: false
    end

     add_index :show_artists, :show_id
     add_index :show_artists, :artist_id

  end
end
