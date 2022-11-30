import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/Users';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  users: Users[] = [];
  p: string|number|undefined;

  constructor(private UserService: UserService) {}


  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe((fetchedUsers) => {
      this.users = fetchedUsers;
    });
  }



}
