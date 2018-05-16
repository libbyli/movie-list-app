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
          { className: "btn btn-default", onClick: function onClick(e) {
              _this2.props.handleSearch(_this2.state.query);
            } },
          "Go!"
        )
      );
    }
  }]);

  return SearchBar;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJzdGF0ZSIsInF1ZXJ5Iiwic2V0U3RhdGUiLCJpbnB1dCIsIm9uSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRlcm0iLCJlIiwiaGFuZGxlU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBRmlCO0FBS2xCOzs7O2tDQUVhQSxLLEVBQU87QUFDbkIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pELGVBQU9BO0FBREssT0FBZDtBQUdEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNFO0FBQ0UsZ0JBQUssTUFEUDtBQUVFLHVCQUFZLFdBRmQ7QUFHRSxvQkFBVSxrQkFBQ0UsS0FBRCxFQUFXO0FBQUMsbUJBQUtDLGFBQUwsQ0FBbUJELE1BQU1FLE1BQU4sQ0FBYUMsS0FBaEM7QUFBd0MsV0FIaEU7QUFJRSxpQkFBTyxLQUFLTixLQUFMLENBQVdPLElBSnBCLEdBREY7QUFNRTtBQUFBO0FBQUEsWUFBUSxXQUFVLGlCQUFsQixFQUFvQyxTQUFTLGlCQUFDQyxDQUFELEVBQU87QUFBQyxxQkFBS1QsS0FBTCxDQUFXVSxZQUFYLENBQXdCLE9BQUtULEtBQUwsQ0FBV0MsS0FBbkM7QUFBMkMsYUFBaEc7QUFBQTtBQUFBO0FBTkYsT0FERjtBQVVEOzs7O0VBekJxQlMsTUFBTUMsUyIsImZpbGUiOiJTZWFyY2hCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcXVlcnk6ICcnLFxuICAgIH07XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdWVyeTogcXVlcnksXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhclwiPlxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgXG4gICAgICAgICAgb25DaGFuZ2U9eyhpbnB1dCkgPT4ge3RoaXMub25JbnB1dENoYW5nZShpbnB1dC50YXJnZXQudmFsdWUpO319XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGVybX0gLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXsoZSkgPT4ge3RoaXMucHJvcHMuaGFuZGxlU2VhcmNoKHRoaXMuc3RhdGUucXVlcnkpO319PkdvITwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==