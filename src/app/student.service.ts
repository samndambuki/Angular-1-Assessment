import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentListSubject = new Subject<any[]>();
  studentList$ = this.studentListSubject.asObservable();

  updateStudentList(students: any[]) {
    this.studentListSubject.next(students);
  }
}
