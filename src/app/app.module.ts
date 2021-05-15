import { NgModule } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    RootComponent,
    SignupComponent,
    WelcomeComponent
} from "./components";

@NgModule ({
    declarations: [
        FooterComponent,
        LoginComponent,
        NavbarComponent,
        RootComponent,
        SignupComponent,
        WelcomeComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [ RootComponent ]
})
export class AppModule {}
