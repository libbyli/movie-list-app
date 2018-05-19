"use strict";

var MovieEntry = function MovieEntry(_ref) {
  var movie = _ref.movie,
      toggleWatched = _ref.toggleWatched;
  return React.createElement(
    "li",
    { className: "list-group-item" },
    movie.title,
    React.createElement(
      "button",
      {
        type: "button",
        className: "btn btn-outline-dark btn-sm",
        onClick: function onClick() {
          return toggleWatched(movie);
        }
      },
      "watched"
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllRW50cnkuanN4Il0sIm5hbWVzIjpbIk1vdmllRW50cnkiLCJtb3ZpZSIsInRvZ2dsZVdhdGNoZWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWE7QUFBQSxNQUFFQyxLQUFGLFFBQUVBLEtBQUY7QUFBQSxNQUFTQyxhQUFULFFBQVNBLGFBQVQ7QUFBQSxTQUNqQjtBQUFBO0FBQUEsTUFBSSxXQUFVLGlCQUFkO0FBQ0dELFVBQU1FLEtBRFQ7QUFFRTtBQUFBO0FBQUE7QUFDRSxjQUFLLFFBRFA7QUFFRSxtQkFBVSw2QkFGWjtBQUdFLGlCQUFTO0FBQUEsaUJBQU1ELGNBQWNELEtBQWQsQ0FBTjtBQUFBO0FBSFg7QUFBQTtBQUFBO0FBRkYsR0FEaUI7QUFBQSxDQUFuQiIsImZpbGUiOiJNb3ZpZUVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTW92aWVFbnRyeSA9ICh7bW92aWUsIHRvZ2dsZVdhdGNoZWR9KSA9PiAoXG4gIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbiAgICB7bW92aWUudGl0bGV9IFxuICAgIDxidXR0b24gXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrIGJ0bi1zbVwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVXYXRjaGVkKG1vdmllKX1cbiAgICA+d2F0Y2hlZFxuICAgIDwvYnV0dG9uPlxuICA8L2xpPlxuKTsiXX0=