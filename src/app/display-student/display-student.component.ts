import { Component } from '@angular/core';
import { student } from 'src/interface.student';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent {
  students:student[]=[
    {name:"Samuel Ndambuki",id:1,feesBalance:3000},
    {name:"Esther Baaru",id:2,feesBalance:-4000},
    {name:"Samson Kinyanjui",id:3,feesBalance:0},
    {name:"Simon Murimi",id:4,feesBalance:90}
  ];

  // constructor(private studentService: StudentService) { }
  // ngOnInit() {
  //   this.studentService.studentList$.subscribe(students => {
  //     this.students = students;
  //   });
  // }
}
