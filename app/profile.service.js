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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUVBO2dCQUFBO29CQUNjLGFBQVEsR0FBYTt3QkFDM0IsSUFBSSxpQkFBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUNuRCxDQUFDO2dCQVFSLENBQUM7Z0JBTkssb0NBQVcsR0FBWDtvQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDdkIsQ0FBQztnQkFDRCxzQ0FBYSxHQUFiLFVBQWMsT0FBZ0I7b0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxDQUFDO2dCQUNQLHFCQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCwyQ0FXQyxDQUFBIiwiZmlsZSI6InByb2ZpbGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvZmlsZX0gZnJvbSBcIi4vcHJvZmlsZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2V7XHJcbiAgICAgIHByaXZhdGUgcHJvZmlsZXM6IFByb2ZpbGVbXT0gW1xyXG4gICAgICAgIG5ldyBQcm9maWxlKCdEZWZhdWx0IFByb2ZpbGUnLCBbJ0F1c3RpbicsICdMeW9uJ10pXHJcbiAgICAgIF07XHJcblxyXG4gICAgICBnZXRQcm9maWxlcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVzO1xyXG4gICAgICB9XHJcbiAgICAgIGRlbGV0ZVByb2ZpbGUocHJvZmlsZTogUHJvZmlsZSl7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlcy5zcGxpY2UodGhpcy5wcm9maWxlcy5pbmRleE9mKHByb2ZpbGUpLCAxKTtcclxuICAgICAgfVxyXG59XHJcbiJdfQ==
