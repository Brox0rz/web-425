/**
 * Title: sign-in.component.ts
 * Author: Professor Richard Krasso
 * Modified by: Brock Hemsouvanh
 * Date: 05/04/2024
 * Description: Component for handling user sign-in. Manages the authentication form and navigates based on authentication success.
 */

import { Router } from '@angular/router';
import { SignInService } from './sign-in.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup; // FormGroup to manage the sign-in form data.
  errorMessage: string; // String to store error messages.

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }

  /**
   * Initializes the component by setting up the form group for the sign-in process.
   */
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: '' // Initializes form control for student ID.
    });
  }

  /**
   * Handles the form submission. Validates the student ID and manages session cookies and navigation based on the result.
   */
  onSubmit() {
    const formValues = this.signinForm.value; // Extracts the values from the form.
    const studentId = parseInt(formValues.studentId); // Parses the student ID to a number.

    if (this.signinService.validate(studentId)) {
      // If the student ID is valid, set a session cookie and navigate to the homepage.
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      // If validation fails, update the error message to notify the user.
      this.errorMessage = 'The student ID you entered is invalid. Please try again.';
    }
  }
}
