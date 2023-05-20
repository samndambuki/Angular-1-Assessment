import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent {
  name:string;
  id:number;
  feesBalance:number;

  constructor(){
    this.name='';
    this.id=0;
    this.feesBalance=0;
  }

  addStudent(){
    console.log("Adding Student:",this.name,this.id,this.feesBalance);
  }

}
