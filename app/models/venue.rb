class Venue < ActiveRecord::Base
  validates :name, :address, :city, :state, :zip_code, :latitude, :longitude, :api_id, presence: true

  has_many :shows,
    primary_key: :id,
    foreign_key: :show_id,
    class_name: :Show

end
