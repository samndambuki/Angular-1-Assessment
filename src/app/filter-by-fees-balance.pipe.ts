import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { student } from 'src/interface.student';

@Pipe({
  name: 'filterByFeesBalance',
  pure:true
})

export class FilterByFeesBalancePipe implements PipeTransform {


  transform(students:student[], hasBalance:boolean):student[] {
    let filteredStudent:student[] = []
    
    for(let student of students)
    {
      if (hasBalance ) {
        let x = students.filter(student=>student.feesBalance>0)
        filteredStudent=x
      } else {
        let x = students.filter(student=>student.feesBalance<=0)
        filteredStudent=x
      }
    }

    return filteredStudent
  
  }
}
