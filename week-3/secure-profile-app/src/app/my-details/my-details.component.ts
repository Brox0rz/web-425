/**
 * File name: my-details.component.ts
 * File description: Component logic for my-details.
 * Author(s): Brock Hemsouvanh and Professor Richard Krasso
 * Date created: 2024-03-24
 */

import { Component, OnInit } from '@angular/core';

export class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2024", "#CodingWithAngular", "ngSanDiego"
  ];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString() {
    console.log(`\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Brock Hemsouvanh", "Polenta", "Teal");
    this.myProfile.toString();
   }

  ngOnInit(): void {
  }

}
