import { Component } from '@angular/core';
import { PMS3 } from 'src/app/models/PMS3';
import { Pm3Service } from 'src/app/services/pm3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-pm3',
  templateUrl: './add-pm3.component.html',
  styleUrls: ['./add-pm3.component.css']
})
export class AddPm3Component {

  pm3!: PMS3;

  constructor(private PM3Service: Pm3Service) {}

    add(data_from_form: any) {
      this.PM3Service.savePM3(data_from_form).subscribe((pm) => {
        this.pm3 = pm;
        console.log(pm)
      });

      // Alert personalizzato che avvisa dell'avvenuta aggiunta dell'operatore
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'PM di tipo 3 aggiunto con successo',
        showConfirmButton: false,
        timer: 1500
      });
    }
}
