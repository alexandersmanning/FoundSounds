# Found Sounds
[FoundSounds Heroku Link][heroku]

[Trello Project][trello]

[heroku]: https://found-sounds.herokuapp.com
[trello]: https://trello.com/b/EJuJeIXY/found-sounds

## Minimum Viable Product
Found Sounds is a full-stack web application that looks to visualize local concerts/music shows in the San Francisco area, allowing for last minute concert plans! It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React Redux front end.
- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] List of Upcoming Shows, pulled from JamBase and saved to database
- [ ] Posting shows' locations on an interactive map using Google Maps
- [ ] Presentation of Show information Through Google Maps Markers
- [ ] List of Past and Future Shows by User
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes/
[components]: component-hierarchy.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md
[sample-state]: sample-state.md

## Implementation Timeline

### Phase 1: Backend setup an Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end authentication

## Phase 2: AreaShows (Sidebar) component, Show API, Jam Base API (2 days)

**Objective:** Show lists can be viewed by date, through rails API, with information pulled from Jam Base

## Phase 3: Google Map API, ShowInformation component, (2 days)

**Objective:** Display show information on google map, with markers, and the ShowInformation component displayed within the marker modal

## Phase 4: PreviousShows, LikedShows, AttendingShows (1 day)
**Objective:** Create Components that modify the API calls used in Area shows to pull data depending on route. Add buttons to show information component

## Phase 5: About, Contact components and modal forms (1 day)
**Objective:** Create Components for About and Contact modals that can be accessed in the footer

## Phase 6: Styling for Navigation, Footer, and SidebarComponent (1 day)
**Objective:** Advanced styling of the navigation, footer, and sidebar components

## Phase 7: Styling for Maps and Show information Component (1 day)
**Objective:** Advanced styling of the Maps and Show information component

##Future Directions and Additional Features
- [ ] User profile with pictures and information (favorite bands, etc.)
- [ ] View Other User's Upcoming and Past Shows
- [ ] BandCamp's API to Allow Users To Listen to the bands

