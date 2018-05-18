"use strict";

var MovieList = function MovieList(_ref) {
  var movies = _ref.movies,
      toggleWatched = _ref.toggleWatched;
  return React.createElement(
    "ul",
    { className: "list-group" },
    movies.map(function (movie) {
      return React.createElement(MovieEntry, {
        movie: movie,
        key: movie.title.toString(),
        toggleWatched: toggleWatched
      });
    })
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwibW92aWVzIiwidG9nZ2xlV2F0Y2hlZCIsIm1hcCIsIm1vdmllIiwidGl0bGUiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVk7QUFBQSxNQUFFQyxNQUFGLFFBQUVBLE1BQUY7QUFBQSxNQUFVQyxhQUFWLFFBQVVBLGFBQVY7QUFBQSxTQUNoQjtBQUFBO0FBQUEsTUFBSSxXQUFVLFlBQWQ7QUFDR0QsV0FBT0UsR0FBUCxDQUFXO0FBQUEsYUFDVixvQkFBQyxVQUFEO0FBQ0UsZUFBT0MsS0FEVDtBQUVFLGFBQUtBLE1BQU1DLEtBQU4sQ0FBWUMsUUFBWixFQUZQO0FBR0UsdUJBQWVKO0FBSGpCLFFBRFU7QUFBQSxLQUFYO0FBREgsR0FEZ0I7QUFBQSxDQUFsQiIsImZpbGUiOiJNb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNb3ZpZUxpc3QgPSAoe21vdmllcywgdG9nZ2xlV2F0Y2hlZH0pID0+IChcbiAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICB7bW92aWVzLm1hcChtb3ZpZSA9PlxuICAgICAgPE1vdmllRW50cnkgXG4gICAgICAgIG1vdmllPXttb3ZpZX0gXG4gICAgICAgIGtleT17bW92aWUudGl0bGUudG9TdHJpbmcoKX0gXG4gICAgICAgIHRvZ2dsZVdhdGNoZWQ9e3RvZ2dsZVdhdGNoZWR9XG4gICAgICAvPil9XG4gIDwvdWw+XG4pOyJdfQ==