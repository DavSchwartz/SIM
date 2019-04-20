import { Component, OnInit } from '@angular/core';
import { USERS } from '../../db';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name = new FormControl('');
  username = new FormControl('');
  password = new FormControl('');

  constructor() { }

  ngOnInit() {
  }
  register() {
    USERS.push({id: USERS.length+1,
                name: this.name.value,
                username: this.username.value,
                password: this.password.value,
                wins: 0,
                losses: 0,
                rank: null});
  }
}
