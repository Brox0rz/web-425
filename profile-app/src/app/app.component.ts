/**
 * File name: app.component.ts
 * File description: Main TS component for the app.
 * Author(s): Brock Hemsouvanh and Professor Richard Krasso
 * Date created: 2024-03-24
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true
  assignment: string = 'Exercise 2.3 - Data Binding';
}
