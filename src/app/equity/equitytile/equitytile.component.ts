import { Component, OnInit } from '@angular/core';
import {SecurityequityService} from '../shared/securityequity.service';
import {Securityequity} from '../shared/securityequity.model';


@Component({
  selector: 'app-equitytile',
  templateUrl: './equitytile.component.html',
  styleUrls: ['./equitytile.component.css']
})
export class EquitytileComponent implements OnInit {
  
  constructor(private service1:SecurityequityService) { }
  activity:any=[];


  ngOnInit(): void {
    this.refreshactivity(); 
  }

  refreshactivity(){
    this.service1.selectactivity().subscribe(data1=>{
      this.activity=data1;
    });
  }
}
