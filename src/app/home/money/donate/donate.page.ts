import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {

  constructor() { }
  displaytop :string = "inline"
  ngOnInit() {
  }

  close():void {
    this.displaytop = "none"
  }


}
