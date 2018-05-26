"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieEntry = function (_React$Component) {
  _inherits(MovieEntry, _React$Component);

  function MovieEntry(props) {
    _classCallCheck(this, MovieEntry);

    var _this = _possibleConstructorReturn(this, (MovieEntry.__proto__ || Object.getPrototypeOf(MovieEntry)).call(this, props));

    _this.state = {
      isToggled: false
    };
    return _this;
  }

  _createClass(MovieEntry, [{
    key: "toggleInfo",
    value: function toggleInfo() {
      this.setState({
        isToggled: !this.state.isToggled
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        { className: "list-group-item" },
        React.createElement(
          "span",
          { onClick: this.toggleInfo.bind(this) },
          this.props.movie.title
        ),
        this.state.isToggled && React.createElement(Info, { toggleWatched: this.props.toggleWatched, movie: this.props.movie })
      );
    }
  }]);

  return MovieEntry;
}(React.Component);

var Info = function Info(props) {
  return React.createElement(
    "div",
    null,
    "hello the movie info goes here",
    React.createElement(
      "button",
      {
        type: "button",
        className: "btn btn-outline-dark btn-sm",
        onClick: function onClick() {
          props.toggleWatched(props.movie);
        }
      },
      "watched"
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllRW50cnkuanN4Il0sIm5hbWVzIjpbIk1vdmllRW50cnkiLCJwcm9wcyIsInN0YXRlIiwiaXNUb2dnbGVkIiwic2V0U3RhdGUiLCJ0b2dnbGVJbmZvIiwiYmluZCIsIm1vdmllIiwidGl0bGUiLCJ0b2dnbGVXYXRjaGVkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFU7OztBQUNKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVztBQURBLEtBQWI7QUFIaUI7QUFNbEI7Ozs7aUNBRVk7QUFDWCxXQUFLQyxRQUFMLENBQWM7QUFDWkQsbUJBQVcsQ0FBQyxLQUFLRCxLQUFMLENBQVdDO0FBRFgsT0FBZDtBQUdEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFJLFdBQVUsaUJBQWQ7QUFDRTtBQUFBO0FBQUEsWUFBTSxTQUFTLEtBQUtFLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQWY7QUFBNEMsZUFBS0wsS0FBTCxDQUFXTSxLQUFYLENBQWlCQztBQUE3RCxTQURGO0FBRUcsYUFBS04sS0FBTCxDQUFXQyxTQUFYLElBQXdCLG9CQUFDLElBQUQsSUFBTSxlQUFlLEtBQUtGLEtBQUwsQ0FBV1EsYUFBaEMsRUFBK0MsT0FBTyxLQUFLUixLQUFMLENBQVdNLEtBQWpFO0FBRjNCLE9BREY7QUFNRDs7OztFQXRCc0JHLE1BQU1DLFM7O0FBeUIvQixJQUFNQyxPQUFPLFNBQVBBLElBQU8sQ0FBQ1gsS0FBRDtBQUFBLFNBQ1g7QUFBQTtBQUFBO0FBQUE7QUFFRTtBQUFBO0FBQUE7QUFDRSxjQUFLLFFBRFA7QUFFRSxtQkFBVSw2QkFGWjtBQUdFLGlCQUFTLG1CQUFNO0FBQUNBLGdCQUFNUSxhQUFOLENBQW9CUixNQUFNTSxLQUExQjtBQUFrQztBQUhwRDtBQUFBO0FBQUE7QUFGRixHQURXO0FBQUEsQ0FBYiIsImZpbGUiOiJNb3ZpZUVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzVG9nZ2xlZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIHRvZ2dsZUluZm8oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1RvZ2dsZWQ6ICF0aGlzLnN0YXRlLmlzVG9nZ2xlZFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlSW5mby5iaW5kKHRoaXMpfT57dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX08L3NwYW4+XG4gICAgICAgIHt0aGlzLnN0YXRlLmlzVG9nZ2xlZCAmJiA8SW5mbyB0b2dnbGVXYXRjaGVkPXt0aGlzLnByb3BzLnRvZ2dsZVdhdGNoZWR9IG1vdmllPXt0aGlzLnByb3BzLm1vdmllfSAvPn1cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBJbmZvID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgaGVsbG8gdGhlIG1vdmllIGluZm8gZ29lcyBoZXJlXG4gICAgPGJ1dHRvbiBcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmsgYnRuLXNtXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtwcm9wcy50b2dnbGVXYXRjaGVkKHByb3BzLm1vdmllKTt9fVxuICAgID53YXRjaGVkXG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuKTsiXX0=