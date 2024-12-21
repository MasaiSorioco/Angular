import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { TablaejemploComponent } from './pages/tablaejemplo/tablaejemplo.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'acercade',component:AcercadeComponent},
  {path:'tablaejemplo',component:TablaejemploComponent},
  {path:'**',component:InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
