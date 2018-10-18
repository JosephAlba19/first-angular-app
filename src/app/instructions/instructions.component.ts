import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { myService } from '../my-service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  public images = [];
  constructor(private myService: MyServiceService) { }

  ngOnInit() {
    this.myService.getStuff().subscribe(data => this.images = data);
  }

}
