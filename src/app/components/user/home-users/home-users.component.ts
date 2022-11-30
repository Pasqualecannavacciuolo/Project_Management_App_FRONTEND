import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/Users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-users',
  templateUrl: './home-users.component.html',
  styleUrls: ['./home-users.component.css']
})
export class HomeUsersComponent implements OnInit{

  users: Users[] = [];

  constructor(private UserService: UserService) {}


  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe((fetchedUsers) => {
      this.users = fetchedUsers;
    });
  }



}
