import {Component} from 'angular2/core';
import {WeatherListComponent} from "./weather/weather-list.component";
import {WeatherSearchComponent} from "./weather/weather-search.component";
import {SidebarComponent} from "./sidebar.component"
import {Language} from "./language"
@Component({
    selector: 'my-app',
    template: `
    <div class="row">
        <header>
            <h1>Weather Forecast Web Application</h1>
        </header>
      </div>
      <div class="row"><h1></h1></div>
      <div class="row">
        <my-sidebar></my-sidebar>
        <weather-search></weather-search>
      </div>
      <div class="row">
        <weather-list></weather-list>
      </div>
    `,
    directives: [WeatherListComponent,WeatherSearchComponent, SidebarComponent],
    styleUrls:['css/site.css', 'css/site.min.css', 'css/bootstrap.min.css']
})
export class AppComponent {

}
