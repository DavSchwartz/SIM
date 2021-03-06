import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameHUDComponent } from './game-hud/game-hud.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: HomepageComponent },
  { path: 'game', component: GameHUDComponent },
  { path: 'register', component: RegistrationComponent},
  { path: 'profile/:id', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
