System.register(["./profile"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var profile_1;
    var ProfileService;
    return {
        setters:[
            function (profile_1_1) {
                profile_1 = profile_1_1;
            }],
        execute: function() {
            //Display the default profile : the Austin's and Lyon's weather
            ProfileService = (function () {
                function ProfileService() {
                    this.profiles = [
                        new profile_1.Profile('Default Profile', ['Austin', 'Lyon'])
                    ];
                }
                ProfileService.prototype.getProfiles = function () {
                    return this.profiles;
                };
                ProfileService.prototype.deleteProfile = function (profile) {
                    this.profiles.splice(this.profiles.indexOf(profile), 1);
                };
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUVBLCtEQUErRDtZQUUvRDtnQkFBQTtvQkFDYyxhQUFRLEdBQWE7d0JBQzNCLElBQUksaUJBQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztxQkFDbkQsQ0FBQztnQkFRUixDQUFDO2dCQU5LLG9DQUFXLEdBQVg7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0Qsc0NBQWEsR0FBYixVQUFjLE9BQWdCO29CQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztnQkFDUCxxQkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsMkNBV0MsQ0FBQSIsImZpbGUiOiJwcm9maWxlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb2ZpbGV9IGZyb20gXCIuL3Byb2ZpbGVcIlxyXG5cclxuLy9EaXNwbGF5IHRoZSBkZWZhdWx0IHByb2ZpbGUgOiB0aGUgQXVzdGluJ3MgYW5kIEx5b24ncyB3ZWF0aGVyXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2V7XHJcbiAgICAgIHByaXZhdGUgcHJvZmlsZXM6IFByb2ZpbGVbXT0gW1xyXG4gICAgICAgIG5ldyBQcm9maWxlKCdEZWZhdWx0IFByb2ZpbGUnLCBbJ0F1c3RpbicsICdMeW9uJ10pXHJcbiAgICAgIF07XHJcblxyXG4gICAgICBnZXRQcm9maWxlcygpey8vRGlzcGxheSB0aGUgZGVmYXVsdCBjaXRpZXNcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlcztcclxuICAgICAgfVxyXG4gICAgICBkZWxldGVQcm9maWxlKHByb2ZpbGU6IFByb2ZpbGUpey8vRGVsZXRlIHRoZSBwcm9maWxlXHJcbiAgICAgICAgdGhpcy5wcm9maWxlcy5zcGxpY2UodGhpcy5wcm9maWxlcy5pbmRleE9mKHByb2ZpbGUpLCAxKTtcclxuICAgICAgfVxyXG59XHJcbiJdfQ==
