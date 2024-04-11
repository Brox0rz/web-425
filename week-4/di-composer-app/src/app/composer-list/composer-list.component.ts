/*
 * Title: composer-list.component.ts
 * Author: Brock Hemsouvanh & Professor Richard Krasso
 * Date: 2024-04-10
 * Description: Composer list component for the enhanced-composer-app Angular project.
 * This component is responsible for displaying a list of composers.
 */

// Importing necessary Angular core modules and services
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface'; // Interface for composer objects
import { ComposerService } from '../composer.service'; // Service to retrieve composer data

// Component decorator with metadata including selector, template URL, and style URLs
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Property to hold an array of composers, initialized to an empty array
  composers: Array<IComposer>;

  // Constructor injecting ComposerService to fetch composer data
  constructor(private composerService: ComposerService) {
    // Using the composerService to populate the composers array with composer data
    this.composers = this.composerService.getComposers();
  }

  // Lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
  ngOnInit(): void {
    // This method is intentionally left blank as initialization logic is performed in the constructor
  }
}
