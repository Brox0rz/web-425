/**
 * File: base-layout.component.ts
 * Author: Professor Richard Krasso
 * Description: This component acts as the main layout for the application, providing a consistent structure that includes
 *              a navigation bar and a content area where routed components are displayed.
 * Created: 05/04/2024
 * Modified by: Brock Hemsouvanh on 4/26/2024
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Assignment 7.2 - Reactive Forms';
  }

  ngOnInit(): void {
  }

  signOut() {
this.cookieService.deleteAll();
this.router.navigate(['/session/sign-in']);
  }

}
