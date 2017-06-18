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
                        template: "\n\n    <!--Display of the profile window with the default cities-->\n    <div class=\"col-md-3 col-md-offset-1\">\n      <section class=\"box widget locations\">\n        <div class=\"jumbotron-photo\"><img src=\"css/img/sky.jpg\" /></div>\n          <div class=\"jumbotron-contents\">\n            <article class=\"profile\" *ngFor=\"#profile of profiles\" (click)=\"onLoadProfile(profile)\">\n                <div class=\"panel panel-danger\">\n                  <div class=\"panel-heading\"><h2>{{profile.profileName}}</h2></div>\n                  </div>\n                  <button type=\"button\" onclick=\"WriteCookie()\" class=\"btn btn-default btn-block\"><h4>Cities : {{profile.cities.join(', ')}}</h4></button>\n                    <button class = \"delete\" (click)=\"onDeleteProfile($event, profile)\">X</button>\n\n            </article>\n          </div>\n        </section>\n      </div>\n    ",
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0NBO2dCQUlFLDBCQUFvQixlQUErQixFQUMvQixlQUErQjtvQkFEL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7Z0JBQUUsQ0FBQztnQkFHdEQsd0NBQWEsR0FBYixVQUFjLE9BQWdCO29CQUE5QixpQkE2QkM7b0JBNUJILHFCQUFxQjtvQkFDakIsSUFBSSxLQUFLLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFFLENBQUMsS0FBSyxDQUFDO29CQUN2RSxJQUFJLEtBQUssR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ3ZFLElBQUksS0FBSyxHQUFzQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBRSxDQUFDLEtBQUssQ0FBQztvQkFDdkUsSUFBSSxLQUFLLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFFLENBQUMsS0FBSyxDQUFDO29CQUN2RSxJQUFJLEtBQUssR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLENBQUM7b0JBRXZFLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekMsR0FBRyxDQUFBLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO3dCQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDOzZCQUM1SCxLQUFLLEVBQUU7NkJBQ1AsU0FBUyxDQUNSLFVBQUEsSUFBSTs0QkFDQSxJQUFNLFlBQVksR0FBRyxJQUFJLDBCQUFXLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFDdkgsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFDdEgsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFDckgsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFDdEgsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOzRCQUMxSCxLQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFHbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFFOUIsQ0FBQyxDQUVGLENBQUM7b0JBQ0osQ0FBQztnQkFDSCxDQUFDO2dCQUVILDBDQUFlLEdBQWYsVUFBZ0IsS0FBWSxFQUFFLE9BQWdCO29CQUM1QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO2dCQUNDLG1DQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuRCxDQUFDO2dCQXRFSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUMsKzRCQWtCUjt3QkFDRCxTQUFTLEVBQUMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUM7d0JBQ3ZFLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQzVCLENBQUM7O29DQUFBO2dCQWdESix1QkFBQztZQUFELENBOUNBLEFBOENDLElBQUE7WUE5Q0QsK0NBOENDLENBQUEiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1Byb2ZpbGV9IGZyb20gXCIuL3Byb2ZpbGUudHNcIlxyXG5pbXBvcnQge1Byb2ZpbGVTZXJ2aWNlfSBmcm9tIFwiLi9wcm9maWxlLnNlcnZpY2VcIlxyXG5pbXBvcnQge1dlYXRoZXJTZXJ2aWNlfSBmcm9tIFwiLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZVwiXHJcbmltcG9ydCB7V2VhdGhlckl0ZW19IGZyb20gXCIuL3dlYXRoZXIvd2VhdGhlci1pdGVtXCJcclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBDb29raWUgfSBmcm9tICduZzItY29va2llcy9uZzItY29va2llcyc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1zaWRlYmFyJyxcclxuICAgIHRlbXBsYXRlOmBcclxuXHJcbiAgICA8IS0tRGlzcGxheSBvZiB0aGUgcHJvZmlsZSB3aW5kb3cgd2l0aCB0aGUgZGVmYXVsdCBjaXRpZXMtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtbWQtb2Zmc2V0LTFcIj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJib3ggd2lkZ2V0IGxvY2F0aW9uc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb24tcGhvdG9cIj48aW1nIHNyYz1cImNzcy9pbWcvc2t5LmpwZ1wiIC8+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwianVtYm90cm9uLWNvbnRlbnRzXCI+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicHJvZmlsZVwiICpuZ0Zvcj1cIiNwcm9maWxlIG9mIHByb2ZpbGVzXCIgKGNsaWNrKT1cIm9uTG9hZFByb2ZpbGUocHJvZmlsZSlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj48aDI+e3twcm9maWxlLnByb2ZpbGVOYW1lfX08L2gyPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25jbGljaz1cIldyaXRlQ29va2llKClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2tcIj48aDQ+Q2l0aWVzIDoge3twcm9maWxlLmNpdGllcy5qb2luKCcsICcpfX08L2g0PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImRlbGV0ZVwiIChjbGljayk9XCJvbkRlbGV0ZVByb2ZpbGUoJGV2ZW50LCBwcm9maWxlKVwiPlg8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVVcmxzOlsnY3NzL3NpdGUuY3NzJywgJ2Nzcy9zaXRlLm1pbi5jc3MnLCAnY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ10sXHJcbiAgICBwcm92aWRlcnM6IFtQcm9maWxlU2VydmljZV1cclxuICB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gIHByb2ZpbGVzOiBQcm9maWxlW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Byb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2Upe31cclxuXHJcblxyXG4gIG9uTG9hZFByb2ZpbGUocHJvZmlsZTogUHJvZmlsZSl7XHJcbi8vUmVjZWl2aW5nIHRoZSBkYXRlc1xyXG4gICAgdmFyIGRhdGUwID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZTBcIikpLnZhbHVlO1xyXG4gICAgdmFyIGRhdGUxID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZTFcIikpLnZhbHVlO1xyXG4gICAgdmFyIGRhdGUyID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZTJcIikpLnZhbHVlO1xyXG4gICAgdmFyIGRhdGUzID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZTNcIikpLnZhbHVlO1xyXG4gICAgdmFyIGRhdGU0ID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZTRcIikpLnZhbHVlO1xyXG5cclxuICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmNsZWFyV2VhdGhlckl0ZW1zKCk7XHJcbiAgICBmb3IoIGxldCBpID0gMDsgaTxwcm9maWxlLmNpdGllcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLnNlYXJjaFdlYXRoZXJEYXRhKHByb2ZpbGUuY2l0aWVzW2ldLCB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRMYW5ndWFnZSgpLCB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRTeXN0ZW0oKSlcclxuICAgICAgICAucmV0cnkoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICBkYXRhID0+IHsvL1JlY2VpdmluZyB0aGUgZGF0YSBmcm9tIG9wZW53ZWF0aGVybWFwIEFQSVxyXG4gICAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJJdGVtMCA9IG5ldyBXZWF0aGVySXRlbSh0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRVbml0KCksIGRhdGEuY2l0eS5uYW1lLFxyXG4gICAgICAgICAgICAgIGRhdGEubGlzdFswXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLCAgZGF0YS5saXN0WzBdLnRlbXAubWF4LCBkYXRhLmxpc3RbMF0udGVtcC5taW4sIGRhdGEubGlzdFswXS53ZWF0aGVyWzBdLmljb24sIGRhdGUwLFxyXG4gICAgICAgICAgICAgIGRhdGEubGlzdFsxXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLCBkYXRhLmxpc3RbMV0udGVtcC5tYXgsIGRhdGEubGlzdFsxXS50ZW1wLm1pbiwgZGF0YS5saXN0WzFdLndlYXRoZXJbMF0uaWNvbiwgZGF0ZTEsXHJcbiAgICAgICAgICAgICAgZGF0YS5saXN0WzJdLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sZGF0YS5saXN0WzJdLnRlbXAubWF4LCBkYXRhLmxpc3RbMl0udGVtcC5taW4sIGRhdGEubGlzdFsyXS53ZWF0aGVyWzBdLmljb24sIGRhdGUyLFxyXG4gICAgICAgICAgICAgIGRhdGEubGlzdFszXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLCBkYXRhLmxpc3RbM10udGVtcC5tYXgsIGRhdGEubGlzdFszXS50ZW1wLm1pbiwgZGF0YS5saXN0WzNdLndlYXRoZXJbMF0uaWNvbiwgZGF0ZTMsXG4gICAgICAgICAgICAgIGRhdGEubGlzdFs0XS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLCBkYXRhLmxpc3RbNF0udGVtcC5tYXgsIGRhdGEubGlzdFs0XS50ZW1wLm1pbiwgZGF0YS5saXN0WzRdLndlYXRoZXJbMF0uaWNvbiwgZGF0ZTQpO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5hZGRXZWF0aGVySXRlbSh3ZWF0aGVySXRlbTApO1xuXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJJdGVtMCk7XG5cbiAgICAgICAgfVxyXG5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5vbkRlbGV0ZVByb2ZpbGUoZXZlbnQ6IEV2ZW50LCBwcm9maWxlOiBQcm9maWxlKXsvL0RlbGV0ZSB0aGUgcHJvZmlsZVxyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIHRoaXMuX3Byb2ZpbGVTZXJ2aWNlLmRlbGV0ZVByb2ZpbGUocHJvZmlsZSk7XHJcbn1cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5wcm9maWxlcz10aGlzLl9wcm9maWxlU2VydmljZS5nZXRQcm9maWxlcygpO1xyXG4gIH1cclxufVxyXG4iXX0=
