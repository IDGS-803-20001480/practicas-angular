import { Component } from '@angular/core';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {

  /* public string nombre { get; set; }
    public string dirreccion { get; set;}
        public int telefono { get; set;}
        public String fecha { get; set;}
        public string tamanio { get; set;}
        public bool jamon { get; set;}
        public bool pinia { get; set;}
        public bool champiniones { get; set;}
        public int Npizzas { get; set;}
        public int subtotal { get; set;}
        public int total { get; set;}
        public ArrayList detalleP { get; set;}*/

  nombre!:string;
  direccion!:string;
  telefono!:number;
  fecha!:string;
  //tamanio!:string;
  jamon= false;
  pinia= false;
  champiniones= false;
  Npizzas!:number;
  subtotal!:number;
  total:number = 0;
  respuesta!:string;

  tamanioSeleccion:string = "chica";
  opcionTamanio:string[] = ["chica","mediana","grande"];

  detalleP:any[] = [];

  Ventas:any[] = [];


  validarCompra(){
    this.fecha = new Date().toLocaleDateString();
    if(this.nombre == null || this.nombre == "" || this.direccion == null || this.direccion == "" || this.telefono == null || this.telefono == 0 || this.fecha == null || this.fecha == "" || this.Npizzas == null || this.Npizzas == 0){
      //this.respuesta = "Faltan datos por llenar";
    console.log("no entro a validar compra");
    }else{
      console.log("entro a validar compra");
      this.AgregarDetalleCompra();
    }
  }

  AgregarDetalleCompra(){

    let totalIngredientes = 0;
    let precioTam = 0;
    let textIng = "";
    this.subtotal = 0;
    if (this.tamanioSeleccion == "chica") { precioTam = 40; }
    else if (this.tamanioSeleccion == "mediana") { precioTam = 80; }
    else if (this.tamanioSeleccion == "grande") { precioTam = 120; }

    if (this.jamon) { totalIngredientes += 10; textIng += "| Jamon "; }
    if (this.pinia) { totalIngredientes += 10; textIng += "| Piña "; }
    if (this.champiniones) { totalIngredientes += 10; textIng += "| Champiniones "; }

    this.subtotal = (precioTam + totalIngredientes) * this.Npizzas;


    let vistaP = {
      tamanio: this.tamanioSeleccion,
      Ingredientes: textIng,
      Npizzas: this.Npizzas,
      subtotal: this.subtotal
    };
    
    this.detalleP.push(vistaP);

    this.calcularTotal();
    console.table(this.detalleP);
  }

  eliminarDetalleCompra(item: object){
    let index = this.detalleP.indexOf(item);
    this.detalleP.splice(index,1);
    this.calcularTotal();
  }

  calcularTotal(){
    let totalV = 0;
    for(let i = 0; i < this.detalleP.length; i++){
      totalV += this.detalleP[i].subtotal;
    }
    this.total = totalV;
  }

  AgregarVenta(){
    let totalV = 0;
    for(let i = 0; i < this.detalleP.length; i++){
      //console.log(this.detalleP[i].subtotal);
      totalV += this.detalleP[i].subtotal;
    }
    let venta = {
      nombre: this.nombre,
      direccion: this.direccion,
      telefono: this.telefono,
      total : totalV
    };
    this.Ventas.push(venta);
    this.limpiarDatos();
  }

  limpiarDatos(){
    this.nombre = "";
    this.direccion = "";
    this.telefono = 0;
    this.Npizzas = 0;
    this.jamon = false;
    this.pinia = false;
    this.champiniones = false;
    this.tamanioSeleccion = "chica";
    this.subtotal = 0;
    this.total = 0;
    this.detalleP = [];
  }
  



}
