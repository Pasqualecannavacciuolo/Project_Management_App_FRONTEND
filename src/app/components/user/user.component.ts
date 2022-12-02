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
  isLoading: boolean = true;
  table_title: string = "Tabella di tutti gli operatori";

  p: string|number|undefined;

  constructor(private UserService: UserService) {}


  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe((fetchedUsers) => {
      setTimeout(() => {
        this.users = fetchedUsers;
        this.isLoading = false;
      }, 2000);

    });
  }



}
