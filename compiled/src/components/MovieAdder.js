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
        { className: "movie-input" },
        React.createElement("input", {
          type: "text",
          placeholder: "Add movie title here",
          onChange: function onChange(input) {
            _this2.onInputChange(input.target.value);
          },
          value: this.state.movieInput }),
        React.createElement(
          "button",
          { className: "btn add-movie", onClick: function onClick(e) {
              _this2.props.addMovie(_this2.state.movieInput);
            } },
          "Add"
        )
      );
    }
  }]);

  return MovieAdder;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllQWRkZXIuanN4Il0sIm5hbWVzIjpbIk1vdmllQWRkZXIiLCJwcm9wcyIsInN0YXRlIiwibW92aWVJbnB1dCIsImlucHV0Iiwic2V0U3RhdGUiLCJvbklucHV0Q2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJlIiwiYWRkTW92aWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVk7QUFERCxLQUFiO0FBRmlCO0FBS2xCOzs7O2tDQUVhQyxLLEVBQU87QUFDbkIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pGLG9CQUFZQztBQURBLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGFBQWY7QUFDRTtBQUNFLGdCQUFLLE1BRFA7QUFFRSx1QkFBWSxzQkFGZDtBQUdFLG9CQUFVLGtCQUFDQSxLQUFELEVBQVc7QUFBQyxtQkFBS0UsYUFBTCxDQUFtQkYsTUFBTUcsTUFBTixDQUFhQyxLQUFoQztBQUF3QyxXQUhoRTtBQUlFLGlCQUFPLEtBQUtOLEtBQUwsQ0FBV0MsVUFKcEIsR0FERjtBQU1FO0FBQUE7QUFBQSxZQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxpQkFBQ00sQ0FBRCxFQUFPO0FBQUMscUJBQUtSLEtBQUwsQ0FBV1MsUUFBWCxDQUFvQixPQUFLUixLQUFMLENBQVdDLFVBQS9CO0FBQTRDLGFBQS9GO0FBQUE7QUFBQTtBQU5GLE9BREY7QUFVRDs7OztFQXpCc0JRLE1BQU1DLFMiLCJmaWxlIjoiTW92aWVBZGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllQWRkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVJbnB1dDogJycsXG4gICAgfTtcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UoaW5wdXQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdmllSW5wdXQ6IGlucHV0LFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWlucHV0XCI+XG4gICAgICAgIDxpbnB1dCBcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgbW92aWUgdGl0bGUgaGVyZVwiIFxuICAgICAgICAgIG9uQ2hhbmdlPXsoaW5wdXQpID0+IHt0aGlzLm9uSW5wdXRDaGFuZ2UoaW5wdXQudGFyZ2V0LnZhbHVlKTt9fVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1vdmllSW5wdXR9IC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGFkZC1tb3ZpZVwiIG9uQ2xpY2s9eyhlKSA9PiB7dGhpcy5wcm9wcy5hZGRNb3ZpZSh0aGlzLnN0YXRlLm1vdmllSW5wdXQpO319PkFkZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==