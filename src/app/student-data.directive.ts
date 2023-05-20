import { Directive, ElementRef,Input, OnChanges, SimpleChanges } from '@angular/core';



@Directive({
  selector: '[appStudentData]'
})

export class StudentDataDirective implements OnChanges {
  @Input('appStudentData') feesBalance:number;

  constructor(private elementRef:ElementRef)  {
    this.feesBalance=0;
   }

  ngOnChanges(changes: SimpleChanges) {
    this.setStudentData();
  }

  private setStudentData(){
    if (this.feesBalance > 0) {
      this.elementRef.nativeElement.style.color = 'green';
    } else if (this.feesBalance < 0) {
      this.elementRef.nativeElement.style.color = 'red';
    } else {
      this.elementRef.nativeElement.style.color = 'black';
    }
  }
}
