import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DistanciaPuntosComponent } from './distancia-puntos.component';



@NgModule({
  declarations: [DistanciaPuntosComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DistanciaPuntosComponent]
})
export class DistanciaPuntosModule { }
