import { Component } from '@angular/core';
import { IUser, IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials: IUserCredentials = { email: "", password: "" };
  url: string = "";

  constructor(private userService: UserService, private router: Router) { }

  signIn() {
    this.userService.signIn(this.credentials).subscribe({
      next: () => this.router.navigate(['/catalog'])
    });
  }
}