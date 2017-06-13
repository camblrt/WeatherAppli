System.register(['angular2/platform/browser', "./app.component", "angular2/http", "./weather/weather.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, http_1, weather_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, weather_service_1.WeatherService]);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BLG1CQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLHFCQUFjLEVBQUUsZ0NBQWMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiIC8+XHJcbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcclxuaW1wb3J0IHtXZWF0aGVyU2VydmljZX0gZnJvbSBcIi4vd2VhdGhlci93ZWF0aGVyLnNlcnZpY2VcIlxyXG5cclxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW0hUVFBfUFJPVklERVJTLCBXZWF0aGVyU2VydmljZV0pO1xyXG4iXX0=
