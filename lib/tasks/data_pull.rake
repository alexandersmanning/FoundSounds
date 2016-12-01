namespace :data_pull do
  desc "TODO"
  task sf_show_data: :environment do
    50.times do |num|
      show_list = JSON(RestClient.get("http://api.songkick.com/api/3.0/metro_areas/26330/calendar.json?apikey=#{Figaro.env.song_kick_api}&page=#{num + 1}", {accept: :json}).body)

      break if show_list["resultsPage"]["results"]["event"].nil?
      show_list["resultsPage"]["results"]["event"].each do |event|

        venue = Venue.find_by_api_id(event["venue"]["id"])
        if venue.nil?
         venue_string = ERB::Util.url_encode("#{event['venue']['displayName'].split.join('+')}+SF+Bay+Area")

         venue_response = JSON(RestClient.get("http://api.songkick.com/api/3.0/search/venues.json?query=#{venue_string}&apikey=#{Figaro.env.song_kick_api}").body)

         if venue_response["resultsPage"]["results"]["venue"].nil?
          venue_string = ERB::Util.url_encode("#{event['venue']['displayName'].split.join('+')}")

           venue_response = JSON(RestClient.get("http://api.songkick.com/api/3.0/search/venues.json?query=#{venue_string}&apikey=#{Figaro.env.song_kick_api}").body)
         end

          next if venue_response["resultsPage"]["results"]["venue"].nil?

          found_venue = venue_response["resultsPage"]["results"]["venue"].select do |venue| venue["id"] == event["venue"]["id"]
          end.first

          next if found_venue.nil?

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

        next if venue[:id].nil?

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
          billing_index = performance["billingIndex"]
          band = Artist.find_by_api_id(performance["artist"]["id"])
          if band.nil?
            img_url = "http://images.sk-static.com/images/media/profile_images/artists/#{performance["artist"]["id"]}/huge_avatar"


            band = Artist.create({
                name: performance["artist"]["displayName"],
                img_url: img_url,
                api_id: performance["artist"]["id"]
              })
          end

          show_artist = ShowArtist.find_by(show: show, artist: band)

          if show_artist.nil?
            ShowArtist.create({
                show: show, artist: band, billing_index: billing_index
              })
          elsif show_artist.billing_index.nil?
            show_artist.update({billing_index: billing_index})
          end
        end
      end
    end
  end
end
