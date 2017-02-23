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
