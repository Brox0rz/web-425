/*
 * Title: composer-class.ts
 * Author: Brock Hemsouvanh & Professor Richard Krasso
 * Date: 2024-04-01
 * Description: Composer class (Part of enhanced-composer-app Angular project)
 *
 */

import { IComposer } from './composer.interface';

export class Composer {
  composers: Array<IComposer> = [
    {
      composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical"
    },
    {
      composerId: 101, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
    },
    {
      composerId: 102, fullName: "Johann Sebastian Bach", genre: "Baroque"
    },
    {
      composerId: 103, fullName: "Franz Schubert", genre: "Classical"
    },
    {
      composerId: 104, fullName: "Johannes Brahms", genre: "Romantic"
    },
  ];

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
