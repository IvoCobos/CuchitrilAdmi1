import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/usuarios';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      console.log(usuarios);
    })
  }

}
