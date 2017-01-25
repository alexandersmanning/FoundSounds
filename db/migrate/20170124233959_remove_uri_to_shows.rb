class RemoveUriToShows < ActiveRecord::Migration
  def change
    remove_column :shows, :show_link
  end
end
