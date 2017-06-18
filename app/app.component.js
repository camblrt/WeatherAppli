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
                        template: "\n    <!--Document which display the different parts of the application-->\n    <div class=\"row\">\n        <header>\n            <h1>Weather Forecast Web Application</h1>\n        </header>\n      </div>\n      <div class=\"row\"><h1></h1></div>\n      <div class=\"row\">\n        <my-sidebar></my-sidebar>\n        <weather-search></weather-search>\n      </div>\n      <div class=\"row\">\n        <weather-list></weather-list>\n      </div>\n    ",
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF2QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHNjQWVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDZDQUFvQixFQUFDLGlEQUFzQixFQUFFLG9DQUFnQixDQUFDO3dCQUMzRSxTQUFTLEVBQUMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUM7cUJBQzFFLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7V2VhdGhlckxpc3RDb21wb25lbnR9IGZyb20gXCIuL3dlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1dlYXRoZXJTZWFyY2hDb21wb25lbnR9IGZyb20gXCIuL3dlYXRoZXIvd2VhdGhlci1zZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSBcIi4vc2lkZWJhci5jb21wb25lbnRcIlxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8IS0tRG9jdW1lbnQgd2hpY2ggZGlzcGxheSB0aGUgZGlmZmVyZW50IHBhcnRzIG9mIHRoZSBhcHBsaWNhdGlvbi0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxoMT5XZWF0aGVyIEZvcmVjYXN0IFdlYiBBcHBsaWNhdGlvbjwvaDE+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+PGgxPjwvaDE+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8bXktc2lkZWJhcj48L215LXNpZGViYXI+XHJcbiAgICAgICAgPHdlYXRoZXItc2VhcmNoPjwvd2VhdGhlci1zZWFyY2g+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPHdlYXRoZXItbGlzdD48L3dlYXRoZXItbGlzdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1dlYXRoZXJMaXN0Q29tcG9uZW50LFdlYXRoZXJTZWFyY2hDb21wb25lbnQsIFNpZGViYXJDb21wb25lbnRdLFxyXG4gICAgc3R5bGVVcmxzOlsnY3NzL3NpdGUuY3NzJywgJ2Nzcy9zaXRlLm1pbi5jc3MnLCAnY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblxyXG59XHJcbiJdfQ==
