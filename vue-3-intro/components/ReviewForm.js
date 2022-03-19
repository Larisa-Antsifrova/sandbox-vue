app.component("review-form", {
  template:
    /*html*/
    `<form class="review-form">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input type="text" id="name" />

    <label for="review">Review:</label>
    <textarea type="text" id="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    </select>

    <input class="button" type="submit" value="Submit" />
    </form>`,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
    };
  },
});
