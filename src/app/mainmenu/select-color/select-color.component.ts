import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
  styleUrls: ['./select-color.component.css']
})
export class SelectColorComponent implements OnInit {
  
  selected = 'none';

  constructor() { }

  ngOnInit(): void {
  }

}
