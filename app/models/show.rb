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


 def self.find_shows_by_venue(venue_id, from_date = nil, to_date = nil, user_id = nil)

    to_date ||=  10.days.from_now
    from_date ||= Date.today

    if from_date.is_a?(String) || to_date.is_a?(String)
      from_date = Date.parse(from_date)
      to_date =  Date.parse(to_date)
    end

    if (user_id.nil?)
      Show.includes(:venue).includes(:artists).where("(date BETWEEN ? AND ?) AND (venue_id = ?) ", from_date, to_date, venue_id)
    else
      Show.includes(:venue).includes(:artists).includes(:users).joins(:users).where("(date BETWEEN ? AND ?) AND (venue_id = ?) AND (users.id = ?) ", from_date, to_date, venue_id, user_id)
    end

  end

  def self.find_shows_by_date(from_date = Date.today, to_date= 10.days.from_now, bounds = nil, user_id = nil)
    bounds ||= {
       "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
      "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
      }


    if from_date.is_a?(String) || to_date.is_a?(String)
      from_date = Date.parse(from_date)
      to_date =  Date.parse(to_date)
    end

    if (user_id.nil?)
      Show.includes(:venue).includes(:artists).where("(date BETWEEN ? AND ?) AND (venue_id in (?)) ", from_date, to_date, Venue.in_bounds(bounds).pluck(:id) )
    else
     Show.includes(:venue).includes(:artists).includes(:users).joins(:users).where("(date BETWEEN ? AND ?) AND (venue_id in (?))  AND (users.id = ?) ", from_date, to_date, Venue.in_bounds(bounds).pluck(:id), user_id)
    end
  end



  def artists_list
    self.artists.map do |artist|
      artist.name
    end
  end
end
