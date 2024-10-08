import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.scss']
})
export class AllProfilesComponent {
  profiles: any[] = [];

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileService.getProfiles().subscribe((data) => {
      this.profiles = data;
    });
  }

  private touchstartX: number = 0;
  private touchendX: number = 0;

  onTouchStart(event: TouchEvent) {
    this.touchstartX = event.changedTouches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchendX = event.changedTouches[0].clientX;
  }

  onTouchEnd(profile: any) {
    this.handleSwipe(profile);
  }

  private handleSwipe(profile: any) {
    const threshold = 50; 
    const swipeDistance = this.touchendX - this.touchstartX;

    if (swipeDistance > threshold) {
      console.log(`Profile accepted: ${profile.name}`);
    } else if (swipeDistance < -threshold) {
      console.log(`Profile rejected: ${profile.name}`);
    }
  }
}
