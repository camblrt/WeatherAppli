import {Profile} from "./profile"

//Display the default profile : the Austin's and Lyon's weather

export class ProfileService{
      private profiles: Profile[]= [
        new Profile('Default Profile', ['Austin', 'Lyon'])
      ];

      getProfiles(){//Display the default cities
        return this.profiles;
      }
      deleteProfile(profile: Profile){//Delete the profile
        this.profiles.splice(this.profiles.indexOf(profile), 1);
      }
}
