import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PMS3 } from 'src/app/models/PMS3';
import { Pm3Service } from 'src/app/services/pm3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-pm3',
  templateUrl: './add-pm3.component.html',
  styleUrls: ['./add-pm3.component.css']
})
export class AddPm3Component {
  registerPM3Form!: FormGroup;
  pm3?: PMS3;

  constructor(private fb: FormBuilder, private PM3Service: Pm3Service) {}

  ngOnInit(): void {
    this.registerPM3Form = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cf: ['', Validators.required],
    });
  }

  get name() {
    return this.registerPM3Form.get('name');
  }
  get lastname() {
    return this.registerPM3Form.get('lastname');
  }
  get email() {
    return this.registerPM3Form.get('email');
  }
  get cf() {
    return this.registerPM3Form.get('cf');
  }


  registerUser() {

    this.pm3 = {
      //id: uuidv4(),
      name: this.name?.value,
      lastname: this.lastname?.value,
      email: this.email?.value,
      cf: this.cf?.value
      //pm3s: new Set<PMS3>
    }

    this.PM3Service.savePM3(this.pm3).subscribe((pm) => {
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
