System.register(["angular2/core", "./weather-item.component", "./weather.service", "./weather.data"], function(exports_1, context_1) {
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
    var core_1, weather_item_component_1, weather_service_1, weather_data_1;
    var WeatherListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_item_component_1_1) {
                weather_item_component_1 = weather_item_component_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_data_1_1) {
                weather_data_1 = weather_data_1_1;
            }],
        execute: function() {
            WeatherListComponent = (function () {
                function WeatherListComponent(_weatherService) {
                    this._weatherService = _weatherService;
                }
                WeatherListComponent.prototype.ngOnInit = function () {
                    this.weatherItems = weather_data_1.WEATHER_ITEMS;
                };
                WeatherListComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-list',
                        template: "\n <!--Display of the list of cities with the weather-->\n        <section class=\"weather-list\">\n            <weather-item *ngFor=\"#weatherItem of weatherItems\" [item]=\"weatherItem\"></weather-item>\n        </section>\n    ",
                        directives: [weather_item_component_1.WeatherItemComponent],
                        styleUrls: ['css/site.css', 'css/site.min.css', 'css/bootstrap.min.css']
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherListComponent);
                return WeatherListComponent;
            }());
            exports_1("WeatherListComponent", WeatherListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFHRSw4QkFBb0IsZUFBK0I7b0JBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtnQkFBRSxDQUFDO2dCQUV0RCx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsNEJBQWEsQ0FBQztnQkFDdEMsQ0FBQztnQkFsQkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLHdPQUtUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDZDQUFvQixDQUFDO3dCQUNsQyxTQUFTLEVBQUMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUM7cUJBQzFFLENBQUM7O3dDQUFBO2dCQVNGLDJCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCx1REFRQyxDQUFBIiwiZmlsZSI6IndlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7V2VhdGhlckl0ZW1Db21wb25lbnR9IGZyb20gXCIuL3dlYXRoZXItaXRlbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtXZWF0aGVySXRlbX0gZnJvbSBcIi4vd2VhdGhlci1pdGVtXCI7XHJcbmltcG9ydCB7V2VhdGhlclNlcnZpY2V9IGZyb20gXCIuL3dlYXRoZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge1dFQVRIRVJfSVRFTVN9IGZyb20gXCIuL3dlYXRoZXIuZGF0YVwiXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWxpc3QnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuIDwhLS1EaXNwbGF5IG9mIHRoZSBsaXN0IG9mIGNpdGllcyB3aXRoIHRoZSB3ZWF0aGVyLS0+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ3ZWF0aGVyLWxpc3RcIj5cclxuICAgICAgICAgICAgPHdlYXRoZXItaXRlbSAqbmdGb3I9XCIjd2VhdGhlckl0ZW0gb2Ygd2VhdGhlckl0ZW1zXCIgW2l0ZW1dPVwid2VhdGhlckl0ZW1cIj48L3dlYXRoZXItaXRlbT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1dlYXRoZXJJdGVtQ29tcG9uZW50XSxcclxuICAgIHN0eWxlVXJsczpbJ2Nzcy9zaXRlLmNzcycsICdjc3Mvc2l0ZS5taW4uY3NzJywgJ2Nzcy9ib290c3RyYXAubWluLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgd2VhdGhlckl0ZW1zIDogV2VhdGhlckl0ZW1bXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlKXt9XHJcblxyXG4gIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgdGhpcy53ZWF0aGVySXRlbXMgPSBXRUFUSEVSX0lURU1TO1xyXG4gIH1cclxufVxyXG4iXX0=
