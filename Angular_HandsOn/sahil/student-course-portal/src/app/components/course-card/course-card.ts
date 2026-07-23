import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  @Input() course!: { id: number, name: string, code: string, credits: number, gradeStatus: string };
  @Output() enrollRequested = new EventEmitter<number>();
  
  isExpanded = false;
  isEnrolled = false;

  get cardClasses() {
    return {
      'expanded': this.isExpanded,
      'card--enrolled': this.isEnrolled,
      'card--full': this.course.credits >= 4
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      console.log('Course changed from', changes['course'].previousValue, 'to', changes['course'].currentValue);
    }
  }
}
