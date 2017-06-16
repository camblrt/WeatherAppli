import {Component, OnInit} from "angular2/core";
import {Profile} from "./profile.ts"
import {ProfileService} from "./profile.service"
import {WeatherService} from "./weather/weather.service"
import {WeatherItem} from "./weather/weather-item"
import {AppComponent} from "./app.component"
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Component({
    selector: 'my-sidebar',
    template:`
    <!--Display of the date -->
    <input type="text" id="date0" hidden>
    <input type="text" id="date1" hidden>
    <input type="text" id="date2" hidden>
    <input type="text" id="date3" hidden>
    <input type="text" id="date4" hidden>

    <!--Display of the profile window with the default cities-->
    <div class="col-md-3 col-md-offset-1">
      <section class="box widget locations">
        <div class="jumbotron-photo"><img src="img/Jumbotron.jpg" /></div>
          <div class="jumbotron-contents">
            <article class="profile" *ngFor="#profile of profiles" (click)="onLoadProfile(profile)">
                <div class="panel panel-danger">
                  <div class="panel-heading"><h2>{{profile.profileName}}</h2></div>
                  </div>
                  <button type="button" class="btn btn-default btn-block"><h4>Cities : {{profile.cities.join(', ')}}</h4></button>
                    <button class = "delete" (click)="onDeleteProfile($event, profile)">X</button>

            </article>
          </div>
        </section>
      </div>
    `,
    styleUrls:['css/site.css', 'css/site.min.css', 'css/bootstrap.min.css'],
    providers: [ProfileService]
  })

export class SidebarComponent implements OnInit{

  profiles: Profile[];

  constructor(private _profileService: ProfileService,
              private _weatherService: WeatherService){}


  onLoadProfile(profile: Profile){
//Receiving the dates
    var date0 = (<HTMLInputElement>document.getElementById("date0")).value;
    var date1 = (<HTMLInputElement>document.getElementById("date1")).value;
    var date2 = (<HTMLInputElement>document.getElementById("date2")).value;
    var date3 = (<HTMLInputElement>document.getElementById("date3")).value;
    var date4 = (<HTMLInputElement>document.getElementById("date4")).value;

    this._weatherService.clearWeatherItems();
    for( let i = 0; i<profile.cities.length; i++){
      this._weatherService.searchWeatherData(profile.cities[i], this._weatherService.getLanguage(), this._weatherService.getSystem())
        .retry()
        .subscribe(
          data => {//Receiving the data from openweathermap API
              const weatherItem0 = new WeatherItem(this._weatherService.getUnit(), data.city.name,
              data.list[0].weather[0].description,  data.list[0].temp.max, data.list[0].temp.min, data.list[0].weather[0].icon, date0,
              data.list[1].weather[0].description, data.list[1].temp.max, data.list[1].temp.min, data.list[1].weather[0].icon, date1,
              data.list[2].weather[0].description,data.list[2].temp.max, data.list[2].temp.min, data.list[2].weather[0].icon, date2,
              data.list[3].weather[0].description, data.list[3].temp.max, data.list[3].temp.min, data.list[3].weather[0].icon, date3,
              data.list[4].weather[0].description, data.list[4].temp.max, data.list[4].temp.min, data.list[4].weather[0].icon, date4);
            this._weatherService.addWeatherItem(weatherItem0);


            console.log(weatherItem0);

        }

      );
    }
  }

onDeleteProfile(event: Event, profile: Profile){//Delete the profile
  event.stopPropagation();
  this._profileService.deleteProfile(profile);
}
  ngOnInit(){
    this.profiles=this._profileService.getProfiles();
  }
}
