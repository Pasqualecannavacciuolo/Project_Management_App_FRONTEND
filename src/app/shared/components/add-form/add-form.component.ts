import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{

  registerForm!: FormGroup;
  @Output() people_from_form = new EventEmitter<any>();
  people?: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cf: ['', Validators.required],
    });
  }

  get name() {
    return this.registerForm.get('name');
  }
  get lastname() {
    return this.registerForm.get('lastname');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get cf() {
    return this.registerForm.get('cf');
  }


  passData() {

    this.people = {
      name: this.name?.value,
      lastname: this.lastname?.value,
      email: this.email?.value,
      cf: this.cf?.value
    }

    this.people_from_form.emit(this.people);

  }


}
