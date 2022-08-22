import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; 


@Component({
  selector: 'app-draws',
  templateUrl: './draws.page.html',
  styleUrls: ['./draws.page.scss'],
})
export class DrawsPage implements OnInit {
constructor(private location: Location ,) { }

dtype? : String;
ans : Number = 0;
drawans? :String;
displaytype1:string="none";
displaytype2:string="none";
displaytype3:string="none";
displaytype4:string="none";
displaytype5:string="inline";
displaytype6:string="inline";
//   ../../../../assets/image/mzimg/Divination_MaZu_1.png
filename:string = "mzimg";
imgname:string = "1";
divination:string = "lol.png";


open() :void {
  this.displaytype5 = "none";
if (this.dtype == "mz"){
  this.imgname = String(this.ans);
}else if (this.dtype == "gl"){
  this.filename = "ylimg";
  this.imgname = String(this.ans);
}
this.displaytype4 = "inline";
this.displaytype5 = "none";
}

  drawsmz():Number{
    let i = Math.random();
    i = i*60;
    i = Math.floor(i)+1;
    return i;
  }

  drawsgl():Number{
    let i = Math.random();
    i = i*10;
    i = Math.floor(i)+1;
    return i;
  }

  draws():void{
    if ( this.dtype == "mz"){
      this.ans = this.drawsmz();
    }else if (this.dtype == "gl"){
      this.ans = this.drawsgl();
    }else{
      this.ans = 99999999;
    }
    this.displaytype1 = "inline";
    if (this.displaytype2 == "inline"){
      this.displaytype2 = "none";
      this.displaytype3 = "none";
      this.displaytype4 = "none";
    }
  }

  draw2():void{
 let numm = Math.random();
 numm = numm * 81 % 3;
 numm = Math.floor(numm)+1;
 if(numm == 1){
  this.drawans = "聖筊，請點選按鈕查看籤詩結果。"
  this.divination = "agreed.png"
  this.displaytype3 = "inline";
 }else if (numm ==  2){
  this.drawans = "笑筊，請重新抽籤或詢問問題"
  this.divination = "lol.png"
 }else if (numm ==  3){
  this.drawans = "蓋筊，請重新抽籤或詢問問題"
  this.divination = "reject.png"
 }else{
    this.drawans = "出四啦!趕快通知廟方進行維修!"
  }
  this.displaytype2 = "inline";
  this.displaytype5 = "inline";
  this.displaytype6 = "none";
 }
 ngOnInit() {
  
}


ionViewWillLeave(){
  console.log("ionViewWillEnter")
  this.ans  = 0;
  this.displaytype1 = "none";
  this.displaytype2 = "none";
  this.displaytype3 = "none";
  this.displaytype4 = "none";
  this.displaytype5 = "inline";
  this.displaytype6 = "inline";
  this.filename = "mzimg";
  this.imgname = "1";
  this.divination = "lol.png";
}



goBack(): void { 
  this.location.back(); 
}

  }