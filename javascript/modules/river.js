import { updateTrackedBears } from "./bearForm.js";

const createCards = (array) => {
  $("#bearCards").html("");

  array.forEach((bear, id) => {

    $("#bearCards").append(`
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${bear.url}" alt="Image of tracked bear">
          <div class="card-body">
            <p class="card-text">${bear.name}</p>
          </div>
          <div id="timestamp-${id}"></div>
          <div>
            <span>
            <i class="fas fa-exclamation" id="clickTrying-${id}"></i>
            </span>
            <span id="clickCaught">
            <i class="fas fa-fish"></i>
            </span>
          </div>
      </div>`);
      handleTryingClick(id);
  });
};

const recordTime = (id) => {
  const time = Date();

  $(`#timestamp-${id}`).html(`Attempt on ${time} recorded!`);

  updateTrackedBears(id, time);
}

const handleTryingClick = (id) => {
  $(`#clickTrying-${id}`).click(() => {
    recordTime(id);
  }
  )
}

export { createCards, handleTryingClick };
