var axios = require('axios')
var APIKey = '666895941742aa85eaa793a69b43acbd';

const OpenWeatherMapURL = `http://api.openweathermap.org/data/2.5/weather?&appid=${APIKey}&units=metric`;
module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OpenWeatherMapURL}&q=${encodedLocation}`;
    debugger;
    return axios
      .get(requestURL)
      .then(function (res){
        console.log(res);
        if(res.data.cod && res.data.message){
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      }, function(rej){
        throw new Error(rej.data.message);
      });
  }
}
