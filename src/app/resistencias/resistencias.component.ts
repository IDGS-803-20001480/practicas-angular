import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
 //calculador de resistencias
  banda1!:string;
  banda2!:string;
  banda3!:string;
  banda4!:string;
  resultado!:number;
  respuesta!:string;
  minimo:number = 0;
  maximo:number = 0;

  bandColor:string[] = ["black","brown","red","orange","yellow","green","blue","violet","gray","white"];
  bandValue:number[] = [0,1,2,3,4,5,6,7,8,9];
  bandaMultiColor:string[] = ["black","brown","red","orange","yellow","green","blue","violet","gray","white","gold","silver"]
  bandMulti:number[] = [1,10,100,1000,10000,100000,1000000,10000000,100000000,0.1,0.01];
  bandToleranciaColor:string[] = ["gold","silver"];
  bandTolerancia:number[] = [5,10];

  validarResistencia(){
    if(this.banda1 == null || this.banda1 == "" || this.banda2 == null || this.banda2 == "" || this.banda3 == null || this.banda3 == ""){
      this.respuesta = "Faltan datos por llenar";
    }else{
      this.calcularResistencia();
    }
  }

  calcularResistencia(){
    this.resultado = (this.bandValue[this.bandColor.indexOf(this.banda1)]*10 + 
    this.bandValue[this.bandColor.indexOf(this.banda2)])*
    this.bandMulti[this.bandaMultiColor.indexOf(this.banda3)];
    this.minimo = this.resultado - (this.resultado * this.bandTolerancia[this.bandToleranciaColor.indexOf(this.banda4)]/100);
    this.maximo = this.resultado + (this.resultado * this.bandTolerancia[this.bandToleranciaColor.indexOf(this.banda4)]/100);
    this.respuesta = "El valor de la resistencia es: " + this.resultado + " ohms ± " + this.bandTolerancia[this.bandToleranciaColor.indexOf(this.banda4)];
  }
  
}
