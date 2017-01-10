
shows_by_date = Hash.new { |h, k| h[k] = [] }
shows_by_venue = Hash.new { |h, k| h[k] = [] }
show_venues = Hash.new

@shows.each do |show|
  shows_by_date[show.date.to_date] << show
  show_venues[show.venue_id] = show.venue
  # shows_by_venue[show.venue_id] << show
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
              json.venueId show.venue.id
              json.artists do
                show.artists.each do |artist|
                  json.set! artist.id do
                    json.name artist.name
                    json.id artist.id
                    json.img_url artist.img_url
                  end
                end
              end
          end
        end
      end
    end
  end

  json.ShowsByVenue do
    show_venues.keys.each do |venue_id|
      json.set! venue_id do
        json.id venue_id
        json.lat show_venues[venue_id].latitude
        json.lng show_venues[venue_id].longitude
      end
    end
  end
end
