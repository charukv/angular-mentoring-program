import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appCoursePlate]",
})
export class CoursePlateDirective {
  color: string;

  @Input() set appCoursePlate(color) {
    this.color = color;
  };

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.style.border = `2px solid ${this.color}`
  }
  
}
