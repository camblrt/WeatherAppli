import {Component, OnInit} from "angular2/core";
import {ControlGroup} from "angular2/common";
import {WeatherService} from "./weather.service";
import {WeatherItem} from "./weather-item";
import {Subject} from "rxjs/Subject";
import {Language} from "./../language"
import {System} from "./../system"
@Component ({
  selector : 'weather-search',
  template: `

  <div class="col-md-2 col-md-offset-1">
    <div class="panel panel-danger">
      <div class="panel-heading">Select your language</div>
      <ul class="list-group">
        <li class="list-group-item">
        <label>
            <input #Francais name="language" type="radio" value="Francais" (change)="chooseLang(Francais.value)" />
            Francais
        </label>
        </li>
        <li class="list-group-item">
        <label>
            <input checked #English name="language" type="radio"  value="English" (click)="chooseLang(English.value)" />
            English
        </label>
        </li>
      </ul>
    </div>
  </div>



  <div class="col-md-2 col-md-offset-1">
    <div class="panel panel-danger">
      <div class="panel-heading">Select your unit</div>
      <ul class="list-group">
        <li class="list-group-item">
        <label>
            <input checked #metric name="system" type="radio" value="metric" (change)="chooseSystem(metric.value)" />
            Metric (°C)
        </label>
        </li>
        <li class="list-group-item">
        <label>
            <input #imperial name="system" type="radio"  value="imperial" (click)="chooseSystem(imperial.value)" />
            Imperial (°F)
        </label>
        </li>
      </ul>
    </div>
  </div>

  <br><br>

  <div class="col-md-3 col-md-offset-2">
    <div class="panel panel-danger">
      <ul class="list-group">
        <li class="list-group-item">
          <p>Want to see the weather of your last research ?</p>
          <span class="input-group-btn">
            <button  type="submit" onclick="ReadCookie()" class="btn btn-danger btn-block btn-large">GO !!</button>
          </span>
        </li>
      </ul>
    </div>
  </div>

  <div class="col-md-3 col-md-offset-2">
    <div class="panel panel-danger">
      <div class="panel-heading">Select your city</div>
      <ul class="list-group">
        <li class="list-group-item">
        <form (ngSubmit)="onSubmit(f)" #f="ngForm" name="myform1" action="">
          <input ngControl= "location" type="text" name="customer" placeholder="Find your city place" id="city" input="onSearchLocation(this.value)" required #input>
          <span class="input-group-btn">
            <button type="submit" onclick="WriteCookie()" class="btn btn-danger btn-block btn-large" onclick="WriteCookie();">Search</button>
          </span>
        </form>
        </li>
      </ul>
    </div>
  </div>

  `,
  styleUrls:['css/site.css', 'css/site.min.css', 'css/bootstrap.min.css', 'css/style.css']
})
export class WeatherSearchComponent
{
  private searchStream = new Subject<string>();
  data: any = {};
  constructor(private _weatherService: WeatherService){}


  chooseLang(value){
    let lang= new Language(value);
    this._weatherService.changeLanguage(lang);
    console.log(lang);
  }

  chooseSystem(value){
    let system= new System(value);
    this._weatherService.changeSystem(system);
    console.log(system);

  }

  onSearchLocation(cityName: string){
      this.searchStream
          .next(cityName);
  }

  onSubmit(form:ControlGroup){

    form.value.location=(<HTMLInputElement>document.getElementById("city")).value;

    console.log(form.value.location);
    this._weatherService.searchWeatherData(form.value.location, this._weatherService.getLanguage(), this._weatherService.getSystem())
                        .subscribe(
                                  data =>{
                                              const weatherItem= new WeatherItem(this._weatherService.getUnit(), data.city.name,
                                               data.list[0].weather[0].description, data.list[0].temp.day, data.list[0].weather[0].icon,
                                               data.list[1].weather[0].description, data.list[1].temp.day, data.list[1].weather[0].icon,
                                               data.list[2].weather[0].description, data.list[2].temp.day, data.list[2].weather[0].icon,
                                               data.list[3].weather[0].description, data.list[3].temp.day, data.list[3].weather[0].icon,
                                               data.list[4].weather[0].description, data.list[4].temp.day, data.list[4].weather[0].icon);
                                              this._weatherService.addWeatherItem(weatherItem);

                                            }
                                );
  }
}
