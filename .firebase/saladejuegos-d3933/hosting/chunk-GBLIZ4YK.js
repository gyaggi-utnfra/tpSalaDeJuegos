import{f as b,g as f}from"./chunk-K2H5XEYT.js";import{g as u}from"./chunk-QRFZE4D5.js";import{n as g}from"./chunk-7AQS2LSG.js";import{Db as t,Eb as s,La as m,Lb as p,Ma as a,hb as e,ib as n,ja as c,rb as i}from"./chunk-PVR3HKZP.js";var v=class l{constructor(d,o,r){this.dialogRef=d;this.data=o;this.router=r;console.log("Palabra recibida:",o.palabra)}onClose(){this.dialogRef.close()}irAlHome(){throw this.dialogRef.close(),this.router.navigate(["/home"]),new Error("Method not implemented.")}jugarDeNuevo(){this.dialogRef.close(),this.router.navigateByUrl("/").then(()=>{this.router.navigate(["/ahorcado"])})}static \u0275fac=function(o){return new(o||l)(a(b),a(f),a(u))};static \u0275cmp=c({type:l,selectors:[["app-dialog-derrota"]],standalone:!0,features:[p],decls:18,vars:1,consts:[["id","modal-principal","tabindex","-1","role","dialog","aria-labelledby","dialog-title",1,"modal","fade","show","d-block"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","dialog-title",1,"modal-title"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(o,r){o&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),t(5,"\xA1Perdiste!"),n()(),e(6,"div",5)(7,"p"),t(8,"La palabra era: "),e(9,"strong"),t(10),n()(),e(11,"p"),t(12,"\xA1Mejor suerte la pr\xF3xima vez!"),n()(),e(13,"div",6)(14,"button",7),i("click",function(){return r.jugarDeNuevo()}),t(15,"Jugar de nuevo"),n(),e(16,"button",8),i("click",function(){return r.irAlHome()}),t(17,"Ir al men\xFA"),n()()()()()),o&2&&(m(10),s(r.data.palabra))},dependencies:[g],styles:['@charset "UTF-8";.modal-dialog[_ngcontent-%COMP%]{display:flex;align-items:center;min-height:calc(100% - 1rem);margin:1rem auto}.modal-content[_ngcontent-%COMP%]{position:relative;border-radius:.3rem}.modal-header[_ngcontent-%COMP%]{background-color:#dc3545;color:#fff}.modal-body[_ngcontent-%COMP%]{font-size:1rem}.modal-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.btn-primary[_ngcontent-%COMP%]{background-color:#dc3545;border-color:#dc3545}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#c82333;border-color:#bd2130}.btn-secondary[_ngcontent-%COMP%]{background-color:#6c757d;border-color:#6c757d}.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#5a6268;border-color:#545b62}']})};export{v as a};
