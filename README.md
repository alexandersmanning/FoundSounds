# Found Sounds

## About
[Found Sounds live][heroku]
[heroku]: http://www.herokuapp.com

Found Sounds is a way of visualizing upcoming concerts in San Francisco, with the idea that users will be able to see local shows more regularly, and be able to keep track of all their upcoming concerts.

The project was inspired by PadMapper's simple interface for finding apartments, and Instagram's map visualization of where user's pictures were taken. The hope is that people will be able to view the history of their attended shows as an adventure of places they have visited.

![Alt text](http://res.cloudinary.com/ddvdi1pie/image/upload/c_scale,w_934/v1478907390/Screen_Shot_2016-11-11_at_2.03.03_PM_uward1.png "Main View")


## Features & Implementation

### Integration of Google Maps
 
The crux of this project was providing a visual representation of where concerts are in the area. Google maps API was used to display all venues that fell within bounds of the map, which had shows in the specified date range. Event listeners were added to each of the markers, so that a user is able to see which venue they are hovering over, the currently selected venue (or venue of the currently selected show). Furthermore, by clicking on a map item, the shows for that specific venue will be loaded in a separate pane

### Filtering By Date and Bounds

To make the map interactive, and to help the user filter down the shows by their location and requested date range, filters were added so that as the bounds of the map changed, so were the shows and venues being displayed on the right hand bar. All updates are done after the map idles, to ensure excess calls to the database were not made. Changes to the dates are done through the sidebar form, and are restricted based on the view, so that upcomming shows do not include previous dates, and previous shows do not include current or future dates.

### Display of Venue Shows/Individual Shows/Concerts in Area

SongKick's API was used to pull upcoming local show data, including locations of each venue. This data was converted into three separate display panes. Each of these separate panes utilize a different state variable, to ensure that as the user changes the bounds of the map, the current show they were looking at was not lost. This allows for updates to the map, without current panes being affected. 

#### Shows in the Area/Main
This pane list all of the shows in the Bay Area, per the map bounds and date filters applied by the user. It provides a quick look into the headliner for each show, and the location, giving it by the date. The idea is that users can quickly scan to see what is happening tonight (or tomorrow) and see if there is anything that catches their eye. 

The list of shows, along with the map markers, are pulled through a single call to the database, and then stored as two separate state variables, so that react can easily access the data it needs with minimal front end manipulation. As the map bounds change, or date changes in the side pane, so do the concerts that appear in the Main view, along with the markers in the map. Indexes were placed on the show dates (stored without a time component), and the venues bounds for quick look up. To further speed up the query, bounds are first applied to the venues, a significantly smaller table than shows, and the shows are then queried using the venue ids.

#### Venue Shows

![Alt text](http://res.cloudinary.com/ddvdi1pie/image/upload/c_scale,h_600/v1478907836/Screen_Shot_2016-11-11_at_3.43.29_PM_lirrdk.png "Venue Shows")

Upon clicking are marker, or navigating from an individual show to a venue, the user is able to see all shows for a specific venue given the time filter. This allows users see what show are happening at a nearby venue, or even plan a night around an area of the city.

By going to the venue pane, a call is made to the show database using the venueId key stored in the marker, adding a venue filter. Since the show tables are indexed by the venue's id and date, we have an almost instant lookup

#### Individual Shows

![Alt text](http://res.cloudinary.com/ddvdi1pie/image/upload/c_scale,h_580/v1478907384/Screen_Shot_2016-11-11_at_2.05.49_PM_ubnfaz.png "Individual Show")
This final pane provides the venue and a list of the bands playing on a specific night. Furthermore, the user is now able to say if they are attending, or are interested in this show. This data is then used in the separate views to show user's their show history, or a list of upcoming shows

### Display of A User's Upcoming and Past Shows
This feature provides users a ways of seeing their upcoming shows, and be able to take a journey through their previous shows over the past few months, or even past few years.

Through modularizing the ShowsByDay presentational component, in additon to having a filter state variable, the above two features were able to be quickly implemented through the introduction of only a few more redux actions, two container components to send the proper actions, and slight updates to the backend for the new user filter. 

## Future Directions for the Project
### In Depth User Profiles
The hope is that Found Sounds becomes a place where people can see eachother's upcoming shows, and past shows. This will need to start with users having a more personalized account, including favorite bands, favorite shows, and a picture to represent themselves

### Users Seeing Who Is Going to What Shows
This feature will allow users to see popular shows, and even to find other people to join them for concerts

### Popular Shows
Once enough users start using the app, the hope is to put the popular shows, so that other concert goers can find out right away, and even plan a meetup
