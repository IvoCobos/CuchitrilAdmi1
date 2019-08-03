import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrivadoComponent } from './componentes/privado/privado.component';

import {AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { AuthService } from './servicios/auth.service';
import { from } from 'rxjs';
import { AuthGuard } from './guards/auth.guard';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { UsuarioService } from './servicios/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    PrivadoComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Cuchitril'),
    FlashMessagesModule,
    AngularFirestoreModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
