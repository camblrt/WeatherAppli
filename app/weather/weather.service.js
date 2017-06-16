System.register(["angular2/core", "./weather.data", "rxjs/Observable", "angular2/http", 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, weather_data_1, Observable_1, http_1;
    var WeatherService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_data_1_1) {
                weather_data_1 = weather_data_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            WeatherService = (function () {
                function WeatherService(_http) {
                    this._http = _http;
                    this.language = 'en';
                    this.system = 'metric';
                    this.unit = this.getUnit();
                }
                WeatherService.prototype.getWeatherItems = function () {
                    return weather_data_1.WEATHER_ITEMS;
                };
                WeatherService.prototype.addWeatherItem = function (weatherItem0) {
                    weather_data_1.WEATHER_ITEMS.push(weatherItem0);
                };
                WeatherService.prototype.clearWeatherItems = function () {
                    weather_data_1.WEATHER_ITEMS.splice(0);
                };
                WeatherService.prototype.changeLanguage = function (language) {
                    if (language.name == "Francais")
                        this.language = "fr";
                    else if (language.name == "English")
                        this.language = "en";
                };
                WeatherService.prototype.getLanguage = function () {
                    return this.language;
                };
                WeatherService.prototype.changeSystem = function (system) {
                    this.system = system.name;
                };
                WeatherService.prototype.getSystem = function () {
                    return this.system;
                };
                WeatherService.prototype.getUnit = function () {
                    if (this.system == "metric") {
                        this.unit = "C";
                        return this.unit;
                    }
                    else if (this.system == "imperial") {
                        this.unit = "F";
                        return this.unit;
                    }
                    console.log(this.unit);
                };
                WeatherService.prototype.searchWeatherData = function (cityName, language, system) {
                    return this._http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName +
                        '&APPID=bd5e378503939ddaee76f12ad7a97608&units=' + system + '&cnt=7&lang=' + language)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) {
                        console.error(error);
                        return Observable_1.Observable.throw(error.json());
                    });
                };
                WeatherService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WeatherService);
                return WeatherService;
            }());
            exports_1("WeatherService", WeatherService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQVFFLHdCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBTDdCLGFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ2hCLFdBQU0sR0FBRyxRQUFRLENBQUM7b0JBQ2xCLFNBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBR1MsQ0FBQztnQkFFbEMsd0NBQWUsR0FBZjtvQkFDSSxNQUFNLENBQUMsNEJBQWEsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCx1Q0FBYyxHQUFkLFVBQWUsWUFBd0I7b0JBQ3JDLDRCQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELDBDQUFpQixHQUFqQjtvQkFDRSw0QkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFFQyx1Q0FBYyxHQUFkLFVBQWUsUUFBa0I7b0JBQy9CLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDO3dCQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUcsU0FBUyxDQUFDO3dCQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDM0IsQ0FBQztnQkFDQyxvQ0FBVyxHQUFYO29CQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELHFDQUFZLEdBQVosVUFBYSxNQUFjO29CQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsa0NBQVMsR0FBVDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDckIsQ0FBQztnQkFFSCxnQ0FBTyxHQUFQO29CQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLENBQzNCLENBQUM7d0JBQ0MsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7d0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNuQixDQUFDO29CQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFBLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO3dCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDbkIsQ0FBQztvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFTCwwQ0FBaUIsR0FBakIsVUFBa0IsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLE1BQWM7b0JBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsR0FBQyxRQUFRO3dCQUN6RixnREFBZ0QsR0FBQyxNQUFNLEdBQUMsY0FBYyxHQUFDLFFBQVEsQ0FBQzt5QkFDaEYsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLFVBQUEsS0FBSzt3QkFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNyQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7b0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO2dCQUVQLENBQUM7Z0JBL0RIO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQWdFYixxQkFBQztZQUFELENBL0RBLEFBK0RDLElBQUE7WUEvREQsMkNBK0RDLENBQUEiLCJmaWxlIjoid2VhdGhlci93ZWF0aGVyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7V0VBVEhFUl9JVEVNU30gZnJvbSBcIi4vd2VhdGhlci5kYXRhXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7V2VhdGhlckl0ZW19IGZyb20gXCIuL3dlYXRoZXItaXRlbVwiO1xyXG5pbXBvcnQge0xhbmd1YWdlfSBmcm9tIFwiLi8uLi9sYW5ndWFnZVwiXHJcbmltcG9ydCB7U3lzdGVtfSBmcm9tIFwiLi8uLi9zeXN0ZW1cIlxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyU2VydmljZVxyXG57XHJcblxyXG4gICAgbGFuZ3VhZ2UgPSAnZW4nO1xyXG4gICAgc3lzdGVtID0gJ21ldHJpYyc7XHJcbiAgICB1bml0ID0gdGhpcy5nZXRVbml0KCk7XHJcbiAgICBjb3VudHJ5IDpzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApe31cclxuXHJcbiAgZ2V0V2VhdGhlckl0ZW1zKCl7IC8vcmV0dXJuIHRoZSBpdGVtcyBvZiB0aGUgd2VhdGhlclxyXG4gICAgICByZXR1cm4gV0VBVEhFUl9JVEVNUztcclxuICB9XHJcblxyXG4gIGFkZFdlYXRoZXJJdGVtKHdlYXRoZXJJdGVtMDpXZWF0aGVySXRlbSl7IC8vIGFkZCB0aGUgaXRlbXMgdG8gV0VBVEhFUl9JVEVNU1xyXG4gICAgV0VBVEhFUl9JVEVNUy5wdXNoKHdlYXRoZXJJdGVtMCk7XHJcbiAgfVxyXG5cclxuICBjbGVhcldlYXRoZXJJdGVtcygpeyAvLyBjbGVhciBXRUFUSEVSX0lURU1TXHJcbiAgICBXRUFUSEVSX0lURU1TLnNwbGljZSgwKTtcclxuICB9XHJcblxyXG4gICAgY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2U6IExhbmd1YWdlKXsgLy9DaGFuZ2UgdGhlIGxhbmd1YWdlIG9mIHRoZSB3ZWF0aGVyIGRlc2NyaXB0aW9uXHJcbiAgICAgIGlmKGxhbmd1YWdlLm5hbWUgPT0gXCJGcmFuY2Fpc1wiKVxyXG4gICAgICAgICAgdGhpcy5sYW5ndWFnZSA9IFwiZnJcIjtcclxuICAgICAgZWxzZSBpZihsYW5ndWFnZS5uYW1lPT0gXCJFbmdsaXNoXCIpXHJcbiAgICAgICAgICB0aGlzLmxhbmd1YWdlID0gXCJlblwiO1xyXG4gICAgfVxyXG4gICAgICBnZXRMYW5ndWFnZSgpeyAvL3JldHVybiB0aGUgbGFuZ3VhZ2UncyBjaG9pY2VcclxuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2hhbmdlU3lzdGVtKHN5c3RlbTogU3lzdGVtKXsvL0NoYW5nZSB0aGUgc3lzdGVtIG9mIHRoZSB3ZWF0aGVyIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGhpcy5zeXN0ZW0gPSBzeXN0ZW0ubmFtZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ2V0U3lzdGVtKCl7IC8vcmV0dXJuIHRoZSBzeXN0ZW0ncyBjaG9pY2VcclxuICAgICAgICAgIHJldHVybiB0aGlzLnN5c3RlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICBnZXRVbml0KCl7IC8vQ2hhbmdlIHRoZSB1bml0cyBvZiB0aGUgZGlzcGxheVxyXG4gICAgICAgIGlmKHRoaXMuc3lzdGVtID09IFwibWV0cmljXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy51bml0ID0gXCJDXCI7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy51bml0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuc3lzdGVtID09IFwiaW1wZXJpYWxcIil7XHJcbiAgICAgICAgICB0aGlzLnVuaXQgPSBcIkZcIjtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnVuaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudW5pdCk7XHJcbiAgICAgIH1cclxuXHJcbiAgc2VhcmNoV2VhdGhlckRhdGEoY2l0eU5hbWU6IHN0cmluZywgbGFuZ3VhZ2U6IHN0cmluZywgc3lzdGVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4geyAvL1JlY2VpdmluZyB0aGUgb3BlbndlYXRoZXJtYXAgQVBJXHJcbiAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0L2RhaWx5P3E9JytjaXR5TmFtZStcclxuICAgICAgICcmQVBQSUQ9YmQ1ZTM3ODUwMzkzOWRkYWVlNzZmMTJhZDdhOTc2MDgmdW5pdHM9JytzeXN0ZW0rJyZjbnQ9NyZsYW5nPScrbGFuZ3VhZ2UpXHJcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSlcclxuICAgICAgfSk7XHJcblxyXG4gIH1cclxufVxyXG4iXX0=
