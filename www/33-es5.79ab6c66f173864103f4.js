function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{B4ja:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),a=e("mrSG"),o=e("s7LF"),i=e("jtHE"),r=e("VRyK"),u=e("eIep"),c=e("lJxs"),s=e("QolQ"),d=e("Hi41"),g=e("dcwo"),p=e("f/Ol"),m=function(){function n(l,e,t){_classCallCheck(this,n),this.firebaseService=l,this.modalController=e,this.route=t,this.showAgeFilter=!1,this.searchSubject=new i.a(1),this.searchFiltersObservable=this.searchSubject.asObservable()}return _createClass(n,[{key:"ngOnDestroy",value:function(){this.stateSubscription.unsubscribe()}},{key:"ngOnInit",value:function(){var n=this;this.searchQuery="",this.rangeForm=new o.g({dual:new o.e({lower:1,upper:100})}),this.route.data.subscribe((function(l){n.listingDataStore=l.data;var e=n.searchFiltersObservable.pipe(Object(u.a)((function(l){var e=n.firebaseService.searchUsersByAge(l.lower,l.upper),t=[new d.a,new d.a];return p.a.AppendShell(e,t,400).pipe(Object(c.a)((function(n){if(""===l.query||n.isShell)return n;var e=n.filter((function(n){return n.name.toLowerCase().includes(l.query.toLowerCase())}));return Object.assign(e,{isShell:n.isShell})})))})));n.stateSubscription=Object(r.a)(n.listingDataStore.state,e).subscribe((function(l){n.items=l}),(function(n){return console.log(n)}),(function(){return console.log("stateSubscription completed")}))}),(function(n){return console.log(n)}))}},{key:"openFirebaseCreateModal",value:function(){return a.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalController.create({component:g.a});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"searchList",value:function(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery})}},{key:"isShell",get:function(){return!(!this.items||!this.items.isShell)}}]),n}(),f=function(){function n(l){_classCallCheck(this,n),this.firebaseService=l}return _createClass(n,[{key:"resolve",value:function(){var n=this.firebaseService.getListingDataSource();return this.firebaseService.getListingStore(n)}}]),n}(),b=f,h=function n(){_classCallCheck(this,n)},C=e("pMnS"),v=e("MKJQ"),_=e("sZkV"),O=e("iInd"),P=e("SVse"),M=e("M4wD"),w=e("B7gC"),R=e("6LEC"),x=e("2gss"),k=e("TAV1"),y=e("zK/y"),N=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background)}.filters-toolbar[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:var(--page-margin);--padding-top:var(--page-margin);--padding-bottom:var(--page-margin)}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%]{padding:0;height:100%;contain:content}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]{-webkit-padding-start:var(--page-margin);padding-inline-start:var(--page-margin);max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;flex-shrink:0;-webkit-box-flex:0;flex-grow:0;display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .filters-btn[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;margin:0;font-size:18px;height:initial}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;margin-top:var(--page-margin);padding-top:var(--page-margin);box-shadow:inset 0 6px 3px -8px var(--ion-color-darkest)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;padding-bottom:calc(var(--page-margin)/ 2)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%]{--ion-text-color:var(--ion-color-medium);padding-top:0;padding-bottom:0}.firebase-listing-content[_ngcontent-%COMP%]{--background:var(--page-background)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:0px;--inner-padding-start:0px;--inner-padding-end:var(--page-margin);--inner-padding-top:calc(var(--page-margin) / 2);--inner-padding-bottom:calc(var(--page-margin) / 2)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;width:100%}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{-webkit-padding-end:calc(var(--page-margin)/ 2);padding-inline-end:calc(var(--page-margin)/ 2)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]{-webkit-padding-start:calc(var(--page-margin)/ 2);padding-inline-start:calc(var(--page-margin)/ 2);display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]:not(:last-child){margin-bottom:calc(var(--page-margin)/ 2)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin)/ 4);font-size:16px}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-age[_ngcontent-%COMP%]{margin:0;color:rgba(var(--ion-color-dark-rgb),.4);font-size:14px}.firebase-listing-content[_ngcontent-%COMP%]   .empty-list-message[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 3);color:rgba(var(--ion-color-dark-rgb),.4);text-align:center}"],[".ios[_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]{-webkit-padding-end:calc(var(--page-margin)/ 2);padding-inline-end:calc(var(--page-margin)/ 2)}.ios[_nghost-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%]{padding-top:var(--padding-top);padding-bottom:var(--padding-bottom)}"],["app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--app-fair-radius)}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:16px;max-width:80%}.user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.user-age[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px;max-width:40%}.user-age[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}"]],data:{}});function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,22,"ion-item",[["class","list-item"]],null,[[null,"click"]],(function(n,l,e){var a=!0;return"click"===l&&(a=!1!==t["\u0275nov"](n,2).onClick()&&a),"click"===l&&(a=!1!==t["\u0275nov"](n,4).onClick(e)&&a),a}),v.lb,v.p)),t["\u0275did"](1,49152,null,0,_.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275did"](2,16384,null,0,O.n,[O.m,O.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](3,2),t["\u0275did"](4,737280,null,0,_.Jb,[P.LocationStrategy,_.Gb,t.ElementRef,O.m,[2,O.n]],null,null),(n()(),t["\u0275eld"](5,0,null,0,17,"ion-row",[["class","user-row"]],null,null,null,v.wb,v.C)),t["\u0275did"](6,49152,null,0,_.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](7,0,null,0,6,"ion-col",[["class","user-image-wrapper"],["size","3"]],null,null,null,v.ab,v.g)),t["\u0275did"](8,49152,null,0,_.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](9,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,M.b,M.a)),t["\u0275did"](10,49152,null,0,w.a,[],{ratio:[0,"ratio"]},null),t["\u0275pod"](11,{w:0,h:1}),(n()(),t["\u0275eld"](12,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","user-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,R.b,R.a)),t["\u0275did"](13,49152,null,0,x.a,[t.PLATFORM_ID],{display:[0,"display"],src:[1,"src"],alt:[2,"alt"]},null),(n()(),t["\u0275eld"](14,0,null,0,8,"ion-col",[["class","user-data-wrapper"]],null,null,null,v.ab,v.g)),t["\u0275did"](15,49152,null,0,_.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](16,0,null,0,6,"div",[["class","user-info"]],null,null,null,null,null)),(n()(),t["\u0275eld"](17,0,null,null,2,"h3",[["class","user-name"]],null,null,null,null,null)),(n()(),t["\u0275eld"](18,0,null,null,1,"app-text-shell",[["animation","bouncing"]],[[2,"text-loaded",null]],null,null,k.b,k.a)),t["\u0275did"](19,49152,null,0,y.a,[],{data:[0,"data"]},null),(n()(),t["\u0275eld"](20,0,null,null,2,"h5",[["class","user-age"]],null,null,null,null,null)),(n()(),t["\u0275eld"](21,0,null,null,1,"app-text-shell",[["animation","bouncing"]],[[2,"text-loaded",null]],null,null,k.b,k.a)),t["\u0275did"](22,49152,null,0,y.a,[],{data:[0,"data"]},null)],(function(n,l){var e=n(l,3,0,"/firebase/details",l.context.$implicit.id);n(l,2,0,e),n(l,4,0),n(l,8,0,"3");var t=n(l,11,0,1,1);n(l,10,0,t),n(l,13,0,"cover",l.context.$implicit.avatar,"item image");var a=null==l.context.$implicit.name?null:l.context.$implicit.name.concat(" ").concat(l.context.$implicit.lastname);n(l,19,0,a);var o=null==l.context.$implicit.age?null:l.context.$implicit.age.toString().concat(" years old");n(l,22,0,o)}),(function(n,l){n(l,9,0,t["\u0275nov"](l,10).ratioPadding),n(l,12,0,t["\u0275nov"](l,13).imageLoaded,t["\u0275nov"](l,13).backgroundImage,t["\u0275nov"](l,13).display),n(l,18,0,t["\u0275nov"](l,19).textLoaded),n(l,21,0,t["\u0275nov"](l,22).textLoaded)}))}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-list",[["class","items-list"]],null,null,null,v.ob,v.t)),t["\u0275did"](1,49152,null,0,_.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,E)),t["\u0275did"](3,278528,null,0,P.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,3,0,l.component.items)}),null)}function F(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"h3",[["class","empty-list-message"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" No users found for the selected filters. "]))],null,null)}function Z(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,61,"ion-header",[],null,null,null,v.gb,v.m)),t["\u0275did"](1,49152,null,0,_.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,15,"ion-toolbar",[["color","primary"]],null,null,null,v.Nb,v.T)),t["\u0275did"](3,49152,null,0,_.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,v.Y,v.e)),t["\u0275did"](5,49152,null,0,_.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,2,"ion-back-button",[["defaultHref","app/categories"]],null,[[null,"click"]],(function(n,l,e){var a=!0;return"click"===l&&(a=!1!==t["\u0275nov"](n,8).onClick(e)&&a),a}),v.V,v.b)),t["\u0275did"](7,49152,null,0,_.g,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{defaultHref:[0,"defaultHref"]},null),t["\u0275did"](8,16384,null,0,_.h,[[2,_.fb],_.Gb],{defaultHref:[0,"defaultHref"]},null),(n()(),t["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,v.Lb,v.R)),t["\u0275did"](10,49152,null,0,_.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Firebase"])),(n()(),t["\u0275eld"](12,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,v.Y,v.e)),t["\u0275did"](13,49152,null,0,_.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](14,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.openFirebaseCreateModal()&&t),t}),v.X,v.d)),t["\u0275did"](15,49152,null,0,_.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](16,0,null,0,1,"ion-icon",[["name","add"],["slot","icon-only"]],null,null,null,v.hb,v.n)),t["\u0275did"](17,49152,null,0,_.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](18,0,null,0,43,"ion-toolbar",[["class","filters-toolbar"]],null,null,null,v.Nb,v.T)),t["\u0275did"](19,49152,null,0,_.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](20,0,null,0,16,"ion-row",[["align-items-center",""],["class","searchbar-row"]],null,null,null,v.wb,v.C)),t["\u0275did"](21,49152,null,0,_.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](22,0,null,0,8,"ion-col",[],null,null,null,v.ab,v.g)),t["\u0275did"](23,49152,null,0,_.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](24,0,null,0,6,"ion-searchbar",[["animated",""],["class","items-searchbar"],["placeholder","Filter by name..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var a=!0,o=n.component;return"ionBlur"===l&&(a=!1!==t["\u0275nov"](n,25)._handleBlurEvent(e.target)&&a),"ionChange"===l&&(a=!1!==t["\u0275nov"](n,25)._handleInputEvent(e.target)&&a),"ngModelChange"===l&&(a=!1!==(o.searchQuery=e)&&a),"ionChange"===l&&(a=!1!==o.searchList()&&a),a}),v.xb,v.D)),t["\u0275did"](25,16384,null,0,_.Lb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,o.l,(function(n){return[n]}),[_.Lb]),t["\u0275did"](27,671744,null,0,o.p,[[8,null],[8,null],[8,null],[6,o.l]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,o.m,null,[o.p]),t["\u0275did"](29,16384,null,0,o.n,[[4,o.m]],null,null),t["\u0275did"](30,49152,null,0,_.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{animated:[0,"animated"],placeholder:[1,"placeholder"]},null),(n()(),t["\u0275eld"](31,0,null,0,5,"ion-col",[["class","call-to-action-col"]],null,null,null,v.ab,v.g)),t["\u0275did"](32,49152,null,0,_.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](33,0,null,0,3,"ion-button",[["class","filters-btn"],["color","secondary"],["fill","clear"]],null,[[null,"click"]],(function(n,l,e){var t=!0,a=n.component;return"click"===l&&(t=0!=(a.showAgeFilter=!a.showAgeFilter)&&t),t}),v.X,v.d)),t["\u0275did"](34,49152,null,0,_.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],fill:[1,"fill"]},null),(n()(),t["\u0275eld"](35,0,null,0,1,"ion-icon",[["name","options"],["slot","icon-only"]],null,null,null,v.hb,v.n)),t["\u0275did"](36,49152,null,0,_.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](37,0,null,0,24,"form",[["novalidate",""]],[[8,"hidden",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,e){var a=!0;return"submit"===l&&(a=!1!==t["\u0275nov"](n,39).onSubmit(e)&&a),"reset"===l&&(a=!1!==t["\u0275nov"](n,39).onReset()&&a),a}),null,null)),t["\u0275did"](38,16384,null,0,o.w,[],null,null),t["\u0275did"](39,540672,null,0,o.h,[[8,null],[8,null]],{form:[0,"form"]},null),t["\u0275prd"](2048,null,o.a,null,[o.h]),t["\u0275did"](41,16384,null,0,o.o,[[4,o.a]],null,null),(n()(),t["\u0275eld"](42,0,null,null,19,"ion-row",[["class","range-item-row"]],null,null,null,v.wb,v.C)),t["\u0275did"](43,49152,null,0,_.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](44,0,null,0,8,"ion-col",[["size","12"]],null,null,null,v.ab,v.g)),t["\u0275did"](45,49152,null,0,_.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](46,0,null,0,6,"div",[["class","range-header"]],null,null,null,null,null)),(n()(),t["\u0275eld"](47,0,null,null,1,"span",[["class","range-value"]],null,null,null,null,null)),(n()(),t["\u0275ted"](48,null,["",""])),(n()(),t["\u0275eld"](49,0,null,null,1,"span",[["class","range-label"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Filter by age"])),(n()(),t["\u0275eld"](51,0,null,null,1,"span",[["class","range-value"]],null,null,null,null,null)),(n()(),t["\u0275ted"](52,null,["",""])),(n()(),t["\u0275eld"](53,0,null,0,8,"ion-col",[["size","12"]],null,null,null,v.ab,v.g)),t["\u0275did"](54,49152,null,0,_.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](55,0,null,0,6,"ion-range",[["class","range-control"],["color","secondary"],["debounce","400"],["dualKnobs","true"],["formControlName","dual"],["max","100"],["min","1"],["pin","true"],["step","1"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var a=!0,o=n.component;return"ionBlur"===l&&(a=!1!==t["\u0275nov"](n,56)._handleBlurEvent(e.target)&&a),"ionChange"===l&&(a=!1!==t["\u0275nov"](n,56)._handleChangeEvent(e.target)&&a),"ionChange"===l&&(a=!1!==o.searchList()&&a),a}),v.vb,v.B)),t["\u0275did"](56,16384,null,0,_.Kb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,o.l,(function(n){return[n]}),[_.Kb]),t["\u0275did"](58,671744,null,0,o.f,[[3,o.a],[8,null],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,o.m,null,[o.f]),t["\u0275did"](60,16384,null,0,o.n,[[4,o.m]],null,null),t["\u0275did"](61,49152,null,0,_.Z,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],debounce:[1,"debounce"],dualKnobs:[2,"dualKnobs"],max:[3,"max"],min:[4,"min"],pin:[5,"pin"],step:[6,"step"]},null),(n()(),t["\u0275eld"](62,0,null,null,5,"ion-content",[["class","firebase-listing-content"]],null,null,null,v.bb,v.h)),t["\u0275did"](63,49152,null,0,_.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,D)),t["\u0275did"](65,16384,null,0,P.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,F)),t["\u0275did"](67,16384,null,0,P.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,"primary"),n(l,7,0,"app/categories"),n(l,8,0,"app/categories"),n(l,17,0,"add"),n(l,27,0,e.searchQuery),n(l,30,0,"","Filter by name..."),n(l,34,0,"secondary","clear"),n(l,36,0,"options"),n(l,39,0,e.rangeForm),n(l,45,0,"12"),n(l,54,0,"12"),n(l,58,0,"dual"),n(l,61,0,"secondary","400","true","100","1","true","1"),n(l,65,0,(null==e.items?null:e.items.length)>0),n(l,67,0,0==(null==e.items?null:e.items.length))}),(function(n,l){var e=l.component;n(l,24,0,t["\u0275nov"](l,29).ngClassUntouched,t["\u0275nov"](l,29).ngClassTouched,t["\u0275nov"](l,29).ngClassPristine,t["\u0275nov"](l,29).ngClassDirty,t["\u0275nov"](l,29).ngClassValid,t["\u0275nov"](l,29).ngClassInvalid,t["\u0275nov"](l,29).ngClassPending),n(l,37,0,!e.showAgeFilter,t["\u0275nov"](l,41).ngClassUntouched,t["\u0275nov"](l,41).ngClassTouched,t["\u0275nov"](l,41).ngClassPristine,t["\u0275nov"](l,41).ngClassDirty,t["\u0275nov"](l,41).ngClassValid,t["\u0275nov"](l,41).ngClassInvalid,t["\u0275nov"](l,41).ngClassPending),n(l,48,0,e.rangeForm.controls.dual.value.lower),n(l,52,0,e.rangeForm.controls.dual.value.upper),n(l,55,0,t["\u0275nov"](l,60).ngClassUntouched,t["\u0275nov"](l,60).ngClassTouched,t["\u0275nov"](l,60).ngClassPristine,t["\u0275nov"](l,60).ngClassDirty,t["\u0275nov"](l,60).ngClassValid,t["\u0275nov"](l,60).ngClassInvalid,t["\u0275nov"](l,60).ngClassPending)}))}var S=t["\u0275ccf"]("app-firebase-listing",m,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-firebase-listing",[],[[2,"is-shell",null]],null,null,Z,N)),t["\u0275did"](1,245760,null,0,m,[s.a,_.Fb,O.a],null,null)],(function(n,l){n(l,1,0)}),(function(n,l){n(l,0,0,t["\u0275nov"](l,1).isShell)}))}),{},{},[]),I=e("IheW"),L=e("ZpN7"),j=e("Kt/9"),z=e("Xr7G"),T=e("j1ZV");e.d(l,"FirebaseListingPageModuleNgFactory",(function(){return A}));var A=t["\u0275cmf"](h,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[C.a,S]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,P.NgLocalization,P.NgLocaleLocalization,[t.LOCALE_ID,[2,P["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,o.u,o.u,[]),t["\u0275mpd"](4608,o.d,o.d,[]),t["\u0275mpd"](4608,_.b,_.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,_.Fb,_.Fb,[_.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,_.Hb,_.Hb,[_.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,I.h,I.n,[P.DOCUMENT,t.PLATFORM_ID,I.l]),t["\u0275mpd"](4608,I.o,I.o,[I.h,I.m]),t["\u0275mpd"](5120,I.a,(function(n){return[n]}),[I.o]),t["\u0275mpd"](4608,I.k,I.k,[]),t["\u0275mpd"](6144,I.i,null,[I.k]),t["\u0275mpd"](4608,I.g,I.g,[I.i]),t["\u0275mpd"](6144,I.b,null,[I.g]),t["\u0275mpd"](4608,I.f,I.j,[I.b,t.Injector]),t["\u0275mpd"](4608,I.c,I.c,[I.f]),t["\u0275mpd"](5120,t.APP_INITIALIZER,(function(n){return[L.b(n)]}),[j.a]),t["\u0275mpd"](4608,s.a,s.a,[z.a]),t["\u0275mpd"](4608,f,f,[s.a]),t["\u0275mpd"](1073742336,P.CommonModule,P.CommonModule,[]),t["\u0275mpd"](1073742336,o.t,o.t,[]),t["\u0275mpd"](1073742336,o.j,o.j,[]),t["\u0275mpd"](1073742336,o.q,o.q,[]),t["\u0275mpd"](1073742336,_.Bb,_.Bb,[]),t["\u0275mpd"](1073742336,I.e,I.e,[]),t["\u0275mpd"](1073742336,I.d,I.d,[]),t["\u0275mpd"](1073742336,L.a,L.a,[]),t["\u0275mpd"](1073742336,T.a,T.a,[]),t["\u0275mpd"](1073742336,O.p,O.p,[[2,O.u],[2,O.m]]),t["\u0275mpd"](1073742336,h,h,[]),t["\u0275mpd"](256,I.l,"XSRF-TOKEN",[]),t["\u0275mpd"](256,I.m,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,O.k,(function(){return[[{path:"",component:m,resolve:{data:b}}]]}),[])])}))}}]);