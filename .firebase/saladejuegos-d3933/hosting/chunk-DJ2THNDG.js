import{C as P,O as k}from"./chunk-TULLC7Y6.js";import{a as D}from"./chunk-RSXTWYWK.js";import"./chunk-YVRY2B4E.js";import"./chunk-XZP45KYQ.js";import{g as M}from"./chunk-QRFZE4D5.js";import{k as w,l as y,n as O}from"./chunk-7AQS2LSG.js";import{$a as v,Db as u,Eb as g,Ia as x,La as i,Lb as j,db as p,ga as d,hb as n,ib as r,ja as h,jb as _,mb as b,rb as C,sa as l,sb as c,ta as m}from"./chunk-PVR3HKZP.js";function T(o,t){if(o&1){let e=b();n(0,"div",7)(1,"div",8),C("mouseenter",function(){let s=l(e).$implicit,f=c();return m(f.seleccionarJuego(s))})("mouseleave",function(){l(e);let s=c();return m(s.ocultarDesc())})("click",function(){let s=l(e).$implicit,f=c();return m(f.navegar(s))}),_(2,"img",9),n(3,"div",10)(4,"h5",11),u(5),r()()()()}if(o&2){let e=t.$implicit;i(2),p("src",e.img,x),i(3),g(e.titulo)}}function V(o,t){if(o&1&&(n(0,"div",12)(1,"h2"),u(2),r(),n(3,"p"),u(4),r()()),o&2){let e=c();i(2),g(e.juegoTitulo),i(2),g(e.descripcion)}}var z=class o{juegos=[{id:1,titulo:"Ahorcado",img:"../../../assets/ahorcado.jpg",ruta:"/ahorcado",descripcion:"Descubre la palabra secreta una letra a la vez antes de que se complete el dibujo del ahorcado."},{id:2,titulo:"Mayor o Menor",img:"../../../assets/cartas.jpg",ruta:"/mayormenor",descripcion:"\xA1Desaf\xEDa tu intuici\xF3n con este divertido juego de cartas!"},{id:3,titulo:"Preguntados",img:"../../../assets/Pokemon.jpg",ruta:"/preguntados",descripcion:"Identifica el nombre del Pok\xE9mon bas\xE1ndote en su imagen antes de que se agote el tiempo."},{id:4,titulo:"Destrucci\xF3n del Mouse",img:"../../../assets/mouseonfire.jpg",ruta:"/mouse",descripcion:"Haz clic en un \xE1rea espec\xEDfica tantas veces como sea posible en un tiempo limitado."}];userObs$;userValue;mostrarDescripcion=!1;descripcion="";juegoTitulo="";dialog=d(D);authservice=d(P);router=d(M);constructor(){this.userObs$=this.authservice.getUser(),this.userObs$.subscribe(t=>{this.userValue=t})}seleccionarJuego(t){this.juegoTitulo=t.titulo,this.descripcion=t.descripcion,this.mostrarDescripcion=!0}ocultarDesc(){this.mostrarDescripcion=!1}navegar(t){this.userValue?.email?this.router.navigateByUrl(t.ruta):this.openDialog()}openDialog(){this.dialog.openDialog({tittle:"Acceso denegado",content:"A\xFAn no has iniciado sesi\xF3n.",img:"../../../assets/stop.jpg",retryAction:()=>this.router.navigateByUrl("/login"),btn:"Ir al login"})}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=h({type:o,selectors:[["app-home"]],standalone:!0,features:[j],decls:7,vars:2,consts:[["id","divTotal",1,"background-image"],[1,"container"],[1,"row","justify-content-center"],[1,"col-sm-12","text-center"],[1,"caja-juegos","row"],["class","col-6 col-md-3 mb-4",4,"ngFor","ngForOf"],["class","game-description show",4,"ngIf"],[1,"col-6","col-md-3","mb-4"],[1,"card","m-2",3,"mouseenter","mouseleave","click"],["draggable","false",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"game-description","show"]],template:function(e,a){e&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),v(5,T,6,2,"div",5),r(),v(6,V,5,2,"div",6),r()()()()),e&2&&(i(5),p("ngForOf",a.juegos),i(),p("ngIf",a.mostrarDescripcion))},dependencies:[O,w,y,k],styles:['#divTotal[_ngcontent-%COMP%]{background:linear-gradient(to right,#0e101c,#1f2233);min-height:100vh;padding:10px;display:flex;flex-direction:column;justify-content:center;position:relative}.caja-juegos[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin-top:20px;z-index:2}.card[_ngcontent-%COMP%]{width:280px;border:none;box-shadow:0 4px 8px #0003;background-color:#2a2d46;border-radius:8px;overflow:hidden;transition:transform .3s ease;z-index:3}.card[_ngcontent-%COMP%]:hover{transform:translateY(-10px)}.card-img-top[_ngcontent-%COMP%]{height:150px;width:100%;object-fit:cover}.card-body[_ngcontent-%COMP%]{text-align:center;padding:10px}.card-title[_ngcontent-%COMP%]{color:#fff;font-size:16px;margin:0;font-weight:700}.game-description[_ngcontent-%COMP%]{background-color:#2a2d46;color:#fff;max-width:600px;margin:20px auto;border-radius:.5rem;box-shadow:0 2px 10px #0000004d;padding:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10;opacity:0;transition:opacity .3s ease,transform .3s ease}.game-description.show[_ngcontent-%COMP%]{opacity:1;transform:translate(-50%,-50%)}.game-description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;margin-bottom:10px}.game-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:1.5}.background-image[_ngcontent-%COMP%]{position:relative}.background-image[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:100%;background-image:url(https://img.freepik.com/fotos-premium/sala-juegos-esta-llena-coloridos-juegos-arcade_662214-35580.jpg?w=740);background-size:cover;z-index:1}']})};export{z as HomeComponent};
