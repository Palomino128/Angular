import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-formularios2',
    templateUrl: './formularios2.html',
    styleUrls: ['./formularios2.css'],
      imports: [CommonModule, ReactiveFormsModule] 

})
export class Formularios2Component implements OnInit {
    formulario!: FormGroup;  
    paises: Array<any> = [];
    usuario = {
        nombre: "",
        correo: "", 
        telefono: "",
        direccion: "",
        pais: ""
    };

 constructor() {}

    ngOnInit(): void {
        this.formulario = new FormGroup({
            nombre: new FormControl(
                this.usuario.nombre,
                [
                    Validators.required,
                    Validators.minLength(4)
                ]
            ),
            correo: new FormControl(
                this.usuario.correo,
                [
                    Validators.required,
                    Validators.minLength(4),
                    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
                ]
            ),
            telefono: new FormControl(
                this.usuario.telefono,
                [
                    Validators.required,
                    Validators.minLength(4)
                ]
            ),
            direccion: new FormControl(
                this.usuario.direccion,
                [
                    Validators.required,
                    Validators.minLength(4)
                ]
            ),
            pais: new FormControl()
        });

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

    // invocacion de los métodos getter de los formulario
    get nombre() { return this.formulario.get('nombre'); }
    get correo() { return this.formulario.get('correo'); }
    get telefono() { return this.formulario.get('telefono'); }
    get direccion() { return this.formulario.get('direccion'); }
    get pais() { return this.formulario.get('pais'); }

    enviar() {
        let datos = 'nombre: ' + this.formulario.value.nombre + 
                   ' E-Mail: ' + this.formulario.value.correo + 
                   ' Telefono: ' + this.formulario.value.telefono + 
                   ' Direccion: ' + this.formulario.value.direccion + 
                   ' País: ' + this.formulario.value.pais;
        
  console.log(datos);
        alert(datos);
    }
}