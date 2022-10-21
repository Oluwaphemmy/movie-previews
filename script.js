const fm = document.getElementById("fm");

const options = {
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
    console.log(completedata);

    let data1 = "";
    completedata.results.map((values) => {
      data1 += `  <a href="">
      <img class="w-56 m-2" src=${values.image} alt="" />
      </a>
      
      
      `;
    });
    console.log(data1);
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
    console.log(list);

    let list1 = "";
    list.results.map((img) => {
      list1 += `    
         <div class="border-2 rounded w-56 bg-pink m-3" >
           <a href="">
             <img class="w-56" src=${img.image} alt="" />
            </a>
            
            <p class="text-white text-center font-medium text-lg">${img.title}</p>
            <p class="text-white text-center font-medium text-lg">${img.year}</p>
          </div>`;
    });
    //console.log(list1);
    document.getElementById("eben").innerHTML = list1;
  })
  .catch((err) => console.error(err));

//non english
const opt = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d61da49demsh189a2f2e1406646p1632e4jsn41aaddf43b21",
    "X-RapidAPI-Host": "netflix-weekly-top-10.p.rapidapi.com",
  },
};

fetch("https://netflix-weekly-top-10.p.rapidapi.com/api/othermovie", opt)
  .then((response) => {
    return response.json();
  })
  .then((eng) => {
    let non = "";
    eng.map((movie) => {
      non += `   <div class="border-2 rounded w-fit bg-red-400 m-5 p-3">
          <p class="text-white text-center font-medium text-lg">
            Movie Title: ${movie.name}
          </p>
          <p class="text-white text-center font-bold text-2xl">Rank: ${movie.list}</p>
        </div>`;
    });
    //console.log(non);
    document.getElementById("che").innerHTML = non;
  })
  .catch((err) => console.error(err));

//new
const optionsn = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d61da49demsh189a2f2e1406646p1632e4jsn41aaddf43b21",
    "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  },
};

fetch("https://anime-db.p.rapidapi.com/genre", optionsn)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
