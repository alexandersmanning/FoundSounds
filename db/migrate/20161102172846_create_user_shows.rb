class CreateUserShows < ActiveRecord::Migration[5.2]
  def change
    create_table :user_shows do |t|
      t.integer :show_id, null: false
      t.integer :user_id, null: false
      t.integer :attending, default: 0

      t.timestamps null: false
    end

    add_index :user_shows, :show_id
    add_index :user_shows, :user_id
  end
end
