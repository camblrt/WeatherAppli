System.register(["angular2/core", "./profile.service", "./weather/weather.service", "./weather/weather-item"], function(exports_1, context_1) {
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
    var core_1, profile_service_1, weather_service_1, weather_item_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent(_profileService, _weatherService) {
                    this._profileService = _profileService;
                    this._weatherService = _weatherService;
                }
                SidebarComponent.prototype.onLoadProfile = function (profile) {
                    var _this = this;
                    //Receiving the dates
                    var date0 = document.getElementById("date0").value;
                    var date1 = document.getElementById("date1").value;
                    var date2 = document.getElementById("date2").value;
                    var date3 = document.getElementById("date3").value;
                    var date4 = document.getElementById("date4").value;
                    this._weatherService.clearWeatherItems();
                    for (var i = 0; i < profile.cities.length; i++) {
                        this._weatherService.searchWeatherData(profile.cities[i], this._weatherService.getLanguage(), this._weatherService.getSystem())
                            .retry()
                            .subscribe(function (data) {
                            var weatherItem0 = new weather_item_1.WeatherItem(_this._weatherService.getUnit(), data.city.name, data.list[0].weather[0].description, data.list[0].temp.max, data.list[0].temp.min, data.list[0].weather[0].icon, date0, data.list[1].weather[0].description, data.list[1].temp.max, data.list[1].temp.min, data.list[1].weather[0].icon, date1, data.list[2].weather[0].description, data.list[2].temp.max, data.list[2].temp.min, data.list[2].weather[0].icon, date2, data.list[3].weather[0].description, data.list[3].temp.max, data.list[3].temp.min, data.list[3].weather[0].icon, date3, data.list[4].weather[0].description, data.list[4].temp.max, data.list[4].temp.min, data.list[4].weather[0].icon, date4);
                            _this._weatherService.addWeatherItem(weatherItem0);
                            console.log(weatherItem0);
                        });
                    }
                };
                SidebarComponent.prototype.onDeleteProfile = function (event, profile) {
                    event.stopPropagation();
                    this._profileService.deleteProfile(profile);
                };
                SidebarComponent.prototype.ngOnInit = function () {
                    this.profiles = this._profileService.getProfiles();
                };
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sidebar',
                        template: "\n    <!--Display of the profile window with the default cities-->\n    <div class=\"col-md-3 col-md-offset-1\">\n      <section class=\"box widget locations\">\n        <div class=\"jumbotron-photo\"><img src=\"img/Jumbotron.jpg\" /></div>\n          <div class=\"jumbotron-contents\">\n            <article class=\"profile\" *ngFor=\"#profile of profiles\" (click)=\"onLoadProfile(profile)\">\n                <div class=\"panel panel-danger\">\n                  <div class=\"panel-heading\"><h2>{{profile.profileName}}</h2></div>\n                  </div>\n                  <button type=\"button\" class=\"btn btn-default btn-block\"><h4>Cities : {{profile.cities.join(', ')}}</h4></button>\n                    <button class = \"delete\" (click)=\"onDeleteProfile($event, profile)\">X</button>\n\n            </article>\n          </div>\n        </section>\n      </div>\n    ",
                        styleUrls: ['css/site.css', 'css/site.min.css', 'css/bootstrap.min.css'],
                        providers: [profile_service_1.ProfileService]
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService, weather_service_1.WeatherService])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0JBO2dCQUlFLDBCQUFvQixlQUErQixFQUMvQixlQUErQjtvQkFEL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7Z0JBQUUsQ0FBQztnQkFHdEQsd0NBQWEsR0FBYixVQUFjLE9BQWdCO29CQUE5QixpQkE2QkM7b0JBNUJILHFCQUFxQjtvQkFDakIsSUFBSSxLQUFLLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFFLENBQUMsS0FBSyxDQUFDO29CQUN2RSxJQUFJLEtBQUssR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ3ZFLElBQUksS0FBSyxHQUFzQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBRSxDQUFDLEtBQUssQ0FBQztvQkFDdkUsSUFBSSxLQUFLLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFFLENBQUMsS0FBSyxDQUFDO29CQUN2RSxJQUFJLEtBQUssR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLENBQUM7b0JBRXZFLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekMsR0FBRyxDQUFBLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO3dCQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDOzZCQUM1SCxLQUFLLEVBQUU7NkJBQ1AsU0FBUyxDQUNSLFVBQUEsSUFBSTs0QkFDQSxJQUFNLFlBQVksR0FBRyxJQUFJLDBCQUFXLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFDdkgsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFDdEgsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFDckgsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFDdEgsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOzRCQUMxSCxLQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFHbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFFOUIsQ0FBQyxDQUVGLENBQUM7b0JBQ0osQ0FBQztnQkFDSCxDQUFDO2dCQUVILDBDQUFlLEdBQWYsVUFBZ0IsS0FBWSxFQUFFLE9BQWdCO29CQUM1QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO2dCQUNDLG1DQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuRCxDQUFDO2dCQXJFSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUMscTNCQWlCUjt3QkFDRCxTQUFTLEVBQUMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUM7d0JBQ3ZFLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQzVCLENBQUM7O29DQUFBO2dCQWdESix1QkFBQztZQUFELENBOUNBLEFBOENDLElBQUE7WUE5Q0QsK0NBOENDLENBQUEiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1Byb2ZpbGV9IGZyb20gXCIuL3Byb2ZpbGUudHNcIlxyXG5pbXBvcnQge1Byb2ZpbGVTZXJ2aWNlfSBmcm9tIFwiLi9wcm9maWxlLnNlcnZpY2VcIlxyXG5pbXBvcnQge1dlYXRoZXJTZXJ2aWNlfSBmcm9tIFwiLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZVwiXHJcbmltcG9ydCB7V2VhdGhlckl0ZW19IGZyb20gXCIuL3dlYXRoZXIvd2VhdGhlci1pdGVtXCJcclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBDb29raWUgfSBmcm9tICduZzItY29va2llcy9uZzItY29va2llcyc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1zaWRlYmFyJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDwhLS1EaXNwbGF5IG9mIHRoZSBwcm9maWxlIHdpbmRvdyB3aXRoIHRoZSBkZWZhdWx0IGNpdGllcy0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbC1tZC1vZmZzZXQtMVwiPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cImJveCB3aWRnZXQgbG9jYXRpb25zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImp1bWJvdHJvbi1waG90b1wiPjxpbWcgc3JjPVwiaW1nL0p1bWJvdHJvbi5qcGdcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImp1bWJvdHJvbi1jb250ZW50c1wiPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInByb2ZpbGVcIiAqbmdGb3I9XCIjcHJvZmlsZSBvZiBwcm9maWxlc1wiIChjbGljayk9XCJvbkxvYWRQcm9maWxlKHByb2ZpbGUpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+PGgyPnt7cHJvZmlsZS5wcm9maWxlTmFtZX19PC9oMj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9ja1wiPjxoND5DaXRpZXMgOiB7e3Byb2ZpbGUuY2l0aWVzLmpvaW4oJywgJyl9fTwvaDQ+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiZGVsZXRlXCIgKGNsaWNrKT1cIm9uRGVsZXRlUHJvZmlsZSgkZXZlbnQsIHByb2ZpbGUpXCI+WDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6Wydjc3Mvc2l0ZS5jc3MnLCAnY3NzL3NpdGUubWluLmNzcycsICdjc3MvYm9vdHN0cmFwLm1pbi5jc3MnXSxcclxuICAgIHByb3ZpZGVyczogW1Byb2ZpbGVTZXJ2aWNlXVxyXG4gIH0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgcHJvZmlsZXM6IFByb2ZpbGVbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSl7fVxyXG5cclxuXHJcbiAgb25Mb2FkUHJvZmlsZShwcm9maWxlOiBQcm9maWxlKXtcclxuLy9SZWNlaXZpbmcgdGhlIGRhdGVzXHJcbiAgICB2YXIgZGF0ZTAgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlMFwiKSkudmFsdWU7XHJcbiAgICB2YXIgZGF0ZTEgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlMVwiKSkudmFsdWU7XHJcbiAgICB2YXIgZGF0ZTIgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlMlwiKSkudmFsdWU7XHJcbiAgICB2YXIgZGF0ZTMgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlM1wiKSkudmFsdWU7XHJcbiAgICB2YXIgZGF0ZTQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlNFwiKSkudmFsdWU7XHJcblxyXG4gICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuY2xlYXJXZWF0aGVySXRlbXMoKTtcclxuICAgIGZvciggbGV0IGkgPSAwOyBpPHByb2ZpbGUuY2l0aWVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2Uuc2VhcmNoV2VhdGhlckRhdGEocHJvZmlsZS5jaXRpZXNbaV0sIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmdldExhbmd1YWdlKCksIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmdldFN5c3RlbSgpKVxyXG4gICAgICAgIC5yZXRyeSgpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgIGRhdGEgPT4gey8vUmVjZWl2aW5nIHRoZSBkYXRhIGZyb20gb3BlbndlYXRoZXJtYXAgQVBJXHJcbiAgICAgICAgICAgICAgY29uc3Qgd2VhdGhlckl0ZW0wID0gbmV3IFdlYXRoZXJJdGVtKHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmdldFVuaXQoKSwgZGF0YS5jaXR5Lm5hbWUsXHJcbiAgICAgICAgICAgICAgZGF0YS5saXN0WzBdLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sICBkYXRhLmxpc3RbMF0udGVtcC5tYXgsIGRhdGEubGlzdFswXS50ZW1wLm1pbiwgZGF0YS5saXN0WzBdLndlYXRoZXJbMF0uaWNvbiwgZGF0ZTAsXHJcbiAgICAgICAgICAgICAgZGF0YS5saXN0WzFdLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sIGRhdGEubGlzdFsxXS50ZW1wLm1heCwgZGF0YS5saXN0WzFdLnRlbXAubWluLCBkYXRhLmxpc3RbMV0ud2VhdGhlclswXS5pY29uLCBkYXRlMSxcclxuICAgICAgICAgICAgICBkYXRhLmxpc3RbMl0ud2VhdGhlclswXS5kZXNjcmlwdGlvbixkYXRhLmxpc3RbMl0udGVtcC5tYXgsIGRhdGEubGlzdFsyXS50ZW1wLm1pbiwgZGF0YS5saXN0WzJdLndlYXRoZXJbMF0uaWNvbiwgZGF0ZTIsXHJcbiAgICAgICAgICAgICAgZGF0YS5saXN0WzNdLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sIGRhdGEubGlzdFszXS50ZW1wLm1heCwgZGF0YS5saXN0WzNdLnRlbXAubWluLCBkYXRhLmxpc3RbM10ud2VhdGhlclswXS5pY29uLCBkYXRlMyxcbiAgICAgICAgICAgICAgZGF0YS5saXN0WzRdLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sIGRhdGEubGlzdFs0XS50ZW1wLm1heCwgZGF0YS5saXN0WzRdLnRlbXAubWluLCBkYXRhLmxpc3RbNF0ud2VhdGhlclswXS5pY29uLCBkYXRlNCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmFkZFdlYXRoZXJJdGVtKHdlYXRoZXJJdGVtMCk7XG5cblxuICAgICAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckl0ZW0wKTtcblxuICAgICAgICB9XHJcblxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbm9uRGVsZXRlUHJvZmlsZShldmVudDogRXZlbnQsIHByb2ZpbGU6IFByb2ZpbGUpey8vRGVsZXRlIHRoZSBwcm9maWxlXHJcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgdGhpcy5fcHJvZmlsZVNlcnZpY2UuZGVsZXRlUHJvZmlsZShwcm9maWxlKTtcclxufVxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLnByb2ZpbGVzPXRoaXMuX3Byb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGVzKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
