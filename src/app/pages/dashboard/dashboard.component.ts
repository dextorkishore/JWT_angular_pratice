import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private http: HttpClient) {
    this.loadUsers();
  }
  loadUsers() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/User/GetAllUsers')
      .subscribe((res: any) => {
        this.http = res.data;
      });
  }
}
