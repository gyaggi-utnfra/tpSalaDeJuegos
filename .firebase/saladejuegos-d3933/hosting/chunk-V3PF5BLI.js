import{a as I,c as E,d as P}from"./chunk-AAE67WSY.js";import{a as T,b as F,c as j,d as N,e as D,f as R,g as A}from"./chunk-BZPIHLFQ.js";import{G as S,K as W,e as k,f as L}from"./chunk-Y2GVNZLK.js";import{h as y,i as w}from"./chunk-Y2DCO2O5.js";import{$a as u,Da as s,Ea as d,Ra as v,Ta as _,Va as n,Wa as t,aa as m,ab as C,da as b,e as h,fb as o,gb as x,hb as g,ib as p,jb as f,lb as M}from"./chunk-O3EMWPD3.js";function z(a,l){if(a&1&&(n(0,"label",16),o(1),t()),a&2){let i=C();s(),x(i.errorText)}}var O=class a{constructor(l,i){this.auth=l;this.firestore=i}userMail="";userPass="";errorLogin=!1;errorText="";router=m(k);authService=m(W);logIn(){return h(this,null,function*(){this.errorLogin=!1;let l={email:this.userMail||"",password:this.userPass||""};this.authService.logIn(l).then(i=>{this.router.navigateByUrl("/");let e=P(this.firestore,"logins");E(e,{fecha:new Date,email:this.userMail})}).catch(i=>{switch(this.errorLogin=!0,i.code){case"auth/invalid-email":this.errorText="El email es invalido.";break;case"auth/missing-password":this.errorText="La contrase\xF1a es invalida.";break;case"auth/invalid-credential":this.errorText="Credenciales incorrectas.";break}})})}inicioRapido(){this.userMail="admin@gmail.com",this.userPass="admin@gmail.com",this.logIn()}static \u0275fac=function(i){return new(i||a)(d(S),d(I))};static \u0275cmp=b({type:a,selectors:[["app-login"]],standalone:!0,features:[M],decls:25,vars:3,consts:[["id","divTotal",1,"background-image"],[1,"container"],[1,"row","justify-content-center","align-items-center","vh-100"],[1,"col-md-4",2,"background-color","rgb(42, 45, 70)","padding","20px","border-radius","8px"],[2,"font-weight","bold","color","white"],[1,"mb-3"],["for","exampleFormControlInput1",1,"form-label",2,"color","white"],["id","inputLogin","type","email","placeholder","name@example.com","name","userMail",1,"form-control",3,"ngModelChange","ngModel"],["id","inputLogin","type","password","name","userPass",1,"form-control",3,"ngModelChange","ngModel"],[1,"d-flex","justify-content-between","align-items-center","mt-2"],["routerLink","../register",2,"color","#007bff","text-decoration","none"],["class","","style","color: red; padding-right: 10px;",4,"ngIf"],[1,"d-flex","justify-content-center","mb-2"],[1,"btn","btn-primary",2,"width","100%","max-width","150px",3,"click"],[1,"d-flex","justify-content-center"],[1,"btn","btn-primary",2,"width","100%","max-width","150px","margin","10px",3,"click"],[1,"",2,"color","red","padding-right","10px"]],template:function(i,e){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),o(5,"Iniciar Sesi\xF3n"),t(),n(6,"form")(7,"div",5)(8,"label",6),o(9,"Email"),t(),n(10,"input",7),f("ngModelChange",function(r){return p(e.userMail,r)||(e.userMail=r),r}),t()(),n(11,"div",5)(12,"label",6),o(13,"Contrase\xF1a"),t(),n(14,"input",8),f("ngModelChange",function(r){return p(e.userPass,r)||(e.userPass=r),r}),t(),n(15,"div",9)(16,"a",10),o(17,"Registrarse"),t(),v(18,z,2,1,"label",11),t()(),n(19,"div",12)(20,"button",13),u("click",function(){return e.logIn()}),o(21,"LogIn"),t()(),n(22,"div",14)(23,"button",15),u("click",function(){return e.inicioRapido()}),o(24,"Inicio R\xE1pido"),t()()()()()()()),i&2&&(s(10),g("ngModel",e.userMail),s(4),g("ngModel",e.userPass),s(4),_("ngIf",e.errorLogin==!0))},dependencies:[L,w,y,A,R,T,F,j,D,N],styles:['#divTotal[_ngcontent-%COMP%]{background-color:#0e101a;height:100vh;color:#fff}#inputLogin[_ngcontent-%COMP%]{background-color:#717171;border-color:#717171;color:#fff;font-family:Gill Sans,sans-serif}.background-image[_ngcontent-%COMP%]{position:relative;z-index:0}.background-image[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:100%;background-image:url(https://img.freepik.com/fotos-premium/sala-juegos-esta-llena-coloridos-juegos-arcade_662214-35580.jpg?w=740);background-size:cover;background-position:center;opacity:.3;z-index:-1}']})};export{O as LoginComponent};
