import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  @Input() profile: any;
  protected isSelected: boolean = true;

  constructor(private router: Router){}

  public yes() {
    this.router.navigate(['/view']);
  }

  public no() {

  }
  
}
