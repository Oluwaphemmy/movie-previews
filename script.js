/*const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d61da49demsh189a2f2e1406646p1632e4jsn41aaddf43b21",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
};

fetch("https://movies-app1.p.rapidapi.com/api/movies", options)
  .then((res) => {
    return res.json();
  })
  .then((completedata) => {
    //console.log(completedata);

    let data1 = "";
    completedata.results.map((values) => {
      data1 += `  <a href="">
      <img class="w-56 m-2" src=${values.image} alt="" />
      </a>
      
      
      `;
    });
    // console.log(data1);
    fm.innerHTML = data1;
  })
  .catch((err) => console.error(err));

//movie list
const optionss = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d61da49demsh189a2f2e1406646p1632e4jsn41aaddf43b21",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
};

fetch("https://movies-app1.p.rapidapi.com/api/movies", optionss)
  .then((res) => {
    return res.json();
  })
  .then((list) => {
    //console.log(list);

    let list1 = "";
    list.results.map((img) => {
      list1 += `    
         <div class="border-2 rounded w-56 bg-pink m-3" >
           <a href="">
             <img class="w-56" src=${img.image} alt="" />
            </a>
            
            <p class="text-red-700 text-center font-medium text-lg">${img.titleOriginal}</p>
            <p class="text-white text-center font-medium text-lg">${img.year}</p>
          </div>`;
    });
    //console.log(list1);
    document.getElementById("eben").innerHTML = list1;
  })
  .catch((err) => console.error(err));

//duplicate
const optional = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d61da49demsh189a2f2e1406646p1632e4jsn41aaddf43b21",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
};

fetch("https://movies-app1.p.rapidapi.com/api/movies", optional)
  .then((res) => {
    return res.json();
  })
  .then((list) => {
    //console.log(list);

    let list1 = "";
    list.results.map((img) => {
      list1 += `    
         <div class="border-2 rounded w-56 bg-pink m-3" >
         <a href="">
         <img class="w-56" src=${img.image} alt="" />
         </a>
         
         <p class="text-red-700 text-center font-medium text-lg">${img.titleOriginal}</p>
            <p class=" text-center font-medium text-lg">${img.rating}</p>
          </div>`;
    });
    console.log(list1);
    document.getElementById("lamp").innerHTML = list1;
  })
  .catch((err) => console.error(err));

//non english
const optionst = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d61da49demsh189a2f2e1406646p1632e4jsn41aaddf43b21",
    "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  },
};

fetch(
  "https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc",
  optionst
)
  .then((response) => {
    return response.json();
  })
  .then((mo) => {
    console.log(mo);

    let ojo = "";

    mo.results.map((aba) => {
      ojo += `<div class="border-2 rounded w-96 bg-pink m-3">
                <a href="">
                    <img class="w-96" src=${aba.image} alt="" />
                </a>
                
                <p class="text-white text-center font-medium text-lg">${aba.title}</p>
                <p class="text-white text-center font-medium text-lg">${aba.year}</p>
                </div>
      `;
    });
    console.log(ojo);
    document.getElementById("ay").innerHTML = ojo;
  })
  .catch((err) => console.error(err));

//new

/*const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d61da49demsh189a2f2e1406646p1632e4jsn41aaddf43b21",
    "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  },
};

fetch(
  "https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc",
  options
  )
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById(
      "ay"
      ).innerHTML = `<div class="border-2 rounded w-96 bg-pink m-3">
      <a href="">
                    <img class="w-96" src=${data.image} alt="" />
                </a>
                
                <p class="text-white text-center font-medium text-lg">${data.title}</p>
                <p class="text-white text-center font-medium text-lg">${data.year}</p>
                </div>`;
  })
  .catch((err) => console.error(err));*/

// search
/*const optionsr = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d61da49demsh189a2f2e1406646p1632e4jsn41aaddf43b21",
    "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
  },
};
form.addEventListener("submit", getMovie);

function getMovie(e) {
  e.preventDefault();
  fetch(
    "https://advanced-movie-search.p.rapidapi.com/search/movie?query=kong&page=1",
    optionsr
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      eben.innerHTML = ` <div class="border-2 rounded w-96 bg-pink m-3" >
           <a href="">
             <img class= alt="" />
            </a>
            
            <p class="text-white text-center font-medium text-lg">${response.title}</p>
            <p class="text-white text-center font-medium text-lg">Year</p>
          </div>`;
    })
    .catch((err) => console.error(err));
  search.value = "";
}*/

//yes
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

    <div class ="rounded border-2">
           <a href="">
             <img   class="w-96 space-x-10 m-10"      
       
  src = '${IMGPATH + poster_path}' alt="" />
            </a>
            
            <p class="text-white w-96 text-center mb-5 font-bold text-2xl">${title}</p>
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
    eben.innerHTML = `<div class ="rounded border-2">
             <img   src = '${searchTerm.poster_path}' alt="" />
            
            
            <p class="text-white text-center ml-5 font-medium text-lg">${searchTerm.title}
            
            </p>
            </div>`;

    search.value = "";
  }
});
