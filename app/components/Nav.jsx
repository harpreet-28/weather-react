var React = require('react');
var { Link, IndexLink } = require('react-router');
var Button = require('Button');

var Nav = React.createClass({
  onSearch: function (evt) {
    evt.preventDefault();
    debugger;
    // console.log('Not yet fully developed');
    var city = this.refs.navBarInput.value;
    console.log(city);
    var encodedCity = encodeURIComponent(city);
    if (city.length > 0) {
      this.refs.navBarInput.value = '';
      window.location.hash = '#/?location=' + encodedCity;
    }
  },
  render: function () {
    const activeStyle = {
      fontWeight: "bold"
    };
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Weather App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={activeStyle}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={activeStyle}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={activeStyle}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="navBarInput" placeholder="Search Weather" />
              </li>
              <li>
                <Button onClick={this.onSearch}>Fetch Weather</Button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
