/* 

1. implement the API
2. query from the api

grid elements - #movies-grid
movie wrappper element - .movie-card
 
MOVIE DETAILS
title - .movie-title
img - .movie-poster
movie vote - .movie-votes

LOAD MOVIE BUTTON
class - load-more-movies-btn

SEARCH
id - search-input
enter button: search requst to movies API
id - close-search-btn (exists search, clear results, shows current movies)
*/ 

let page= 0
const loadBtn = document.getElementById("load-more-movies-btn") // element that gets/ identifies the load-btn
const moviesGrid = document.getElementById("movies-grid");
const searchInput = document.querySelector("[data-search]");
//const searchBtn = document.getElementByClassName("search-btn")

async function getApi() {

     page++
     const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=939642d3749f1fdf107a56226711ea8e&page=${page}`, {
          method: "GET", 
          headers: {
               accept: 'application/json',
               Authorization: "939642d3749f1fdf107a56226711ea8e"
             }

     })

     const data = await response.json(); // Extracting data as a JSON Object from the response
     const results = await data.results // targeting just the results 
     displayMovie(results)
     console.log(results)

}
getApi()


function displayMovie(results){ 
     
     const movieCard = document.createElement("div");
     
     for (let i = 0; i < results.length; i++){
          movieCard.innerHTML += `
          <div class="movie-card">
          <img class="movie-poster" src="https://image.tmdb.org/t/p/w342${results[i].poster_path}"/>
          <p class="movie-title"> ${results[i].title}</p>
          <p class="movie-votes"> ${results[i].vote_average} 🍿 </p>
          </div>
     `;
     moviesGrid.appendChild(movieCard)
     }

}


async function searchValues() {
     
     // const searchInput = document.querySelector("[data-search]");
     searchInput.addEventListener("input", async (e) => {
       const query = e.target.value;
       console.log(query); 
   
         const response = await fetch(
           `https://api.themoviedb.org/3/search/movie?query=${query}&adult=false&language=en-US&page=${page}`,
           {
             method: "GET",
             headers: {
               accept: "application/json",
               Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mzk2NDJkMzc0OWYxZmRmMTA3YTU2MjI2NzExZWE4ZSIsInN1YiI6IjY0ODI4YWRlZTM3NWMwMDBlMjRlNGFiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wingMJWFu1-v7Oq5Q-nbW-Vgkntr4mlG7T401T-5t7M',
             },
           });
   
         const data = await response.json();
         const results = await data.results; // targeting just the results 
         console.log(results);

         const moviesGrid = document.getElementById("movies-grid");
         const movieCard = document.createElement("div");
         moviesGrid.innerHTML = ``;

         for (let i = 0; i < results.length; i++){
               movieCard.innerHTML += `
               <div class="movie-card">
               <img class="movie-poster" src="https://image.tmdb.org/t/p/w342${results[i].poster_path}"/>
               <p class="movie-title"> ${results[i].title}</p>
               <p class="movie-votes"> ${results[i].vote_average} 🍿 </p>
               </div>
          `;
     
     moviesGrid.appendChild(movieCard)
     //loadBtn.addEventListener('click',searchValues)
     }
});
}
searchValues()

// if (searchInput.value.length > 0){
//      searchValues();
//      page++;
// } else{
//      getApi()
// }

loadBtn.addEventListener('click',getApi)




