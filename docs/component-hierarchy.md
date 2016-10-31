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
| "/liked"		 | "LikedShowsContainer"		 |
| "/previous"  | "PreviousShowsContainer"  |




