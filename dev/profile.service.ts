import {Profile} from "./profile"

export class ProfileService{
      private profiles: Profile[]= [
        new Profile('Default Profile', ['Austin', 'Lyon'])
      ];

      getProfiles(){
        return this.profiles;
      }
      deleteProfile(profile: Profile){
        this.profiles.splice(this.profiles.indexOf(profile), 1);
      }
}
