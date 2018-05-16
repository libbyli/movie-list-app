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
        { className: "search-bar" },
        React.createElement("input", {
          type: "text",
          placeholder: "Search...",
          onChange: function onChange(input) {
            _this2.onInputChange(input.target.value);
          },
          value: this.state.term }),
        React.createElement(
          "button",
          { className: "btn search", onClick: function onClick(e) {
              _this2.props.handleSearch(_this2.state.query);
            } },
          "Go!"
        )
      );
    }
  }]);

  return SearchBar;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJzdGF0ZSIsInF1ZXJ5Iiwic2V0U3RhdGUiLCJpbnB1dCIsIm9uSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRlcm0iLCJlIiwiaGFuZGxlU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBRmlCO0FBS2xCOzs7O2tDQUVhQSxLLEVBQU87QUFDbkIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pELGVBQU9BO0FBREssT0FBZDtBQUdEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNFO0FBQ0UsZ0JBQUssTUFEUDtBQUVFLHVCQUFZLFdBRmQ7QUFHRSxvQkFBVSxrQkFBQ0UsS0FBRCxFQUFXO0FBQUMsbUJBQUtDLGFBQUwsQ0FBbUJELE1BQU1FLE1BQU4sQ0FBYUMsS0FBaEM7QUFBd0MsV0FIaEU7QUFJRSxpQkFBTyxLQUFLTixLQUFMLENBQVdPLElBSnBCLEdBREY7QUFNRTtBQUFBO0FBQUEsWUFBUSxXQUFVLFlBQWxCLEVBQStCLFNBQVMsaUJBQUNDLENBQUQsRUFBTztBQUFDLHFCQUFLVCxLQUFMLENBQVdVLFlBQVgsQ0FBd0IsT0FBS1QsS0FBTCxDQUFXQyxLQUFuQztBQUEyQyxhQUEzRjtBQUFBO0FBQUE7QUFORixPQURGO0FBVUQ7Ozs7RUF6QnFCUyxNQUFNQyxTIiwiZmlsZSI6IlNlYXJjaEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBxdWVyeTogJycsXG4gICAgfTtcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UocXVlcnkpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCI+XG4gICAgICAgIDxpbnB1dCBcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBcbiAgICAgICAgICBvbkNoYW5nZT17KGlucHV0KSA9PiB7dGhpcy5vbklucHV0Q2hhbmdlKGlucHV0LnRhcmdldC52YWx1ZSk7fX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXJtfSAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBzZWFyY2hcIiBvbkNsaWNrPXsoZSkgPT4ge3RoaXMucHJvcHMuaGFuZGxlU2VhcmNoKHRoaXMuc3RhdGUucXVlcnkpO319PkdvITwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==