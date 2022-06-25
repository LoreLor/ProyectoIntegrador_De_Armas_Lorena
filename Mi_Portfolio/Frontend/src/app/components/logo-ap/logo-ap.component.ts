import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login():void{
    Swal.fire('email: example@gmail.com - password: example1234')
    this.router.navigate(["login"])
  }
}
