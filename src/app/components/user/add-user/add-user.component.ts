import { Component } from '@angular/core';
import { Users } from 'src/app/models/Users';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent{

  user?: Users;

  constructor(private UserService: UserService) {}

    add(data_from_form: any) {
      console.log(data_from_form)
      this.UserService.saveUser(data_from_form).subscribe((user) => {
        this.user = user;
        console.log(this.user)
      });

      // Alert personalizzato che avvisa dell'avvenuta aggiunta dell'operatore
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Operatore aggiunto con successo',
        showConfirmButton: false,
        timer: 1500
      });
    }
}
