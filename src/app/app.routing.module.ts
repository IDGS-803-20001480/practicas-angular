import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CinepolisComponent } from "./cinepolis/cinepolis.component";
import { ResistenciasComponent } from "./resistencias/resistencias.component";
import { DistanciaPuntosComponent } from "./distancia-puntos/distancia-puntos.component";
import { PizzasComponent } from "./pizzas/pizzas.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'Cine', component: CinepolisComponent},
    {path: 'Resistencia', component: ResistenciasComponent},
    {path: 'Distancia', component: DistanciaPuntosComponent},
    {path: 'Pizzas', component: PizzasComponent},
    //{path: '**', component: PagenotFoundComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { 

}