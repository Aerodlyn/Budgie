import {
  Component,
  OnInit
} from "@angular/core";

@Component ({
    selector: "budgie-welcome",
    templateUrl: "./welcome.component.html",
    styleUrls: [ "./welcome.component.scss" ]
})
export class WelcomeComponent implements OnInit
{
    public constructor () {}

    public ngOnInit(): void {}
}
