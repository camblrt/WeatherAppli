import {Component, OnInit} from "angular2/core";
import {WeatherItemComponent} from "./weather-item.component";
import {WeatherItem} from "./weather-item";
import {WeatherService} from "./weather.service";
import {WEATHER_ITEMS} from "./weather.data"
@Component({
    selector: 'weather-list',
    template: `
 <!--Display of the list of cities with the weather-->
        <section class="weather-list">
            <weather-item *ngFor="#weatherItem of weatherItems" [item]="weatherItem"></weather-item>
        </section>
    `,
    directives: [WeatherItemComponent],
    styleUrls:['css/site.css', 'css/site.min.css', 'css/bootstrap.min.css']
})
export class WeatherListComponent implements OnInit {
  weatherItems : WeatherItem[];

  constructor(private _weatherService: WeatherService){}

  ngOnInit():any {
      this.weatherItems = WEATHER_ITEMS;
  }
}
