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
      //DICHIARO E APPENDO GLI ELEMENTI
      const card = document.createElement("div");
      card.classList.add("col", "books", "my-5");

      const div = document.createElement("div");
      div.classList.add("card");

      card.appendChild(div);

      const img = document.createElement("img");
      img.classList.add("card-img-top", "image");
      img.src = books.img;

      div.appendChild(img);

      const div2 = document.createElement("div");
      div2.classList.add("card-body");

      div.appendChild(div2);

      const title = document.createElement("h5");
      title.classList.add("card-title", "libreria");
      title.innerHTML = books.title;

      div2.appendChild(title);

      const price = document.createElement("p");
      price.classList.add("card-text");
      price.innerHTML = `Prezzo: ${books.price}€`;

      div2.appendChild(price);

      const button = document.createElement("a");
      button.innerText = "Acquista";
      button.classList.add("btn", "btn-success");

      div2.appendChild(button);

      const button2 = document.createElement("a");
      button2.innerText = "Scarta";
      button2.classList.add("btn", "btn-danger");
      div2.appendChild(button2);

      const button3 = document.createElement("a");

      libreria.appendChild(card);
      //FUNZIONE DEL BUTTON3 PER ELIMINARE LA CARD
      function elimina() {
        card.classList.add("delete");
        lista.innerHTML = "";
      }
      //CLICK DEL BUTTON2 CHE RICHIAMA LA FUNZIONE
      button2.onclick = function () {
        elimina();
      };

      let carrello = document.querySelector("#carrello");
      const lista = document.createElement("li");
      //FUNZIONE BUTTON PER METTERE NEL CARRELLO E SUCCESSIVAMENTE CREA UN ALTRO BUTTON PER RIMUOVERE DAL CARRELLO
      function acquista() {
        button3.innerText = "Rimuovi dal carrello";
        button3.classList.add("btn", "btn-warning", "mt-1");

        div2.appendChild(button3);
        lista.classList.add("dropdown-item");
        lista.innerHTML = `<strong>${books.title}&nbsp;£${books.price}</strong>`;
        carrello.appendChild(lista);
      }
      //CLICK BUTTON PER FAR PARTIRE LA FUNZIONE ACQUISTA

      button.onclick = function () {
        acquista();
      };
      //FUNZIONE PER RIMUOVERE GLI ELEMENTI DEL CARRELLO
      function remouveCarr() {
        lista.innerHTML = "";
        button3.innerText = "Elemente Rimosso";
      }
      //CLICK DEL BUTTON3 PER FAR PARTIRE LA FUNZIONE
      button3.onclick = function () {
        remouveCarr();
      };
    });
  })

  .catch((err) => console.log(err));
