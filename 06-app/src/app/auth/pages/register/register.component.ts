import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserCredential } from 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  register() {
    const { email, password } = this;
    const auth = getAuth(); // Obtener instancia de autenticación de Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        console.log('Registro exitoso:', userCredential);
      })
      .catch((error: any) => {
        console.error('Error de registro:', error);
      });
  }
}
