/*
 * Title: composer-list.component.ts
 * Author: Brock Hemsouvanh & Professor Richard Krasso
 * Date: 2024-03-30
 * Description: Composer list component (Part of composer-app Angular project)
 *
 */


import { Component, OnInit } from '@angular/core';

export class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer> = [
    new Composer("Ludwig van Beethoven", "Classical"),
    new Composer("Wolfgang Amadeus Mozart", "Classical"),
    new Composer("Johann Sebastian Bach", "Baroque"),
    new Composer("Franz Schubert", "Classical"),
    new Composer("Johannes Brahms", "Romantic")
  ];


  ngOnInit(): void {
  }
}
