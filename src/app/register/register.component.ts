import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myForm:FormGroup
  constructor (
    private fb:FormBuilder
    ){
      this.myForm = this.fb.group({
        nombre:["",[Validators.required]],
        apellido:["",[Validators.required]],
        telefono:[""],
        correo:["",[Validators.required]],
        clave:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      })

  }
  registrarse(){
    console.log(this.myForm.value)
  }


}
