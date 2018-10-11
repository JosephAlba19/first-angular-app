import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-firstcomponent',
  templateUrl: './my-firstcomponent.component.html',
  styleUrls: ['./my-firstcomponent.component.css']
})
export class MyFirstcomponentComponent implements OnInit {

  name = '';
  constructor() { }

  ngOnInit() { }

}
