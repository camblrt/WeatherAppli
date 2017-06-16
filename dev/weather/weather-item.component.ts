import {Component, Input} from 'angular2/core';
import {WeatherItem} from "./weather-item"
@Component({
    selector: 'weather-item',
    template: `
    <!--Weather of the day and the next four days-->
    <div class="col-md-8 col-md-offset-2" >
      <div class="panel panel-danger">
      <!--Display of the city-->
      <div class="panel-heading" align="center"><h3> {{weatherItem.cityName}} </h3></div>
      <ul class="list-group">
      <!--Today-->
        <li class="list-group-item">
          <div align="center">
            <h3>{{weatherItem.date0}}</h3>
            <div class="temp">Max : {{weatherItem.max0}}°{{weatherItem.unit}}<span class="icon-brightness-half"></span></div>
            <div class="temp">Min : {{weatherItem.min0}}°{{weatherItem.unit}}<span class="icon-brightness-half"></span></div>
            <div class="temp">{{weatherItem.description0}}</div>
            <img src="http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{{weatherItem.icon0}}.png" width="100">
            </div>
        </li>
        <li class="list-group-item">
          <div align="center">
            <ul id="myTab1" class="nav nav-tabs nav-justified">
            <!--Tomorrow-->
              <li class="active"><a data-toggle="tab">
                <h5>{{weatherItem.date1}}</h5>
                <div>Max : {{weatherItem.max1}}°{{weatherItem.unit}}<span class="icon-brightness-half"></span></div>
                <div>Min : {{weatherItem.min1}}°{{weatherItem.unit}}<span class="icon-brightness-half"></span></div>
                <div>{{weatherItem.description1}}</div>
                <img src="http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{{weatherItem.icon1}}.png" width="100">
              </a></li>
              <!--In two days-->
              <li class="active"><a data-toggle="tab">
                <h5>{{weatherItem.date2}}</h5>
                <div>Max : {{weatherItem.max2}}°{{weatherItem.unit}}<span class="icon-brightness-half"></span></div>
                <div>Min : {{weatherItem.min2}}°{{weatherItem.unit}}<span class="icon-brightness-half"></span></div>
                <div>{{weatherItem.description2}}</div>
                <img src="http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{{weatherItem.icon2}}.png" width="100">
              </a></li>
              <!--In three days-->
              <li class="active"><a data-toggle="tab">
                <h5>{{weatherItem.date3}}</h5>
                <div>Max : {{weatherItem.max3}}°{{weatherItem.unit}}<span class="icon-brightness-half"></span></div>
                <div>Min : {{weatherItem.min3}}°{{weatherItem.unit}}<span class="icon-brightness-half"></span></div>
                <div>{{weatherItem.description3}}</div>
                <img src="http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{{weatherItem.icon3}}.png" width="100">
              </a></li>
              <!--In four days-->
              <li class="active"><a data-toggle="tab">
                <h5>{{weatherItem.date4}}</h5>
                <div>Max : {{weatherItem.max4}}°{{weatherItem.unit}}<span class="icon-brightness-half"></span></div>
                <div>Min : {{weatherItem.min4}}°{{weatherItem.unit}}<span class="icon-brightness-half"></span></div>
                <div>{{weatherItem.description4}}</div>
                <img src="http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{{weatherItem.icon4}}.png" width="100">
              </a></li>
            </ul>
          </div>
        </li>
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
