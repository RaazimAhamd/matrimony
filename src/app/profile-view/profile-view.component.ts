import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent {
  profiles: any[] = [];

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileService.getProfiles().subscribe((data) => {
      this.profiles = data;
    });
  }
}
