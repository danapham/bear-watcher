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
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`)
}

export { createForm };
