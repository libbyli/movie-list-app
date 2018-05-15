const MovieList = ({movies}) => (
  <ul>
    {movies.map(movie =>
      <MovieEntry movie={movie} key={movie.title.toString()} />)}
  </ul>
);