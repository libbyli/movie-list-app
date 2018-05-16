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
      // look through this.state.movies and find title
      // set state to be that movie
      for (var i = 0; i < this.state.movies.length; i += 1) {
        if (this.state.movies[i].title.toLowerCase().includes(query.toLowerCase())) {
          this.setState({
            movies: [this.state.movies[i]]
          });
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInRpdGxlIiwicXVlcnkiLCJpIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNldFN0YXRlIiwiaGFuZGxlU2VhcmNoIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsQ0FDTixFQUFDQyxPQUFPLFlBQVIsRUFETSxFQUVOLEVBQUNBLE9BQU8sU0FBUixFQUZNLEVBR04sRUFBQ0EsT0FBTyxVQUFSLEVBSE0sRUFJTixFQUFDQSxPQUFPLFVBQVIsRUFKTSxFQUtOLEVBQUNBLE9BQU8sWUFBUixFQUxNO0FBREcsS0FBYjtBQUhpQjtBQVlsQjs7OztpQ0FFWUMsSyxFQUFPO0FBQ2xCO0FBQ0E7QUFDQSxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLSixLQUFMLENBQVdDLE1BQVgsQ0FBa0JJLE1BQXRDLEVBQThDRCxLQUFHLENBQWpELEVBQW9EO0FBQ2xELFlBQUksS0FBS0osS0FBTCxDQUFXQyxNQUFYLENBQWtCRyxDQUFsQixFQUFxQkYsS0FBckIsQ0FBMkJJLFdBQTNCLEdBQXlDQyxRQUF6QyxDQUFrREosTUFBTUcsV0FBTixFQUFsRCxDQUFKLEVBQTRFO0FBQzFFLGVBQUtFLFFBQUwsQ0FBYztBQUNaUCxvQkFBUSxDQUFDLEtBQUtELEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkcsQ0FBbEIsQ0FBRDtBQURJLFdBQWQ7QUFHRDtBQUNGO0FBQ0Y7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUUsNEJBQUMsU0FBRCxJQUFXLGNBQWMsS0FBS0ssWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBekIsR0FGRjtBQUdFLDRCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtWLEtBQUwsQ0FBV0MsTUFBOUI7QUFIRixPQURGO0FBT0Q7Ozs7RUFuQ2VVLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVzOiBbXG4gICAgICAgIHt0aXRsZTogJ01lYW4gR2lybHMnfSxcbiAgICAgICAge3RpdGxlOiAnSGFja2Vycyd9LFxuICAgICAgICB7dGl0bGU6ICdUaGUgR3JleSd9LFxuICAgICAgICB7dGl0bGU6ICdTdW5zaGluZSd9LFxuICAgICAgICB7dGl0bGU6ICdFeCBNYWNoaW5hJ30sXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTZWFyY2gocXVlcnkpIHtcbiAgICAvLyBsb29rIHRocm91Z2ggdGhpcy5zdGF0ZS5tb3ZpZXMgYW5kIGZpbmQgdGl0bGVcbiAgICAvLyBzZXQgc3RhdGUgdG8gYmUgdGhhdCBtb3ZpZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKz0xKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5tb3ZpZXNbaV0udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtb3ZpZXM6IFt0aGlzLnN0YXRlLm1vdmllc1tpXV0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPk1vdmllIExpc3Q8L2gxPlxuICAgICAgICA8U2VhcmNoQmFyIGhhbmRsZVNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19