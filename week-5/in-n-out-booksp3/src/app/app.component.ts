/**
 * Title: app.component.ts
 * Author: Professor Richard Krasso
 * Modified by: Brock Hemsouvanh
 * Date: 4/21/24
 * Description: Component file for managing the application root with navigation and data table functionalities.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;

  constructor() {
    // Initializes the assignment string to the title of the current exercise, showcasing data table functionality.
    this.assignment = 'Exercise 5.4 - Dialogues'
  }
}
