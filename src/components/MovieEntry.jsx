const MovieEntry = ({movie, toggleWatched}) => (
  <li className="list-group-item">
    {movie.title} 
    <button 
      type="button"
      className="btn btn-outline-dark btn-sm"
      onClick={() => toggleWatched(movie)}
    >watched
    </button>
    {console.log(movie)}
  </li>
);