"use strict";

var MovieList = function MovieList(_ref) {
  var movies = _ref.movies;
  return React.createElement(
    "ul",
    null,
    movies.map(function (movie) {
      return React.createElement(MovieEntry, { movie: movie, key: movie.title.toString() });
    })
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwibW92aWVzIiwibWFwIiwibW92aWUiLCJ0aXRsZSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFNBQ2hCO0FBQUE7QUFBQTtBQUNHQSxXQUFPQyxHQUFQLENBQVc7QUFBQSxhQUNWLG9CQUFDLFVBQUQsSUFBWSxPQUFPQyxLQUFuQixFQUEwQixLQUFLQSxNQUFNQyxLQUFOLENBQVlDLFFBQVosRUFBL0IsR0FEVTtBQUFBLEtBQVg7QUFESCxHQURnQjtBQUFBLENBQWxCIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1vdmllTGlzdCA9ICh7bW92aWVzfSkgPT4gKFxuICA8dWw+XG4gICAge21vdmllcy5tYXAobW92aWUgPT5cbiAgICAgIDxNb3ZpZUVudHJ5IG1vdmllPXttb3ZpZX0ga2V5PXttb3ZpZS50aXRsZS50b1N0cmluZygpfSAvPil9XG4gIDwvdWw+XG4pOyJdfQ==