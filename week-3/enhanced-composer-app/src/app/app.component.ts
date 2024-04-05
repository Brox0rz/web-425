/**
 * Title: app.component.ts
 * Author(s): Brock Hemsouvanh and Professor Richard Krasso
 * Date: 4-3-2024
 * Description: Angular root component to manage the main view of the app.
 */




import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 3.2 - Passing Data to Routes - Part 1';
}
