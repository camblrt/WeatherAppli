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
  <!--Display of the date -->
  <input type="text" id="date0" hidden>
  <input type="text" id="date1" hidden>
  <input type="text" id="date2" hidden>
  <input type="text" id="date3" hidden>
  <input type="text" id="date4" hidden>

  <!--Language's choice thanks radio buttons-->
  <div class="col-md-2 col-md-offset-1">
    <div class="panel panel-danger">
      <div class="panel-heading">Select your language</div>
      <ul class="list-group">
        <form name="myform2" action="">
          <li class="list-group-item">
            <label>
              <input #Francais name="language" type="radio" value="Francais" onclick="Current_Date();" (change)="chooseLang(Francais.value)" />
              Francais
            </label>
          </li>
          <li class="list-group-item">
            <label>
            <input checked #English name="language" type="radio" value="English" onclick="Current_Date();" (change)="chooseLang(English.value)" />
            English
            </label>
          </li>
        </form>
      </ul>
    </div>
  </div>


  <!--System's choice thanks radio buttons-->
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
            <br><br>
        </label>
        </li>
      </ul>
    </div>
  </div>


<!--Display the last city looked for before the refreshment of the page-->
  <div class="col-md-5 col-md-offset-1">
    <br><br>
    <div class="panel panel-danger">
      <ul class="list-group">
        <li class="list-group-item">
          <p>Want to see the weather of your last research ?</p>
          <form (ngSubmit)="onSubmit(f)" #f="ngForm" name="myform1" action="">
            <span class="input-group-btn">
              <button  type="submit" onclick="ReadCookie()" class="btn btn-danger btn-block btn-large">GO !!</button>
            </span>
          </form>
        </li>
      </ul>
    </div>
  </div>

<!--City's choice and display of the last city when the user click on "Go!!"-->
  <div class="col-md-3 col-md-offset-2">
    <div class="panel panel-danger">
      <div class="panel-heading">Select your city</div>
      <ul class="list-group">
        <li class="list-group-item">
        <form (ngSubmit)="onSubmit(f)" #f="ngForm" name="myform1" action="">
          <input ngControl= "location" type="text" name="customer" placeholder="Find your city place" id="city" input="onSearchLocation(this.value)" required #input>
          <span class="input-group-btn">
            <button type="submit" onclick="WriteCookie()" class="btn btn-danger btn-block btn-large">Search</button>
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
  city : string;

  chooseLang(value){ //Send the language's choice towards WeatherService
    let lang= new Language(value);
    this._weatherService.changeLanguage(lang);
    this._weatherService.clearWeatherItems();
  }

  chooseSystem(value){ //Send the language's choice towards WeatherService
    let system= new System(value);
    this._weatherService.changeSystem(system);
    this._weatherService.clearWeatherItems();
  }

  onSearchLocation(cityName: string){//To display several cities
      this.searchStream
          .next(cityName);
  }

  onSubmit(form:ControlGroup){
    //Receiving date and city from index.html
      form.value.location=(<HTMLInputElement>document.getElementById("city")).value;
      var date0 = (<HTMLInputElement>document.getElementById("date0")).value;
      var date1 = (<HTMLInputElement>document.getElementById("date1")).value;
      var date2 = (<HTMLInputElement>document.getElementById("date2")).value;
      var date3 = (<HTMLInputElement>document.getElementById("date3")).value;
      var date4 = (<HTMLInputElement>document.getElementById("date4")).value;

      this.city = form.value.location;

      this._weatherService.clearWeatherItems(); //clear previous weather items

      this._weatherService.searchWeatherData(form.value.location, this._weatherService.getLanguage(), this._weatherService.getSystem()) //Sending the cityname, the language and the system
                          .subscribe(
                                    data =>{//Receiving the data for the description, the temperature, the icon from the openweathermap API
                                                const weatherItem= new WeatherItem(this._weatherService.getUnit(), data.city.name,
                                                 data.list[0].weather[0].description, data.list[0].temp.max, data.list[0].temp.min, data.list[0].weather[0].icon, date0,
                                                 data.list[1].weather[0].description, data.list[1].temp.max, data.list[1].temp.min, data.list[1].weather[0].icon, date1,
                                                 data.list[2].weather[0].description, data.list[2].temp.max, data.list[2].temp.min, data.list[2].weather[0].icon, date2,
                                                 data.list[3].weather[0].description, data.list[3].temp.max, data.list[3].temp.min, data.list[3].weather[0].icon, date3,
                                                 data.list[4].weather[0].description, data.list[4].temp.max, data.list[4].temp.min, data.list[4].weather[0].icon, date4);
                                                this._weatherService.addWeatherItem(weatherItem); // Adding these data in cities
                                                console.log(weatherItem);
                                              }
                                  );

    }
}
