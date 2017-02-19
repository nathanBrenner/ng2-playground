/* tslint:disable: member-ordering forin */
import { Component, OnInit,} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BillingData } from './billingData';
import { textValidator, keyValidator } from './customValidators';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html'
})
export class BillingFormComponent implements OnInit {

  states = ['OR', 'CA', 'NV'];
  countries = ['USA']

  billingData = new BillingData('', '','', '', '', 'USA', '');

  onSubmit() {
    this.billingData = this.billingForm.value;
  }

  billingForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.billingForm = this.formBuilder.group({
      'name': ['', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          textValidator(/bob/i)
        ]
      ],
      'streetAddress1': ['', Validators.required],
      'streetAddress2': ['', Validators.required],
      'city': ['', Validators.required],
      'state': [this.states[0], Validators.required],
      'country': [this.countries[0], Validators.required],
      'zip': ['', Validators.required],
    });

    this.billingForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  nameMaxLength = '';
  private limitInputLength(e, maxLength:number) {
    // e is an event
    if(e.target.value.length < maxLength){
      // save the text value in case the user tries to add more than the form control max length
      this.nameMaxLength = e.target.value;
    }
    if(this.billingForm.value.name.length >= maxLength){
      // this prevents the user from setting the value of the input more than the max length
      e.target.value = this.nameMaxLength;
    }
  }

  validatenameValue(e){
    this.limitInputLength(e, 7);

    if(keyValidator(e.key, "abcdefghijklmnopqrstuvwxyz ")) { 
      return false 
    };
  }

  onValueChanged(data?: any) {
    if (!this.billingForm) { return; }
    const form = this.billingForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    name: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    country: '',
    zip: ''
  };

  validationMessages = {
    name: {
      required: 'name is required.',
      minlength: 'name must be at least 4 characters long.',
      maxlength: 'name cannot be more than 20 characters long.',
      invalidText: 'Someone named "Bob" cannot be a hero.'
    },
    streetAddress1: {
      required: 'Street address is required.'
    },
    streetAddress2: {
      required: 'Street address 2 is required.'
    },
    city: {
      required: 'city is required.'
    },
    state: {
      required: 'state is required.'
    },
    country: {
      required: 'country is required.'
    },
    zip: {
      required: 'zip is required.'
    }
  };
}