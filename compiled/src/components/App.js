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
      movies: [],
      view: 'watched',
      watched: [],
      toWatch: []
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

    // write click handlers for your buttons that change the view to whatever is necessary

  }, {
    key: 'render',
    value: function render() {
      // have your buttons 'togggle' state by changing a view property on state
      // create a variable to hold your selected movies, depending on view
      // have MovieList render the movies held in the variable instead of in state directly

      var moviesToRender = void 0;

      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'h1',
          null,
          'Movie List'
        ),
        React.createElement(MovieAdder, { addMovie: this.addMovie.bind(this) }),
        React.createElement(SearchBar, { handleSearch: this.handleSearch.bind(this) }),
        React.createElement(
          'button',
          { type: 'button', className: 'btn btn-outline-secondary btn-lg' },
          'Watched'
        ),
        React.createElement(
          'button',
          { type: 'button', className: 'btn btn-outline-secondary btn-lg' },
          'To Watch'
        ),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(MovieList, { movies: this.state.movies })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInZpZXciLCJ3YXRjaGVkIiwidG9XYXRjaCIsImlucHV0IiwicHVzaCIsInRpdGxlIiwic2V0U3RhdGUiLCJxdWVyeSIsImZpbHRlciIsIm1vdmllIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImxlbmd0aCIsIm1vdmllc1RvUmVuZGVyIiwiYWRkTW92aWUiLCJiaW5kIiwiaGFuZGxlU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxFQURHO0FBRVhDLFlBQU0sU0FGSztBQUdYQyxlQUFTLEVBSEU7QUFJWEMsZUFBUztBQUpFLEtBQWI7QUFIaUI7QUFTbEI7Ozs7NkJBRVFDLEssRUFBTztBQUNkLFdBQUtMLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkssSUFBbEIsQ0FBdUIsRUFBQ0MsT0FBT0YsS0FBUixFQUF2QjtBQUNBLFdBQUtHLFFBQUwsQ0FBYztBQUNaUCxnQkFBUSxLQUFLRCxLQUFMLENBQVdDO0FBRFAsT0FBZDtBQUdEOzs7aUNBRVlRLEssRUFBTztBQUNsQixVQUFJLEtBQUtULEtBQUwsQ0FBV0MsTUFBWCxDQUFrQlMsTUFBbEIsQ0FBeUIsaUJBQVM7QUFBRSxlQUFPQyxNQUFNSixLQUFOLENBQVlLLFdBQVosR0FBMEJDLFFBQTFCLENBQW1DSixNQUFNRyxXQUFOLEVBQW5DLENBQVA7QUFBaUUsT0FBckcsRUFBdUdFLE1BQXZHLEtBQWtILENBQXRILEVBQXlIO0FBQ3ZILGFBQUtOLFFBQUwsQ0FBYztBQUNaUCxrQkFBUSxDQUFDLEVBQUNNLE9BQU8sNkJBQVIsRUFBRDtBQURJLFNBQWQ7QUFHRCxPQUpELE1BSU87QUFDTCxhQUFLQyxRQUFMLENBQWM7QUFDWlAsa0JBQVEsS0FBS0QsS0FBTCxDQUFXQyxNQUFYLENBQWtCUyxNQUFsQixDQUF5QixpQkFBUztBQUFFLG1CQUFPQyxNQUFNSixLQUFOLENBQVlLLFdBQVosR0FBMEJDLFFBQTFCLENBQW1DSixNQUFNRyxXQUFOLEVBQW5DLENBQVA7QUFBaUUsV0FBckc7QUFESSxTQUFkO0FBR0Q7QUFDRjs7QUFFRDs7Ozs2QkFFUztBQUNQO0FBQ0E7QUFDQTs7QUFFQSxVQUFJRyx1QkFBSjs7QUFFQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLDRCQUFDLFVBQUQsSUFBWSxVQUFVLEtBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUF0QixHQUZGO0FBR0UsNEJBQUMsU0FBRCxJQUFXLGNBQWMsS0FBS0MsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBekIsR0FIRjtBQUlFO0FBQUE7QUFBQSxZQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGtDQUFoQztBQUFBO0FBQUEsU0FKRjtBQUtFO0FBQUE7QUFBQSxZQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGtDQUFoQztBQUFBO0FBQUEsU0FMRjtBQU1FLHVDQU5GO0FBTVEsdUNBTlI7QUFPRSw0QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLakIsS0FBTCxDQUFXQyxNQUE5QjtBQVBGLE9BREY7QUFXRDs7OztFQW5EZWtCLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVzOiBbXSxcbiAgICAgIHZpZXc6ICd3YXRjaGVkJyxcbiAgICAgIHdhdGNoZWQ6IFtdLFxuICAgICAgdG9XYXRjaDogW11cbiAgICB9O1xuICB9XG5cbiAgYWRkTW92aWUoaW5wdXQpIHtcbiAgICB0aGlzLnN0YXRlLm1vdmllcy5wdXNoKHt0aXRsZTogaW5wdXR9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdmllczogdGhpcy5zdGF0ZS5tb3ZpZXNcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaChxdWVyeSkge1xuICAgIGlmICh0aGlzLnN0YXRlLm1vdmllcy5maWx0ZXIobW92aWUgPT4geyByZXR1cm4gbW92aWUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKTsgfSkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbW92aWVzOiBbe3RpdGxlOiAnbm8gbW92aWUgYnkgdGhhdCBuYW1lIGZvdW5kJ31dXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1vdmllczogdGhpcy5zdGF0ZS5tb3ZpZXMuZmlsdGVyKG1vdmllID0+IHsgcmV0dXJuIG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSk7IH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyB3cml0ZSBjbGljayBoYW5kbGVycyBmb3IgeW91ciBidXR0b25zIHRoYXQgY2hhbmdlIHRoZSB2aWV3IHRvIHdoYXRldmVyIGlzIG5lY2Vzc2FyeVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBoYXZlIHlvdXIgYnV0dG9ucyAndG9nZ2dsZScgc3RhdGUgYnkgY2hhbmdpbmcgYSB2aWV3IHByb3BlcnR5IG9uIHN0YXRlXG4gICAgLy8gY3JlYXRlIGEgdmFyaWFibGUgdG8gaG9sZCB5b3VyIHNlbGVjdGVkIG1vdmllcywgZGVwZW5kaW5nIG9uIHZpZXdcbiAgICAvLyBoYXZlIE1vdmllTGlzdCByZW5kZXIgdGhlIG1vdmllcyBoZWxkIGluIHRoZSB2YXJpYWJsZSBpbnN0ZWFkIG9mIGluIHN0YXRlIGRpcmVjdGx5XG4gICAgXG4gICAgbGV0IG1vdmllc1RvUmVuZGVyO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5Nb3ZpZSBMaXN0PC9oMT5cbiAgICAgICAgPE1vdmllQWRkZXIgYWRkTW92aWU9e3RoaXMuYWRkTW92aWUuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPFNlYXJjaEJhciBoYW5kbGVTZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnRuLWxnXCI+V2F0Y2hlZDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1sZ1wiPlRvIFdhdGNoPC9idXR0b24+XG4gICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=