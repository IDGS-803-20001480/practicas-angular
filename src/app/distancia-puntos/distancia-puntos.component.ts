import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia-puntos',
  templateUrl: './distancia-puntos.component.html',
  styleUrls: ['./distancia-puntos.component.css']
})
export class DistanciaPuntosComponent {

  x1!: number;
  y1!: number;
  x2!: number;
  y2!: number;
  distancia!: number;
  respuesta!: string;

  validar() {
    if (this.x1 == null || this.y1 == null || this.x2 == null || this.y2 == null) {
      this.respuesta = "Faltan datos";
    } else {
      this.calcularDistancia();
    }
  }

  calcularDistancia() {
    this.distancia = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
    this.respuesta = "La distancia es: " + this.distancia;
  }


}
