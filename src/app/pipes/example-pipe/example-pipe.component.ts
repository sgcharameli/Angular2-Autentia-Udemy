import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-pipe',
  templateUrl: './example-pipe.component.html',
  styleUrls: ['./example-pipe.component.css']
})
export class ExamplePipeComponent implements OnInit {

  fecha: Date;
  numero: number;
  mensajes: string[];
  mensajesMapping: {[k: string]: string};
  usuario: any;
  usuarioMapping: {[k: string]: string};

  constructor() { }

  ngOnInit() {
    this.fecha = new Date();
    this.numero = 12.123456789;
    this.mensajes = ['uno', 'dos', 'tres'];
    this.mensajesMapping = {'=0': 'No hay mensajes',
    '=1': 'Solo hay un mensaje', 'other': 'Tienes # mensajes'};
    this.usuario = {apellido: 'Sánchez', sexo: 'Mujer'};
    this.usuarioMapping = {'Hombre': 'Sr.', 'Mujer': 'Sra.', 'other': 'Cosa.'};
  }

}
