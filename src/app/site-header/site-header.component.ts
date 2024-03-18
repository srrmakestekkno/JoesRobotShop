import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  user: IUser | null = null;
  showSignOutMenu: Boolean = false;

  constructor(private userSvc: UserService) { }

  ngOnInit(): void {
    this.userSvc.getUser().subscribe({
      next: (user) => { this.user = user }
    })
  }

  toggleSingOutMenu(): void {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut(): void {
    this.userSvc.signOut();
    this.showSignOutMenu = false;
  }
}
