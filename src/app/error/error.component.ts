import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() msgerror: any;
  @Input() dataToggle: any;
  @Input() dataTarget: any;

  constructor() { }

  ngOnInit(): void {
  }

}
