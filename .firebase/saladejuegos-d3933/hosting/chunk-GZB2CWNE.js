import{b as I,e as T,f as P}from"./chunk-LDKDGNBM.js";import{C as S,E as F,G as j,H as N,I as R,J as A,K as D,Q as W,y as E}from"./chunk-7NGVP2UU.js";import{g as k,h as L}from"./chunk-QRFZE4D5.js";import{l as y,n as w}from"./chunk-7AQS2LSG.js";import{$a as v,Db as n,Eb as _,Hb as g,Ib as p,Jb as f,La as l,Lb as C,Ma as d,db as x,e as h,ga as m,hb as o,ib as i,ja as b,rb as u,sb as M}from"./chunk-PVR3HKZP.js";function z(s,r){if(s&1&&(o(0,"label",16),n(1),i()),s&2){let e=M();l(),_(e.errorText)}}var O=class s{constructor(r,e){this.auth=r;this.firestore=e}userMail="";userPass="";errorLogin=!1;errorText="";router=m(k);authService=m(S);validateEmail(r){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)}logIn(){return h(this,null,function*(){if(this.errorLogin=!1,!this.userMail||!this.validateEmail(this.userMail)){this.errorLogin=!0,this.errorText="El email es inv\xE1lido";return}let r={email:this.userMail.trim(),password:this.userPass||""};this.authService.logIn(r).then(e=>{this.router.navigateByUrl("/home");let t=P(this.firestore,"logins");T(t,{fecha:new Date,email:this.userMail})}).catch(e=>{switch(this.errorLogin=!0,console.error("Error al iniciar sesi\xF3n: ",e),e.code){case"auth/invalid-email":this.errorText="El email es inv\xE1lido.";break;case"auth/wrong-password":this.errorText="La contrase\xF1a es inv\xE1lida.";break;case"auth/missing-password":this.errorText="La contrase\xF1a es inv\xE1lida.";break;case"auth/invalid-credential":this.errorText="Credenciales incorrectas.";break;default:this.errorText="Error desconocido al iniciar sesi\xF3n.";break}})})}inicioRapido(){this.userMail="admin@gmail.com",this.userPass="admin@gmail.com",this.logIn()}static \u0275fac=function(e){return new(e||s)(d(E),d(I))};static \u0275cmp=b({type:s,selectors:[["app-login"]],standalone:!0,features:[C],decls:25,vars:3,consts:[["id","divTotal",1,"background-image"],[1,"container"],[1,"row","justify-content-center","align-items-center","vh-100"],[1,"col-md-4",2,"background-color","rgb(42, 45, 70)","padding","20px","border-radius","8px"],[2,"font-weight","bold","color","white"],[1,"mb-3"],["for","exampleFormControlInput1",1,"form-label",2,"color","white"],["id","inputLogin","type","email","placeholder","name@example.com","name","userMail",1,"form-control",3,"ngModelChange","ngModel"],["id","inputLogin","type","password","name","userPass",1,"form-control",3,"ngModelChange","ngModel"],[1,"d-flex","justify-content-between","align-items-center","mt-2"],["routerLink","../register",2,"color","#007bff","text-decoration","none"],["class","","style","color: red; padding-right: 10px;",4,"ngIf"],[1,"d-flex","justify-content-center","mb-2"],[1,"btn","btn-primary",2,"width","100%","max-width","150px",3,"click"],[1,"d-flex","justify-content-center"],[1,"btn","btn-primary",2,"width","100%","max-width","150px","margin","10px",3,"click"],[1,"",2,"color","red","padding-right","10px"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),n(5,"Iniciar Sesi\xF3n"),i(),o(6,"form")(7,"div",5)(8,"label",6),n(9,"Email"),i(),o(10,"input",7),f("ngModelChange",function(a){return p(t.userMail,a)||(t.userMail=a),a}),i()(),o(11,"div",5)(12,"label",6),n(13,"Contrase\xF1a"),i(),o(14,"input",8),f("ngModelChange",function(a){return p(t.userPass,a)||(t.userPass=a),a}),i(),o(15,"div",9)(16,"a",10),n(17,"Registrarse"),i(),v(18,z,2,1,"label",11),i()(),o(19,"div",12)(20,"button",13),u("click",function(){return t.logIn()}),n(21,"LogIn"),i()(),o(22,"div",14)(23,"button",15),u("click",function(){return t.inicioRapido()}),n(24,"Inicio R\xE1pido"),i()()()()()()()),e&2&&(l(10),g("ngModel",t.userMail),l(4),g("ngModel",t.userPass),l(4),x("ngIf",t.errorLogin==!0))},dependencies:[L,w,y,W,D,F,j,N,A,R],styles:['#divTotal[_ngcontent-%COMP%]{background-color:#0e101a;height:100vh;color:#fff}#inputLogin[_ngcontent-%COMP%]{background-color:#717171;border-color:#717171;color:#fff;font-family:Gill Sans,sans-serif}.background-image[_ngcontent-%COMP%]{position:relative;z-index:0}.background-image[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:100%;background-image:url(https://img.freepik.com/fotos-premium/sala-juegos-esta-llena-coloridos-juegos-arcade_662214-35580.jpg?w=740);background-size:cover;background-position:center;opacity:.3;z-index:-1}']})};export{O as LoginComponent};
