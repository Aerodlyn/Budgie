import {
  ComponentFixture,
  TestBed
} from "@angular/core/testing";

import { NavbarComponent } from "./navbar.component";

describe ("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture <NavbarComponent>;

  beforeEach (async () => {
    await TestBed.configureTestingModule ({
      declarations: [ NavbarComponent ]
    }).compileComponents ();

    fixture = TestBed.createComponent (NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges ();
  });

  describe ("#onBurgerClick", () => {
    it ("should set is-active on both the nav burger and menu", () => {
      component.onBurgerClick ();

      // @ts-ignore
      expect (component.navbarBurger.nativeElement.classList).toContain ("is-active");
      
      // @ts-ignore
      expect (component.navbarMenu.nativeElement.classList).toContain ("is-active");
    });
  });
});
