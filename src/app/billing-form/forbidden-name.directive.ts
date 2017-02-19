import { AbstractControl, ValidatorFn } from '@angular/forms';

export function textValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const name = control.value;
    const no = nameRe.test(name);
    return no ? {'invalidText': {name}} : null;
  };
}

export function keyValidator(key, acceptableKeys){
	if (acceptableKeys.indexOf(key) < 0){
		// if the key the user tried to use is in the second param
		// allow that key be used
			return true;
	}
	// otherwise, don't allow the key be used
	return false;
}

/*
These two functions serve the same purpose: make an input invalid if the user types in the keys 

The first method lets the user put in the sequence of keys, like bob, and makes that form control invalid

The second doesn't let the user use the keys at all, but doesn't currently provide any feedback.

*/