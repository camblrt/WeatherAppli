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
    <div class="col-md-3 col-md-offset-1">
        <section class="box widget locations">
          <div class="jumbotron-photo"><img src="img/Jumbotron.jpg" /></div>
          <div class="jumbotron-contents">
            <h2> Saved Profiles </h2>
            <button (click)="onSaveNew()" class="btn btn-danger btn-block btn-large">Save List to Profile</button>
            <article class="profile" *ngFor="#profile of profiles" (click)="onLoadProfile(profile)">
              <h2>{{profile.profileName}}</h2>
              <p>Cities : {{profile.cities.join(', ')}}</p>
              <span class = "delete" (click)="onDeleteProfile($event, profile)">X</span>
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


  onSaveNew(){
    const cities = this._weatherService.getWeatherItems().map(function(element:
    WeatherItem){
      return element.cityName;
    });
    this._profileService.saveNewProfile(cities);
  }

  onLoadProfile(profile: Profile){

    this._weatherService.clearWeatherItems();
    for( let i = 0; i<profile.cities.length; i++){
      this._weatherService.searchWeatherData(profile.cities[i], this._weatherService.getLanguage(), this._weatherService.getSystem())
        .retry()
        .subscribe(
          data => {
              const weatherItem0 = new WeatherItem(this._weatherService.getUnit(), data.city.name,
              data.list[0].weather[0].description,  data.list[0].temp.day, data.list[0].weather[0].icon,
              data.list[1].weather[0].description, data.list[1].temp.day, data.list[1].weather[0].icon,
              data.list[2].weather[0].description,data.list[2].temp.day, data.list[2].weather[0].icon,
              data.list[3].weather[0].description, data.list[3].temp.day, data.list[3].weather[0].icon,
              data.list[4].weather[0].description, data.list[4].temp.day, data.list[4].weather[0].icon);
            this._weatherService.addWeatherItem(weatherItem0);


            console.log(weatherItem0);

        }

      );
    }
  }

onDeleteProfile(event: Event, profile: Profile){
  event.stopPropagation();
  this._profileService.deleteProfile(profile);
}
  ngOnInit(){
    this.profiles=this._profileService.getProfiles();
  }
}
