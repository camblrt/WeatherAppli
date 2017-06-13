System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var Language;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Language = (function () {
                function Language(lang) {
                    this.lang = lang;
                }
                Language = __decorate([
                    core_1.Component({
                        selector: 'language',
                        template: "\n  <div class=\"col-md-offset-6\">\n  <div class=\"blank\"></div>\n  <div class=\"btn-group\">\n    <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\">Language <span class=\"caret\"></span></button>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n      <li><a href=\"#\">English</a></li>\n      <li><a href=\"#\">French</a></li>\n    </ul>\n  </div>\n  </div>\n\n  ",
                        styleUrls: ['css/site.css', 'css/site.min.css', 'css/bootstrap.min.css', 'css/style.css']
                    }), 
                    __metadata('design:paramtypes', [String])
                ], Language);
                return Language;
            }());
            exports_1("Language", Language);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvbGFuZ3VhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUNFLGtCQUFtQixJQUFhO29CQUFiLFNBQUksR0FBSixJQUFJLENBQVM7Z0JBQUUsQ0FBQztnQkFuQnJDO29CQUFDLGdCQUFTLENBQUU7d0JBQ1YsUUFBUSxFQUFHLFVBQVU7d0JBQ3JCLFFBQVEsRUFBRSx3WkFZVDt3QkFDRCxTQUFTLEVBQUMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQUUsZUFBZSxDQUFDO3FCQUN6RixDQUFDOzs0QkFBQTtnQkFJRixlQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwrQkFFQyxDQUFBIiwiZmlsZSI6IndlYXRoZXIvbGFuZ3VhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbkBDb21wb25lbnQgKHtcclxuICBzZWxlY3RvciA6ICdsYW5ndWFnZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwiY29sLW1kLW9mZnNldC02XCI+XHJcbiAgPGRpdiBjbGFzcz1cImJsYW5rXCI+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+TGFuZ3VhZ2UgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiByb2xlPVwibWVudVwiPlxyXG4gICAgICA8bGk+PGEgaHJlZj1cIiNcIj5FbmdsaXNoPC9hPjwvbGk+XHJcbiAgICAgIDxsaT48YSBocmVmPVwiI1wiPkZyZW5jaDwvYT48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgYCxcclxuICBzdHlsZVVybHM6Wydjc3Mvc2l0ZS5jc3MnLCAnY3NzL3NpdGUubWluLmNzcycsICdjc3MvYm9vdHN0cmFwLm1pbi5jc3MnLCAnY3NzL3N0eWxlLmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2V7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGxhbmcgOiBzdHJpbmcpe31cclxufVxyXG4iXX0=
