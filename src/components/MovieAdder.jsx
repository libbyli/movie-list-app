class MovieAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInput: '',
    };
  }

  onInputChange(input) {
    this.setState({
      movieInput: input,
    });
  }

  render() {
    return (
      <div className="movie-input">
        <input 
          type="text"
          placeholder="Add movie title here" 
          onChange={(input) => {this.onInputChange(input.target.value);}}
          value={this.state.movieInput} />
        <button className="btn add-movie" onClick={(e) => {this.props.addMovie(this.state.movieInput);}}>Add</button>
      </div>
    );
  }
}