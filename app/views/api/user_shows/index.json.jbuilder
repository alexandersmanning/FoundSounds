@user_shows.each do |show|
  json.set! show.id do
    json.id show.id
    json.venueId show.venue_id
    json.date show.date
  end
end