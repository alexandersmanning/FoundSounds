shows_by_date = Hash.new { |h, k| h[k] = [] }

@shows.each do |show|
  shows_by_date[show.date] << show
end

json.ShowsByDate shows_by_date.keys do |date|
  json.set! date do
    json.Shows shows_by_date[date].each do |show|
        json.showId show.id
        json.venueName show.venue.name
        json.artists show.artists :name
    end
  end
end