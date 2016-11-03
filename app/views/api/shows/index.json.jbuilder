# show_artists = Hash.new
# show_venues = Hash.new
# shows_by_date = Hash.new { |h, k| h[k] = [] }

# @shows.each do |show|
#   show.artists.each do |artist|
#     show_artsts[artists.id] = artist
#   end

#   shows_by_date[show.date.to_date] << show
#   show_venues[show.venue_id] = show.venue
# end


#   json.ShowsByDay do
#     json.Shows @shows.each do |show|
#       json.set! show.id do
#         json.venue: show.venue_id
#         json.date: show.date
#         json.array! show.artists :name
#       end
#     end

#     json.Venues do
#       shows_venues.keys.each do |venue_id|
#         json.set! venue_id do
#             json.id venue_id
#             json.name show_venues[venue_id].name
#             json.address show_venues[venue_id].address
#             json.city show_venues[venue_id].city
#             json.state show_venues[venue_id].state
#             json.lat show_venues[venue_id].latitude
#             json.lng show_venues[venue_id].longitude
#         end
#       end
#     end

#     json.Artists do
#       show_artsts.keys.each do |id|
#         json.set! id do
#           json.id id
#           json.name show_artists[id].name
#         end
#       end
#     end

#     json.Dates do

#     end
#   end

shows_by_date = Hash.new { |h, k| h[k] = [] }
show_venues = Hash.new


@shows.each do |show|
  shows_by_date[show.date.to_date] << show
  show_venues[show.venue_id] = show.venue
end

json.ShowList do
  json.ShowsByDate do
    shows_by_date.keys.each do |date|
      json.set! date do
        json.Shows shows_by_date[date].each do |show|
            json.showId show.id
            json.venueName show.venue.name
            json.artists show.artists_list
        end
      end
    end
  end

  json.ShowsByVenue do
    show_venues.keys.each do |venue_id|
      json.set! venue_id do
        json.name show_venues[venue_id].name
        json.address show_venues[venue_id].address
        json.lat show_venues[venue_id].latitude
        json.lng show_venues[venue_id].longitude
      end
    end
  end
end

# I want a list of show names
# date shows
# venues
# artists