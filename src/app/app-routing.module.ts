import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';

const routes: Routes = [
  { path: 'view', component: ProfileViewComponent },
  { path: '', component: AllProfilesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
