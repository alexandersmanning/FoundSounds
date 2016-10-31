# API Endpoints
## HTML API
 ### Root
 - `GET /` - loads React web app

## JSON API
### Users
- `POST /api/users`
- `PATCH /api/users`

### Session
- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Shows
- `GET /api/shows` - this will include a date query
- `GET /api/shows/:showId` - This will load specific information on a show
- `GET /api/shows/:venueId` - This will get the shows for a venue, and include a date query
- `POST /api/shows` - for adding a show from JamBase. This will propigate to show_artists 
- `PATCH /api/shows/:showId` - for updating a show. this will propigate to show_artists

### User Shows
- `GET /api/user_shows/:userId` - this will get all of the shows for a specific user, and inlcude a date query
- `POST /api/user_shows` - this will be used for adding a show, whether interested or attending
- `PATCH /api/user_shows/id` - this will be used for updating the attendance of a show, currently considering 0 - not attending, 1 - interested, 2 - attending.

### Artists
- `POST /api/artist` - for adding artist found in Jam Base

### Venue
- `POST /api/venue` - for adding a venue found in Jam Base

### Notes on Endpoints 
I do not currently see a need for deleting venues, shows, or artist, since that comes from JamBase, and no user interactions should change those records. 



