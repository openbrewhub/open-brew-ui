import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[obWort]',
  templateUrl: './wort.component.html',
  styleUrls: ['./wort.component.scss']
})
export class WortComponent implements OnInit {
  @Input() model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
