fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseArr) => {
    console.log(responseArr);

    if (responseArr.ok) {
      return responseArr.json();
    }
  })
  .then((libreriaArr) => {
    console.log(libreriaArr);

    libreriaArr.forEach((books) => {
      //console.log(books.price);
    });
  });
