webpackJsonp([1],{0:function(e,t,o){e.exports=o("cDNt")},PYEE:function(e,t,o){t=e.exports=o("rP7Y")(!1),t.push([e.i,"",""]),e.exports=e.exports.toString()},Uk9M:function(e,t,o){"use strict";o.d(t,"a",function(){return s});var i=o("/oeL"),n=this&&this.__decorate||function(e,t,o,i){var n,c=arguments.length,s=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(s=(c<3?n(s):c>3?n(t,o,s):n(t,o))||s);return c>3&&s&&Object.defineProperty(t,o,s),s},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){this.itemMaxNum=2e4,this.color="",this.deals=[],this.topDeal={}}return e.prototype.ngOnInit=function(){this.deals=[{data:["Free Shipping","New","00:02:09"],name:"Amazing Series 1.x",provider:"Amazon",text:"The amazing product you must have, The amazing product you must have .",img:"/assets/images/img1.jpg",price:49.9,discount:"72"},{data:["Free Shipping","New","00:02:09"],name:"Amazing Series 1.x",provider:"Amazon",text:"The amazing product you must have, The amazing product you must have .",img:"/assets/images/img1.jpg",price:49.9,discount:"68"},{data:["Free Shipping","New","00:02:09"],name:"Amazing Series 1.x",provider:"Amazon",text:"The amazing product you must have, The amazing product you must have .",img:"/assets/images/img1.jpg",price:49.9,discount:"66"},{data:["Free Shipping","New","00:02:09"],name:"Amazing Series 1.x",provider:"Amazon",text:"The amazing product you must have, The amazing product you must have .",img:"/assets/images/img1.jpg",price:49.9,discount:"45"},{data:["Free Shipping","New","00:02:09"],name:"Amazing Series 1.x",provider:"Amazon",text:"The amazing product you must have, The amazing product you must have .",img:"/assets/images/img1.jpg",price:49.9,discount:"40"}],this.getColorTheme=function(e,t){var o="";return"border"==e&&(o="2px solid "),t>70?o+"lightcoral":t>50&&t<70?o+"#ff8000":t<50?o+"#ffdb4d":void 0},this.topDeal=this.deals[0]},e}();s=n([Object(i.n)({selector:"app-my-component",template:o("iT8V"),styles:[o("PYEE")]}),c("design:paramtypes",[])],s)},"aR8+":function(e,t,o){"use strict";o.d(t,"a",function(){return a});var i=o("fc+i"),n=o("/oeL"),c=o("wQAS"),s=o("Uk9M"),d=this&&this.__decorate||function(e,t,o,i){var n,c=arguments.length,s=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(s=(c<3?n(s):c>3?n(t,o,s):n(t,o))||s);return c>3&&s&&Object.defineProperty(t,o,s),s},a=function(){function e(){}return e}();a=d([Object(n.L)({declarations:[c.a,s.a],imports:[i.a],providers:[],bootstrap:[c.a]})],a)},cDNt:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("/oeL"),n=o("Qa4U"),c=o("aR8+");o("p5Ee").a.production&&Object(i._19)(),Object(n.a)().bootstrapModule(c.a)},efyd:function(e,t){e.exports='<div id="main-con">\n    <app-my-component></app-my-component>\n</div>'},hxJY:function(e,t,o){t=e.exports=o("rP7Y")(!1),t.push([e.i,"",""]),e.exports=e.exports.toString()},iT8V:function(e,t){e.exports='<div class="row">\n    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\n        <div id="top-deal">\n            <div class="row">\n                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\n                    <div class="row">\n                        <div id="top-icon" [ngStyle]="{\'background\': getColorTheme(\'background\', topDeal.discount)}">\n                            {{topDeal.discount}} off\n                        </div>\n                    </div>\n                </div>\n                <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">\n                    <img [src]="topDeal.img" id="top-deal-img" />\n                </div>\n            </div>\n\n\n            <div class="row no-margin">\n                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6" id="top-deal-price">\n                    <div class="price" [ngStyle]="{\'color\': getColorTheme(\'color\', topDeal.discount)}">\n                        ${{topDeal.price}}\n                    </div>\n                </div>\n                <div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-xs-6" id="top-deal-provider">\n                    <div class="text">\n                        {{topDeal.provider}}\n                    </div>\n                </div>\n            </div>\n            <div class="row no-margin">\n                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text" id="mid-text">\n                    {{topDeal.text}}\n                </div>\n            </div>\n            <div class="bottom-row">\n                <div *ngFor="let d of topDeal.data" class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\n                    <div class="text" id="bottom-text">{{d}}</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12" *ngFor="let deal of deals | slice:1:itemMaxNum; let i=index">\n        <div class="side-deal" [ngStyle]="{\'border\': getColorTheme(\'border\', deal.discount)}">\n            <div class="row">\n                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n                    <div class="row">\n                        <div id="top-icon" [ngStyle]="{\'background\': getColorTheme(\'background\', deal.discount)}">\n                            {{topDeal.discount}} off\n                        </div>\n                    </div>\n                    <div class="row">\n                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text" id="bottom-mid-text">\n                            {{topDeal.text}}\n                        </div>\n                    </div>\n                </div>\n                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n                    <div id="side-deal-img">\n                        <img [src]="deal.img" />\n                    </div>\n                </div>\n            </div>\n            <div class="row no-margin">\n                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6" id="top-deal-price">\n                    <div class="price" [ngStyle]="{\'color\': getColorTheme(\'color\', deal.discount)}">\n                        ${{deal.price}}\n                    </div>\n                </div>\n                <div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-xs-6" id="top-deal-provider">\n                    <div class="text">\n                        {{deal.provider}}\n                    </div>\n                </div>\n            </div>\n            <div class="bottom-row">\n                <div *ngFor="let d of deal.data" class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\n                    <div class="text" id="bottom-text">{{d}}</div>\n                </div>\n            </div>\n        </div>\n    </div>'},ixMg:function(e,t){function o(e){return new Promise(function(t,o){o(new Error("Cannot find module '"+e+"'."))})}o.keys=function(){return[]},o.resolve=o,e.exports=o,o.id="ixMg"},p5Ee:function(e,t,o){"use strict";o.d(t,"a",function(){return i});var i={production:!1}},wQAS:function(e,t,o){"use strict";o.d(t,"a",function(){return c});var i=o("/oeL"),n=this&&this.__decorate||function(e,t,o,i){var n,c=arguments.length,s=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(s=(c<3?n(s):c>3?n(t,o,s):n(t,o))||s);return c>3&&s&&Object.defineProperty(t,o,s),s},c=function(){function e(){this.title="app"}return e}();c=n([Object(i.n)({selector:"app-root",template:o("efyd"),styles:[o("hxJY")]})],c)}},[0]);