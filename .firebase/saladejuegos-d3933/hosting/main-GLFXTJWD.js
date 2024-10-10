import{c as pe,d as ue,g as de}from"./chunk-T6KFCUAR.js";import{A as ce,B as me,C,O as he,P as ge,w as se,x as le}from"./chunk-TULLC7Y6.js";import{b as ee,d as te,e as oe,f as re,g as b,h as ne,i as ie,j as ae}from"./chunk-QRFZE4D5.js";import{d as Q,h as W,l as Z,n as v}from"./chunk-7AQS2LSG.js";import{$a as V,Bb as G,Db as c,Eb as q,Ga as L,La as S,Lb as f,M as R,Ma as j,Na as T,Pa as U,Pb as K,Ra as B,Ua as $,Z as F,aa as h,da as k,db as z,e as E,fa as M,ga as u,hb as s,ib as a,ja as g,jb as d,kb as H,lb as Y,mb as J,na as O,rb as X,sa as w,sb as x,ta as D,x as I,za as P}from"./chunk-PVR3HKZP.js";var l=class o{constructor(e,t){this.authService=e;this.router=t}canActivate(){return this.authService.getUser().pipe(R(1),I(e=>e?!0:(this.router.navigate(["/login"]),!1)))}static \u0275fac=function(t){return new(t||o)(M(C),M(b))};static \u0275prov=h({token:o,factory:o.\u0275fac,providedIn:"root"})};var fe=[{path:"login",loadComponent:()=>import("./chunk-Z656GWQO.js").then(o=>o.LoginComponent)},{path:"home",loadComponent:()=>import("./chunk-DJ2THNDG.js").then(o=>o.HomeComponent),canActivate:[l]},{path:"quien-soy",loadComponent:()=>import("./chunk-DPDDPZ2F.js").then(o=>o.QuienSoyComponent)},{path:"register",loadComponent:()=>import("./chunk-J3MBBRRZ.js").then(o=>o.RegisterAuthComponent)},{path:"ahorcado",loadComponent:()=>import("./chunk-7MCEY5GN.js").then(o=>o.AhorcadoComponent),canActivate:[l]},{path:"mayormenor",loadComponent:()=>import("./chunk-MMYRF354.js").then(o=>o.MayormenorComponent),canActivate:[l]},{path:"preguntados",loadComponent:()=>import("./chunk-ALDPQYIU.js").then(o=>o.PreguntadosComponent),canActivate:[l]},{path:"mouse",loadComponent:()=>import("./chunk-QR64QY6I.js").then(o=>o.MouseComponent),canActivate:[l]},{path:"chat",loadComponent:()=>import("./chunk-JLBDO4SY.js").then(o=>o.ChatComponent),canActivate:[l]},{path:"encuesta",loadComponent:()=>import("./chunk-TVPK3IXB.js").then(o=>o.EncuestaComponent),canActivate:[l]},{path:" ",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login",pathMatch:"full"}];var Me="@",Se=(()=>{let e=class e{constructor(r,n,i,m,p){this.doc=r,this.delegate=n,this.zone=i,this.animationType=m,this.moduleImpl=p,this._rendererFactoryPromise=null,this.scheduler=u(U,{optional:!0}),this.loadingSchedulerFn=u(xe,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let r=()=>this.moduleImpl??import("./chunk-JNS44EIF.js").then(i=>i),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(r):n=r(),n.catch(i=>{throw new F(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:m})=>{this._engine=i(this.animationType,this.doc);let p=new m(this.delegate,this._engine,this.zone);return this.delegate=p,p})}createRenderer(r,n){let i=this.delegate.createRenderer(r,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let m=new _(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(p=>{let ye=p.createRenderer(r,n);m.use(ye),this.scheduler?.notify(10)}).catch(p=>{m.use(i)}),m}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(n){T()},e.\u0275prov=h({token:e,factory:e.\u0275fac});let o=e;return o})(),_=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,n){this.delegate.insertBefore(e,t,r,n)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,n){this.delegate.setAttribute(e,t,r,n)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,n){this.delegate.setStyle(e,t,r,n)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(n=>n.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(Me)}},xe=new k("");function ve(o="animations"){return $("NgAsyncAnimations"),O([{provide:B,useFactory:(e,t,r)=>new Se(e,t,r,o),deps:[Q,te,P]},{provide:L,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}function Ne(o){let e=o,t=Math.floor(Math.abs(o)),r=o.toString().replace(/^[^.]*\.?/,"").length,n=parseInt(o.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return e===1?1:n===0&&t!==0&&t%1e6===0&&r===0||!(n>=0&&n<=5)?4:5}var be=["es",[["a.\xA0m.","p.\xA0m."],void 0,void 0],void 0,[["D","L","M","X","J","V","S"],["dom","lun","mar","mi\xE9","jue","vie","s\xE1b"],["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"],["DO","LU","MA","MI","JU","VI","SA"]],void 0,[["E","F","M","A","M","J","J","A","S","O","N","D"],["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]],void 0,[["a. C.","d. C."],void 0,["antes de Cristo","despu\xE9s de Cristo"]],1,[6,0],["d/M/yy","d MMM y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["H:mm","H:mm:ss","H:mm:ss z","H:mm:ss (zzzz)"],["{1}, {0}",void 0,void 0,void 0],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","euro",{AUD:[void 0,"$"],BRL:[void 0,"R$"],BYN:[void 0,"\u0440."],CAD:[void 0,"$"],CNY:[void 0,"\xA5"],EGP:[],ESP:["\u20A7"],GBP:[void 0,"\xA3"],HKD:[void 0,"$"],ILS:[void 0,"\u20AA"],INR:[void 0,"\u20B9"],JPY:[void 0,"\xA5"],KRW:[void 0,"\u20A9"],MXN:[void 0,"$"],NZD:[void 0,"$"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],THB:["\u0E3F"],TWD:[void 0,"NT$"],USD:["US$","$"],XAF:[],XCD:[void 0,"$"],XOF:[]},"ltr",Ne];W(be,"es-ES");var Ce={providers:[ae(fe),se(()=>le({apiKey:"AIzaSyBYmNNyJmQijf1UVZPxYgCULMqivYkUBac",authDomain:"saladejuegos-d3933.firebaseapp.com",projectId:"saladejuegos-d3933",storageBucket:"saladejuegos-d3933.appspot.com",messagingSenderId:"592924014661",appId:"1:592924014661:web:1518a7b601bd4003930b2c"})),ce(()=>me()),ue(()=>de()),ee(),ve()]};function Ee(o,e){if(o&1){let t=J();H(0),s(1,"li",9)(2,"a",13),c(3),a()(),s(4,"li",9)(5,"a",14),c(6,"Sala Chat"),a()(),s(7,"li",9)(8,"a",15),c(9,"Encuesta"),a()(),s(10,"li",9)(11,"a",16),X("click",function(){w(t);let n=x();return D(n.logOut())}),c(12,"LogOut"),a()(),Y()}if(o&2){let t=x();S(3),q(t.userValue.email)}}function Ie(o,e){o&1&&(s(0,"li",9)(1,"a",17),c(2,"LogIn"),a()())}var y=class o{constructor(e){this.router=e;this.userObs$=this.authservice.getUser(),this.userObs$.subscribe(t=>{this.userValue=t})}userObs$;userValue;authservice=u(C);logOut(){return E(this,null,function*(){try{yield this.authservice.logOut()}catch(e){console.log(e)}this.router.navigateByUrl("/home")})}static \u0275fac=function(t){return new(t||o)(j(b))};static \u0275cmp=g({type:o,selectors:[["app-nav-bar"]],standalone:!0,features:[f],decls:17,vars:2,consts:[["MostrarUsuario",""],[1,"navbar","navbar-expand-lg",2,"background-color","rgb(42, 45, 70)","position","fixed","width","100%","z-index","1000"],[1,"container-fluid"],["href","/home",1,"navbar-brand"],["src","../../../assets/juego.png","alt","Bootstrap","width","90","height","50"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","mx-auto","mb-2","mb-lg-0"],[1,"nav-item","opciones"],["routerLink","/home","routerLinkActive","active-route",1,"nav-link","active","text-white","oscurecer"],["routerLink","/quien-soy","routerLinkActive","active-route",1,"nav-link","text-white","oscurecer"],[4,"ngIf","ngIfElse"],[1,"nav-link","text-white","oscurecer",2,"user-select","none"],["routerLink","/chat","routerLinkActive","active-route",1,"nav-link","text-white","oscurecer"],["routerLink","/encuesta","routerLinkActive","active-route",1,"nav-link","text-white","oscurecer"],[1,"nav-link","text-white","oscurecerLogOut",2,"user-select","none","cursor","pointer",3,"click"],["routerLink","/login","routerLinkActive","active-route",1,"nav-link","text-white","oscurecer"]],template:function(t,r){if(t&1&&(s(0,"nav",1)(1,"div",2)(2,"a",3),d(3,"img",4),a(),s(4,"button",5),d(5,"span",6),a(),s(6,"div",7)(7,"ul",8)(8,"li",9)(9,"a",10),c(10,"Inicio"),a()(),s(11,"li",9)(12,"a",11),c(13,"Quien Soy"),a()(),V(14,Ee,13,1,"ng-container",12)(15,Ie,3,0,"ng-template",null,0,K),a()()()()),t&2){let n=G(16);S(14),z("ngIf",r.userValue!=null)("ngIfElse",n)}},dependencies:[ne,ie,v,Z],styles:['@charset "UTF-8";.navbar-nav[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.nav-item[_ngcontent-%COMP%]{margin-left:20px}.oscurecer[_ngcontent-%COMP%]:hover{background-color:#999;color:#fff}.oscurecerLogOut[_ngcontent-%COMP%]:hover{background-color:#c04040;color:#fff}.navbar-toggler[_ngcontent-%COMP%]{border:none}']})};var A=class o{title="tpSalaDeJuegos";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=g({type:o,selectors:[["app-root"]],standalone:!0,features:[f],decls:2,vars:0,template:function(t,r){t&1&&d(0,"app-nav-bar")(1,"router-outlet")},dependencies:[re,v,y,ge,he,pe]})};oe(A,Ce).catch(o=>console.error(o));
