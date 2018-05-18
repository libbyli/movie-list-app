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
      <div className="input-group mb-3">
        <input 
          type="text"
          placeholder="Add movie title here" 
          onChange={(input) => {this.onInputChange(input.target.value);}}
          value={this.state.movieInput} 
        />
        <div className="input-group-append">
          <button 
            className="btn btn-outline-secondary"
            onClick={(e) => {this.props.addMovie(this.state.movieInput);}}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}