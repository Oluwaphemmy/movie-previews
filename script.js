const fm = document.getElementById("fm");
const form = document.getElementById("form");
const search = document.getElementById("search");
const eben = document.getElementById("eben");
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

getMovies(APIURL);

async function getMovies(url) {
  const resp = await fetch(url);
  const data = await resp.json();

  console.log(data);
  showMovies(data.results);
}

function showMovies(movies) {
  fm.innerHTML = "";

  movies.forEach((mov) => {
    const { poster_path, title, vote_average, overview } = mov;

    eben.innerHTML += `
    <div class ="item-center">
           <a href="">
             <img   class="md:w-96 w-64 space-x-10 m-10"      
       
  src = '${IMGPATH + poster_path}' alt="" />
            </a>
            
            <p class="text-black w-96 text-center mb-5 font-bold md:text-2xl text-lg">${title}</p>
            <p class="text-black w-96 text-center mb-5 font-bold md:text-lg text-xs">${overview}</p>
            </div>
           
        `;

    fm.appendChild(eben);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);
    eben.innerHTML = `/*<div class ="rounded border-2">
             <img   src = '${searchTerm.poster_path}' alt="" />
            
            
            <p class="text-white text-center ml-5 font-medium text-lg">${searchTerm.title}
            
            </p>
            </div>
            
            
          <div class ="item-center">*/
          `;

    search.value = "";
  }
});
