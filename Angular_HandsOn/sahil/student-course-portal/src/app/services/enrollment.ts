import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Enrollment {
  enroll(courseId: number, studentDetails: any) {
    console.log(`Successfully enrolled student in Course ${courseId}. Details:`, studentDetails);
    // In a real app, this would be an HTTP POST
  }
}
