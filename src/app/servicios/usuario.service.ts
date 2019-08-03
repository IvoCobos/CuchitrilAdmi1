import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore} from 'angularfire2/firestore';
import { Usuarios } from '../models/usuarios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuariosCollection: AngularFirestoreCollection<Usuarios>;
  usuarios: Observable<Usuarios[]>;
  usuariosDoc: AngularFirestoreDocument<Usuarios>;

  constructor(public afs:AngularFirestore) {
    this.usuarios = afs.collection('usuarios').valueChanges();
   }


   getUsuarios(){
    return this.usuarios;
  }
}


