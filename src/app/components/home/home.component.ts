import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PMS3 } from 'src/app/models/PMS3';
import { Users } from 'src/app/models/Users';
import { UserService } from 'src/app/services/user.service';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  registerUserForm!: FormGroup;
  user?: Users;

  constructor(private fb: FormBuilder, private UserService: UserService) {}

  ngOnInit(): void {
    this.registerUserForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      cf: ['', Validators.required],
    });
  }

  get name() {
    return this.registerUserForm.get('name');
  }
  get lastname() {
    return this.registerUserForm.get('lastname');
  }
  get email() {
    return this.registerUserForm.get('email');
  }
  get cf() {
    return this.registerUserForm.get('cf');
  }


  registerUser() {

    this.user = {
      //id: uuidv4(),
      name: this.name?.value,
      lastname: this.lastname?.value,
      email: this.email?.value,
      cf: this.cf?.value
      //pm3s: new Set<PMS3>
    }

    this.UserService.saveUser(this.user).subscribe((u) => {
      this.user = u;
      console.log(u)
    });

  }

}
