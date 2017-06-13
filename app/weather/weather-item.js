System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WeatherItem;
    return {
        setters:[],
        execute: function() {
            WeatherItem = (function () {
                function WeatherItem(unit, cityName, description0, temperature0, icon0, description1, temperature1, icon1, description2, temperature2, icon2, description3, temperature3, icon3, description4, temperature4, icon4) {
                    this.unit = unit;
                    this.cityName = cityName;
                    this.description0 = description0;
                    this.temperature0 = temperature0;
                    this.icon0 = icon0;
                    this.description1 = description1;
                    this.temperature1 = temperature1;
                    this.icon1 = icon1;
                    this.description2 = description2;
                    this.temperature2 = temperature2;
                    this.icon2 = icon2;
                    this.description3 = description3;
                    this.temperature3 = temperature3;
                    this.icon3 = icon3;
                    this.description4 = description4;
                    this.temperature4 = temperature4;
                    this.icon4 = icon4;
                }
                return WeatherItem;
            }());
            exports_1("WeatherItem", WeatherItem);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFBQTtnQkFDRSxxQkFBbUIsSUFBWSxFQUFTLFFBQWlCLEVBQ2hELFlBQW9CLEVBQVMsWUFBb0IsRUFBUyxLQUFhLEVBQ3ZFLFlBQW9CLEVBQVMsWUFBb0IsRUFBUyxLQUFhLEVBQ3ZFLFlBQW9CLEVBQVMsWUFBb0IsRUFBUyxLQUFhLEVBQ3ZFLFlBQW9CLEVBQVMsWUFBb0IsRUFBUyxLQUFhLEVBQ3RFLFlBQW9CLEVBQVMsWUFBb0IsRUFBUyxLQUFhO29CQUw5RCxTQUFJLEdBQUosSUFBSSxDQUFRO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVM7b0JBQ2hELGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQ3ZFLGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQ3ZFLGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQ3ZFLGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQ3RFLGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7Z0JBQzdFLENBQUM7Z0JBQ1Asa0JBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHFDQVFDLENBQUEiLCJmaWxlIjoid2VhdGhlci93ZWF0aGVyLWl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV2VhdGhlckl0ZW17XHJcbiAgY29uc3RydWN0b3IocHVibGljIHVuaXQ6IHN0cmluZywgcHVibGljIGNpdHlOYW1lIDogc3RyaW5nLFxyXG4gICAgcHVibGljIGRlc2NyaXB0aW9uMDogc3RyaW5nLCBwdWJsaWMgdGVtcGVyYXR1cmUwOiBudW1iZXIsIHB1YmxpYyBpY29uMDogc3RyaW5nLFxyXG4gICAgcHVibGljIGRlc2NyaXB0aW9uMTogc3RyaW5nLCBwdWJsaWMgdGVtcGVyYXR1cmUxOiBudW1iZXIsIHB1YmxpYyBpY29uMTogc3RyaW5nLFxyXG4gICAgcHVibGljIGRlc2NyaXB0aW9uMjogc3RyaW5nLCBwdWJsaWMgdGVtcGVyYXR1cmUyOiBudW1iZXIsIHB1YmxpYyBpY29uMjogc3RyaW5nLFxyXG4gICAgcHVibGljIGRlc2NyaXB0aW9uMzogc3RyaW5nLCBwdWJsaWMgdGVtcGVyYXR1cmUzOiBudW1iZXIsIHB1YmxpYyBpY29uMzogc3RyaW5nLFxyXG4gICAgIHB1YmxpYyBkZXNjcmlwdGlvbjQ6IHN0cmluZywgcHVibGljIHRlbXBlcmF0dXJlNDogbnVtYmVyLCBwdWJsaWMgaWNvbjQ6IHN0cmluZ1xyXG4gICAgKXt9XHJcbn1cclxuIl19
