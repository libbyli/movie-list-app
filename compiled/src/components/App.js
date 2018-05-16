'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      movies: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'addMovie',
    value: function addMovie(input) {
      this.state.movies.push({ title: input });
      this.setState({
        movies: this.state.movies
      });
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch(query) {
      if (this.state.movies.filter(function (movie) {
        return movie.title.toLowerCase().includes(query.toLowerCase());
      }).length === 0) {
        this.setState({
          movies: [{ title: 'no movie by that name found' }]
        });
      } else {
        this.setState({
          movies: this.state.movies.filter(function (movie) {
            return movie.title.toLowerCase().includes(query.toLowerCase());
          })
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Movie List'
        ),
        React.createElement(MovieAdder, { addMovie: this.addMovie.bind(this) }),
        React.createElement(SearchBar, { handleSearch: this.handleSearch.bind(this) }),
        React.createElement(MovieList, { movies: this.state.movies })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImlucHV0IiwicHVzaCIsInRpdGxlIiwic2V0U3RhdGUiLCJxdWVyeSIsImZpbHRlciIsIm1vdmllIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImxlbmd0aCIsImFkZE1vdmllIiwiYmluZCIsImhhbmRsZVNlYXJjaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVE7QUFERyxLQUFiO0FBSGlCO0FBTWxCOzs7OzZCQUVRQyxLLEVBQU87QUFDZCxXQUFLRixLQUFMLENBQVdDLE1BQVgsQ0FBa0JFLElBQWxCLENBQXVCLEVBQUNDLE9BQU9GLEtBQVIsRUFBdkI7QUFDQSxXQUFLRyxRQUFMLENBQWM7QUFDWkosZ0JBQVEsS0FBS0QsS0FBTCxDQUFXQztBQURQLE9BQWQ7QUFHRDs7O2lDQUVZSyxLLEVBQU87QUFDbEIsVUFBSSxLQUFLTixLQUFMLENBQVdDLE1BQVgsQ0FBa0JNLE1BQWxCLENBQXlCLGlCQUFTO0FBQUUsZUFBT0MsTUFBTUosS0FBTixDQUFZSyxXQUFaLEdBQTBCQyxRQUExQixDQUFtQ0osTUFBTUcsV0FBTixFQUFuQyxDQUFQO0FBQWlFLE9BQXJHLEVBQXVHRSxNQUF2RyxLQUFrSCxDQUF0SCxFQUF5SDtBQUN2SCxhQUFLTixRQUFMLENBQWM7QUFDWkosa0JBQVEsQ0FBQyxFQUFDRyxPQUFPLDZCQUFSLEVBQUQ7QUFESSxTQUFkO0FBR0QsT0FKRCxNQUlPO0FBQ0wsYUFBS0MsUUFBTCxDQUFjO0FBQ1pKLGtCQUFRLEtBQUtELEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk0sTUFBbEIsQ0FBeUIsaUJBQVM7QUFBRSxtQkFBT0MsTUFBTUosS0FBTixDQUFZSyxXQUFaLEdBQTBCQyxRQUExQixDQUFtQ0osTUFBTUcsV0FBTixFQUFuQyxDQUFQO0FBQWlFLFdBQXJHO0FBREksU0FBZDtBQUdEO0FBQ0Y7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUUsNEJBQUMsVUFBRCxJQUFZLFVBQVUsS0FBS0csUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQXRCLEdBRkY7QUFHRSw0QkFBQyxTQUFELElBQVcsY0FBYyxLQUFLQyxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUF6QixHQUhGO0FBSUUsNEJBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS2IsS0FBTCxDQUFXQyxNQUE5QjtBQUpGLE9BREY7QUFRRDs7OztFQXJDZWMsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IFtdLFxuICAgIH07XG4gIH1cblxuICBhZGRNb3ZpZShpbnB1dCkge1xuICAgIHRoaXMuc3RhdGUubW92aWVzLnB1c2goe3RpdGxlOiBpbnB1dH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW92aWVzOiB0aGlzLnN0YXRlLm1vdmllc1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKHF1ZXJ5KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubW92aWVzLmZpbHRlcihtb3ZpZSA9PiB7IHJldHVybiBtb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpOyB9KS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb3ZpZXM6IFt7dGl0bGU6ICdubyBtb3ZpZSBieSB0aGF0IG5hbWUgZm91bmQnfV1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbW92aWVzOiB0aGlzLnN0YXRlLm1vdmllcy5maWx0ZXIobW92aWUgPT4geyByZXR1cm4gbW92aWUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKTsgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPk1vdmllIExpc3Q8L2gxPlxuICAgICAgICA8TW92aWVBZGRlciBhZGRNb3ZpZT17dGhpcy5hZGRNb3ZpZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8U2VhcmNoQmFyIGhhbmRsZVNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19