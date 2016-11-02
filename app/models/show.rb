class Show < ActiveRecord::Base
  validates :venue, :date, :api_id, presence: true

  belongs_to :venue,
    primary_key: :id,
    foreign_key: :venue_id,
    class_name: :Venue

  has_many :show_artists,
    primary_key: :id,
    foreign_key: :show_id,
    class_name: :ShowArtist

  has_many :artists,
    through: :show_artists,
    source: :artist

  has_many :user_shows,
    primary_key: :id,
    foreign_key: :show_id,
    class_name: :UserShow

  has_many :users,
    through: :user_shows,
    source: :user

  def attending
    users.attending
  end

  def maybe
    users.attending
  end
end
