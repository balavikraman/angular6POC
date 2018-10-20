import{ Validator, AbstractControl} from '@angular/forms';
import{Directive} from '@angular/core';
@Directive({
    selector:'[CustomValidator]'
})

export class CustomValidatorDirective implements Validator{
    validate(control:AbstractControl):{[key:string]:any}|null{
       return control.value==='2'?{defaultSelected:true}:null
    }
}