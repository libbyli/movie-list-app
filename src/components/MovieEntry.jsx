class MovieEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false,
    };
  }

  toggleInfo() {
    this.setState({
      isToggled: !this.state.isToggled
    });
  }

  render() {
    return (
      <li className="list-group-item">
        <span onClick={this.toggleInfo.bind(this)}>{this.props.movie.title}</span>
        {this.state.isToggled && <Info toggleWatched={this.props.toggleWatched} movie={this.props.movie} />}
      </li>
    );
  }
}

const Info = (props) => (
  <div>
    hello the movie info goes here
    <button 
      type="button"
      className="btn btn-outline-dark btn-sm"
      onClick={() => {props.toggleWatched(props.movie);}}
    >watched
    </button>
  </div>
);