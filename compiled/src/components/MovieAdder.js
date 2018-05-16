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
          value: this.state.movieInput }),
        React.createElement(
          "div",
          { className: "input-group-append" },
          React.createElement(
            "button",
            { className: "btn btn-outline-secondary", onClick: function onClick(e) {
                _this2.props.addMovie(_this2.state.movieInput);
              } },
            "Add"
          )
        )
      );
    }
  }]);

  return MovieAdder;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllQWRkZXIuanN4Il0sIm5hbWVzIjpbIk1vdmllQWRkZXIiLCJwcm9wcyIsInN0YXRlIiwibW92aWVJbnB1dCIsImlucHV0Iiwic2V0U3RhdGUiLCJvbklucHV0Q2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJlIiwiYWRkTW92aWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVk7QUFERCxLQUFiO0FBRmlCO0FBS2xCOzs7O2tDQUVhQyxLLEVBQU87QUFDbkIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pGLG9CQUFZQztBQURBLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFDRSxnQkFBSyxNQURQO0FBRUUsdUJBQVksc0JBRmQ7QUFHRSxvQkFBVSxrQkFBQ0EsS0FBRCxFQUFXO0FBQUMsbUJBQUtFLGFBQUwsQ0FBbUJGLE1BQU1HLE1BQU4sQ0FBYUMsS0FBaEM7QUFBd0MsV0FIaEU7QUFJRSxpQkFBTyxLQUFLTixLQUFMLENBQVdDLFVBSnBCLEdBREY7QUFNRTtBQUFBO0FBQUEsWUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQVEsV0FBVSwyQkFBbEIsRUFBOEMsU0FBUyxpQkFBQ00sQ0FBRCxFQUFPO0FBQUMsdUJBQUtSLEtBQUwsQ0FBV1MsUUFBWCxDQUFvQixPQUFLUixLQUFMLENBQVdDLFVBQS9CO0FBQTRDLGVBQTNHO0FBQUE7QUFBQTtBQURGO0FBTkYsT0FERjtBQVlEOzs7O0VBM0JzQlEsTUFBTUMsUyIsImZpbGUiOiJNb3ZpZUFkZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVBZGRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZUlucHV0OiAnJyxcbiAgICB9O1xuICB9XG5cbiAgb25JbnB1dENoYW5nZShpbnB1dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW92aWVJbnB1dDogaW5wdXQsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIG1vdmllIHRpdGxlIGhlcmVcIiBcbiAgICAgICAgICBvbkNoYW5nZT17KGlucHV0KSA9PiB7dGhpcy5vbklucHV0Q2hhbmdlKGlucHV0LnRhcmdldC52YWx1ZSk7fX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tb3ZpZUlucHV0fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIG9uQ2xpY2s9eyhlKSA9PiB7dGhpcy5wcm9wcy5hZGRNb3ZpZSh0aGlzLnN0YXRlLm1vdmllSW5wdXQpO319PkFkZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0=