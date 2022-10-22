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
