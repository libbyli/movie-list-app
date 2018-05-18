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
      this.setState({
        watched: this.state.watched.push(target),
        toWatch: this.state.toWatch.splice(index, 1)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZpZXciLCJ3YXRjaGVkIiwidG9XYXRjaCIsImlucHV0IiwicHVzaCIsInRpdGxlIiwic2V0U3RhdGUiLCJxdWVyeSIsImZpbHRlciIsIm1vdmllIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInRhcmdldCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIm1vdmllc1RvUmVuZGVyIiwiYWRkTW92aWUiLCJiaW5kIiwiaGFuZGxlU2VhcmNoIiwiY2xpY2tXYXRjaGVkIiwiY2xpY2tUb1dhdGNoIiwidG9nZ2xlV2F0Y2hlZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sVUFESztBQUVYQyxlQUFTLEVBRkU7QUFHWEMsZUFBUztBQUhFLEtBQWI7QUFIaUI7QUFRbEI7Ozs7NkJBRVFDLEssRUFBTztBQUNkLFdBQUtKLEtBQUwsQ0FBV0csT0FBWCxDQUFtQkUsSUFBbkIsQ0FBd0IsRUFBQ0MsT0FBT0YsS0FBUixFQUF4QjtBQUNBLFdBQUtHLFFBQUwsQ0FBYztBQUNaSixpQkFBUyxLQUFLSCxLQUFMLENBQVdHO0FBRFIsT0FBZDtBQUdEOzs7aUNBRVlLLEssRUFBTztBQUNsQixVQUFJLEtBQUtSLEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixTQUF4QixFQUFtQztBQUNqQyxhQUFLTSxRQUFMLENBQWM7QUFDWkwsbUJBQVMsS0FBS0YsS0FBTCxDQUFXRSxPQUFYLENBQW1CTyxNQUFuQixDQUEwQixpQkFBUztBQUFFLG1CQUFPQyxNQUFNSixLQUFOLENBQVlLLFdBQVosR0FBMEJDLFFBQTFCLENBQW1DSixNQUFNRyxXQUFOLEVBQW5DLENBQVA7QUFBaUUsV0FBdEc7QUFERyxTQUFkO0FBR0QsT0FKRCxNQUlPO0FBQ0wsYUFBS0osUUFBTCxDQUFjO0FBQ1pKLG1CQUFTLEtBQUtILEtBQUwsQ0FBV0csT0FBWCxDQUFtQk0sTUFBbkIsQ0FBMEIsaUJBQVM7QUFBRSxtQkFBT0MsTUFBTUosS0FBTixDQUFZSyxXQUFaLEdBQTBCQyxRQUExQixDQUFtQ0osTUFBTUcsV0FBTixFQUFuQyxDQUFQO0FBQWlFLFdBQXRHO0FBREcsU0FBZDtBQUdEO0FBQ0Y7OzttQ0FFYztBQUNiLFdBQUtKLFFBQUwsQ0FBYztBQUNaTixjQUFNO0FBRE0sT0FBZDtBQUdEOzs7bUNBRWM7QUFDYixXQUFLTSxRQUFMLENBQWM7QUFDWk4sY0FBTTtBQURNLE9BQWQ7QUFHRDs7O2tDQUVhWSxNLEVBQVE7QUFDcEIsVUFBTUMsUUFBUSxLQUFLZCxLQUFMLENBQVdHLE9BQVgsQ0FBbUJZLE9BQW5CLENBQTJCRixNQUEzQixDQUFkO0FBQ0EsV0FBS04sUUFBTCxDQUFjO0FBQ1pMLGlCQUFTLEtBQUtGLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkcsSUFBbkIsQ0FBd0JRLE1BQXhCLENBREc7QUFFWlYsaUJBQVMsS0FBS0gsS0FBTCxDQUFXRyxPQUFYLENBQW1CYSxNQUFuQixDQUEwQkYsS0FBMUIsRUFBaUMsQ0FBakM7QUFGRyxPQUFkO0FBSUQ7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQUlHLHVCQUFKO0FBQ0EsVUFBSSxLQUFLakIsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLFNBQXhCLEVBQW1DO0FBQ2pDZ0IseUJBQWlCLEtBQUtqQixLQUFMLENBQVdFLE9BQTVCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xlLHlCQUFpQixLQUFLakIsS0FBTCxDQUFXRyxPQUE1QjtBQUNEOztBQUVELGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUUsNEJBQUMsVUFBRDtBQUNFLG9CQUFVLEtBQUtlLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQURaLEdBRkY7QUFJRSw0QkFBQyxTQUFEO0FBQ0Usd0JBQWMsS0FBS0MsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FEaEIsR0FKRjtBQU1FO0FBQUE7QUFBQTtBQUNFLGtCQUFLLFFBRFA7QUFFRSx1QkFBVSxrQ0FGWjtBQUdFLHFCQUFTLG1CQUFNO0FBQUMscUJBQUtFLFlBQUw7QUFBcUI7QUFIdkM7QUFBQTtBQUFBLFNBTkY7QUFZRTtBQUFBO0FBQUE7QUFDRSxrQkFBSyxRQURQO0FBRUUsdUJBQVUsa0NBRlo7QUFHRSxxQkFBUyxtQkFBTTtBQUFDLHFCQUFLQyxZQUFMO0FBQXFCO0FBSHZDO0FBQUE7QUFBQSxTQVpGO0FBa0JFLHVDQWxCRjtBQWtCUSx1Q0FsQlI7QUFtQkUsNEJBQUMsU0FBRDtBQUNFLGtCQUFRTCxjQURWO0FBRUUseUJBQWUsS0FBS00sYUFBTCxDQUFtQkosSUFBbkIsQ0FBd0IsSUFBeEIsQ0FGakI7QUFuQkYsT0FERjtBQXlCRDs7OztFQW5GZUssTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWV3OiAndG8gd2F0Y2gnLFxuICAgICAgd2F0Y2hlZDogW10sXG4gICAgICB0b1dhdGNoOiBbXVxuICAgIH07XG4gIH1cblxuICBhZGRNb3ZpZShpbnB1dCkge1xuICAgIHRoaXMuc3RhdGUudG9XYXRjaC5wdXNoKHt0aXRsZTogaW5wdXR9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvV2F0Y2g6IHRoaXMuc3RhdGUudG9XYXRjaCxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaChxdWVyeSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnZpZXcgPT09ICd3YXRjaGVkJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdhdGNoZWQ6IHRoaXMuc3RhdGUud2F0Y2hlZC5maWx0ZXIobW92aWUgPT4geyByZXR1cm4gbW92aWUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKTsgfSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdG9XYXRjaDogdGhpcy5zdGF0ZS50b1dhdGNoLmZpbHRlcihtb3ZpZSA9PiB7IHJldHVybiBtb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpOyB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2xpY2tXYXRjaGVkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlldzogJ3dhdGNoZWQnLFxuICAgIH0pO1xuICB9XG5cbiAgY2xpY2tUb1dhdGNoKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlldzogJ3RvIHdhdGNoJyxcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZVdhdGNoZWQodGFyZ2V0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLnRvV2F0Y2guaW5kZXhPZih0YXJnZXQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd2F0Y2hlZDogdGhpcy5zdGF0ZS53YXRjaGVkLnB1c2godGFyZ2V0KSxcbiAgICAgIHRvV2F0Y2g6IHRoaXMuc3RhdGUudG9XYXRjaC5zcGxpY2UoaW5kZXgsIDEpLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBtb3ZpZXNUb1JlbmRlcjtcbiAgICBpZiAodGhpcy5zdGF0ZS52aWV3ID09PSAnd2F0Y2hlZCcpIHtcbiAgICAgIG1vdmllc1RvUmVuZGVyID0gdGhpcy5zdGF0ZS53YXRjaGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3ZpZXNUb1JlbmRlciA9IHRoaXMuc3RhdGUudG9XYXRjaDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxPk1vdmllIExpc3Q8L2gxPlxuICAgICAgICA8TW92aWVBZGRlciBcbiAgICAgICAgICBhZGRNb3ZpZT17dGhpcy5hZGRNb3ZpZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8U2VhcmNoQmFyXG4gICAgICAgICAgaGFuZGxlU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1sZ1wiIFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLmNsaWNrV2F0Y2hlZCgpO319XG4gICAgICAgID5XYXRjaGVkXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1sZ1wiIFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLmNsaWNrVG9XYXRjaCgpO319XG4gICAgICAgID5UbyBXYXRjaFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgIDxNb3ZpZUxpc3QgXG4gICAgICAgICAgbW92aWVzPXttb3ZpZXNUb1JlbmRlcn0gXG4gICAgICAgICAgdG9nZ2xlV2F0Y2hlZD17dGhpcy50b2dnbGVXYXRjaGVkLmJpbmQodGhpcyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=