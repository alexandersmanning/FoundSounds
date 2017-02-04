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


 def self.find_shows_by_venue(venue_id, from_date, to_date, user_id = nil)

    from_date = Show.modify_date(from_date) || Date.today
    to_date = Show.modify_date(to_date) || 10.days.from_now


    shows = Show.includes(:venue, :artists).where("(date BETWEEN ? AND ?) AND (venue_id = ?) ", from_date, to_date, venue_id)

    if (user_id)
      shows = shows.joins(:users).where("users.id = ?", user_id)
    end

    return shows
  end

  def self.find_shows_by_date(from_date = Date.today, to_date= 100.days.from_now, bounds = nil, user_id = nil)

    bounds ||= {
       "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
      "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
      }

    from_date = Show.modify_date(from_date)
    to_date = Show.modify_date(to_date)

    shows = Show.includes(:venue, :artists).where("(date BETWEEN ? AND ?) AND (venue_id in (?)) ", from_date, to_date, Venue.in_bounds(bounds).pluck(:id) ).order("shows.date")

    if(user_id)
      shows = shows.joins(:users).where("users.id = ?", user_id)
    end

    shows
  end



  def artists_list
    self.artists.map do |artist|
      artist.name
    end
  end

  private
  def self.modify_date(date)
    date.is_a?(String) ? Date.parse(date) : date
  end
end
