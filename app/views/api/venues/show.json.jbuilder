@venue = @venue_shows.first.venue
  json.id @venue.id
  json.name @venue.name
  json.address @venue.address
  json.city @venue.city
  json.state @venue.state
  json.lat @venue.latitude
  json.lng @venue.longitude
  json.Shows do
    @venue_shows.each do |show|
      billing_index = show.show_artists.where("billing_index = 1").pluck(:artist_id).first
      json.set! show.id do
        json.showId show.id
        json.date show.date
        json.artists do
          show.artists.each do |artist|
            json.set! artist.id do
              json.name artist.name
              json.id artist.id
              json.img_url artist.img_url
           end
        end
        end
        json.showTicketsUrl show.url
        json.billing_index billing_index
      end
    end
  end

