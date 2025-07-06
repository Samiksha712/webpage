// loginpage.ts (updated)
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-loginpage',
  standalone: true, // Mark as standalone if not part of a module
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule here
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css'
})
export class Loginpage {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor() { }

  handleSignIn(): void {
    // In a real application, you would handle authentication here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // You would typically call an authentication service here
    alert('Sign In button clicked! (Actual authentication not implemented)'); // Use a custom modal in a real app
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}