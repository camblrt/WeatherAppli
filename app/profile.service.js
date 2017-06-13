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
                ProfileService.prototype.saveNewProfile = function (cities) {
                    var profileName = 'Profile' + this.profiles.length;
                    var profile = new profile_1.Profile(profileName, cities);
                    this.profiles.push(profile);
                };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUVBO2dCQUFBO29CQUNjLGFBQVEsR0FBYTt3QkFDM0IsSUFBSSxpQkFBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUNuRCxDQUFDO2dCQWNSLENBQUM7Z0JBWkssdUNBQWMsR0FBZCxVQUFlLE1BQWdCO29CQUM3QixJQUFNLFdBQVcsR0FBRyxTQUFTLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQ3BELElBQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUVELG9DQUFXLEdBQVg7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0Qsc0NBQWEsR0FBYixVQUFjLE9BQWdCO29CQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztnQkFDUCxxQkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsMkNBaUJDLENBQUEiLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcm9maWxlfSBmcm9tIFwiLi9wcm9maWxlXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZXtcclxuICAgICAgcHJpdmF0ZSBwcm9maWxlczogUHJvZmlsZVtdPSBbXHJcbiAgICAgICAgbmV3IFByb2ZpbGUoJ0RlZmF1bHQgUHJvZmlsZScsIFsnQXVzdGluJywgJ0x5b24nXSlcclxuICAgICAgXTtcclxuXHJcbiAgICAgIHNhdmVOZXdQcm9maWxlKGNpdGllczogc3RyaW5nW10pe1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVOYW1lID0gJ1Byb2ZpbGUnKyB0aGlzLnByb2ZpbGVzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBwcm9maWxlID0gbmV3IFByb2ZpbGUocHJvZmlsZU5hbWUsIGNpdGllcyk7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlcy5wdXNoKHByb2ZpbGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnZXRQcm9maWxlcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVzO1xyXG4gICAgICB9XHJcbiAgICAgIGRlbGV0ZVByb2ZpbGUocHJvZmlsZTogUHJvZmlsZSl7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlcy5zcGxpY2UodGhpcy5wcm9maWxlcy5pbmRleE9mKHByb2ZpbGUpLCAxKTtcclxuICAgICAgfVxyXG59XHJcbiJdfQ==
