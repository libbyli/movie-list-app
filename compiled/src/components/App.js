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
      view: 'to watch',
      watched: [],
      toWatch: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'addMovie',
    value: function addMovie(input) {
      this.state.toWatch.push({ title: input });
      this.setState({
        toWatch: this.state.toWatch
      });
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch(query) {
      if (this.state.view === 'watched') {
        this.setState({
          watched: this.state.watched.filter(function (movie) {
            return movie.title.toLowerCase().includes(query.toLowerCase());
          })
        });
      } else {
        this.setState({
          toWatch: this.state.toWatch.filter(function (movie) {
            return movie.title.toLowerCase().includes(query.toLowerCase());
          })
        });
      }
    }
  }, {
    key: 'clickWatched',
    value: function clickWatched() {
      this.setState({
        view: 'watched'
      });
    }
  }, {
    key: 'clickToWatch',
    value: function clickToWatch() {
      this.setState({
        view: 'to watch'
      });
    }
  }, {
    key: 'toggleWatched',
    value: function toggleWatched(target) {
      var index = this.state.toWatch.indexOf(target);
      this.state.watched.push(target);
      this.state.toWatch.splice(index, 1);
      this.setState({
        watched: this.state.watched,
        toWatch: this.state.toWatch
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var moviesToRender = void 0;
      if (this.state.view === 'watched') {
        moviesToRender = this.state.watched;
      } else {
        moviesToRender = this.state.toWatch;
      }

      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'h1',
          null,
          'Movie List'
        ),
        React.createElement(MovieAdder, {
          addMovie: this.addMovie.bind(this) }),
        React.createElement(SearchBar, {
          handleSearch: this.handleSearch.bind(this) }),
        React.createElement(
          'button',
          {
            type: 'button',
            className: 'btn btn-outline-secondary btn-lg',
            onClick: function onClick() {
              _this2.clickWatched();
            }
          },
          'Watched'
        ),
        React.createElement(
          'button',
          {
            type: 'button',
            className: 'btn btn-outline-secondary btn-lg',
            onClick: function onClick() {
              _this2.clickToWatch();
            }
          },
          'To Watch'
        ),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(MovieList, {
          movies: moviesToRender,
          toggleWatched: this.toggleWatched.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZpZXciLCJ3YXRjaGVkIiwidG9XYXRjaCIsImlucHV0IiwicHVzaCIsInRpdGxlIiwic2V0U3RhdGUiLCJxdWVyeSIsImZpbHRlciIsIm1vdmllIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInRhcmdldCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIm1vdmllc1RvUmVuZGVyIiwiYWRkTW92aWUiLCJiaW5kIiwiaGFuZGxlU2VhcmNoIiwiY2xpY2tXYXRjaGVkIiwiY2xpY2tUb1dhdGNoIiwidG9nZ2xlV2F0Y2hlZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sVUFESztBQUVYQyxlQUFTLEVBRkU7QUFHWEMsZUFBUztBQUhFLEtBQWI7QUFIaUI7QUFRbEI7Ozs7NkJBRVFDLEssRUFBTztBQUNkLFdBQUtKLEtBQUwsQ0FBV0csT0FBWCxDQUFtQkUsSUFBbkIsQ0FBd0IsRUFBQ0MsT0FBT0YsS0FBUixFQUF4QjtBQUNBLFdBQUtHLFFBQUwsQ0FBYztBQUNaSixpQkFBUyxLQUFLSCxLQUFMLENBQVdHO0FBRFIsT0FBZDtBQUdEOzs7aUNBRVlLLEssRUFBTztBQUNsQixVQUFJLEtBQUtSLEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixTQUF4QixFQUFtQztBQUNqQyxhQUFLTSxRQUFMLENBQWM7QUFDWkwsbUJBQVMsS0FBS0YsS0FBTCxDQUFXRSxPQUFYLENBQW1CTyxNQUFuQixDQUEwQixpQkFBUztBQUFFLG1CQUFPQyxNQUFNSixLQUFOLENBQVlLLFdBQVosR0FBMEJDLFFBQTFCLENBQW1DSixNQUFNRyxXQUFOLEVBQW5DLENBQVA7QUFBaUUsV0FBdEc7QUFERyxTQUFkO0FBR0QsT0FKRCxNQUlPO0FBQ0wsYUFBS0osUUFBTCxDQUFjO0FBQ1pKLG1CQUFTLEtBQUtILEtBQUwsQ0FBV0csT0FBWCxDQUFtQk0sTUFBbkIsQ0FBMEIsaUJBQVM7QUFBRSxtQkFBT0MsTUFBTUosS0FBTixDQUFZSyxXQUFaLEdBQTBCQyxRQUExQixDQUFtQ0osTUFBTUcsV0FBTixFQUFuQyxDQUFQO0FBQWlFLFdBQXRHO0FBREcsU0FBZDtBQUdEO0FBQ0Y7OzttQ0FFYztBQUNiLFdBQUtKLFFBQUwsQ0FBYztBQUNaTixjQUFNO0FBRE0sT0FBZDtBQUdEOzs7bUNBRWM7QUFDYixXQUFLTSxRQUFMLENBQWM7QUFDWk4sY0FBTTtBQURNLE9BQWQ7QUFHRDs7O2tDQUVhWSxNLEVBQVE7QUFDcEIsVUFBTUMsUUFBUSxLQUFLZCxLQUFMLENBQVdHLE9BQVgsQ0FBbUJZLE9BQW5CLENBQTJCRixNQUEzQixDQUFkO0FBQ0EsV0FBS2IsS0FBTCxDQUFXRSxPQUFYLENBQW1CRyxJQUFuQixDQUF3QlEsTUFBeEI7QUFDQSxXQUFLYixLQUFMLENBQVdHLE9BQVgsQ0FBbUJhLE1BQW5CLENBQTBCRixLQUExQixFQUFpQyxDQUFqQztBQUNBLFdBQUtQLFFBQUwsQ0FBYztBQUNaTCxpQkFBUyxLQUFLRixLQUFMLENBQVdFLE9BRFI7QUFFWkMsaUJBQVMsS0FBS0gsS0FBTCxDQUFXRztBQUZSLE9BQWQ7QUFJRDs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBSWMsdUJBQUo7QUFDQSxVQUFJLEtBQUtqQixLQUFMLENBQVdDLElBQVgsS0FBb0IsU0FBeEIsRUFBbUM7QUFDakNnQix5QkFBaUIsS0FBS2pCLEtBQUwsQ0FBV0UsT0FBNUI7QUFDRCxPQUZELE1BRU87QUFDTGUseUJBQWlCLEtBQUtqQixLQUFMLENBQVdHLE9BQTVCO0FBQ0Q7O0FBRUQsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSw0QkFBQyxVQUFEO0FBQ0Usb0JBQVUsS0FBS2UsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBRFosR0FGRjtBQUlFLDRCQUFDLFNBQUQ7QUFDRSx3QkFBYyxLQUFLQyxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQURoQixHQUpGO0FBTUU7QUFBQTtBQUFBO0FBQ0Usa0JBQUssUUFEUDtBQUVFLHVCQUFVLGtDQUZaO0FBR0UscUJBQVMsbUJBQU07QUFBQyxxQkFBS0UsWUFBTDtBQUFxQjtBQUh2QztBQUFBO0FBQUEsU0FORjtBQVlFO0FBQUE7QUFBQTtBQUNFLGtCQUFLLFFBRFA7QUFFRSx1QkFBVSxrQ0FGWjtBQUdFLHFCQUFTLG1CQUFNO0FBQUMscUJBQUtDLFlBQUw7QUFBcUI7QUFIdkM7QUFBQTtBQUFBLFNBWkY7QUFrQkUsdUNBbEJGO0FBa0JRLHVDQWxCUjtBQW1CRSw0QkFBQyxTQUFEO0FBQ0Usa0JBQVFMLGNBRFY7QUFFRSx5QkFBZSxLQUFLTSxhQUFMLENBQW1CSixJQUFuQixDQUF3QixJQUF4QixDQUZqQjtBQW5CRixPQURGO0FBeUJEOzs7O0VBckZlSyxNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpZXc6ICd0byB3YXRjaCcsXG4gICAgICB3YXRjaGVkOiBbXSxcbiAgICAgIHRvV2F0Y2g6IFtdXG4gICAgfTtcbiAgfVxuXG4gIGFkZE1vdmllKGlucHV0KSB7XG4gICAgdGhpcy5zdGF0ZS50b1dhdGNoLnB1c2goe3RpdGxlOiBpbnB1dH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG9XYXRjaDogdGhpcy5zdGF0ZS50b1dhdGNoLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKHF1ZXJ5KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudmlldyA9PT0gJ3dhdGNoZWQnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2F0Y2hlZDogdGhpcy5zdGF0ZS53YXRjaGVkLmZpbHRlcihtb3ZpZSA9PiB7IHJldHVybiBtb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpOyB9KVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b1dhdGNoOiB0aGlzLnN0YXRlLnRvV2F0Y2guZmlsdGVyKG1vdmllID0+IHsgcmV0dXJuIG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSk7IH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjbGlja1dhdGNoZWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3OiAnd2F0Y2hlZCcsXG4gICAgfSk7XG4gIH1cblxuICBjbGlja1RvV2F0Y2goKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3OiAndG8gd2F0Y2gnLFxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlV2F0Y2hlZCh0YXJnZXQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUudG9XYXRjaC5pbmRleE9mKHRhcmdldCk7XG4gICAgdGhpcy5zdGF0ZS53YXRjaGVkLnB1c2godGFyZ2V0KTtcbiAgICB0aGlzLnN0YXRlLnRvV2F0Y2guc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdhdGNoZWQ6IHRoaXMuc3RhdGUud2F0Y2hlZCxcbiAgICAgIHRvV2F0Y2g6IHRoaXMuc3RhdGUudG9XYXRjaCxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbW92aWVzVG9SZW5kZXI7XG4gICAgaWYgKHRoaXMuc3RhdGUudmlldyA9PT0gJ3dhdGNoZWQnKSB7XG4gICAgICBtb3ZpZXNUb1JlbmRlciA9IHRoaXMuc3RhdGUud2F0Y2hlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgbW92aWVzVG9SZW5kZXIgPSB0aGlzLnN0YXRlLnRvV2F0Y2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5Nb3ZpZSBMaXN0PC9oMT5cbiAgICAgICAgPE1vdmllQWRkZXIgXG4gICAgICAgICAgYWRkTW92aWU9e3RoaXMuYWRkTW92aWUuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgIGhhbmRsZVNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tbGdcIiBcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7dGhpcy5jbGlja1dhdGNoZWQoKTt9fVxuICAgICAgICA+V2F0Y2hlZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tbGdcIiBcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7dGhpcy5jbGlja1RvV2F0Y2goKTt9fVxuICAgICAgICA+VG8gV2F0Y2hcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICA8TW92aWVMaXN0IFxuICAgICAgICAgIG1vdmllcz17bW92aWVzVG9SZW5kZXJ9IFxuICAgICAgICAgIHRvZ2dsZVdhdGNoZWQ9e3RoaXMudG9nZ2xlV2F0Y2hlZC5iaW5kKHRoaXMpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19