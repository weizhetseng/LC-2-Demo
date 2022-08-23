import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

close(){
  const a = document.querySelector('.alert') as HTMLElement;
  a.style.display = 'none';
}
}
