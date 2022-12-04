import { Component, OnInit } from '@angular/core';
import { PMS3 } from 'src/app/models/PMS3';
import { Pm3Service } from 'src/app/services/pm3.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-find-pm3',
  templateUrl: './find-pm3.component.html',
  styleUrls: ['./find-pm3.component.css']
})
export class FindPm3Component {

  pm3s?: PMS3[] = [];
  id_passed?: any;
  switch_passed?: any;

  table_title: string = "";
  isLoading: boolean = true;
  visible: boolean = false;

  constructor(private PM3Service: Pm3Service) {}

  switch_from_form(_switch: any): void {
    this.switch_passed = _switch.value;
  }

  findPM(id: any) {

    this.id_passed = id.value;
    this.visible = true;

    this.PM3Service.getPM3ById(this.id_passed).subscribe((fetched_pm) => {
      this.isLoading = true;
      let tmp_pm: PMS3;
      // Controllo che sia stato trovato effettivamente qualcosa
      if (fetched_pm != null) {

      // Controllo se si vuole effettuare una ricerca concatenata - mostrare più record nella tabella di visualizzazione
      if (this.switch_passed == true) {
        setTimeout(() => {
          this.table_title = "Record trovati";
          if(this.pm3s?.length == 0) {
            this.pm3s.push(fetched_pm);
            this.isLoading = false;
          } else {
            let find = this.pm3s?.find(element => element.id == fetched_pm.id)?.id;
            if(find === undefined) {
              this.pm3s?.push(fetched_pm);
              this.isLoading = false;
            } else {
              this.isLoading = false;
            }
          }
        }, 2000)
      }

      if (this.switch_passed == false || this.switch_passed == null || this.switch_passed == undefined || this.switch_passed == "") {
        setTimeout(() => {
          this.table_title = "Record trovato";
          this.pm3s = [];
          this.pm3s.push(fetched_pm);
          this.isLoading = false;
        }, 2000)
      }
    } else {
      // Alert personalizzato che avvisa dell'errore
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'PM di tipo 3 non trovato',
        showConfirmButton: false,
        timer: 1500
      });
      this.isLoading = false;
    }
    });
  }

}
