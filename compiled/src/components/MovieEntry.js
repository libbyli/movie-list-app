"use strict";

var MovieEntry = function MovieEntry(_ref) {
  var movie = _ref.movie;
  return React.createElement(
    "li",
    { className: "list-group-item" },
    movie.title,
    " ",
    React.createElement(
      "button",
      { type: "button", className: "btn btn-outline-dark btn-sm" },
      "watched"
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllRW50cnkuanN4Il0sIm5hbWVzIjpbIk1vdmllRW50cnkiLCJtb3ZpZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLFNBQ2pCO0FBQUE7QUFBQSxNQUFJLFdBQVUsaUJBQWQ7QUFDR0EsVUFBTUMsS0FEVDtBQUFBO0FBQ2dCO0FBQUE7QUFBQSxRQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLDZCQUFoQztBQUFBO0FBQUE7QUFEaEIsR0FEaUI7QUFBQSxDQUFuQiIsImZpbGUiOiJNb3ZpZUVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTW92aWVFbnRyeSA9ICh7bW92aWV9KSA9PiAoXG4gIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbiAgICB7bW92aWUudGl0bGV9IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrIGJ0bi1zbVwiPndhdGNoZWQ8L2J1dHRvbj5cbiAgPC9saT5cbik7Il19