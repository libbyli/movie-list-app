class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
    };
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
        <SearchBar handleSearch={this.handleSearch.bind(this)} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
