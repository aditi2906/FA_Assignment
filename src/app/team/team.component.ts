import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  team=[{
    id:'1',
    img:'',
    name:'Aditi Tripathi',
    work:'Developer'
  },
  {
    id:'2',
    img:'',
    name:'Yavnika Garg',
    work:'Developer'
  },
  {
    id:'3',
    img:'',
    name:'Ram',
    work:'Designer'
  },
  {
    id:'4',
    img:'../../assets/images/guy4.png',
    name:'Shyam',
    work:'Senior Ux'
  },
  {
    id:'5',
    img:'',
    name:'Addy Trip',
    work:'Backend Developer'
  },
  {
    id:'6',
    img:'',
    name:'Aditi Tripathi',
    work:'Developer'
  },
]

}
