const list = document.createDocumentFragment();

const url = "https://jsonplaceholder.typicode.com/users";

const ul = document.getElementById("authors");

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    let authors = data;

    authors.map((gg) => {
      const li = document.createElement("li");
      const title = document.createElement("h2");
      const email = document.createElement("p");
      const phone = document.createElement("p");
      title.innerHTML = `${gg.name}`;
      email.innerHTML = `${gg.email}`;
      phone.innerHTML = `${gg.website}`;

      li.append(title);
      li.append(email);
      li.append(phone);
      list.append(li);
      ul.append(list);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//new
fetch("https://api.dictionaryapi.dev/api/v2/entries/en/increase")
  .then((response) => response.json())
  .then((json) => console.log(json));
