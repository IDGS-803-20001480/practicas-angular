import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  nombre!:string;
  cantidadCom!:number;
  cantidadBol!:number;
  total!:number;
  subtotal!:number;
  respuesta!:string;


  tarjetaSeleccion:string = "no";
  opcionTarjeta:string[] = ["si","no"];



  validarCompra(){
    this.total = 0;
    if(this.nombre == null || this.nombre == "" || this.cantidadCom == null || this.cantidadCom == 0 || this.cantidadBol == null || this.cantidadBol == 0){
      this.respuesta = "Faltan datos por llenar";
    }else if((this.cantidadBol/this.cantidadCom) > 6){
        this.respuesta ="No se puede comprar mas de 7 boletos por persona"
    }else{
        this.calcularPago();
      }
    
  }

  calcularPago(){
    this.subtotal = this.cantidadBol *12;
    if(this.cantidadBol > 5){
      console.log("entro boletos mas de 5");
      this.subtotal = this.subtotal - (this.subtotal * 0.15);
    }else if(this.cantidadBol >= 3 && this.cantidadBol <= 5){
      console.log("entro boletos entre 3 y 5");
      this.subtotal = this.subtotal - (this.subtotal * 0.10);
     }


    if(this.tarjetaSeleccion == "si"){
      console.log("entro tarjeta");
      this.total = this.subtotal - (this.subtotal * 0.10);
    }else{
      this.total = this.subtotal;
    } 
    this.respuesta = "la compra se realizo con exito";
  }
}
