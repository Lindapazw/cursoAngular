import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    const { email, password } = this;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/main/inicio']); // Redirigir al usuario a "/main/inicio"
      })
      .catch((error: any) => {
        console.error('Error de inicio de sesión:', error);
      });
  }
}
