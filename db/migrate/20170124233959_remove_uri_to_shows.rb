class RemoveUriToShows < ActiveRecord::Migration[5.2]
  def change
    remove_column :shows, :show_link
  end
end
