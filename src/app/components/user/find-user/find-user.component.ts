import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/models/Users';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit{

  findUserForm!: FormGroup;
  user?: Users;
  users?: Users[] = [];
  showRecordFound: boolean = false;

  constructor(private fb: FormBuilder, private UserService: UserService) {}


  ngOnInit(): void {
    this.findUserForm = this.fb.group({
      id: ['', Validators.required],
      switch: ['']
    });
  }

  get id() {
    return this.findUserForm.get('id');
  }

  get switch() {
    return this.findUserForm.get('switch');
  }

  findUser(multipleSearches: any) {
    this.UserService.getUserById(this.id?.value).subscribe((u) => {
      console.log(this.switch?.value);
      if(this.switch?.value == true) {
        this.users?.push(u);
      } else if(this.switch?.value == false || this.switch?.value == null){
        this.users = [];
        console.log(this.users)
        this.user = u;
      }
      this.showRecordFound = true;
      console.log(this.users?.length)
    });
  }

}
