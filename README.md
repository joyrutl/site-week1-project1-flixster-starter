
## Week 1 Assignment: Flixster

Submitted by: **Joy Rutledge**

Estimated time spent: **15** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](ADD_LINK_HERE)

### Application Features

#### Core Features

- [ X ] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [ X ] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [X ] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [ 1/2 ] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [X ] Website accounts for basic HTML/CSS accessibility features
- [X] Website should be responsive

#### Stretch Features

- [ ] Deploy website using GitHub Pages.
- [ ] Allow user to view more details about a movie within a popup.
- [ X ] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [ ] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

<a href="https://www.loom.com/share/3886487e245e470f88cf04d0ab1dede8">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/3886487e245e470f88cf04d0ab1dede8-with-play.gif">
  </a>



### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I felt unprepared to implement a search bar. 

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

If I had more time, I would get the "load more button" to load movies that were related to the search movies correctly. Currently, the load movie button works, however, after you search a movie, and click load more, it proceeds to update and add more titles to the page, just not with related search input. 
  
Add your response here

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I am satified with my CSS and HTML layout. I noticed that one of my peers added a stock image for the ones that did not appear correctly or whose value = null. If I had more time I would do the same. Finally, the load more button (that I mentioned previously) did not go as planned

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Shout out to Efren for helping me connect the API to display images -- particularly finding the API key and connecting it to my displayMovie() function an significaly improving the organization of the code in general (!!!!)

Shout out to Gustavo for helping me with the page count when loading the page and actually updating it in the URL

Shout out to Devarsh for helping me display the images on each card.

Finally shoutout to my peers Jovan, David, and Mikyas for being open to help when I had questions. 
