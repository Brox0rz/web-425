import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  transcriptEntry: ITranscript = {} as ITranscript;
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0; // Holds the calculated GPA

  ngOnInit(): void {
  }

  saveEntry(): void {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript; // Reset the entry for new input
  }

  calculateResults(): void {
    let totalGpa = 0; // Temp variable to hold GPA total before averaging
    this.transcriptEntries.forEach(entry => {
      totalGpa += this.convertGradeToPoints(entry.grade); // Convert each grade to a GPA value
    });
    this.gpaTotal = this.transcriptEntries.length > 0 ? totalGpa / this.transcriptEntries.length : 0; // Calculate average GPA
  }

  // Clear all entries from the transcript and reset GPA total
  clearEntries(): void {
    this.transcriptEntries = []; // Clear the array of transcript entries
    this.gpaTotal = 0; // Reset the GPA total
  }

  private convertGradeToPoints(grade: string): number {
    switch (grade) {
      case 'A': return 4.0;
      case 'A-': return 3.7;
      case 'B+': return 3.3;
      case 'B': return 3.0;
      case 'B-': return 2.7;
      case 'C+': return 2.3;
      case 'C': return 2.0;
      case 'C-': return 1.7;
      case 'D+': return 1.3;
      case 'D': return 1.0;
      case 'D-': return 0.7;
      case 'F': return 0;
      default: return 0; // Handle unexpected grades
    }
  }
}
