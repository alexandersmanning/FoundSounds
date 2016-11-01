Updated sample state per Gage's lecture
```js
{
	currentUser: {
		id: 1,
		username: "Alex Manning"
	},
	forms: {
		signUp: { errors: []},
		logIn: {errors: []},
		contact: {errors: []}
	},
	ShowsByDate: {
		"11/11/2016": {
			Shows: {
				1: {
							showId: 1
							venueName: "Great American",
							venueAddress: "1119 Geary Street, San Francisco, CA"
							bands: ["War on Drugs", "The National", "Eternal Summers"],
							attending: 1
						},
				21: {
							showId: 21
							venueName: "The Independent",
							venueAddress: "241 Fell Street, San Francisco, CA"
							bands: ["Mitsky", "Jay Som"],
							attending: null
					}		
			}
		},
		"11/12/2016": {
			Shows: {
				6: {
							showId: 6
							venueName: "Great American",
							venueAddress: "1119 Geary Street, San Francisco, CA"
							bands: ["Cass McCombs", "Quilt"],
							attending: 2
						},
				233: {
							showId: 233
							venueName: "Elbow Room",
							venueAddress: "1489 Mission Street, San Francisco, CA"
							bands: ["Coo Coo Birds", "Vilets"]
							attending: null
					}		
			}
		}
	},
	ShowsByVenue: {
		12: {
			venueName: "Great American",
			venueAddress: "1119 Geary Street, San Francisco, CA"
			shows: {
				1: {
					showId: 1,
					date: 11/11/2016,
					artists: [{ artistId: 44, artistName: "War on Drugs"},{ artistId: 47, artistName: "The National"}, ...],
					attending: 1
					showTicketsUrl: "www.ticketfly.com/...."
				},
				6: {
					showId: 16
					date: 11/12/2016,
					artists: [{ artistId: 12, artistName: "Cass McCombs"},{ artistId: 38, artistName: "Quilt"}],
					attending: 2,
					showTicketsUrl: "www.ticketfly.com/...."
				}
			}
		},
		5: {
			venueName: "Elbo Room",
			venueAddress: ....,
			shows {

			}
		}
	}
}
```



```js
{
	currentUser: {
		id: 1,
		username: "Alex Manning"
	},
	forms: {
		signUp: { errors: []},
		logIn: {errors: []},
		contact: {errors: []}
	},
	artists: {
		1: {
			artist_id: 1,
			name: Car Seat Headrest
		},
		2: {
			artist_id: 2,
			name: Pere Ubu
		}
	},
	venues: {
		1: {
			id: 1,
			venue_name: Great American Music Hall,
			address: 119 Geary Street Tenderloin
			city: San Francisco,
			state: CA,
			latitude: -37.232,
			longitude: 23.342
		}
 	},
 	shows: {
 		1: {
 			venue: 1,
 			date: 11/12/2016,
 			artists: [1, 2]
 		}
 	}
}
```