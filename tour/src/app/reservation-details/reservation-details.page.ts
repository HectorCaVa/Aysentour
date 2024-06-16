import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/backend/package.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.page.html',
  styleUrls: ['./reservation-details.page.scss'],
})
export class ReservationDetailsPage implements OnInit {
  reservations: any[] = [];
  username: string = '';

  constructor(private packageService: PackageService) { }

  ngOnInit() {
    this.username = localStorage.getItem('username') || '';

    if (this.username) {
      this.packageService.getReservationsByUsername(this.username)
        .then(reservations => {
          this.reservations = reservations;
        })
        .catch(error => {
          console.error('Error fetching reservations:', error);
        });
    } else {
      console.error('Username not found in local storage');
    }
  }
}
