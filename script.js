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

      card.innerHTML = `<div class="card"">
  <img src="${books.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${books.title}</h5>
    <p class="card-text">${books.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
      libreria.appendChild(card);
    });
  })
  .catch((err) => console.log(err));
