@user_shows.each do |show|
  json.set! show.id do
    json.userShowsId show.user_shows_id
    json.id show.id
    json.venueId show.venue_id
    json.date show.date
  end
end