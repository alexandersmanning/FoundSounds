class AddUriToShows < ActiveRecord::Migration[5.2]
  def change
    add_column :shows, :show_link, :text
  end
end
