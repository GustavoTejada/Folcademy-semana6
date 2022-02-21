import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Hola clase desde el .ts del componente padre';

  checkComponenteHijo1() {
    console.log('Hola clase desde el .ts del componente hijo 1');
  }

  ejecutarSaludo(saludo: string) {
    console.log(saludo);
  }
}
