class Venue < ActiveRecord::Base
  validates :name, :address, :city, :state, :zip_code, :latitude, :longitude, :api_id, presence: true

  has_many :shows,
    primary_key: :id,
    foreign_key: :show_id,
    class_name: :Show

  def self.in_bounds(bounds)
    lat, lng = [], []
    bounds.keys.each do |dir|
      lat << bounds[dir]["lat"].to_f
      lng << bounds[dir]["lng"].to_f
    end

    Venue.where("(latitude BETWEEN ? AND ?) AND (longitude BETWEEN ? AND ?)", *lat.sort, *lng.sort)
  end

end
