import { Component, OnInit } from '@angular/core';
import { PMS3 } from 'src/app/models/PMS3';
import { Pm3Service } from 'src/app/services/pm3.service';

@Component({
  selector: 'app-pm3',
  templateUrl: './pm3.component.html',
  styleUrls: ['./pm3.component.css']
})
export class Pm3Component implements OnInit{

  pm3s: PMS3[] = [];
  isLoading: boolean = true;
  table_title: string = "Tabella di tutti i PM di tipo 3";

  p: string|number|undefined;

  constructor(private PM3Service: Pm3Service) {}

  ngOnInit(): void {
    this.PM3Service.getAllPM3S().subscribe((fetched_pm3s) => {
      setTimeout(() => {
        this.pm3s = fetched_pm3s;
        this.isLoading = false;
      }, 2000);
    });
  }
}
