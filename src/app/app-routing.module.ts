import { NgModule } from "@angular/core";
import {
    RouterModule,
    Routes
} from "@angular/router";

import {
    LoginComponent,
    SignupComponent,
    WelcomeComponent
} from "./components";

export const ROUTES: Routes = [
    {
        path: "users",
        children: [
            { path: "login", component: LoginComponent },
            { path: "signup", component: SignupComponent }
        ]
    },
    {
        path: "",
        component: WelcomeComponent
    }
];

@NgModule ({
    imports: [ RouterModule.forRoot (ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
