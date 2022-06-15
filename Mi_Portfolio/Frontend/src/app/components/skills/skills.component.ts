import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hard } from 'src/app/models/Hard';
import { Soft } from 'src/app/models/Soft';
import { HardService } from 'src/app/service/api/hard.service';
import { SoftService } from 'src/app/service/api/soft.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  hardskills:Hard[] = [];
  hardskill:Hard = new Hard();
  softs:Soft[]=[];
  soft:Soft = new Soft;

  constructor(private router: Router, private http: HardService, private http1: SoftService) { }

  ngOnInit(): void {
    this.http.getHard()
      .subscribe((data:any) => {
        this.hardskills = data;
      })
      this.http1.getSoft()
      .subscribe((data:any) => {
        this.softs = data
      })
  }


}
