

# json.extract! @show do
#   json.showId @show.id
#   json.venueName @show.venue.name
#   json.venueAddress @show.venue.address
#   json.venueState @show.venue.state
#   json.venueCity @show.venue.city
#   json.artists @show.artists
# end

json.showId @show.id
json.date @show.date
json.venueId @show.venue.id
json.venueName @show.venue.name
json.venueAddress @show.venue.address
json.venueState @show.venue.state
json.url @show.url
json.venueCity @show.venue.city
billing_index = @show.show_artists.where("billing_index = 1").pluck(:artist_id).first
json.billing_index billing_index
json.artists do
  @show.artists.each do |artist|
    json.set! artist.id do
      json.name artist.name
      json.id artist.id
      json.img_url artist.img_url
    end
  end
end