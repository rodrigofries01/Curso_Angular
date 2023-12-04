import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Otis';

  userData = {
    email: 'otis@gato.com',
    role: 'Admin'

  }

  title = 'curso-angular';
}
