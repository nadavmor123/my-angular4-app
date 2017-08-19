import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  arr = null;
  topDeal = null;
  itemMaxNum = 20000;

  constructor() { 
      this.arr = [];
      this.topDeal = {};
  }

  ngOnInit() {

   this.arr = [
     {
      name:"Amazing Series 1.x",
      text:"The amazing product you must have",
      img:"/assets/images/img1.jpg",
      price:49.90
     },{
      name:"Amazing Series 1.x",
      text:"The amazing product you must have",
      img:"/assets/images/img1.jpg",
        price:49.90
     },{
      name:"Amazing Series 1.x",
      text:"The amazing product you must have",
      img:"/assets/images/img1.jpg",
        price:49.90
     },{
      name:"Amazing Series 1.x",
      text:"The amazing product you must have",
      img:"/assets/images/img1.jpg",
        price:49.90
     },{
      name:"Amazing Series 1.x",
      text:"The amazing product you must have",
      img:"/assets/images/img1.jpg",
        price:49.90
     }
   ];

   this.topDeal = this.arr[0];

  }

}
