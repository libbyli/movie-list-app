const MovieList = ({movies, toggleWatched}) => (
  <ul className="list-group">
    {movies.map(movie =>
      <MovieEntry 
        movie={movie} 
        key={movie.title.toString()} 
        toggleWatched={toggleWatched}
      />)}
  </ul>
);