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
import { HttpClientModule } from '@angular/common/http';

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
