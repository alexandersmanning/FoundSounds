# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
guest = User.create(email: "guest@foundsounds.io", password: "guest_account")
venues = Venue.create([
  {name:"Great American Music Hall", address:"859 O'Farrell St.", city:"San Francisco", state:"CA", zip_code:94109, url:"http://www.gamh.com", latitude:37.785125, longitude:-122.418851, api_id:109},
  {name:"The Fillmore", address:"1805 Geary Blvd", city:"San Francisco", state:"CA", zip_code:94115, url:"http://www.thefillmore.com", latitude:37.784229, longitude:-122.433092, api_id:727},
  {name:"Bottom of the Hill", address:"1233 17th St.", city:"San Francisco", state:"CA", zip_code:94107, url:"http://www.bottomofthehill.com", latitude:37.765229, longitude:-122.396175, api_id:2891},
  {name:"Rickshaw Stop", address:"155 Fell St.", city:"San Francisco", state:"CA", zip_code:94103, url:"http://www.rickshawstop.com/", latitude: 37.776319, longitude: -122.420319, api_id:41336},
  ])

artists = Artist.create([
  {
    name: "The Flaming Lips", api_id: 12619
  },
  {
    name: "Car Seat Headrest", api_id: 112373
  },
  {
    name: "The War on Drugs", api_id: 53391
  },
  {
    name: "Mutual Benefit", api_id: 104193
  },
  {
    name: "The National", api_id: 3652
  },
  {
    name: "Sufjan Stevens", api_id: 29335
  }
])

shows = Show.create([
  {
    venue: venues.first, date: Time.parse('11-11-2016 21:00:00'), api_id: 1
  },
  {
    venue: venues[1], date: Time.parse('11-11-2016 21:00:00'), api_id: 2
  },
  {
    venue: venues[2], date: Time.parse('12-11-2016 21:00:00'), api_id: 3
  },
  {
    venue: venues[0], date: Time.parse('12-11-2016 21:00:00'), api_id: 4
  },
  {
    venue: venues[3], date: Time.parse('13-11-2016 21:00:00'), api_id: 5
  }
])

show_artists = ShowArtist.create([
  {
    show: shows.first, artist: artists.first
  },
  {
    show: shows[1], artist: artists[1]
  },
  {
    show: shows[2], artist: artists[2]
  },
  {
    show: shows[3], artist: artists[3]
  },
  {
    show: shows[4], artist: artists[4]
  },
  {
    show: shows[4], artist: artists[1]
  },
  {
    show: shows[3], artist: artists[0]
  }
])