import { Component, Input } from '@angular/core';
import { Users } from 'src/app/models/Users';

@Component({
  selector: 'app-show-people-table',
  templateUrl: './show-people-table.component.html',
  styleUrls: ['./show-people-table.component.css']
})
export class ShowPeopleTableComponent{

  @Input() users: Users[] = [];
  @Input() isLoading: boolean = true;
  @Input() table_title: string = "";

  p: string|number|undefined;
}
