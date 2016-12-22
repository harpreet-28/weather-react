var React = require('react');
var Weather = require('Weather')
var WeatherForm = require('WeatherForm')
var WeatherMessage = require('WeatherMessage')
var OpenWeatherMap = require('OpenWeatherMap')

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({
      isLoading: true
    });
    OpenWeatherMap
    .getTemp(location)
    .then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errMessage){
      that.setState({
        location: null,
        temp: null,
        isLoading: false
      })
      alert('Error Occured', errMessage);
    });
  },
  render: function(){
    var {temp, location, isLoading} = this.state;

    function renderMessage(){
      if(isLoading){
        return(
          <h3>
            Temp is Loading...
          </h3>
        );
      }
      else if(temp && location){
        return(
          <WeatherMessage temp={temp} location={location} />
        );
      }
    }

    return(
      <div>
        <h3>
          Weather Component
        </h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
