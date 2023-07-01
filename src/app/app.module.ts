import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CinepolisModule } from './cinepolis/cinepolis.module';
import { ResistenciasModule } from './resistencias/resistencias.module';
import { DistanciaPuntosModule } from './distancia-puntos/distancia-puntos.module';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CinepolisModule,
    ResistenciasModule,
    DistanciaPuntosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
