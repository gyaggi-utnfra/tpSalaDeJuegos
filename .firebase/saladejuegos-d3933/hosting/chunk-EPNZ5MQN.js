import{a as w,b as S,c as R,d as P,e as E,f as T,g as A}from"./chunk-BZPIHLFQ.js";import{K as N,e as k,f as x}from"./chunk-Y2GVNZLK.js";import{h as y,i as _}from"./chunk-Y2DCO2O5.js";import{$a as b,Da as s,Ra as f,Ta as h,Va as r,Wa as t,aa as c,ab as v,da as p,fb as n,gb as C,hb as d,ib as m,jb as g,lb as M}from"./chunk-O3EMWPD3.js";function L(a,l){if(a&1&&(r(0,"label",14),n(1),t()),a&2){let e=v();s(),C(e.errorText)}}var I=class a{userMail="";userPass="";authService=c(N);router=c(k);errorRegister=!1;errorText="";register(){this.errorRegister=!1;let l={email:this.userMail||"",password:this.userPass||""};this.authService.register(l).then(e=>{this.router.navigateByUrl("/home")}).catch(e=>{switch(this.errorRegister=!0,console.log(e.code),e.code){case"auth/invalid-email":this.errorText="El email es invalido.";break;case"auth/missing-password":this.errorText="Se requiere contrase\xF1a.";break;case"auth/weak-password":this.errorText="Contrase\xF1a debil.";break;case"auth/email-already-in-use":this.errorText="El email esta en uso.";break}})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=p({type:a,selectors:[["app-register-auth"]],standalone:!0,features:[M],decls:22,vars:3,consts:[["id","divTotal",1,"background-image"],[1,"container"],[1,"row","justify-content-center","align-items-center","vh-100"],[1,"col-md-4",2,"background-color","rgb(42, 45, 70)","padding","20px","border-radius","8px"],[2,"font-weight","bold","color","white"],[1,"mb-3"],["for","exampleFormControlInput1",1,"form-label",2,"color","white"],["id","inputLogin","type","email","placeholder","name@example.com","name","userMail",1,"form-control",3,"ngModelChange","ngModel"],["id","inputLogin","type","password","name","userPass",1,"form-control",3,"ngModelChange","ngModel"],[1,"d-flex","justify-content-between","align-items-center","mt-2"],["routerLink","../login",2,"color","#007bff","text-decoration","none"],["style","color: red; padding-right: 10px;",4,"ngIf"],[1,"d-flex","justify-content-center","mb-2"],[1,"btn","btn-primary",2,"width","100%",3,"click"],[2,"color","red","padding-right","10px"]],template:function(e,i){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),n(5,"Registrarse"),t(),r(6,"form")(7,"div",5)(8,"label",6),n(9,"Email"),t(),r(10,"input",7),g("ngModelChange",function(o){return m(i.userMail,o)||(i.userMail=o),o}),t()(),r(11,"div",5)(12,"label",6),n(13,"Contrase\xF1a"),t(),r(14,"input",8),g("ngModelChange",function(o){return m(i.userPass,o)||(i.userPass=o),o}),t(),r(15,"div",9)(16,"a",10),n(17,"Ya est\xE1 registrado?"),t(),f(18,L,2,1,"label",11),t()(),r(19,"div",12)(20,"button",13),b("click",function(){return i.register()}),n(21,"Registrarse"),t()()()()()()()),e&2&&(s(10),d("ngModel",i.userMail),s(4),d("ngModel",i.userPass),s(4),h("ngIf",i.errorRegister==!0))},dependencies:[A,T,w,S,R,E,P,_,y,x],styles:['#divTotal[_ngcontent-%COMP%]{background-color:#0e101a;height:100vh;color:#fff}#inputLogin[_ngcontent-%COMP%]{background-color:#717171;border-color:#717171;color:#fff;font-family:Gill Sans,sans-serif}.background-image[_ngcontent-%COMP%]{position:relative;z-index:0}.background-image[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:100%;background-image:url(https://img.freepik.com/fotos-premium/sala-juegos-esta-llena-coloridos-juegos-arcade_662214-35580.jpg?w=740);background-size:cover;background-position:center;opacity:.3;z-index:-1}a[_ngcontent-%COMP%]{color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity, 1));text-decoration:underline}']})};export{I as RegisterAuthComponent};
