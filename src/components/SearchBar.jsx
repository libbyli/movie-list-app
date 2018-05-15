class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          type="text"
          placeholder="Search..." />
        <button className="btn">Go!</button>
      </div>
    );
  }
}