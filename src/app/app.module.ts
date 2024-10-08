import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// import { HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { CustomHammerConfig } from 'hammer-config';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    ProfileViewComponent,
    AllProfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    // HammerModule
  ],
  providers: [
    // { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
