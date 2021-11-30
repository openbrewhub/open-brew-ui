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
import { MatDialogModule } from "@angular/material/dialog"
import { MatDividerModule } from "@angular/material/divider"
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon"
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import Amplify, { Auth } from 'aws-amplify';
import { FormsModule } from '@angular/forms';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { environment } from 'src/environments/environment';

Amplify.configure({
  Auth: {
    region: 'eu-central-1',
    userPoolId: 'eu-central-1_LN0rrKu39',
    userPoolWebClientId: '1qg171ntpp8bi48rqdg53j6efp',
    mandatorySignIn: false,
    cookieStorage: {
      domain: environment.production ? ".openbrewhub.com" : 'localhost',
      path: '/',
      expires: 365,
      sameSite: "strict" as any | "lax" as any,
      secure: true
    },
    // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    // authenticationFlowType: 'USER_PASSWORD_AUTH',
    // OPTIONAL - Hosted UI configuration
  }
});

// You can get the current config object
const currentConfig = Auth.configure();

@NgModule({
  schemas: [],
  declarations: [
    AppComponent,
    AddRecipeComponent,
    RecipeComponent,
    SignInDialogComponent,
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
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
