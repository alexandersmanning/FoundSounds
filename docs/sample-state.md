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