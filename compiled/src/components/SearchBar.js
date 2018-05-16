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
          value: this.state.term }),
        React.createElement(
          "div",
          { className: "input-group-append" },
          React.createElement(
            "button",
            { type: "button", className: "btn btn-outline-secondary", onClick: function onClick(e) {
                _this2.props.handleSearch(_this2.state.query);
              } },
            "Go!"
          )
        )
      );
    }
  }]);

  return SearchBar;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJzdGF0ZSIsInF1ZXJ5Iiwic2V0U3RhdGUiLCJpbnB1dCIsIm9uSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRlcm0iLCJlIiwiaGFuZGxlU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBRmlCO0FBS2xCOzs7O2tDQUVhQSxLLEVBQU87QUFDbkIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pELGVBQU9BO0FBREssT0FBZDtBQUdEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUNFLGdCQUFLLE1BRFA7QUFFRSx1QkFBWSxXQUZkO0FBR0Usb0JBQVUsa0JBQUNFLEtBQUQsRUFBVztBQUFDLG1CQUFLQyxhQUFMLENBQW1CRCxNQUFNRSxNQUFOLENBQWFDLEtBQWhDO0FBQXdDLFdBSGhFO0FBSUUsaUJBQU8sS0FBS04sS0FBTCxDQUFXTyxJQUpwQixHQURGO0FBTUU7QUFBQTtBQUFBLFlBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLDJCQUFoQyxFQUE0RCxTQUFTLGlCQUFDQyxDQUFELEVBQU87QUFBQyx1QkFBS1QsS0FBTCxDQUFXVSxZQUFYLENBQXdCLE9BQUtULEtBQUwsQ0FBV0MsS0FBbkM7QUFBMkMsZUFBeEg7QUFBQTtBQUFBO0FBREY7QUFORixPQURGO0FBWUQ7Ozs7RUEzQnFCUyxNQUFNQyxTIiwiZmlsZSI6IlNlYXJjaEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBxdWVyeTogJycsXG4gICAgfTtcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UocXVlcnkpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgIDxpbnB1dCBcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBcbiAgICAgICAgICBvbkNoYW5nZT17KGlucHV0KSA9PiB7dGhpcy5vbklucHV0Q2hhbmdlKGlucHV0LnRhcmdldC52YWx1ZSk7fX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXJtfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiBvbkNsaWNrPXsoZSkgPT4ge3RoaXMucHJvcHMuaGFuZGxlU2VhcmNoKHRoaXMuc3RhdGUucXVlcnkpO319PkdvITwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0=