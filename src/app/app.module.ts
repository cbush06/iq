import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { ServicesModule } from 'src/shared/services/services.module';
import { DatabaseService } from 'src/shared/services/database.service';
import { PopulateService } from 'src/shared/services/populate.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ServicesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(private dbSvc: DatabaseService, private popSvc: PopulateService) {
        dbSvc.init();
        popSvc.init();
    }
}
