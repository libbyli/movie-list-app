class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  onInputChange(query) {
    this.setState({
      query: query,
    });
  }

  render() {
    return (
      <div className="input-group mb-3">
        <input 
          type="text"
          placeholder="Search..." 
          onChange={(input) => {this.onInputChange(input.target.value);}}
          value={this.state.term} />
        <div className="input-group-append">
          <button type="button" className="btn btn-outline-secondary" onClick={(e) => {this.props.handleSearch(this.state.query);}}>Go!</button>
        </div>
      </div>
    );
  }
}