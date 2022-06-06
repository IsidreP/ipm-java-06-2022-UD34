import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//Declaracion de variables
pantalla: any = 0;
num1: any = 0;
num2 = 0;
opera;

//Función que coloca el número presionado
darNumero(numero){
  if(this.pantalla==0 && this.pantalla !== '0.'){
      this.pantalla = numero;
  }else{
      this.pantalla += numero;
  }
}

//Función que coloca la C al presionar dicho botón
darC(){
  this.pantalla = 0;
  this.num2 = 0;
}

//Función que coloca la coma al presionar dicho botón
darComa(){
  if(this.pantalla == 0) {
    this.pantalla = '0.';
  } else if(this.pantalla.indexOf('.') == -1) {
    this.pantalla += '.';
  }
}

//Esta función realiza las distintas operaciones aritméticas en función del botón pulsado
operar(valor){
  if (this.pantalla == 0){
    this.pantalla = parseFloat(this.pantalla);
  }
  this.num2 = parseFloat(this.pantalla);
  this.pantalla= 0;
  this.opera = valor;
}

//Función para pulsar igual
    /*
  suma = 1
  resta = 2
  multiplicacion = 3
  division = 4
  potencia = 5
*/

esIgual(){
  this.pantalla = parseFloat(this.pantalla);
  switch (this.opera){
      case 1:
        this.pantalla += this.num2;
      break;
      case 2:
        this.pantalla = this.num2 - this.pantalla;
      break;
      case 3:
        this.pantalla *= this.num2;
      break;
      case 4:
        this.pantalla = this.num2 / this.pantalla;
      break;
  }
  this.num2 = parseFloat(this.pantalla);
  //this.pantalla = 0;
}

// Función para hacer la raiz cuadrada
raiz(){
  this.pantalla = Math.sqrt(this.pantalla);
}

// Función para hacer el porcentaje
porcentaje(){
  this.pantalla = this.pantalla/100;
}
// Función para hacer la inversa
inversa(){
  this.pantalla = 1/this.pantalla;
}

// Función para hacer la negación
negativo(){
  this.pantalla = -this.pantalla
}

}
