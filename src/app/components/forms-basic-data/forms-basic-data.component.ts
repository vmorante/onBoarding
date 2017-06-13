import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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

  comprobarEmail(email1,email2){
    

    if(email1==email2){
     
    return false;
    }else
    return true;
  }

   submitBasicData(form: FormGroup): void {
       var  userForms=form.value;
    
       localStorage.setItem("name",JSON.stringify(userForms.name))  
       localStorage.setItem("last_name",JSON.stringify(userForms.last_name))   
       localStorage.setItem("telephone",JSON.stringify(userForms.telephone))   
       localStorage.setItem("email",JSON.stringify(userForms.email))   
            
    }

}
