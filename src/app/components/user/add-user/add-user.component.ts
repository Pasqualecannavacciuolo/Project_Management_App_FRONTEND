import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/models/Users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  registerUserForm!: FormGroup;
  user?: Users;
  visibleError: boolean = false;

  constructor(private fb: FormBuilder, private UserService: UserService) {}

  ngOnInit(): void {
    this.registerUserForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
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
