System.register(['angular2/core', "./weather/weather-list.component", "./weather/weather-search.component", "./sidebar.component"], function(exports_1, context_1) {
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
    var core_1, weather_list_component_1, weather_search_component_1, sidebar_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_list_component_1_1) {
                weather_list_component_1 = weather_list_component_1_1;
            },
            function (weather_search_component_1_1) {
                weather_search_component_1 = weather_search_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"row\">\n        <header>\n            <h1>Weather Forecast Web Application</h1>\n        </header>\n      </div>\n      <div class=\"row\"><h1></h1></div>\n      <div class=\"row\">\n        <my-sidebar></my-sidebar>\n        <weather-search></weather-search>\n      </div>\n      <div class=\"row\">\n        <weather-list></weather-list>\n      </div>\n    ",
                        directives: [weather_list_component_1.WeatherListComponent, weather_search_component_1.WeatherSearchComponent, sidebar_component_1.SidebarComponent],
                        styleUrls: ['css/site.css', 'css/site.min.css', 'css/bootstrap.min.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF0QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDRYQWNUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDZDQUFvQixFQUFDLGlEQUFzQixFQUFFLG9DQUFnQixDQUFDO3dCQUMzRSxTQUFTLEVBQUMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUM7cUJBQzFFLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7V2VhdGhlckxpc3RDb21wb25lbnR9IGZyb20gXCIuL3dlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1dlYXRoZXJTZWFyY2hDb21wb25lbnR9IGZyb20gXCIuL3dlYXRoZXIvd2VhdGhlci1zZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSBcIi4vc2lkZWJhci5jb21wb25lbnRcIlxyXG5pbXBvcnQge0xhbmd1YWdlfSBmcm9tIFwiLi9sYW5ndWFnZVwiXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8aDE+V2VhdGhlciBGb3JlY2FzdCBXZWIgQXBwbGljYXRpb248L2gxPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPjxoMT48L2gxPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPG15LXNpZGViYXI+PC9teS1zaWRlYmFyPlxyXG4gICAgICAgIDx3ZWF0aGVyLXNlYXJjaD48L3dlYXRoZXItc2VhcmNoPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDx3ZWF0aGVyLWxpc3Q+PC93ZWF0aGVyLWxpc3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtXZWF0aGVyTGlzdENvbXBvbmVudCxXZWF0aGVyU2VhcmNoQ29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50XSxcclxuICAgIHN0eWxlVXJsczpbJ2Nzcy9zaXRlLmNzcycsICdjc3Mvc2l0ZS5taW4uY3NzJywgJ2Nzcy9ib290c3RyYXAubWluLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxufVxyXG4iXX0=
