

# json.extract! @show do
#   json.showId @show.id
#   json.venueName @show.venue.name
#   json.venueAddress @show.venue.address
#   json.venueState @show.venue.state
#   json.venueCity @show.venue.city
#   json.artists @show.artists
# end

json.id @show.id
json.venueId @show.venue.id
json.venueName @show.venue.name
json.venueAddress @show.venue.address
json.venueState @show.venue.state
json.venueCity @show.venue.city
json.artists do
  @show.artists.each do |artist|
    json.set! artist.id do
      json.name artist.name
      json.id artist.id
      json.img_url = artist.img_url
    end
  end
end