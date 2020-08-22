import { createCards } from "./river.js";

const trackedBears = [];

const updateTrackedBears = (id, time) => {
  trackedBears[id].triedTimes = time;
}

const createForm = () => {
  $("#bearForm").html(`
  <form>
  <div class="form-group">
    <label for="bearName">Bear Name</label>
    <input type="text" class="form-control" id="bearNameInput" aria-describedby="emailHelp" placeholder="Enter bear name">
  </div>
  <div class="form-group">
    <label for="bearImage">Bear image URL</label>
    <input type="url" class="form-control" id="bearImageInput" placeholder="URL">
  </div>
  <input type="button" class="btn btn-primary" id="formSubmit">Submit</input>
</form>`);
};

const addBearObj = (array) => {
  let bearObj = {};

  bearObj.name = $("#bearNameInput").val();
  bearObj.url = $("#bearImageInput").val();
  array.push(bearObj);
};

const submitForm = () => {
  $("#formSubmit").click(() => {
    addBearObj(trackedBears);
    createCards(trackedBears);
  });
};

export { createForm, submitForm, updateTrackedBears };
