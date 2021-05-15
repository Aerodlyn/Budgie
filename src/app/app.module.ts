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
    SignupComponent
} from "./components";

@NgModule ({
    declarations: [
        FooterComponent,
        LoginComponent,
        NavbarComponent,
        RootComponent,
        SignupComponent
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
