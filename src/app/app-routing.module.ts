import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { HomeComponent } from './home/home.component';
import { ReactComponent } from './react/react.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'react', component: ReactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
