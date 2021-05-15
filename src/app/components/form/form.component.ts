import { Directive } from "@angular/core";
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup
} from "@angular/forms";

@Directive ()
export abstract class FormComponent
{
    public form!: FormGroup;

    protected constructor (protected fb: FormBuilder) {}

    public isControlInvalid (control: AbstractControl): boolean
        { return control.invalid && (control.dirty || control.touched); }

    public validateAllControls (): void
        { this._validateAllControls (this.form); }

    private _validateAllControls (form: FormGroup)
    {
        Object.keys (form.controls)
            .forEach ((field) => {
                const control = form.get (field);
                
                if (control instanceof FormControl) control.markAsTouched ({ onlySelf: true });
                else if (control instanceof FormGroup) this._validateAllControls (control);
            });
    }
}
