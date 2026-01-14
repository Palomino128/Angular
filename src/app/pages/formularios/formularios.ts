import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-formularios',
    templateUrl: './formularios.html',
    styleUrls: ['./formularios.css'],
    imports: [CommonModule, FormsModule]
})
export class FormulariosComponent implements OnInit {
     usuario: any;
    users: Array<any> = [];
    paises: Array<any> = []; 

    constructor() {
        this.usuario = {
            nombre:"",
            correo:"",
            telefono:"",
            direccion:"",
            pais:""
        };
    }
    
    ngOnInit(): void {
        this.paises = [
            {
                nombre: "Chile",
                dominio: "cl"
            },
            {
                nombre: "Perú",
                dominio: "pe"
            },
            {
                nombre: "Bolivia",
                dominio: "bo"
            },
            {
                nombre: "Argentina",
                dominio: "ar"
            },
            {
                nombre: "Colombia",
                dominio: "co"
            },
            {
                nombre: "Venezuela",
                dominio: "ve"
            },
            {
                nombre: "Mexico",
                dominio: "mx"
            },
            {
                nombre: "España",
                dominio: "es"
            }
        ];
    }
    
    checkboxMarca: boolean = false;
    
    seleccionacheck(evento:any) {
        if(evento.target.checked) {
            this.checkboxMarca = true;
            alert("si");
        } else {
            this.checkboxMarca = false;
            alert("no");
        }
    }
    
    enviar() {
        this.users.push({
            nombre: this.usuario.nombre,
            correo: this.usuario.correo,
            telefono: this.usuario.telefono,
            direccion: this.usuario.direccion,
            pais: this.usuario.pais
        });
    }
}