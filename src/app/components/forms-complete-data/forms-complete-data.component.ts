import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-complete-data',
  templateUrl: './forms-complete-data.component.html',
  styleUrls: ['./forms-complete-data.component.css']
})
export class FormsCompleteDataComponent implements OnInit {
@Input() completeData :{}= {}
  constructor() { }

  ngOnInit() {
  }
submitCompleteData(form: FormGroup): void {
       
            
    }
}
