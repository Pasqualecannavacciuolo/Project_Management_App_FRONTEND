import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PMS3 } from 'src/app/models/PMS3';
import { Pm3Service } from 'src/app/services/pm3.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-find-pm3',
  templateUrl: './find-pm3.component.html',
  styleUrls: ['./find-pm3.component.css']
})
export class FindPm3Component implements OnInit {

  findPM3Form!: FormGroup;
  pm3?: PMS3;
  pm3s?: PMS3[] = [];
  showRecordFound: boolean = false;

  constructor(private fb: FormBuilder, private PM3Service: Pm3Service) { }


  ngOnInit(): void {
    this.findPM3Form = this.fb.group({
      id: ['', Validators.required],
      switch: ['']
    });
  }

  get id() {
    return this.findPM3Form.get('id');
  }

  get switch() {
    return this.findPM3Form.get('switch');
  }

  findPM(multipleSearches: any) {
    this.PM3Service.getPM3ById(this.id?.value).subscribe((fetched_pm) => {
      console.log(this.switch?.value);
      // Controllo che sia stato trovato effettivamente qualcosa
      if (fetched_pm != null) {
      // Controllo se si vuole effettuare una ricerca concatenata - mostrare più record nella tabella di visualizzazione
      if (this.switch?.value == true) {
          this.pm3s?.push(fetched_pm);
      } else if (this.switch?.value == false || this.switch?.value == null) {
        this.pm3s = [];
        console.log(this.pm3s)
        this.pm3 = fetched_pm;
      }
      this.showRecordFound = true;
      console.log(this.pm3s?.length)
    } else {
      // Alert personalizzato che avvisa dell'avvenuta aggiunta dell'operatore
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'PM di tipo 3 non trovato',
        showConfirmButton: false,
        timer: 1500
      });
    }
    });
  }

}
