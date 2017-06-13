import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-complete-data',
  templateUrl: './complete-data.component.html',
  styleUrls: ['./complete-data.component.css']
})
export class CompleteDataComponent implements OnInit {
  completeData:{}

  constructor() { }

  ngOnInit() {
    this.completeData={
      "name": localStorage.getItem("name"),
      "last_name":localStorage.getItem("last_name"),
      "telephone":localStorage.getItem("telephone"),
      "email":localStorage.getItem("email"),
      "dni":localStorage.getItem("dni")


    }
  }

 

}
