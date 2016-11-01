## Component Hierarchy

### Footer Components 

**About** - found in footer
 - AboutComponent
 	+ Modal
  
**ContactComponent** - found in footer
 - ContactForm
 	+ Modal
  
**FooterComponent**
 - AboutComponent
 - ContactForm

**UserProfileContainer**
 - UserProfileComponent -- this is a bonus
 
 
### Navigation Components

**AuthFormContainer** - found in header/navigation
 - AuthForm
  + Modal
   
### Sidebar Components 

**AreaShowsContainer**
 - SidebarComponent
  + ShowsByDayComponent
 
**AttendingShowsContainer**
 - SidebarComponent
  + ShowsByDayComponent
 
**PreviousShowsContainer**
 - SidebarComponent
  + ShowsByDayComponent
 
**LikedShowsContainer**
 - SidebarComponent
  + ShowsByDayComponent

**ShowsByDayComponent**
 - Date
  + ShowInformationComponent
 
**ShowInformationContainer**
 + ShowsList
 	+ ShowInformation
  
### Root Component 

**RootContainer**
 - MainPage
  + NavigationComponent
  	- AuthFormContainer
 	+ Map(google)
 		- ShowInformationContainer

# Routes
|Path   | Component   |
|-------|-------------|
| "/"   | "RootContainer", "AreaShowsContainer" (IndexRoute) |
| "/attending" | "AttendingShowsContainer" |
| "/attending?dateState=11-11-2016&dateEnd=11-15-2016 | "AttendingShowsContainer" sending params to api call|
| "/liked"		 | "LikedShowsContainer"		 |
| "/likes?dateState=11-11-2016&dateEnd=11-15-2016 | "LikedShowsContainer" sending params to api call
| "/previous"  | "PreviousShowsContainer"  |
| "/previous?dateState=11-11-2016&dateEnd=11-15-2016 | "PreviousShowsContainer" sending params to api call
| "/show/:showId | "ShowInformationContainer|
| "/show/:venueId | "ShowInformationContainer |



