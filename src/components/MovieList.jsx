const MovieList = ({movies}) => (
  <ul className="list-group">
    {movies.map(movie =>
      <MovieEntry movie={movie} key={movie.title.toString()} />)}
  </ul>
);