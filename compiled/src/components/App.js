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
      movies: [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }]
    };
    return _this;
  }

  _createClass(App, [{
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
        React.createElement(SearchBar, { handleSearch: this.handleSearch.bind(this) }),
        React.createElement(MovieList, { movies: this.state.movies })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInRpdGxlIiwicXVlcnkiLCJmaWx0ZXIiLCJtb3ZpZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImhhbmRsZVNlYXJjaCIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLENBQ04sRUFBQ0MsT0FBTyxZQUFSLEVBRE0sRUFFTixFQUFDQSxPQUFPLFNBQVIsRUFGTSxFQUdOLEVBQUNBLE9BQU8sVUFBUixFQUhNLEVBSU4sRUFBQ0EsT0FBTyxVQUFSLEVBSk0sRUFLTixFQUFDQSxPQUFPLFlBQVIsRUFMTTtBQURHLEtBQWI7QUFIaUI7QUFZbEI7Ozs7aUNBRVlDLEssRUFBTztBQUNsQixVQUFJLEtBQUtILEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkcsTUFBbEIsQ0FBeUIsaUJBQVM7QUFBRSxlQUFPQyxNQUFNSCxLQUFOLENBQVlJLFdBQVosR0FBMEJDLFFBQTFCLENBQW1DSixNQUFNRyxXQUFOLEVBQW5DLENBQVA7QUFBaUUsT0FBckcsRUFBdUdFLE1BQXZHLEtBQWtILENBQXRILEVBQXlIO0FBQ3ZILGFBQUtDLFFBQUwsQ0FBYztBQUNaUixrQkFBUSxDQUFDLEVBQUNDLE9BQU8sNkJBQVIsRUFBRDtBQURJLFNBQWQ7QUFHRCxPQUpELE1BSU87QUFDTCxhQUFLTyxRQUFMLENBQWM7QUFDWlIsa0JBQVEsS0FBS0QsS0FBTCxDQUFXQyxNQUFYLENBQWtCRyxNQUFsQixDQUF5QixpQkFBUztBQUFFLG1CQUFPQyxNQUFNSCxLQUFOLENBQVlJLFdBQVosR0FBMEJDLFFBQTFCLENBQW1DSixNQUFNRyxXQUFOLEVBQW5DLENBQVA7QUFBaUUsV0FBckc7QUFESSxTQUFkO0FBR0Q7QUFDRjs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSw0QkFBQyxTQUFELElBQVcsY0FBYyxLQUFLSSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUF6QixHQUZGO0FBR0UsNEJBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS1gsS0FBTCxDQUFXQyxNQUE5QjtBQUhGLE9BREY7QUFPRDs7OztFQW5DZVcsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IFtcbiAgICAgICAge3RpdGxlOiAnTWVhbiBHaXJscyd9LFxuICAgICAgICB7dGl0bGU6ICdIYWNrZXJzJ30sXG4gICAgICAgIHt0aXRsZTogJ1RoZSBHcmV5J30sXG4gICAgICAgIHt0aXRsZTogJ1N1bnNoaW5lJ30sXG4gICAgICAgIHt0aXRsZTogJ0V4IE1hY2hpbmEnfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaChxdWVyeSkge1xuICAgIGlmICh0aGlzLnN0YXRlLm1vdmllcy5maWx0ZXIobW92aWUgPT4geyByZXR1cm4gbW92aWUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKTsgfSkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbW92aWVzOiBbe3RpdGxlOiAnbm8gbW92aWUgYnkgdGhhdCBuYW1lIGZvdW5kJ31dXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1vdmllczogdGhpcy5zdGF0ZS5tb3ZpZXMuZmlsdGVyKG1vdmllID0+IHsgcmV0dXJuIG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSk7IH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Nb3ZpZSBMaXN0PC9oMT5cbiAgICAgICAgPFNlYXJjaEJhciBoYW5kbGVTZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==