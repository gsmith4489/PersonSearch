import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../_models/person';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() person: Person;
  public age: any;
  public myDOB: Date;
  public timeDiff: number;

  constructor() { }


  ngOnInit() {
    // Calculate the age
    this.myDOB = this.person.dob;
    this.timeDiff = Math.abs(Date.now() - new Date(this.myDOB).getTime());
    this.age = Math.floor((this.timeDiff / (1000 * 3600 * 24)) / 365.25);
  }



}

