"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.state = {
      query: ''
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: "onInputChange",
    value: function onInputChange(query) {
      this.setState({
        query: query
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
          placeholder: "Search...",
          onChange: function onChange(input) {
            _this2.onInputChange(input.target.value);
          },
          value: this.state.term
        }),
        React.createElement(
          "div",
          { className: "input-group-append" },
          React.createElement(
            "button",
            {
              type: "button",
              className: "btn btn-outline-secondary",
              onClick: function onClick(e) {
                _this2.props.handleSearch(_this2.state.query);
              }
            },
            "Go!"
          )
        )
      );
    }
  }]);

  return SearchBar;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJzdGF0ZSIsInF1ZXJ5Iiwic2V0U3RhdGUiLCJpbnB1dCIsIm9uSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRlcm0iLCJlIiwiaGFuZGxlU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBRmlCO0FBS2xCOzs7O2tDQUVhQSxLLEVBQU87QUFDbkIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pELGVBQU9BO0FBREssT0FBZDtBQUdEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUNFLGdCQUFLLE1BRFA7QUFFRSx1QkFBWSxXQUZkO0FBR0Usb0JBQVUsa0JBQUNFLEtBQUQsRUFBVztBQUFDLG1CQUFLQyxhQUFMLENBQW1CRCxNQUFNRSxNQUFOLENBQWFDLEtBQWhDO0FBQXdDLFdBSGhFO0FBSUUsaUJBQU8sS0FBS04sS0FBTCxDQUFXTztBQUpwQixVQURGO0FBT0U7QUFBQTtBQUFBLFlBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLG9CQUFLLFFBRFA7QUFFRSx5QkFBVSwyQkFGWjtBQUdFLHVCQUFTLGlCQUFDQyxDQUFELEVBQU87QUFBQyx1QkFBS1QsS0FBTCxDQUFXVSxZQUFYLENBQXdCLE9BQUtULEtBQUwsQ0FBV0MsS0FBbkM7QUFBMkM7QUFIOUQ7QUFBQTtBQUFBO0FBREY7QUFQRixPQURGO0FBbUJEOzs7O0VBbENxQlMsTUFBTUMsUyIsImZpbGUiOiJTZWFyY2hCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcXVlcnk6ICcnLFxuICAgIH07XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdWVyeTogcXVlcnksXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIFxuICAgICAgICAgIG9uQ2hhbmdlPXsoaW5wdXQpID0+IHt0aGlzLm9uSW5wdXRDaGFuZ2UoaW5wdXQudGFyZ2V0LnZhbHVlKTt9fSBcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXJtfSBcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIFxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHt0aGlzLnByb3BzLmhhbmRsZVNlYXJjaCh0aGlzLnN0YXRlLnF1ZXJ5KTt9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEdvIVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0=