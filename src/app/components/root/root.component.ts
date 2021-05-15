import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component ({
    selector: "budgie-root",
    templateUrl: "./root.component.html"
})
export class RootComponent
{
    private readonly SELF_HANDLED_LAYOUT_PAGES: Array <string> = [
        ""
    ];

    public constructor (public router: Router) {}

    public isOnSelfHandledLayoutPage (): boolean
    {
        const exists = this.SELF_HANDLED_LAYOUT_PAGES.find (
            (route) => this.router.isActive (route, true)
        );
        return typeof exists !== "undefined";
    }
}
