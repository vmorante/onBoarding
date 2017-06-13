import { Component, OnInit } from '@angular/core';

import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-forms-basic-data',
  templateUrl: './forms-basic-data.component.html',
  styleUrls: ['./forms-basic-data.component.css']
})
export class FormsBasicDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   submitBasicData(form: FormGroup): void {
       var  userForms=form.value;
            
       localStorage.setItem("name",JSON.stringify(userForms.name))  
       localStorage.setItem("last_name",JSON.stringify(userForms.last_name))   
       localStorage.setItem("telephone",JSON.stringify(userForms.telephone))   
       localStorage.setItem("email",JSON.stringify(userForms.email))   
            
    }

}
