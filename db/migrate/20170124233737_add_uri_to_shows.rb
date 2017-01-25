class AddUriToShows < ActiveRecord::Migration
  def change
    add_column :shows, :show_link, :text
  end
end
