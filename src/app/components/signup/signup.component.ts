import { Component } from "@angular/core";
import {
    AbstractControl,
    FormBuilder,
    ValidationErrors,
    ValidatorFn,
    Validators
} from "@angular/forms";

import { FormComponent } from "../form/form.component";

@Component ({
    selector: "budgie-signup",
    templateUrl: "./signup.component.html"
})
export class SignupComponent extends FormComponent
{
    public get password (): AbstractControl | null
        { return this.form.get ("password"); }

    public get passwordConfirmation (): AbstractControl | null
        { return this.form.get ("passwordConfirmation"); }

    public get username (): AbstractControl | null
        { return this.form.get ("username"); }

    public constructor (private _fb: FormBuilder)
    {
        super (_fb);

        this.form = this.fb.group ({
            username: this.fb.control (null, Validators.required),
            password: this.fb.control (null, [ Validators.required, Validators.minLength (8) ]),
            passwordConfirmation: this.fb.control (null, [ Validators.required ])
        }, { validators: this.passwordMismatchValidator () });
    }

    public onSubmit (): void
    {
        if (this.form.valid) {}
        else this.validateAllControls ();
    }

    private passwordMismatchValidator (): ValidatorFn
    {
        return (control: AbstractControl): ValidationErrors | null => {
            const equals = control.get ("password")?.value === control.get ("passwordConfirmation")?.value;
            return equals ? null : { "mismatch": true };
        };
    }
}
