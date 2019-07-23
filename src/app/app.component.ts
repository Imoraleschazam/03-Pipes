import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = "Ivan";
  nombre2 = "IvAn mOraLes cRuz";
  pass = "Ivan2019";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    Nombre: 'Peter Parker',
    Clave: 'Hombre Araña',
    Edad: '35',
    Direccion: {

    Ciudad: 'New York',
    Casa: '20'
    }
  };

valorDePromesa = new Promise( ( resolve, reject )=>{
  setTimeout( ()=>resolve('llego la data!'), 3500 );
});

fecha = new Date();

video = "bYsebQKLyMQ";

activar:boolean = true;


}
