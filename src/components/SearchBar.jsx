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
      <div className="search-bar">
        <input 
          type="text"
          placeholder="Search..." 
          onChange={(input) => {this.onInputChange(input.target.value);}}
          value={this.state.term} />
        <button className="btn btn-default" onClick={(e) => {this.props.handleSearch(this.state.query);}}>Go!</button>
      </div>
    );
  }
}