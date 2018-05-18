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
    ),
    console.log(movie)
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllRW50cnkuanN4Il0sIm5hbWVzIjpbIk1vdmllRW50cnkiLCJtb3ZpZSIsInRvZ2dsZVdhdGNoZWQiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsYUFBYSxTQUFiQSxVQUFhO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsTUFBU0MsYUFBVCxRQUFTQSxhQUFUO0FBQUEsU0FDakI7QUFBQTtBQUFBLE1BQUksV0FBVSxpQkFBZDtBQUNHRCxVQUFNRSxLQURUO0FBRUU7QUFBQTtBQUFBO0FBQ0UsY0FBSyxRQURQO0FBRUUsbUJBQVUsNkJBRlo7QUFHRSxpQkFBUztBQUFBLGlCQUFNRCxjQUFjRCxLQUFkLENBQU47QUFBQTtBQUhYO0FBQUE7QUFBQSxLQUZGO0FBUUdHLFlBQVFDLEdBQVIsQ0FBWUosS0FBWjtBQVJILEdBRGlCO0FBQUEsQ0FBbkIiLCJmaWxlIjoiTW92aWVFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1vdmllRW50cnkgPSAoe21vdmllLCB0b2dnbGVXYXRjaGVkfSkgPT4gKFxuICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAge21vdmllLnRpdGxlfSBcbiAgICA8YnV0dG9uIFxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFyayBidG4tc21cIlxuICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlV2F0Y2hlZChtb3ZpZSl9XG4gICAgPndhdGNoZWRcbiAgICA8L2J1dHRvbj5cbiAgICB7Y29uc29sZS5sb2cobW92aWUpfVxuICA8L2xpPlxuKTsiXX0=