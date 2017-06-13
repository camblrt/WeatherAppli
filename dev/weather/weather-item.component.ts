import {Component, Input} from 'angular2/core';
import {WeatherItem} from "./weather-item"
@Component({
    selector: 'weather-item',
    template: `
  <div class="col-sm-4 col-md-offset-1">
    <div class="panel panel-danger">
      <div class="panel-heading">{{weatherItem.cityName}}</div>
        <ul class="list-group">
          <div class="col-md-offset-1">
            <ul class="calendar">
              <li class="calendar__item">
                <div class="temp">{{weatherItem.temperature0}}°{{weatherItem.unit}}<span class="icon-brightness-half"></span></div>
                <div class="temp">{{weatherItem.description0}}</div>
                <img src="http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{{weatherItem.icon0}}.png" width="100">
              </li>
              <li class="calendar__item">
                <div class="temp">{{weatherItem.temperature1}}°{{weatherItem.unit}}<span class="icon-brightness-half"></span></div>
                <div class="temp">{{weatherItem.description1}}</div>
                <img src="http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{{weatherItem.icon1}}.png" width="100">
              </li>
              <li class="calendar__item">
                <div class="temp">{{weatherItem.temperature2}}°{{weatherItem.unit}}<span class="icon-brightness-half"></span></div>
                <div class="temp">{{weatherItem.description2}}</div>
                <img src="http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{{weatherItem.icon2}}.png" width="100">
              </li>
              <li class="calendar__item">
                <div class="temp">{{weatherItem.temperature3}}°{{weatherItem.unit}}<span class="icon-brightness-half"></span></div>
                <div class="temp">{{weatherItem.description3}}</div>
                <img src="http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{{weatherItem.icon3}}.png" width="100">
              </li>
              <li class="calendar__item">
                <div class="temp">{{weatherItem.temperature4}}°{{weatherItem.unit}}<span class="icon-brightness-half"></span></div>
                <div class="temp">{{weatherItem.description4}}</div>
                <img src="http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{{weatherItem.icon4}}.png" width="100">
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
    `,
    styleUrls:['css/site.css', 'css/site.min.css', 'css/bootstrap.min.css', 'css/weather-widgets-constructor_fds67fds64s10.min.css',
     'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', 'https://fonts.googleapis.com/css?family=Roboto:100,400,700,500,400italic,500italic,700italic',
   'https://fonts.googleapis.com/css?family=Oswald:100,400,700,300'],
    // inputs : ['weatherItem: item']
})
export class WeatherItemComponent {

    @Input('item') weatherItem: WeatherItem;

}
