(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{gJaB:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class a{constructor(l){this.route=l,this.slidesOptions={zoom:{toggle:!1}}}get isShell(){return!(!this.details||!this.details.isShell)}ngOnInit(){this.route.data.subscribe(l=>{l.data.state.subscribe(l=>{this.details=l},l=>{})},l=>{})}}var o=e("y+sA");class i{constructor(l){this.dealsService=l}resolve(){const l=this.dealsService.getDetailsDataSource();return this.dealsService.getDetailsStore(l)}}const r=i;class d{}var c=e("pMnS"),s=e("MKJQ"),u=e("sZkV"),g=e("OtoI"),p=e("dAQS"),m=e("M4wD"),h=e("B7gC"),C=e("6LEC"),b=e("2gss"),v=e("TAV1"),O=e("zK/y"),f=e("SVse"),M=e("ykzn"),P=e("iInd"),_=t["\u0275crt"]({encapsulation:0,styles:[['@charset "UTF-8";[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-shade);--page-swiper-pagination-space:30px;--page-swiper-pagination-height:18px;--page-pagination-bullet-size:10px;--page-countdown-fill-shadow-color:rgba(var(--ion-color-darkest-rgb), 0.2);--page-expired-color:var(--ion-color-medium-tint);--page-ends-soon-color:#FFAB6B;--page-distant-end-color:#70DF70;--page-deal-color:var(--ion-color-medium);--page-color:#70DF70;--ion-color-claim:#70DF70;--ion-color-claim-rgb:112,223,112;--ion-color-claim-contrast:#FFFFFF;--ion-color-claim-contrast-rgb:255,255,255;--ion-color-claim-shade:#63C463;--ion-color-claim-tint:#7EE27E}[_nghost-%COMP%]   .ion-color-claim[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-claim)!important;--ion-color-base-rgb:var(--ion-color-claim-rgb)!important;--ion-color-contrast:var(--ion-color-claim-contrast)!important;--ion-color-contrast-rgb:var(--ion-color-claim-contrast-rgb)!important;--ion-color-shade:var(--ion-color-claim-shade)!important;--ion-color-tint:var(--ion-color-claim-tint)!important}.deals-details-content[_ngcontent-%COMP%]{--background:var(--page-background)}.deals-details-content.ended[_ngcontent-%COMP%]{--page-deal-color:var(--page-expired-color)}.deals-details-content.imminent-end[_ngcontent-%COMP%]{--page-deal-color:var(--page-distant-end-color)}.deals-details-content.ends-soon[_ngcontent-%COMP%]{--page-deal-color:var(--page-ends-soon-color)}.deals-details-content.distant-end[_ngcontent-%COMP%]{--page-deal-color:var(--page-distant-end-color)}.deals-details-content[_ngcontent-%COMP%]   .expiration-countdown[_ngcontent-%COMP%]{color:var(--ion-color-lightest);background-color:var(--ion-color-danger);padding:calc(var(--page-margin)/ 2) var(--page-margin);position:-webkit-sticky;position:sticky;top:0;z-index:8;text-align:center;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.deals-details-content[_ngcontent-%COMP%]   .expiration-countdown[_ngcontent-%COMP%]   .expiration-lead[_ngcontent-%COMP%]{padding:0 calc(var(--page-margin)/ 2);text-transform:uppercase;font-weight:500;font-size:14px}.deals-details-content[_ngcontent-%COMP%]   .expiration-countdown[_ngcontent-%COMP%]   app-countdown-timer.item-countdown[_ngcontent-%COMP%]{--countdown-margin:0px;--countdown-padding:0px 3px;--countdown-time-margin:0px 2px;--countdown-time-padding:0px 2px;--countdown-inner-time-margin:0px 2px 0px 0px;--countdown-inner-time-padding:calc(var(--page-margin) / 2) 0px;--countdown-fill-border:none;--countdown-fill-border-radius:var(--app-narrow-radius);--countdown-fill-background:var(--ion-color-lightest);--countdown-fill-shadow:0px 0px 5px 0px var(--page-countdown-fill-shadow-color);--countdown-value-color:var(--ion-color-darkest);--countdown-unit-color:var(--ion-color-medium-shade);padding:0 calc(var(--page-margin)/ 4);font-size:14px;font-weight:500}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]{margin:var(--page-margin);border-radius:var(--app-broad-radius);background-color:var(--ion-color-lightest)}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%]{--bullet-background:var(--ion-color-primary);--bullet-background-active:var(--ion-color-primary);height:100%;width:100%;border-radius:var(--app-broad-radius) var(--app-broad-radius) 0 0}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{height:100%;width:100%;padding:0;padding-bottom:var(--page-swiper-pagination-space);box-sizing:border-box}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:calc(var(--page-margin)/ 2) var(--page-margin) var(--page-margin);border-bottom:2px dashed rgba(var(--ion-color-dark-rgb),.1);-webkit-box-align:center;align-items:center}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .logo-col[_ngcontent-%COMP%]{padding-bottom:calc(var(--page-margin)/ 2)}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]{padding-right:calc(var(--page-margin)/ 2)}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin)/ 2);color:var(--ion-color-dark-tint);font-size:16px}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-medium-tint);font-size:14px}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:var(--page-margin);text-align:center;-webkit-box-pack:center;justify-content:center}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%]{font-size:22px;font-weight:300;text-transform:uppercase;letter-spacing:4px;color:var(--ion-color-dark-tint);margin:0}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%]::after, .deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%]::before{content:"\xb7";color:var(--ion-color-dark-tint)}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-description[_ngcontent-%COMP%]{margin:var(--page-margin) 0;color:var(--ion-color-medium-tint);font-size:14px}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-code-btn[_ngcontent-%COMP%]{margin:0}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-code[_ngcontent-%COMP%]{display:block;font-size:14px;line-height:1}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-instructions[_ngcontent-%COMP%]{margin:var(--page-margin) 0 0;color:var(--ion-color-medium-tint);font-size:12px;line-height:1.4}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-instructions[_ngcontent-%COMP%]   .instructions-anchor[_ngcontent-%COMP%]{color:var(--page-color);text-decoration:none}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .expiration-notice[_ngcontent-%COMP%]{background-color:var(--page-deal-color);padding:calc(var(--page-margin)/ 2) var(--page-margin);color:var(--ion-color-lightest);border-radius:0 0 var(--app-broad-radius) var(--app-broad-radius);display:-webkit-box;display:flex;-webkit-box-pack:space-evenly;justify-content:space-evenly}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .expiration-notice[_ngcontent-%COMP%]   .notice-message[_ngcontent-%COMP%]{display:block;margin-right:5px;text-transform:capitalize}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .expiration-notice[_ngcontent-%COMP%]   .expiration-value[_ngcontent-%COMP%]{display:block}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 3) var(--page-margin) calc(var(--page-margin) * 2)}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deals-title[_ngcontent-%COMP%]{text-align:center;font-size:20px;font-weight:400;text-transform:uppercase;color:var(--ion-color-dark-shade);margin:0 0 var(--page-margin)}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;border-radius:var(--app-broad-radius);background-color:var(--ion-color-lightest)}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]:not(:last-child){margin-bottom:calc(var(--page-margin)/ 2)}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-logo-wrapper[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/ 4) var(--page-margin) calc(var(--page-margin)/ 4) calc(var(--page-margin)/ 2);border-right:2px dashed rgba(var(--ion-color-dark-rgb),.1)}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-info-wrapper[_ngcontent-%COMP%]{padding-left:var(--page-margin);padding-right:calc(var(--page-margin)/ 2);padding-top:calc(var(--page-margin)/ 4);padding-bottom:calc(var(--page-margin)/ 4);display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-info-wrapper[_ngcontent-%COMP%]   .related-deal-title[_ngcontent-%COMP%]{margin:0 0 5px;color:var(--ion-color-dark-tint);font-size:20px}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-info-wrapper[_ngcontent-%COMP%]   .related-deal-description[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-medium-tint);font-size:16px}[_nghost-%COMP%]     .details-slides .swiper-pagination{height:var(--page-swiper-pagination-height);line-height:1;bottom:calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height))/ 2)}[_nghost-%COMP%]     .details-slides .swiper-pagination .swiper-pagination-bullet{width:var(--page-pagination-bullet-size);height:var(--page-pagination-bullet-size)}[_nghost-%COMP%]     app-countdown-timer.item-countdown .time-unit{font-size:.8em}'],["[_nghost-%COMP%]{--shell-color:#70DF70;--shell-color-rgb:112,223,112}app-image-shell.showcase-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb), .10);--image-shell-spinner-color:rgba(var(--shell-color-rgb), .25)}app-image-shell.logo-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb), .10);--image-shell-spinner-color:rgba(var(--shell-color-rgb), .30);--image-shell-spinner-size:18px}.details-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .30);--text-shell-line-height:16px}.details-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .20);--text-shell-line-height:14px}app-image-shell.preview-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb), .10);--image-shell-spinner-color:rgba(var(--shell-color-rgb), .30);--image-shell-spinner-size:18px}.promo-code[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .15);--text-shell-line-height:14px;min-width:80px}.promo-code[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.expiration-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--ion-color-lightest-rgb), .20);--text-shell-line-height:18px;min-width:60px}.expiration-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}app-image-shell.related-deal-logo[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb), .10);--image-shell-spinner-color:rgba(var(--shell-color-rgb), .30);--image-shell-spinner-size:18px}.related-deal-title[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .30);--text-shell-line-height:20px;max-width:30%}.related-deal-title[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.related-deal-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .20);--text-shell-line-height:16px;max-width:50%}.related-deal-description[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}"]],data:{}});function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"ion-row",[["class","expiration-countdown"]],null,null,null,s.wb,s.C)),t["\u0275did"](1,49152,null,0,u.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,1,"span",[["class","expiration-lead"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Deal expires in:"])),(l()(),t["\u0275eld"](4,0,null,0,2,"app-countdown-timer",[["class","item-countdown"],["fill","countdown"]],null,null,null,g.b,g.a)),t["\u0275did"](5,245760,null,0,p.a,[],{end:[0,"end"],units:[1,"units"]},null),t["\u0275pod"](6,{from:0,to:1})],(function(l,n){var e=n.component,t=null==e.details?null:e.details.expirationDate,a=l(n,6,0,"hour","second");l(n,5,0,t,a)}),null)}function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,8,"ion-slide",[["class",""]],null,null,null,s.Cb,s.I)),t["\u0275did"](1,49152,null,0,u.nb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,6,"ion-row",[["class","slide-inner-row"]],null,null,null,s.wb,s.C)),t["\u0275did"](3,49152,null,0,u.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,m.b,m.a)),t["\u0275did"](5,49152,null,0,h.a,[],{ratio:[0,"ratio"]},null),t["\u0275pod"](6,{w:0,h:1}),(l()(),t["\u0275eld"](7,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","showcase-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,C.b,C.a)),t["\u0275did"](8,49152,null,0,b.a,[t.PLATFORM_ID],{src:[0,"src"],alt:[1,"alt"]},null)],(function(l,n){var e=l(n,6,0,56,40);l(n,5,0,e),l(n,8,0,n.context.$implicit,"deals details")}),(function(l,n){l(n,4,0,t["\u0275nov"](n,5).ratioPadding),l(n,7,0,t["\u0275nov"](n,8).imageLoaded,t["\u0275nov"](n,8).backgroundImage,t["\u0275nov"](n,8).display)}))}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,16,"ion-row",[["class","related-deal"]],null,null,null,s.wb,s.C)),t["\u0275did"](1,49152,null,0,u.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,6,"ion-col",[["class","deal-logo-wrapper"],["size","4"]],null,null,null,s.ab,s.g)),t["\u0275did"](3,49152,null,0,u.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](4,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,m.b,m.a)),t["\u0275did"](5,49152,null,0,h.a,[],{ratio:[0,"ratio"]},null),t["\u0275pod"](6,{w:0,h:1}),(l()(),t["\u0275eld"](7,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","related-deal-logo"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,C.b,C.a)),t["\u0275did"](8,49152,null,0,b.a,[t.PLATFORM_ID],{src:[0,"src"],alt:[1,"alt"]},null),(l()(),t["\u0275eld"](9,0,null,0,7,"ion-col",[["class","deal-info-wrapper"],["size","8"]],null,null,null,s.ab,s.g)),t["\u0275did"](10,49152,null,0,u.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](11,0,null,0,2,"h4",[["class","related-deal-title"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,v.b,v.a)),t["\u0275did"](13,49152,null,0,O.a,[],{data:[0,"data"]},null),(l()(),t["\u0275eld"](14,0,null,0,2,"p",[["class","related-deal-description"]],null,null,null,null,null)),(l()(),t["\u0275eld"](15,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,v.b,v.a)),t["\u0275did"](16,49152,null,0,O.a,[],{data:[0,"data"]},null)],(function(l,n){l(n,3,0,"4");var e=l(n,6,0,1,1);l(n,5,0,e),l(n,8,0,n.context.$implicit.logo,"deals logo"),l(n,10,0,"8"),l(n,13,0,null==n.context.$implicit?null:n.context.$implicit.name),l(n,16,0,null==n.context.$implicit?null:n.context.$implicit.description)}),(function(l,n){l(n,4,0,t["\u0275nov"](n,5).ratioPadding),l(n,7,0,t["\u0275nov"](n,8).imageLoaded,t["\u0275nov"](n,8).backgroundImage,t["\u0275nov"](n,8).display),l(n,12,0,t["\u0275nov"](n,13).textLoaded),l(n,15,0,t["\u0275nov"](n,16).textLoaded)}))}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","related-deals-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h3",[["class","related-deals-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["More hot deals"])),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](4,278528,null,0,f.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,4,0,n.component.details.relatedDeals)}),null)}function D(l){return t["\u0275vid"](0,[t["\u0275pid"](0,M.a,[]),t["\u0275pid"](0,f.DatePipe,[t.LOCALE_ID]),(l()(),t["\u0275eld"](2,0,null,null,11,"ion-header",[],null,null,null,s.gb,s.m)),t["\u0275did"](3,49152,null,0,u.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,s.Nb,s.T)),t["\u0275did"](5,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.Y,s.e)),t["\u0275did"](7,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](8,0,null,0,2,"ion-back-button",[["defaultHref","app/categories/deals"]],null,[[null,"click"]],(function(l,n,e){var a=!0;return"click"===n&&(a=!1!==t["\u0275nov"](l,10).onClick(e)&&a),a}),s.V,s.b)),t["\u0275did"](9,49152,null,0,u.g,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{defaultHref:[0,"defaultHref"]},null),t["\u0275did"](10,16384,null,0,u.h,[[2,u.fb],u.Gb],{defaultHref:[0,"defaultHref"]},null),(l()(),t["\u0275eld"](11,0,null,0,2,"ion-title",[],null,null,null,s.Lb,s.R)),t["\u0275did"](12,49152,null,0,u.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Deals Details"])),(l()(),t["\u0275eld"](14,0,null,null,78,"ion-content",[["class","deals-details-content"]],null,null,null,s.bb,s.h)),t["\u0275prd"](512,null,f["\u0275NgClassImpl"],f["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](16,278528,null,0,f.NgClass,[f["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275ppd"](17,1),t["\u0275ppd"](18,1),t["\u0275ppd"](19,1),t["\u0275ppd"](20,1),t["\u0275ppd"](21,1),t["\u0275ppd"](22,1),t["\u0275ppd"](23,1),t["\u0275pod"](24,{ended:0,"imminent-end":1,"ends-soon":2,"distant-end":3}),t["\u0275did"](25,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,3,null,x)),t["\u0275did"](27,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),t["\u0275ppd"](28,1),t["\u0275ppd"](29,1),(l()(),t["\u0275eld"](30,0,null,0,60,"div",[["class","details-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](31,0,null,null,5,"ion-row",[["class","slider-row"]],null,null,null,s.wb,s.C)),t["\u0275did"](32,49152,null,0,u.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](33,0,null,0,3,"ion-slides",[["class","details-slides"],["pager","true"]],null,null,null,s.Db,s.J)),t["\u0275did"](34,49152,null,0,u.ob,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,w)),t["\u0275did"](36,278528,null,0,f.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](37,0,null,null,23,"ion-row",[["class","description-row"]],null,null,null,s.wb,s.C)),t["\u0275did"](38,49152,null,0,u.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](39,0,null,0,6,"ion-col",[["class","logo-col"],["size","6"]],null,null,null,s.ab,s.g)),t["\u0275did"](40,49152,null,0,u.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](41,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,m.b,m.a)),t["\u0275did"](42,49152,null,0,h.a,[],{ratio:[0,"ratio"]},null),t["\u0275pod"](43,{w:0,h:1}),(l()(),t["\u0275eld"](44,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","logo-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,C.b,C.a)),t["\u0275did"](45,49152,null,0,b.a,[t.PLATFORM_ID],{src:[0,"src"],alt:[1,"alt"]},null),(l()(),t["\u0275eld"](46,0,null,0,7,"ion-col",[["class","info-col"],["size","9"]],null,null,null,s.ab,s.g)),t["\u0275did"](47,49152,null,0,u.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](48,0,null,0,2,"h4",[["class","details-name"]],null,null,null,null,null)),(l()(),t["\u0275eld"](49,0,null,null,1,"app-text-shell",[["animation","bouncing"]],[[2,"text-loaded",null]],null,null,v.b,v.a)),t["\u0275did"](50,49152,null,0,O.a,[],{data:[0,"data"]},null),(l()(),t["\u0275eld"](51,0,null,0,2,"p",[["class","details-description"]],null,null,null,null,null)),(l()(),t["\u0275eld"](52,0,null,null,1,"app-text-shell",[["animation","bouncing"],["lines","3"]],[[2,"text-loaded",null]],null,null,v.b,v.a)),t["\u0275did"](53,49152,null,0,O.a,[],{data:[0,"data"]},null),(l()(),t["\u0275eld"](54,0,null,0,6,"ion-col",[["class","preview-image-col"],["size","3"]],null,null,null,s.ab,s.g)),t["\u0275did"](55,49152,null,0,u.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](56,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,m.b,m.a)),t["\u0275did"](57,49152,null,0,h.a,[],{ratio:[0,"ratio"]},null),t["\u0275pod"](58,{w:0,h:1}),(l()(),t["\u0275eld"](59,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","preview-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,C.b,C.a)),t["\u0275did"](60,49152,null,0,b.a,[t.PLATFORM_ID],{src:[0,"src"],alt:[1,"alt"]},null),(l()(),t["\u0275eld"](61,0,null,null,21,"ion-row",[["class","promo-row"]],null,null,null,s.wb,s.C)),t["\u0275did"](62,49152,null,0,u.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](63,0,null,0,1,"h3",[["class","promo-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Copy the Code"])),(l()(),t["\u0275eld"](65,0,null,0,3,"ion-col",[["size","8"]],null,null,null,s.ab,s.g)),t["\u0275did"](66,49152,null,0,u.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](67,0,null,0,1,"p",[["class","promo-description"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Paste this code at checkout to get an extra 50% off "])),(l()(),t["\u0275eld"](69,0,null,0,6,"ion-col",[["size","6"]],null,null,null,s.ab,s.g)),t["\u0275did"](70,49152,null,0,u.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](71,0,null,0,4,"ion-button",[["class","promo-code-btn"],["color","claim"],["expand","block"],["fill","outline"],["shape","round"]],null,null,null,s.X,s.d)),t["\u0275did"](72,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"]},null),(l()(),t["\u0275eld"](73,0,null,0,2,"span",[["class","promo-code"]],null,null,null,null,null)),(l()(),t["\u0275eld"](74,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,v.b,v.a)),t["\u0275did"](75,49152,null,0,O.a,[],{data:[0,"data"]},null),(l()(),t["\u0275eld"](76,0,null,0,6,"ion-col",[["size","8"]],null,null,null,s.ab,s.g)),t["\u0275did"](77,49152,null,0,u.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](78,0,null,0,4,"p",[["class","promo-instructions"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Go to "])),(l()(),t["\u0275eld"](80,0,null,null,1,"a",[["class","instructions-anchor"],["href","https://google.com/search?q=chocolate"],["target","_blank"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["lancasternutcandy.com"])),(l()(),t["\u0275ted"](-1,null,[" and paste the code at checkout. "])),(l()(),t["\u0275eld"](83,0,null,null,7,"div",[["class","expiration-notice"]],null,null,null,null,null)),(l()(),t["\u0275eld"](84,0,null,null,2,"span",[["class","notice-message"]],null,null,null,null,null)),(l()(),t["\u0275ted"](85,null,["Cupon "," on:"])),t["\u0275ppd"](86,1),(l()(),t["\u0275eld"](87,0,null,null,3,"span",[["class","expiration-value"]],null,null,null,null,null)),(l()(),t["\u0275eld"](88,0,null,null,2,"app-text-shell",[],[[2,"text-loaded",null]],null,null,v.b,v.a)),t["\u0275did"](89,49152,null,0,O.a,[],{data:[0,"data"]},null),t["\u0275ppd"](90,2),(l()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](92,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,5,0,"primary"),l(n,9,0,"app/categories/deals"),l(n,10,0,"app/categories/deals");var a=l(n,24,0,t["\u0275unv"](n,16,1,l(n,17,0,t["\u0275nov"](n,0),null==e.details?null:e.details.expirationDate))<0,t["\u0275unv"](n,16,1,l(n,18,0,t["\u0275nov"](n,0),null==e.details?null:e.details.expirationDate))>0&&t["\u0275unv"](n,16,1,l(n,19,0,t["\u0275nov"](n,0),null==e.details?null:e.details.expirationDate))<=2,t["\u0275unv"](n,16,1,l(n,20,0,t["\u0275nov"](n,0),null==e.details?null:e.details.expirationDate))>0&&t["\u0275unv"](n,16,1,l(n,21,0,t["\u0275nov"](n,0),null==e.details?null:e.details.expirationDate))>2&&t["\u0275unv"](n,16,1,l(n,22,0,t["\u0275nov"](n,0),null==e.details?null:e.details.expirationDate))<10,t["\u0275unv"](n,16,1,l(n,23,0,t["\u0275nov"](n,0),null==e.details?null:e.details.expirationDate))>=10);l(n,16,0,"deals-details-content",a);var o=t["\u0275unv"](n,27,0,l(n,28,0,t["\u0275nov"](n,0),null==e.details?null:e.details.expirationDate))>0&&t["\u0275unv"](n,27,0,l(n,29,0,t["\u0275nov"](n,0),null==e.details?null:e.details.expirationDate))<=2;l(n,27,0,o),l(n,34,0,e.slidesOptions,"true"),l(n,36,0,null==e.details?null:e.details.showcaseImages),l(n,40,0,"6");var i=l(n,43,0,128,32);l(n,42,0,i),l(n,45,0,null==e.details?null:e.details.logo,"deals details"),l(n,47,0,"9"),l(n,50,0,null==e.details?null:e.details.name),l(n,53,0,null==e.details?null:e.details.description),l(n,55,0,"3");var r=l(n,58,0,1,1);l(n,57,0,r),l(n,60,0,null==e.details?null:e.details.previewImage,"deals details"),l(n,66,0,"8"),l(n,70,0,"6"),l(n,72,0,"claim","block","outline","round"),l(n,75,0,null==e.details?null:e.details.code),l(n,77,0,"8");var d=t["\u0275unv"](n,89,0,l(n,90,0,t["\u0275nov"](n,1),null==e.details?null:e.details.expirationDate,"mediumDate"));l(n,89,0,d),l(n,92,0,(null==e.details?null:e.details.relatedDeals)&&e.details.relatedDeals.length>0)}),(function(l,n){var e=n.component;l(n,41,0,t["\u0275nov"](n,42).ratioPadding),l(n,44,0,t["\u0275nov"](n,45).imageLoaded,t["\u0275nov"](n,45).backgroundImage,t["\u0275nov"](n,45).display),l(n,49,0,t["\u0275nov"](n,50).textLoaded),l(n,52,0,t["\u0275nov"](n,53).textLoaded),l(n,56,0,t["\u0275nov"](n,57).ratioPadding),l(n,59,0,t["\u0275nov"](n,60).imageLoaded,t["\u0275nov"](n,60).backgroundImage,t["\u0275nov"](n,60).display),l(n,74,0,t["\u0275nov"](n,75).textLoaded);var a=t["\u0275unv"](n,85,0,l(n,86,0,t["\u0275nov"](n,0),null==e.details?null:e.details.expirationDate))<0?"expired":"expires";l(n,85,0,a),l(n,88,0,t["\u0275nov"](n,89).textLoaded)}))}function z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-deals-details",[],[[2,"is-shell",null]],null,null,D,_)),t["\u0275did"](1,114688,null,0,a,[P.a],null,null)],(function(l,n){l(n,1,0)}),(function(l,n){l(n,0,0,t["\u0275nov"](n,1).isShell)}))}var N=t["\u0275ccf"]("app-deals-details",a,z,{},{},[]),I=e("s7LF"),y=e("IheW"),F=e("ZpN7"),E=e("Kt/9"),Z=e("j1ZV"),L=e("J/9z"),T=e("iTUp");e.d(n,"DealsDetailsPageModuleNgFactory",(function(){return A}));var A=t["\u0275cmf"](d,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,N]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[t.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,I.u,I.u,[]),t["\u0275mpd"](4608,u.b,u.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Fb,u.Fb,[u.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,u.Hb,u.Hb,[u.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,y.h,y.n,[f.DOCUMENT,t.PLATFORM_ID,y.l]),t["\u0275mpd"](4608,y.o,y.o,[y.h,y.m]),t["\u0275mpd"](5120,y.a,(function(l){return[l]}),[y.o]),t["\u0275mpd"](4608,y.k,y.k,[]),t["\u0275mpd"](6144,y.i,null,[y.k]),t["\u0275mpd"](4608,y.g,y.g,[y.i]),t["\u0275mpd"](6144,y.b,null,[y.g]),t["\u0275mpd"](4608,y.f,y.j,[y.b,t.Injector]),t["\u0275mpd"](4608,y.c,y.c,[y.f]),t["\u0275mpd"](5120,t.APP_INITIALIZER,(function(l){return[F.b(l)]}),[E.a]),t["\u0275mpd"](4608,o.a,o.a,[y.c]),t["\u0275mpd"](4608,i,i,[o.a]),t["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),t["\u0275mpd"](1073742336,I.t,I.t,[]),t["\u0275mpd"](1073742336,I.j,I.j,[]),t["\u0275mpd"](1073742336,u.Bb,u.Bb,[]),t["\u0275mpd"](1073742336,P.p,P.p,[[2,P.u],[2,P.m]]),t["\u0275mpd"](1073742336,y.e,y.e,[]),t["\u0275mpd"](1073742336,y.d,y.d,[]),t["\u0275mpd"](1073742336,F.a,F.a,[]),t["\u0275mpd"](1073742336,Z.a,Z.a,[]),t["\u0275mpd"](1073742336,L.b,L.b,[]),t["\u0275mpd"](1073742336,T.a,T.a,[]),t["\u0275mpd"](1073742336,d,d,[]),t["\u0275mpd"](256,y.l,"XSRF-TOKEN",[]),t["\u0275mpd"](256,y.m,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,P.k,(function(){return[[{path:"",component:a,resolve:{data:r}}]]}),[])])}))}}]);