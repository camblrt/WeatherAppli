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

  getWeatherItems(){ //return the items of the weather
      return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem0:WeatherItem){ // add the items to WEATHER_ITEMS
    WEATHER_ITEMS.push(weatherItem0);
  }

  clearWeatherItems(){ // clear WEATHER_ITEMS
    WEATHER_ITEMS.splice(0);
  }

    changeLanguage(language: Language){ //Change the language of the weather description
      if(language.name == "Francais")
          this.language = "fr";
      else if(language.name== "English")
          this.language = "en";
    }
      getLanguage(){ //return the language's choice
        return this.language;
      }

      changeSystem(system: System){//Change the system of the weather description
        this.system = system.name;
      }

      getSystem(){ //return the system's choice
          return this.system;
        }

      getUnit(){ //Change the units of the display
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

  searchWeatherData(cityName: string, language: string, system: string): Observable<any> { //Receiving the openweathermap API
       return this._http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+
       '&APPID=bd5e378503939ddaee76f12ad7a97608&units='+system+'&cnt=7&lang='+language)
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json())
      });

  }
}
