class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'to watch',
      watched: [],
      toWatch: []
    };
  }

  addMovie(input) {
    this.state.toWatch.push({title: input});
    this.setState({
      toWatch: this.state.toWatch,
    });
  }

  handleSearch(query) {
    if (this.state.view === 'watched') {
      this.setState({
        watched: this.state.watched.filter(movie => { return movie.title.toLowerCase().includes(query.toLowerCase()); })
      });
    } else {
      this.setState({
        toWatch: this.state.toWatch.filter(movie => { return movie.title.toLowerCase().includes(query.toLowerCase()); })
      });
    }
  }

  clickWatched() {
    this.setState({
      view: 'watched',
    });
  }

  clickToWatch() {
    this.setState({
      view: 'to watch',
    });
  }

  toggleWatched(target) {
    const index = this.state.toWatch.indexOf(target);
    this.setState({
      watched: this.state.watched.push(target),
      toWatch: this.state.toWatch.splice(index, 1),
    });
  }

  render() {
    let moviesToRender;
    if (this.state.view === 'watched') {
      moviesToRender = this.state.watched;
    } else {
      moviesToRender = this.state.toWatch;
    }

    return (
      <div className="container">
        <h1>Movie List</h1>
        <MovieAdder 
          addMovie={this.addMovie.bind(this)} />
        <SearchBar
          handleSearch={this.handleSearch.bind(this)} />
        <button 
          type="button" 
          className="btn btn-outline-secondary btn-lg" 
          onClick={() => {this.clickWatched();}}
        >Watched
        </button>
        <button 
          type="button" 
          className="btn btn-outline-secondary btn-lg" 
          onClick={() => {this.clickToWatch();}}
        >To Watch
        </button>
        <br /><br />
        <MovieList 
          movies={moviesToRender} 
          toggleWatched={this.toggleWatched.bind(this)} />
      </div>
    );
  }
}
