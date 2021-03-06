import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { identity } from 'rxjs';

interface bookingInfo {
  name: String;
  contactNumber: String;
  email: String;
  bookingInfo: {
    check_in: Date;
    check_out: Date;
    roomType: String;
  };
  _id?: Object;
}

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  checkIn = '';
  checkOut = '';
  roomType = '';
  firstName = '';
  lastName = '';
  contact = '';
  email = '';
  bookings: bookingInfo[] = [];
  ngOnInit(): void {
    this.http
      .get<bookingInfo[]>('http://localhost:3000/hotel/api/v1/bookings')
      .subscribe((responseData) => {
        console.log(responseData);
        this.bookings = responseData;
      });
  }

  onSubmit(formData: NgForm) {
    console.log(formData);
    this.checkIn = formData.value.checkIn;
    this.checkOut = formData.value.checkOut;
    this.roomType = formData.value.roomType;
    this.firstName = formData.value.firstName;
    this.lastName = formData.value.lastName;
    this.contact = formData.value.phone;
    this.email = formData.value.email;
    this.http
      .post<String>('http://localhost:3000/hotel/api/v1/bookings', {
        checkIn: this.checkIn,
        checkOut: this.checkOut,
        roomType: this.roomType,
        firstName: this.firstName,
        lastName: this.lastName,
        contact: this.contact,
        email: this.email,
      })
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  delBooking(id: any) {
    console.log(id);
    this.http
      .post('http://localhost:3000/hotel/api/v1/booking/delete', {
        _id: id,
      })
      .subscribe((Response) => {
        console.log(Response);
      });
  }
}
