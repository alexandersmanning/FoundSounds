class ShowArtist < ActiveRecord::Base
  validates :show, :artist, presence: true

   belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Artist

  belongs_to :show,
    primary_key: :id,
    foreign_key: :show_id,
    class_name: :Show
end
