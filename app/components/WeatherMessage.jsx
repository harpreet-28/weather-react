var React = require('react');
var ClassNames = require('ClassNames');

var WeatherMessage = React.createClass({
  render: function () {
    var { location, temp } = this.props;
    return (
      <div>
        <h3 className="text-center">It's {temp} &deg;C in {location}</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;
