class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      view: 'watched',
      watched: [],
      toWatch: []
    };
  }

  addMovie(input) {
    this.state.movies.push({title: input});
    this.setState({
      movies: this.state.movies
    });
  }

  handleSearch(query) {
    if (this.state.movies.filter(movie => { return movie.title.toLowerCase().includes(query.toLowerCase()); }).length === 0) {
      this.setState({
        movies: [{title: 'no movie by that name found'}]
      });
    } else {
      this.setState({
        movies: this.state.movies.filter(movie => { return movie.title.toLowerCase().includes(query.toLowerCase()); })
      });
    }
  }

  // write click handlers for your buttons that change the view to whatever is necessary

  render() {
    // have your buttons 'togggle' state by changing a view property on state
    // create a variable to hold your selected movies, depending on view
    // have MovieList render the movies held in the variable instead of in state directly
    
    let moviesToRender;

    return (
      <div className="container">
        <h1>Movie List</h1>
        <MovieAdder addMovie={this.addMovie.bind(this)} />
        <SearchBar handleSearch={this.handleSearch.bind(this)} />
        <button type="button" className="btn btn-outline-secondary btn-lg">Watched</button>
        <button type="button" className="btn btn-outline-secondary btn-lg">To Watch</button>
        <br /><br />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
