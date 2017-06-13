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
    var WeathetSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WeathetSearchComponent = (function () {
                function WeathetSearchComponent() {
                }
                WeathetSearchComponent.prototype.onSubmit = function (form) {
                    console.log(form);
                };
                WeathetSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-search',
                        template: "\n    <section class=\"weather-search\">\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n          <label for=\"city\">City</label>\n          <input ngControl= \"location\" type=\"text\" id=\"city\" required>\n          <button type=\"submit\">Add City</button>\n      </form>\n      <div>\n          <span class=\"info\">City found: </span> City Name\n      </div>\n    </section>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], WeathetSearchComponent);
                return WeathetSearchComponent;
            }());
            exports_1("WeathetSearchComponent", WeathetSearchComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1zZXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7Z0JBSUEsQ0FBQztnQkFIRyx5Q0FBUSxHQUFSLFVBQVMsSUFBa0I7b0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBbEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1YsUUFBUSxFQUFHLGdCQUFnQjt3QkFDM0IsUUFBUSxFQUFFLDRZQVdUO3FCQUNGLENBQUM7OzBDQUFBO2dCQUtGLDZCQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCwyREFJQyxDQUFBIiwiZmlsZSI6IndlYXRoZXIvd2VhdGhlci1zZXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtDb250cm9sR3JvdXB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuQENvbXBvbmVudCAoe1xyXG4gIHNlbGVjdG9yIDogJ3dlYXRoZXItc2VhcmNoJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ3ZWF0aGVyLXNlYXJjaFwiPlxyXG4gICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZilcIiAjZj1cIm5nRm9ybVwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9IFwibG9jYXRpb25cIiB0eXBlPVwidGV4dFwiIGlkPVwiY2l0eVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIENpdHk8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvXCI+Q2l0eSBmb3VuZDogPC9zcGFuPiBDaXR5IE5hbWVcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2VhdGhldFNlYXJjaENvbXBvbmVudHtcclxuICAgIG9uU3VibWl0KGZvcm06IENvbnRyb2xHcm91cCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybSk7XHJcbiAgICB9XHJcbn1cclxuIl19
