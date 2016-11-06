guest = User.create(email: "guest@foundsounds.io", password: "guest_account")
# venues = Venue.create([
#   {name:"Great American Music Hall", address:"859 O'Farrell St.", city:"San Francisco", state:"CA", zip_code:94109, url:"http://www.gamh.com", latitude:37.785125, longitude:-122.418851, api_id:109},
#   {name:"The Fillmore", address:"1805 Geary Blvd", city:"San Francisco", state:"CA", zip_code:94115, url:"http://www.thefillmore.com", latitude:37.784229, longitude:-122.433092, api_id:727},
#   {name:"Bottom of the Hill", address:"1233 17th St.", city:"San Francisco", state:"CA", zip_code:94107, url:"http://www.bottomofthehill.com", latitude:37.765229, longitude:-122.396175, api_id:2891},
#   {name:"Rickshaw Stop", address:"155 Fell St.", city:"San Francisco", state:"CA", zip_code:94103, url:"http://www.rickshawstop.com/", latitude: 37.776319, longitude: -122.420319, api_id:41336},
#   ])

# artists = Artist.create([
#   {
#     name: "The Flaming Lips", api_id: 12619
#   },
#   {
#     name: "Car Seat Headrest", api_id: 112373
#   },
#   {
#     name: "The War on Drugs", api_id: 53391
#   },
#   {
#     name: "Mutual Benefit", api_id: 104193
#   },
#   {
#     name: "The National", api_id: 3652
#   },
#   {
#     name: "Sufjan Stevens", api_id: 29335
#   }
# ])

# shows = Show.create([
#   {
#     venue: venues.first, date: Time.parse('11-11-2016 21:00:00'), api_id: 1
#   },
#   {
#     venue: venues[1], date: Time.parse('11-11-2016 21:00:00'), api_id: 2
#   },
#   {
#     venue: venues[2], date: Time.parse('12-11-2016 21:00:00'), api_id: 3
#   },
#   {
#     venue: venues[0], date: Time.parse('12-11-2016 21:00:00'), api_id: 4
#   },
#   {
#     venue: venues[3], date: Time.parse('13-11-2016 21:00:00'), api_id: 5
#   }
# ])

# show_artists = ShowArtist.create([
#   {
#     show: shows.first, artist: artists.first
#   },
#   {
#     show: shows[1], artist: artists[1]
#   },
#   {
#     show: shows[2], artist: artists[2]
#   },
#   {
#     show: shows[3], artist: artists[3]
#   },
#   {
#     show: shows[4], artist: artists[4]
#   },
#   {
#     show: shows[4], artist: artists[1]
#   },
#   {
#     show: shows[3], artist: artists[0]
#   }
# ])
50.times do |num|
  show_list = JSON(RestClient.get("http://api.songkick.com/api/3.0/metro_areas/26330/calendar.json?apikey=API_KEY&page=#{num + 1}", {accept: :json}).body)

  break if show_list["resultsPage"]["results"]["event"].nil?
  show_list["resultsPage"]["results"]["event"].each do |event|

    venue = Venue.find_by_api_id(event["venue"]["id"])
    if venue.nil?

     venue_string = ERB::Util.url_encode("#{event['venue']['displayName'].split.join('+')}+SF+Bay+Area")
     venue_response = JSON(RestClient.get("http://api.songkick.com/api/3.0/search/venues.json?query=#{venue_string}&apikey=API_KEY").body)

      next if venue_response["resultsPage"]["results"]["venue"].nil?

      found_venue = venue_response["resultsPage"]["results"]["venue"].select do |venue| venue["id"] == event["venue"]["id"]
      end.first

      venue = Venue.create(
            name:found_venue["displayName"],
            address:found_venue["street"],
            city: found_venue["city"]["displayName"],
            state:found_venue["city"]["state"]["displayName"],
            zip_code:found_venue["zip"],
            url:found_venue["website"],
            latitude:found_venue["lat"],
            longitude:found_venue["lng"],
            api_id:found_venue["id"],
            description: found_venue["description"]
          )
    end

    show = Show.find_by_api_id(event["id"])
    if show.nil?
      show = Show.create(
                  venue: venue,
                  date: event["start"]["date"],
                  api_id: event["id"]
                  )
    end

    ##Artist Portion
    event["performance"].each do |performance|
      band = Artist.find_by_api_id(performance["artist"]["id"])
      if band.nil?
        img_url = "http://images.sk-static.com/images/media/profile_images/artists/#{performance["artist"]["id"]}/huge_avatar"


        band = Artist.create({
            name: performance["artist"]["displayName"],
            img_url: img_url,
            api_id: performance["artist"]["id"]
          })
      end

      if ShowArtist.find_by(show: show, artist: band).nil?
        ShowArtist.create({
            show: show, artist: band, billing_index: performance["artist"]["billingIndex"]
          })
      end
    end
  end
end