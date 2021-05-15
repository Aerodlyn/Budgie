import { NgModule } from "@angular/core";
import {
    RouterModule,
    Routes
} from "@angular/router";

import {
    LoginComponent,
    SignupComponent
} from "./components";

const routes: Routes = [
    {
        path: "users",
        children: [
            { path: "login", component: LoginComponent },
            { path: "signup", component: SignupComponent }
        ]
    }
];

@NgModule ({
    imports: [ RouterModule.forRoot (routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
