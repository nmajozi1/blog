import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { LambdaComponent } from './lambda/lambda.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AngularCardComponent } from './angular-card/angular-card.component';
import { ReactCardComponent } from './react-card/react-card.component';
import { LambdaCardComponent } from './lambda-card/lambda-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    AngularComponent,
    ReactComponent,
    LambdaComponent,
    AngularCardComponent,
    ReactCardComponent,
    LambdaCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
