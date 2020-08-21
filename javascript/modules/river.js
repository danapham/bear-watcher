const createCards = (array) => {
  array.forEach((bear) => {
    $("#bearCards").html(`
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${bear.url}" alt="Image of tracked bear">
          <div class="card-body">
            <p class="card-text">${bear.name}</p>
          </div>
      </div>`);
  });
};

export { createCards };
