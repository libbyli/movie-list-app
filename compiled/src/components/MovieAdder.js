"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieAdder = function (_React$Component) {
  _inherits(MovieAdder, _React$Component);

  function MovieAdder(props) {
    _classCallCheck(this, MovieAdder);

    var _this = _possibleConstructorReturn(this, (MovieAdder.__proto__ || Object.getPrototypeOf(MovieAdder)).call(this, props));

    _this.state = {
      movieInput: ''
    };
    return _this;
  }

  _createClass(MovieAdder, [{
    key: "onInputChange",
    value: function onInputChange(input) {
      this.setState({
        movieInput: input
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "input-group mb-3" },
        React.createElement("input", {
          type: "text",
          placeholder: "Add movie title here",
          onChange: function onChange(input) {
            _this2.onInputChange(input.target.value);
          },
          value: this.state.movieInput
        }),
        React.createElement(
          "div",
          { className: "input-group-append" },
          React.createElement(
            "button",
            {
              className: "btn btn-outline-secondary",
              onClick: function onClick(e) {
                _this2.props.addMovie(_this2.state.movieInput);
              }
            },
            "Add"
          )
        )
      );
    }
  }]);

  return MovieAdder;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllQWRkZXIuanN4Il0sIm5hbWVzIjpbIk1vdmllQWRkZXIiLCJwcm9wcyIsInN0YXRlIiwibW92aWVJbnB1dCIsImlucHV0Iiwic2V0U3RhdGUiLCJvbklucHV0Q2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJlIiwiYWRkTW92aWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVk7QUFERCxLQUFiO0FBRmlCO0FBS2xCOzs7O2tDQUVhQyxLLEVBQU87QUFDbkIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pGLG9CQUFZQztBQURBLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFDRSxnQkFBSyxNQURQO0FBRUUsdUJBQVksc0JBRmQ7QUFHRSxvQkFBVSxrQkFBQ0EsS0FBRCxFQUFXO0FBQUMsbUJBQUtFLGFBQUwsQ0FBbUJGLE1BQU1HLE1BQU4sQ0FBYUMsS0FBaEM7QUFBd0MsV0FIaEU7QUFJRSxpQkFBTyxLQUFLTixLQUFMLENBQVdDO0FBSnBCLFVBREY7QUFPRTtBQUFBO0FBQUEsWUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0UseUJBQVUsMkJBRFo7QUFFRSx1QkFBUyxpQkFBQ00sQ0FBRCxFQUFPO0FBQUMsdUJBQUtSLEtBQUwsQ0FBV1MsUUFBWCxDQUFvQixPQUFLUixLQUFMLENBQVdDLFVBQS9CO0FBQTRDO0FBRi9EO0FBQUE7QUFBQTtBQURGO0FBUEYsT0FERjtBQWtCRDs7OztFQWpDc0JRLE1BQU1DLFMiLCJmaWxlIjoiTW92aWVBZGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllQWRkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVJbnB1dDogJycsXG4gICAgfTtcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UoaW5wdXQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdmllSW5wdXQ6IGlucHV0LFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBtb3ZpZSB0aXRsZSBoZXJlXCIgXG4gICAgICAgICAgb25DaGFuZ2U9eyhpbnB1dCkgPT4ge3RoaXMub25JbnB1dENoYW5nZShpbnB1dC50YXJnZXQudmFsdWUpO319XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW92aWVJbnB1dH0gXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHt0aGlzLnByb3BzLmFkZE1vdmllKHRoaXMuc3RhdGUubW92aWVJbnB1dCk7fX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il19