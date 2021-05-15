import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { RootComponent } from "./root.component";

describe ("RootComponent", () => {
    beforeEach (async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
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
});
