import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-people-table',
  templateUrl: './show-people-table.component.html',
  styleUrls: ['./show-people-table.component.css']
})
export class ShowPeopleTableComponent{

  @Input() users: any;
  @Input() isLoading: boolean = true;
  @Input() table_title: string = "";

  p: string|number|undefined;
}
