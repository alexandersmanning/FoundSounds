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

  def self.find_shows_by_date(from_date = Date.today, to_date= 10.days.from_now)
    if from_date.is_a?(String) || to_date.is_a?(String)
      from_date = Time.parse(from_date)
      to_date =  Time.parse(to_date)
    end

    Show.all.where("date BETWEEN ? AND ?", from_date, to_date)
  end

  def artists_list
    self.artists.map do |artist|
      artist.name
    end
  end
end
