var React = require('react');
var Nav = require('Nav');
/*
var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
});
*/
var Main = React.createClass({

  render: function () {
    const marginTop = {
      marginTop: "1rem"
    };
    const bordeStyle = {
      border: "2px solid #466d98"
    };
    return (
      <div>
        <Nav/>
        <div style={marginTop}></div>
        <div className="row" style={bordeStyle}>
          <div className="medium-6 large-4 small-centered columns">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
