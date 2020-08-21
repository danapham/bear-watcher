const createCards = (array) => {
  $("#bearCards").html("");

  array.forEach((bear) => {
    $("#bearCards").append(`
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${bear.url}" alt="Image of tracked bear">
          <div class="card-body">
            <p class="card-text">${bear.name}</p>
          </div>
      </div>`);
  });
};

export { createCards };
