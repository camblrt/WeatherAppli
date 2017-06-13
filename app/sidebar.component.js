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
                SidebarComponent.prototype.onSaveNew = function () {
                    var cities = this._weatherService.getWeatherItems().map(function (element) {
                        return element.cityName;
                    });
                    this._profileService.saveNewProfile(cities);
                };
                SidebarComponent.prototype.onLoadProfile = function (profile) {
                    var _this = this;
                    this._weatherService.clearWeatherItems();
                    for (var i = 0; i < profile.cities.length; i++) {
                        this._weatherService.searchWeatherData(profile.cities[i], this._weatherService.getLanguage(), this._weatherService.getSystem())
                            .retry()
                            .subscribe(function (data) {
                            var weatherItem0 = new weather_item_1.WeatherItem(_this._weatherService.getUnit(), data.city.name, data.list[0].weather[0].description, data.list[0].temp.day, data.list[0].weather[0].icon, data.list[1].weather[0].description, data.list[1].temp.day, data.list[1].weather[0].icon, data.list[2].weather[0].description, data.list[2].temp.day, data.list[2].weather[0].icon, data.list[3].weather[0].description, data.list[3].temp.day, data.list[3].weather[0].icon, data.list[4].weather[0].description, data.list[4].temp.day, data.list[4].weather[0].icon);
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
                        template: "\n    <div class=\"col-md-3 col-md-offset-1\">\n        <section class=\"box widget locations\">\n          <div class=\"jumbotron-photo\"><img src=\"img/Jumbotron.jpg\" /></div>\n          <div class=\"jumbotron-contents\">\n            <h2> Saved Profiles </h2>\n            <button (click)=\"onSaveNew()\" class=\"btn btn-danger btn-block btn-large\">Save List to Profile</button>\n            <article class=\"profile\" *ngFor=\"#profile of profiles\" (click)=\"onLoadProfile(profile)\">\n              <h2>{{profile.profileName}}</h2>\n              <p>Cities : {{profile.cities.join(', ')}}</p>\n              <span class = \"delete\" (click)=\"onDeleteProfile($event, profile)\">X</span>\n            </article>\n          </div>\n        </section>\n      </div>\n    ",
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkJBO2dCQUlFLDBCQUFvQixlQUErQixFQUMvQixlQUErQjtvQkFEL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7Z0JBQUUsQ0FBQztnQkFHdEQsb0NBQVMsR0FBVDtvQkFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFTLE9BQ3hEO3dCQUNULE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFRCx3Q0FBYSxHQUFiLFVBQWMsT0FBZ0I7b0JBQTlCLGlCQXVCQztvQkFyQkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUN6QyxHQUFHLENBQUEsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7d0JBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUM7NkJBQzVILEtBQUssRUFBRTs2QkFDUCxTQUFTLENBQ1IsVUFBQSxJQUFJOzRCQUNBLElBQU0sWUFBWSxHQUFHLElBQUksMEJBQVcsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUNuRixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDekYsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ3hGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUN2RixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDNUYsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBR2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBRTlCLENBQUMsQ0FFRixDQUFDO29CQUNKLENBQUM7Z0JBQ0gsQ0FBQztnQkFFSCwwQ0FBZSxHQUFmLFVBQWdCLEtBQVksRUFBRSxPQUFnQjtvQkFDNUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFDQyxtQ0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkQsQ0FBQztnQkFyRUg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFDLDB3QkFlUjt3QkFDRCxTQUFTLEVBQUMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUM7d0JBQ3ZFLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQzVCLENBQUM7O29DQUFBO2dCQWtESix1QkFBQztZQUFELENBaERBLEFBZ0RDLElBQUE7WUFoREQsK0NBZ0RDLENBQUEiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1Byb2ZpbGV9IGZyb20gXCIuL3Byb2ZpbGUudHNcIlxyXG5pbXBvcnQge1Byb2ZpbGVTZXJ2aWNlfSBmcm9tIFwiLi9wcm9maWxlLnNlcnZpY2VcIlxyXG5pbXBvcnQge1dlYXRoZXJTZXJ2aWNlfSBmcm9tIFwiLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZVwiXHJcbmltcG9ydCB7V2VhdGhlckl0ZW19IGZyb20gXCIuL3dlYXRoZXIvd2VhdGhlci1pdGVtXCJcclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBDb29raWUgfSBmcm9tICduZzItY29va2llcy9uZzItY29va2llcyc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1zaWRlYmFyJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtbWQtb2Zmc2V0LTFcIj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImJveCB3aWRnZXQgbG9jYXRpb25zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwianVtYm90cm9uLXBob3RvXCI+PGltZyBzcmM9XCJpbWcvSnVtYm90cm9uLmpwZ1wiIC8+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwianVtYm90cm9uLWNvbnRlbnRzXCI+XHJcbiAgICAgICAgICAgIDxoMj4gU2F2ZWQgUHJvZmlsZXMgPC9oMj5cclxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25TYXZlTmV3KClcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1ibG9jayBidG4tbGFyZ2VcIj5TYXZlIExpc3QgdG8gUHJvZmlsZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInByb2ZpbGVcIiAqbmdGb3I9XCIjcHJvZmlsZSBvZiBwcm9maWxlc1wiIChjbGljayk9XCJvbkxvYWRQcm9maWxlKHByb2ZpbGUpXCI+XHJcbiAgICAgICAgICAgICAgPGgyPnt7cHJvZmlsZS5wcm9maWxlTmFtZX19PC9oMj5cclxuICAgICAgICAgICAgICA8cD5DaXRpZXMgOiB7e3Byb2ZpbGUuY2l0aWVzLmpvaW4oJywgJyl9fTwvcD5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcyA9IFwiZGVsZXRlXCIgKGNsaWNrKT1cIm9uRGVsZXRlUHJvZmlsZSgkZXZlbnQsIHByb2ZpbGUpXCI+WDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6Wydjc3Mvc2l0ZS5jc3MnLCAnY3NzL3NpdGUubWluLmNzcycsICdjc3MvYm9vdHN0cmFwLm1pbi5jc3MnXSxcclxuICAgIHByb3ZpZGVyczogW1Byb2ZpbGVTZXJ2aWNlXVxyXG4gIH0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgcHJvZmlsZXM6IFByb2ZpbGVbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSl7fVxyXG5cclxuXHJcbiAgb25TYXZlTmV3KCl7XHJcbiAgICBjb25zdCBjaXRpZXMgPSB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRXZWF0aGVySXRlbXMoKS5tYXAoZnVuY3Rpb24oZWxlbWVudDpcclxuICAgIFdlYXRoZXJJdGVtKXtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQuY2l0eU5hbWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3Byb2ZpbGVTZXJ2aWNlLnNhdmVOZXdQcm9maWxlKGNpdGllcyk7XHJcbiAgfVxyXG5cclxuICBvbkxvYWRQcm9maWxlKHByb2ZpbGU6IFByb2ZpbGUpe1xyXG5cclxuICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmNsZWFyV2VhdGhlckl0ZW1zKCk7XHJcbiAgICBmb3IoIGxldCBpID0gMDsgaTxwcm9maWxlLmNpdGllcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLnNlYXJjaFdlYXRoZXJEYXRhKHByb2ZpbGUuY2l0aWVzW2ldLCB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRMYW5ndWFnZSgpLCB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRTeXN0ZW0oKSlcclxuICAgICAgICAucmV0cnkoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB3ZWF0aGVySXRlbTAgPSBuZXcgV2VhdGhlckl0ZW0odGhpcy5fd2VhdGhlclNlcnZpY2UuZ2V0VW5pdCgpLCBkYXRhLmNpdHkubmFtZSxcclxuICAgICAgICAgICAgICBkYXRhLmxpc3RbMF0ud2VhdGhlclswXS5kZXNjcmlwdGlvbiwgIGRhdGEubGlzdFswXS50ZW1wLmRheSwgZGF0YS5saXN0WzBdLndlYXRoZXJbMF0uaWNvbixcclxuICAgICAgICAgICAgICBkYXRhLmxpc3RbMV0ud2VhdGhlclswXS5kZXNjcmlwdGlvbiwgZGF0YS5saXN0WzFdLnRlbXAuZGF5LCBkYXRhLmxpc3RbMV0ud2VhdGhlclswXS5pY29uLFxyXG4gICAgICAgICAgICAgIGRhdGEubGlzdFsyXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLGRhdGEubGlzdFsyXS50ZW1wLmRheSwgZGF0YS5saXN0WzJdLndlYXRoZXJbMF0uaWNvbixcclxuICAgICAgICAgICAgICBkYXRhLmxpc3RbM10ud2VhdGhlclswXS5kZXNjcmlwdGlvbiwgZGF0YS5saXN0WzNdLnRlbXAuZGF5LCBkYXRhLmxpc3RbM10ud2VhdGhlclswXS5pY29uLFxuICAgICAgICAgICAgICBkYXRhLmxpc3RbNF0ud2VhdGhlclswXS5kZXNjcmlwdGlvbiwgZGF0YS5saXN0WzRdLnRlbXAuZGF5LCBkYXRhLmxpc3RbNF0ud2VhdGhlclswXS5pY29uKTtcclxuICAgICAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuYWRkV2VhdGhlckl0ZW0od2VhdGhlckl0ZW0wKTtcblxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVySXRlbTApO1xuXG4gICAgICAgIH1cclxuXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxub25EZWxldGVQcm9maWxlKGV2ZW50OiBFdmVudCwgcHJvZmlsZTogUHJvZmlsZSl7XHJcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgdGhpcy5fcHJvZmlsZVNlcnZpY2UuZGVsZXRlUHJvZmlsZShwcm9maWxlKTtcclxufVxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLnByb2ZpbGVzPXRoaXMuX3Byb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGVzKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
