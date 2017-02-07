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

  def self.find_like_names(artist_name)
    return [] unless artist_name && artist_name.length > 0
    Artist.where("name ILIKE ?", "%#{artist_name}%").take(20)
  end
end
