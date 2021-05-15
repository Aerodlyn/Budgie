import { Component } from "@angular/core";
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from "@angular/forms";

import { FormComponent } from "../form/form.component";

@Component ({
    selector: "budgie-login",
    templateUrl: "./login.component.html"
})
export class LoginComponent extends FormComponent
{
    public form: FormGroup;

    public get password (): AbstractControl | null
        { return this.form.get ("password"); }

    public get username (): AbstractControl | null
        { return this.form.get ("username"); }

    public constructor (protected _fb: FormBuilder)
    {
        super (_fb);

        this.form = this.fb.group ({
            username: this.fb.control (null, Validators.required),
            password: this.fb.control (null, Validators.required)
        });
    }

    public onSubmit (): void
    {
        if (this.form.valid) {}
        else this.validateAllControls ();
    }
}
