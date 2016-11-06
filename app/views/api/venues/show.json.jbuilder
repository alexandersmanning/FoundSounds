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
      json.set! show.id do
        json.set! show.id
        json.showId show.id
        json.date show.date
        json.artists show.artists
        json.showTicketsUrl show.url
      end
    end
  end

