import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { ROUTES } from "../../app-routing.module";
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { RootComponent } from "./root.component";

describe ("RootComponent", () => {
    beforeEach (async () => {
        await TestBed.configureTestingModule ({
            imports: [
                RouterTestingModule.withRoutes (ROUTES)
            ],
            declarations: [
                FooterComponent,
                NavbarComponent,
                RootComponent
            ]
        }).compileComponents ();
    });

    it ("should create the app", () => {
        const fixture = TestBed.createComponent (RootComponent);
        const app = fixture.componentInstance;
    
        expect (app).toBeTruthy ();
    });

    describe ("#isOnSelfHandledLayoutPage", () => {
        it ("should return true if on the landing page ('')", () => {
            const router = TestBed.inject (Router);
            router.navigate ([ "" ]);

            const fixture = TestBed.createComponent (RootComponent);
            const app = fixture.componentInstance;
        
            expect (app.isOnSelfHandledLayoutPage ()).toBeTrue ();
        });

        it ("should return false if on the login page ('/users/login')", async () => {
            const router = TestBed.inject (Router);
            await router.navigate ([ "/users/login" ]);

            const fixture = TestBed.createComponent (RootComponent);
            const app = fixture.componentInstance;
        
            expect (app.isOnSelfHandledLayoutPage ()).toBeFalse ();
        });
    });
});
