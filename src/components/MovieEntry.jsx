const MovieEntry = ({movie}) => (
  <li className="list-group-item">
    {movie.title} <button type="button" className="btn btn-outline-dark btn-sm">watched</button>
  </li>
);