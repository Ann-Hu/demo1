import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title="The will will web!!!"
  titleurl="http://blog.miniasp.com/"
  subtitle="記載著 Will 在網路世界的學習心得與技術分享^^"
  constructor() { }

  ngOnInit() {
  }

  num: number  =10
  changeTitle($event){
    this.num++
    console.log($event)
    if($event.shiftKey){
      this.title = this.title + "$$$$"
    }
  }

  getClass(){
   return {
       'red': this.num%2==0,
       'blue': this.num%2==1
     };
  }
}
