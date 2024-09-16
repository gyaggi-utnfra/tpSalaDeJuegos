import{b as _,e as S,f as y}from"./chunk-HU4CQQFN.js";import{C as x,D as a,E as N,F as I,I as T,J as q,K as w,L as M,M as O,O as P,P as j}from"./chunk-OONLYXED.js";import{l as F,n as C}from"./chunk-7AQS2LSG.js";import{$a as s,Db as o,La as m,Lb as E,Ma as b,a as p,b as f,db as l,e as g,ga as c,hb as t,ib as e,ja as v,jb as u,rb as h}from"./chunk-PVR3HKZP.js";function k(i,r){i&1&&(t(0,"div",21),o(1," Nombre es requerido "),e())}function A(i,r){i&1&&(t(0,"div",21),o(1," Apellido es requerido "),e())}function z(i,r){i&1&&(t(0,"div",21),o(1," Edad debe estar entre 18 y 99 a\xF1os "),e())}function B(i,r){i&1&&(t(0,"div",21),o(1," N\xFAmero de tel\xE9fono debe contener 10 d\xEDgitos "),e())}function G(i,r){i&1&&(t(0,"div",21),o(1," Respuesta a la pregunta 1 es requerida "),e())}function R(i,r){i&1&&(t(0,"div",21),o(1," Respuesta a la pregunta 2 es requerida "),e())}function U(i,r){i&1&&(t(0,"div",21),o(1," Respuesta a la pregunta 3 es requerida "),e())}var D=class i{constructor(r){this.fb=r;this.encuestaForm=this.fb.group({nombre:["",a.required],apellido:["",a.required],edad:["",[a.required,a.min(18),a.max(99)]],telefono:["",[a.required,a.pattern("^\\d{10}$")]],pregunta1:["",a.required],pregunta2:["",a.required],pregunta3:["",a.required]}),this.authService.getUser().subscribe(d=>{this.user=d})}encuestaForm;firestore=c(_);authService=c(j);user=null;ngOnInit(){}onSubmit(){return g(this,null,function*(){if(this.encuestaForm.valid)if(this.user){let r=this.user.uid,d=y(this.firestore,"encuestas");yield S(d,f(p({userId:r},this.encuestaForm.value),{timestamp:new Date})),console.log("Encuesta guardada en Firebase"),this.encuestaForm.reset()}else console.error("No se pudo identificar al usuario");else console.log("Formulario no v\xE1lido")})}static \u0275fac=function(d){return new(d||i)(b(O))};static \u0275cmp=v({type:i,selectors:[["app-encuesta"]],standalone:!0,features:[E],decls:45,vars:9,consts:[[1,"background-image"],[1,"container"],[1,"card"],[1,"card-header","bg-primary","text-white"],[1,"mb-0"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"form-group","mb-3"],["for","nombre"],["id","nombre","formControlName","nombre",1,"form-control"],["class","text-danger",4,"ngIf"],["for","apellido"],["id","apellido","formControlName","apellido",1,"form-control"],["for","edad"],["id","edad","formControlName","edad","type","number",1,"form-control"],["for","telefono"],["id","telefono","formControlName","telefono",1,"form-control"],["formControlName","pregunta1",1,"form-control"],["formControlName","pregunta2",1,"form-control"],["formControlName","pregunta3",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-danger"]],template:function(d,n){d&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),o(5,"Encuesta"),e()(),t(6,"div",5)(7,"form",6),h("ngSubmit",function(){return n.onSubmit()}),t(8,"div",7)(9,"label",8),o(10,"Nombre:"),e(),u(11,"input",9),s(12,k,2,0,"div",10),e(),t(13,"div",7)(14,"label",11),o(15,"Apellido:"),e(),u(16,"input",12),s(17,A,2,0,"div",10),e(),t(18,"div",7)(19,"label",13),o(20,"Edad:"),e(),u(21,"input",14),s(22,z,2,0,"div",10),e(),t(23,"div",7)(24,"label",15),o(25,"Tel\xE9fono:"),e(),u(26,"input",16),s(27,B,2,0,"div",10),e(),t(28,"div",7)(29,"label"),o(30,"\xBFTe ha gustado la p\xE1gina?"),e(),u(31,"input",17),s(32,G,2,0,"div",10),e(),t(33,"div",7)(34,"label"),o(35,"\xBFTe has divertido jugando a los juegos?"),e(),u(36,"input",18),s(37,R,2,0,"div",10),e(),t(38,"div",7)(39,"label"),o(40,"\xBFTe gustar\xEDa ser programador?"),e(),u(41,"input",19),s(42,U,2,0,"div",10),e(),t(43,"button",20),o(44,"Enviar"),e()()()()()()),d&2&&(m(7),l("formGroup",n.encuestaForm),m(5),l("ngIf",n.encuestaForm.controls.nombre.invalid&&n.encuestaForm.controls.nombre.touched),m(5),l("ngIf",n.encuestaForm.controls.apellido.invalid&&n.encuestaForm.controls.apellido.touched),m(5),l("ngIf",n.encuestaForm.controls.edad.invalid&&n.encuestaForm.controls.edad.touched),m(5),l("ngIf",n.encuestaForm.controls.telefono.invalid&&n.encuestaForm.controls.telefono.touched),m(5),l("ngIf",n.encuestaForm.controls.pregunta1.invalid&&n.encuestaForm.controls.pregunta1.touched),m(5),l("ngIf",n.encuestaForm.controls.pregunta2.invalid&&n.encuestaForm.controls.pregunta2.touched),m(5),l("ngIf",n.encuestaForm.controls.pregunta3.invalid&&n.encuestaForm.controls.pregunta3.touched),m(),l("disabled",n.encuestaForm.invalid))},dependencies:[C,F,P,T,x,q,N,I,w,M],styles:['@charset "UTF-8";.background-image[_ngcontent-%COMP%]{position:relative;z-index:0;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:2rem}.background-image[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:100%;background-image:url(https://img.freepik.com/fotos-premium/sala-juegos-esta-llena-coloridos-juegos-arcade_662214-35580.jpg?w=740);background-size:cover;background-position:center;z-index:-1}.container[_ngcontent-%COMP%]{position:relative;max-width:100%;width:100%;max-width:450px;margin-top:3rem;background-color:#fff;border-radius:.5rem;box-shadow:0 0 5px #0000001a;height:75vh;overflow-y:auto}.card-body[_ngcontent-%COMP%]{padding:1rem;height:100%;display:flex;flex-direction:column;justify-content:space-between}.form-group[_ngcontent-%COMP%]{margin-bottom:.5rem}.form-control[_ngcontent-%COMP%]{font-size:.875rem;padding:.5rem}.btn-primary[_ngcontent-%COMP%]{margin-top:1rem;padding:.5rem 1rem;font-size:.875rem}.text-danger[_ngcontent-%COMP%]{font-size:.75rem}']})};export{D as EncuestaComponent};
