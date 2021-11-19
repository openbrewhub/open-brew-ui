import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"
import { MatGridListModule } from "@angular/material/grid-list"
import { MatInputModule } from "@angular/material/input"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatMenuModule } from "@angular/material/menu"
import { MatDividerModule } from "@angular/material/divider"
import { MatIconModule } from "@angular/material/icon"
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { OpenBrew, OpenBrewViewModel } from './models/open-brew-model';

// @Injectable()
// export class Globals {
//   language: string = "de"
//   openBrew: OpenBrewViewModel = {} as OpenBrewViewModel;

//   constructor(private httpClient: HttpClient) {
//     this.httpClient.get('assets/open-brew.json', { responseType: 'json' })
//       .subscribe(response => {
//         console.log(JSON.stringify(response))
//         let openBrew = response as OpenBrew;
//         this.openBrew = new OpenBrewViewModel(openBrew, this.language);
//       });
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatInputModule,
    MatDividerModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
