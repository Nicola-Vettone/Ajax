fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseArr) => {
    console.log(responseArr);

    if (responseArr.ok) {
      return responseArr.json();
    }
  })
  .then((libreriaArr) => {
    console.log(libreriaArr);

    let libreria = document.querySelector("#books");

    libreriaArr.forEach((books) => {
      console.log(books);

      const card = document.createElement("div");
      card.classList.add("col");

      const div = document.createElement("div");
      div.classList.add("card", "height");

      card.appendChild(div);

      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.src = books.img;

      div.appendChild(img);

      const div2 = document.createElement("div");
      div2.classList.add("card-body");

      div.appendChild(div2);

      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.innerHTML = books.title;

      div2.appendChild(title);

      const price = document.createElement("p");
      price.classList.add("card-text");
      price.innerHTML = `Prezzo: ${books.price}€`;

      div2.appendChild(price);

      const button = document.createElement("a");
      button.innerText = "Acquista";
      button.classList.add("btn", "btn-primary");

      div2.appendChild(button);

      const button2 = document.createElement("a");
      button2.innerText = "Elimina";
      button2.classList.add("delete", "btn", "btn-primary", "ms-4");

      div2.appendChild(button2);

      libreria.appendChild(card);
    });
  })
  .catch((err) => console.log(err));
