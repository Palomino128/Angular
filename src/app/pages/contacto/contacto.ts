import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',   // 👈 tu convención sin ".component"
  styleUrl: './contacto.css'
})
export class ContactoComponent {
  contactoForm: FormGroup;
  enviado = false;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  get f() { return this.contactoForm.controls; }

  onSubmit() {
    this.enviado = true;
    if (this.contactoForm.invalid) return;

    console.log(this.contactoForm.value);
    alert('Formulario enviado con éxito!');
    this.contactoForm.reset();
    this.enviado = false;
  }
}
