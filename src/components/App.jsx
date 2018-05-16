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
    // look through this.state.movies and find title
    // set state to be that movie
    for (let i = 0; i < this.state.movies.length; i+=1) {
      if (this.state.movies[i].title.toLowerCase().includes(query.toLowerCase())) {
        this.setState({
          movies: [this.state.movies[i]],
        });
      }
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
