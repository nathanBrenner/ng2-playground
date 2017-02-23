# schedule a meeting 
- 2 way binding, change tracking, validation, error handling

## template driven forms:
- use FormsModule
- use 2 way data binding: ngModel
- angular internally creates a FormControl instance
- template reference varibles set to our ngForm and ngModel
	ngSubmit, and show errors
- async 

## reactive forms
- explicit management of the data flowing data model on the server, and the ui form model that retains state and values of the html controls
- form control with child input controls: form tree is created in code
- value and validitiy is sync
- component preservers the immutability of the data model
- no two way binding, no ngModel

### steps
- import reactiveFormsModule in app.module

#### Component
- create status-form-reactive and add to app component
- import FormControl, FormBuilder, and Validators in reactive component
- assign statusForm with type FormGroup
- inject FormBuilder
- create statusFormErrors property, buildForm method, onValueChanged method, validationMessages property, submit property
- ngOnInit: instantiate BuildForm
- Buildform:
	- 3 functions:
		- create your form controls
			- each control should match a property on your model
			- each is assigned an array with the initial value, and a single validator or an array of validators
		- suscribe to the form.valuechanges
			- on change, run onValueChanged
		- instantiate onValueChanged
- validationMessages:
	- object with properties for each input control
		- each input control is an object with properties for each validator with the value as the string
-statusFormErrors: opject with property for each input control set to an empty string
- onValueChanged
	- param: data optional, any type
		- check if the form is truthy, otherwise return
	- loup through each field in the formErrors object
		- reset the formErrors field to an empty string
		-get the value of the control in that form 
		- check if it's truthy, and invalid
		- if it is, loup through all the errors on that form and add it to the status form errors
- submit: if param form is valid, emit onSubmit
- template:
	- take out all template reference vars, name, ngModel
	- assign formGroup attribute to statusForm (from the compoent)
	- assign formControlName to the formControl (works like name and ngModel)

### Component
```
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-status-form-reactive',
  templateUrl: './status-form-reactive.component.html',
  styleUrls: ['./status-form-reactive.component.css']
})
export class StatusFormReactiveComponent implements OnInit {
  @Output() onsubmit = new EventEmitter();

  statusForm: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm()
  }

  statusFormErrors = {
    name: '',
    status: '',
  }
  validationMessages = {
    name: {
      required: 'Name is required'
    },
    status: {
      required: 'Status is required'
    }
  }

  buildForm(){
    this.statusForm = this.formBuilder.group({
      name: ['', Validators.required],
      status: ['', Validators.required]
    });

    this.statusForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }
  onValueChanged(data?: any){
    if(!this.statusForm) return;
    const form = this.statusForm;
    for (const field in this.statusFormErrors){
      this.statusFormErrors[field] = '';
      const control = form.get(field);
      if(control && control.dirty && control.invalid){
        const messages = this.validationMessages[field];
        for(const key in control.errors){
          this.statusFormErrors[field] += messages[key]
        }
      }
    }
  }

  submit(form){
    if(form.valid){
      this.onsubmit.emit(form.value);
    }
  }
}
```

### template
```
  <div class="container">
  <form 
    [formGroup]="statusForm"
    (ngSubmit)="onSubmit(statusForm)">
    <md-input-container>
      <input 
        required 
        mdInput 
        type="text" 
        placeholder="Child name"
        formControlName="name">
    </md-input-container>
    <div *ngIf="statusFormErrors.name">
      {{statusFormErrors.name}}
    </div>
    <br>
    <md-input-container>
      <input 
        required 
        mdInput 
        type="text" 
        placeholder="status"
        formControlName="status">
    </md-input-container>
    <div *ngIf="statusFormErrors.status">
      {{statusFormErrors.status}}
    </div>
    <br>
    <button md-button type="submit">Update</button>
  </form>
</div>
```