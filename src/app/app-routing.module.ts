import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrivadoComponent} from './componentes/privado/privado.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'privado', component: PrivadoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
