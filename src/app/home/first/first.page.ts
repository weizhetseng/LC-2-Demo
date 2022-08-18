import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imgname: string = "mz_q";
  imgnames: string[] = ["mz_q", "fdzs_q", "yl_q"]
  imgtheone: string = this.imgnames[0]
  index = 0

  nextgod(): void {
    console.log("000")
    if (this.index >= this.imgnames.length-1 ) {
      this.index = 0;
    } else {
      this.index ++;
    }
    this.imgtheone = this.imgnames[this.index];
  }






}
