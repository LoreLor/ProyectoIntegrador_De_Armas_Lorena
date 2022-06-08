import { HardService } from './../../../service/api/hard.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hard } from 'src/app/models/Hard';

@Component({
  selector: 'app-hard-mostrar',
  templateUrl: './hard-mostrar.component.html',
  styleUrls: ['./hard-mostrar.component.css']
})
export class HardMostrarComponent implements OnInit {
  hards: Hard[] = [];
  hard: Hard = new Hard;

  constructor(private router: Router, private http: HardService) { }

  ngOnInit(): void {
    this.http.getHard()
      .subscribe((data: any) =>
        this.hards = data
      )
  }

  editarHard(id: number): void {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["editarHard"])
    localStorage.getItem("id")
    console.log(id)
    window.location.reload()
  }

  eliminarHard(hard: Hard) {
    this.http.deleteHard(hard)
      .subscribe((data: any) => {
        this.hards = this.hards.filter(p => p !== hard)
        this.router.navigate(["dashboard"])
      })
  }
}
