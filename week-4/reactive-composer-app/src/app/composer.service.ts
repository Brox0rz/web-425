 /*
 * Title: composer-class.ts
 * Author: Brock Hemsouvanh & Professor Richard Krasso
 * Date: 2024-04-10
 * Description: Composer class (Part of enhanced-composer-app Angular project)
 *
 */

// Importing Injectable from Angular core to make this service available for dependency injection
import { Injectable } from '@angular/core';
// Importing IComposer interface to type-check our composers
import { IComposer } from './composer.interface';
// Importing Observable and of from rxjs to work with reactive programming concepts
import { Observable } from 'rxjs';
import { of } from 'rxjs';

// @Injectable decorator marks this class as one that participates in the dependency injection system
@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  // Property: An array of IComposer objects, representing a list of composers
  composers: Array<IComposer> = [
    { composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical" },
    { composerId: 101, fullName: "Wolfgang Amadeus Mozart", genre: "Classical" },
    { composerId: 102, fullName: "Johann Sebastian Bach", genre: "Baroque" },
    { composerId: 103, fullName: "Franz Schubert", genre: "Classical" },
    { composerId: 104, fullName: "Johannes Brahms", genre: "Romantic" },
  ];

  // getComposers(): Method to get the list of composer objects
  getComposers(): Observable<IComposer[]> {
    return of(this.composers); // Returns the array of composers - wrapped inside an Observable
  }

  // getComposer(composerId: number): Method to find a composer by their ID
  getComposer(composerId: number): IComposer | undefined {
    // Using the Array.find() method to search through composers array
    // Returns the composer if found, otherwise undefined
    return this.composers.find(composer => composer.composerId === composerId);
  }
}
