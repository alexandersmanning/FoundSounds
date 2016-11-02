class Artist < ActiveRecord::Base
  validates :name, :api_id, presence: true;
  validates :api_id, uniqueness: true;

  has_many :show_artists,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :ShowArtist

  has_many :shows,
    through: :show_artists,
    source: :show
end
