# Component Hierarchy
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
**AuthFormContainer** - found in header/navigation
 - AuthForm
  + Modal
**RootContainer**
 - MainPage
  + NavigationComponent
  	- AuthFormContainer
 	+ Map(google)
 		- ShowInformationContainer
**AreaShowsContainer**
 - SidebarComponent
**AttendingShowsContainer**
 - SidebarComponent
**PreviousShowsContainer**
 - SidebarComponent
**LikedShowsContainer**
 - SidebarComponent
**ShowInformationContainer**
 + ShowsList
 	+ ShowInformation

# Routes
|Path   | Component   |
|-------|-------------|
| "/"   | "RootContainer", "AreaShowsContainer" (IndexRoute) |
| "/attending" | "AttendingShowsContainer" |
| "/liked"		 | "LikedShowsContainer"		 |
| "/previous"  | "PreviousShowsContainer"  |




