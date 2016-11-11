
shows_by_date = Hash.new { |h, k| h[k] = [] }
shows_by_venue = Hash.new { |h, k| h[k] = [] }
show_venues = Hash.new

@shows.each do |show|
  shows_by_date[show.date.to_date] << show
  show_venues[show.venue_id] = show.venue
  shows_by_venue[show.venue_id] << show
end

json.ShowList do
  json.ShowsByDate do
    #possibly remove the below
    if shows_by_date.keys.empty?
      json.null!
    else
      shows_by_date.keys.each do |date|
        json.set! date do
          json.Shows shows_by_date[date].each do |show|
              json.showId show.id
              json.venueName show.venue.name
              json.artists do
                show.artists.each do |artist|
                  json.set! artist.id do
                    json.name artist.name
                    json.id artist.id
                    json.img_url artist.img_url
                  end
                end
              end
              billing_index = show.show_artists.where("billing_index = 1").pluck(:artist_id).first
              json.billing_index billing_index
          end
        end
      end
    end
  end

  json.ShowsByVenue do
    show_venues.keys.each do |venue_id|
      json.set! venue_id do
        json.id venue_id
        json.name show_venues[venue_id].name
        json.address show_venues[venue_id].address
        json.city show_venues[venue_id].city
        json.state show_venues[venue_id].state
        json.lat show_venues[venue_id].latitude
        json.lng show_venues[venue_id].longitude
        json.Shows do
          shows_by_venue[venue_id].each do |show|
            json.set! show.id do
              json.showId show.id
              json.date show.date
              json.artists show.artists
              json.showTicketsUrl show.url
            end
          end
        end
      end
    end
  end
end

# I want a list of show names
# date shows
# venues
# artists