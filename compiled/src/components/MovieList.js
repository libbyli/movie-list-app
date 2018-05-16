"use strict";

var MovieList = function MovieList(_ref) {
  var movies = _ref.movies;
  return React.createElement(
    "ul",
    { className: "list-group" },
    movies.map(function (movie) {
      return React.createElement(MovieEntry, { movie: movie, key: movie.title.toString() });
    })
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwibW92aWVzIiwibWFwIiwibW92aWUiLCJ0aXRsZSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFNBQ2hCO0FBQUE7QUFBQSxNQUFJLFdBQVUsWUFBZDtBQUNHQSxXQUFPQyxHQUFQLENBQVc7QUFBQSxhQUNWLG9CQUFDLFVBQUQsSUFBWSxPQUFPQyxLQUFuQixFQUEwQixLQUFLQSxNQUFNQyxLQUFOLENBQVlDLFFBQVosRUFBL0IsR0FEVTtBQUFBLEtBQVg7QUFESCxHQURnQjtBQUFBLENBQWxCIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1vdmllTGlzdCA9ICh7bW92aWVzfSkgPT4gKFxuICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgIHttb3ZpZXMubWFwKG1vdmllID0+XG4gICAgICA8TW92aWVFbnRyeSBtb3ZpZT17bW92aWV9IGtleT17bW92aWUudGl0bGUudG9TdHJpbmcoKX0gLz4pfVxuICA8L3VsPlxuKTsiXX0=