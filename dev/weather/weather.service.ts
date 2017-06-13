import {Injectable} from "angular2/core";
import {WEATHER_ITEMS} from "./weather.data";
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import 'rxjs/Rx';
import {WeatherItem} from "./weather-item";
import {Language} from "./../language"
import {System} from "./../system"
@Injectable()
export class WeatherService
{

    language = 'en';
    system = 'metric';
    unit = this.getUnit();
    country :string;
  constructor(private _http: Http){}

  getWeatherItems(){
      return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem0:WeatherItem){
    WEATHER_ITEMS.push(weatherItem0);
  }

  clearWeatherItems(){
    WEATHER_ITEMS.splice(0);
  }

    changeLanguage(language: Language){
      if(language.name == "Francais")
          this.language = "fr";
      else if(language.name== "English")
          this.language = "en";
    }
      getLanguage(){
        return this.language;
      }

      changeSystem(system: System){
        this.system = system.name;
      }

      getSystem(){
          return this.system;
        }

      getUnit(){
        if(this.system == "metric")
        {
          this.unit = "C";
          return this.unit;
        }
        else if(this.system == "imperial"){
          this.unit = "F";
          return this.unit;
        }
        console.log(this.unit);
      }

  searchWeatherData(cityName: string, language: string, system: string): Observable<any> {
       return this._http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+
       '&APPID=bd5e378503939ddaee76f12ad7a97608&units='+system+'&cnt=7&lang='+language)
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json())
      });

  }
}
