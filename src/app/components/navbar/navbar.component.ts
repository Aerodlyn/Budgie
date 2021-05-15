import {
    Component,
    ElementRef,
    ViewChild
} from "@angular/core";

@Component ({
    selector: "budgie-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: [ "./navbar.component.scss" ]
})
export class NavbarComponent
{
    @ViewChild ("navbarBurger")
    private navbarBurger!: ElementRef;

    @ViewChild ("navbarMenu")
    private navbarMenu!: ElementRef;

    public onBurgerClick (): void
    {
        this.navbarBurger.nativeElement.classList.toggle ("is-active");
        this.navbarMenu.nativeElement.classList.toggle ("is-active");
    }
}
