import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  
  getColorTheme;
  color;
  deals;
  topDeal;
  itemMaxNum = 20000;

  constructor() { 
     this.color = "";
      this.deals = [];
      this.topDeal = {};
  }

  ngOnInit() {

   this.deals = [
     {
        data:[
         "Free Shipping",
          "New",
          "00:02:09",
       ],
      name:"Amazing Series 1.x",
      provider:"Amazon",
      text:"The amazing product you must have, The amazing product you must have .",
      img:"/assets/images/img1.jpg",
      price:49.90,
      discount:"72"
    
     },{
       data:[
         "Free Shipping",
          "New",
          "00:02:09",
       ],
      name:"Amazing Series 1.x",
      provider:"Amazon",
      text:"The amazing product you must have, The amazing product you must have .",
      img:"/assets/images/img1.jpg",
      price:49.90,
      discount:"68"
     },{
       data:[
         "Free Shipping",
          "New",
          "00:02:09",
       ],
      name:"Amazing Series 1.x",
      provider:"Amazon",
      text:"The amazing product you must have, The amazing product you must have .",
      img:"/assets/images/img1.jpg",
      price:49.90,
      discount:"66"
     },{
       data:[
         "Free Shipping",
          "New",
          "00:02:09",
       ],
      name:"Amazing Series 1.x",
      provider:"Amazon",
      text:"The amazing product you must have, The amazing product you must have .",
      img:"/assets/images/img1.jpg",
      price:49.90,
      discount:"45"
     
     },{
      data:[
         "Free Shipping",
          "New",
          "00:02:09",
       ],
      name:"Amazing Series 1.x",
      provider:"Amazon",
      text:"The amazing product you must have, The amazing product you must have .",
      img:"/assets/images/img1.jpg",
      price:49.90,
      discount:"40"
     }
   ];

   this.getColorTheme = function(styleElem , percent){

      let pre = "";
      
      if(styleElem == 'border'){
        pre = "2px solid "
      }
     
      if(percent > 70){
        return pre + 'lightcoral';
      }else if(percent > 50 && percent < 70 ){
        return pre + '#ff8000';
      }else if(percent < 50){
        return pre + '#ffdb4d';
      }
   }

   this.topDeal = this.deals[0];

  }

}
