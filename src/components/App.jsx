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
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <SearchBar />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
