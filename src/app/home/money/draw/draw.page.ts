import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-draw',
  templateUrl: './draw.page.html',
  styleUrls: ['./draw.page.scss'],
})
export class DrawPage implements OnInit {
  constructor(private location: Location ) { }

  ionViewWillEnter(){
   this.ans = 0
   this.displaytype1 = "none";
   this.displaytype2 = "none";
   this.displaytype3 = "none";
   this.displaytype4 = "none";
   this.displaytype5 = "inline";
  }

  git1URL :string="../../../../assets/gif/fortune-telling.gif";
  git2URL :string="../../../../assets/gif/擲筊.gif";
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
  filenames:string[] = ["mzimg","ylimg"];
  filename? :string
  imgname:string = "1";
  drawimgs :string[] = ["lol.png","reject.png","agreed.png"]
  index = 0
  drawimg? :string


  open() :void {
  if (this.dtype == "mz"){
    this.filename = this.filenames[0];
    this.imgname = String(this.ans);
  }else if (this.dtype == "gl"){
    this.filename = this.filenames[1];
    this.imgname = String(this.ans);
  }
  this.displaytype4 = "inline";
  }
  
    drawsmz():Number{
      let i = Math.random();
      i = i*60;
      i = Math.floor(i)+1;
      return i;
    }
  
    drawsgl():Number{
      let i = Math.random();
      i = i*40;
      i = Math.floor(i)+1;
      return i;
    }
  
    draws():void{
      if(   (this.dtype == "mz") || (this.dtype == "gl")  
      ){
      if ( this.dtype == "mz"){
        this.ans = this.drawsmz();
        this.displaytype5 = "none"
      }else if (this.dtype == "gl"){
        this.ans = this.drawsgl();
        this.displaytype5 = "none"
      // }else{
      //   this.ans = 99999999;
      //   this.displaytype5 = "none"
      }
      this.displaytype1 = "inline";
      if (this.displaytype2 == "inline"){
        this.displaytype2 = "none";
        this.displaytype3 = "none";
        this.displaytype4 = "none";
        this.displaytype5 = "inline"
      }
    }else{
      alert("請選擇籤種")
    }

    }
  
    draw2():void{
   let numm = Math.random();
   numm = numm * 81 % 3;
   numm = Math.floor(numm)+1;
   if(numm == 1){
    this.drawans = "聖筊，請點選按鈕查看籤詩結果。"
    this.displaytype3 = "inline";
    this.displaytype6 = "none";
    this.drawimg = this.drawimgs[2]
   }else if (numm ==  2){
    this.drawans = "笑筊，請重新抽籤或詢問問題"
    this.drawimg = this.drawimgs[0]
    this.displaytype6 = "none";
   }else if (numm ==  3){
    this.drawans = "蓋筊，請重新抽籤或詢問問題"
    this.drawimg = this.drawimgs[1]
    this.displaytype6 = "none";
   }else{
      this.drawans = "出四啦!趕快通知廟方進行維修!"
    }
    this.displaytype2 = "inline";
   }
   ngOnInit() {
  }
  
  goBack(): void { 
    this.location.back(); 
  }


}
