class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
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

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <MovieAdder addMovie={this.addMovie.bind(this)} />
        <SearchBar handleSearch={this.handleSearch.bind(this)} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
