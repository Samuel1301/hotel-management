import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/authService.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  logOut() {
    this.auth.logout();
  }
}
