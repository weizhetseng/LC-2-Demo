import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {

displaytop :string = "inline"

close():void {
  this.displaytop = "none"
}


  constructor() { }

  ngOnInit() {
  }

}
