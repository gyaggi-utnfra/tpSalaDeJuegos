import{a as z}from"./chunk-3SGXIQGO.js";import"./chunk-K2H5XEYT.js";import"./chunk-ICTHBN6B.js";import{a as A,c as I}from"./chunk-QRFZE4D5.js";import{l as D,m as S,n as N}from"./chunk-7AQS2LSG.js";import{$a as x,Db as r,Eb as E,Fb as l,I as h,Ia as O,La as m,Lb as y,Ma as v,Nb as T,Ob as M,aa as f,db as d,fa as b,ga as k,hb as i,ib as n,ja as P,jb as C,rb as p,t as u,vb as _,x as g}from"./chunk-PVR3HKZP.js";var c=class a{constructor(e){this.http=e}getRandom(e,t){return Math.floor(Math.random()*(t-e+1))+e}getPokemon(){let e="https://pokeapi.co/api/v2/pokemon/"+this.getRandom(1,300).toString();return this.http.get(e).pipe(h(t=>(console.log(t),u(void 0))))}getOpciones(){return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=300").pipe(g(t=>t.results))}static \u0275fac=function(t){return new(t||a)(b(A))};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})};function L(a,e){if(a&1&&C(0,"img",15),a&2){let t=e.ngIf;_("src",t.sprites.front_default,O)}}var j=class a{constructor(e){this.pokemonService=e;this.openDialog(3)}puntaje=0;pokemon;pokemons;opcionUno;opcionDos;opcionTres;opcionCuatro;botonDeshabilitado=!1;pokemonObs$;dialog=k(z);excludedPokemonNames=[];remainingTime=30;intervalId;openDialog(e){switch(this.botonDeshabilitado=!0,e){case 1:this.puntaje>0?this.dialog.openDialog({tittle:"JUEGO FINALIZADO!",content:`POKEMONES ATRAPADOS: ${this.puntaje}`,img:"../../../assets/derrota.png",retryAction:()=>this.play(),btn:"JUGAR DE NUEVO"}):this.dialog.openDialog({tittle:"PERDISTE",content:"SIGUE INTENTANDOLO",img:"../../../assets/derrota.png",retryAction:()=>this.play(),btn:"JUGAR DE NUEVO"});break;case 2:this.puntaje>0?this.dialog.openDialog({tittle:"EL TIEMPO SE AGOTO",content:`POKEMONES ATRAPADOS: ${this.puntaje}`,img:"../../../assets/victoria.png",retryAction:()=>this.play(),btn:"JUGAR DE NUEVO"}):this.dialog.openDialog({tittle:"EL TIEMPO SE AGOTO",content:"NO ATRAPASTE POKEMONES!",img:"../../../assets/derrota.png",retryAction:()=>this.play(),btn:"JUGAR DE NUEVO"});break;case 3:this.dialog.openDialog({tittle:"ESTAS LISTO?",content:"ATRAPEMOS POKEMONES",img:"../../../assets/pokebola.png",retryAction:()=>this.play(),btn:"COMENZAR"});break;case 4:this.dialog.openDialog({tittle:"FELICITACIONES!",content:"Adivinaste todos los pokemons!",img:"../../../assets/estaslisto.png",retryAction:()=>this.play(),btn:"COMENZAR"});break}}ngOnDestroy(){this.stopTimer()}play(){this.puntaje==300?(this.stopTimer(),this.excludedPokemonNames=[],this.openDialog(4),this.puntaje=0):(this.resetTimer(),this.startTimer(),this.pokemonObs$=this.pokemonService.getPokemon(),this.pokemonObs$.subscribe(e=>{this.pokemon=e,this.excludedPokemonNames?.push({name:e.name,url:""}),this.pokemonService.getOpciones().subscribe(t=>{this.pokemons=t,this.opcionesRandom()})}),this.botonDeshabilitado=!1)}opcionesRandom(){let o=this.pokemons.filter(q=>!this.excludedPokemonNames.some(w=>w.name.toLowerCase()===q.name.toLowerCase())).sort(()=>.5-Math.random()).slice(0,3);o.push({name:this.pokemon.name??"",url:""});let s=o.sort(()=>.5-Math.random());s.length>=4?(this.opcionUno=s[0].name,this.opcionDos=s[1].name,this.opcionTres=s[2].name,this.opcionCuatro=s[3].name):console.error("No hay suficientes opciones disponibles.")}verificarRespuesta(e){if(this.botonDeshabilitado!=!0)switch(e){case 1:this.opcionUno==this.pokemon?.name?(this.puntaje++,this.play()):(this.excludedPokemonNames=[],this.stopTimer(),this.openDialog(1),this.puntaje=0);break;case 2:this.opcionDos==this.pokemon?.name?(this.puntaje++,this.play()):(this.excludedPokemonNames=[],this.stopTimer(),this.openDialog(1),this.puntaje=0);break;case 3:this.opcionTres==this.pokemon?.name?(this.puntaje++,this.play()):(this.excludedPokemonNames=[],this.stopTimer(),this.openDialog(1),this.puntaje=0);break;case 4:this.opcionCuatro==this.pokemon?.name?(this.puntaje++,this.play()):(this.excludedPokemonNames=[],this.stopTimer(),this.openDialog(1),this.puntaje=0);break}}startTimer(){this.intervalId=setInterval(()=>{this.remainingTime--,this.remainingTime<=0&&(this.stopTimer(),this.openDialog(2),this.excludedPokemonNames=[])},1e3)}stopTimer(){clearInterval(this.intervalId)}resetTimer(){this.stopTimer(),this.remainingTime=10}reiniciar(){this.excludedPokemonNames=[],this.play()}static \u0275fac=function(t){return new(t||a)(v(c))};static \u0275cmp=P({type:a,selectors:[["app-preguntados"]],standalone:!0,features:[y],decls:30,vars:10,consts:[[1,"container-fluid"],[1,"card","quiz-container"],[1,"card-header","quiz-head"],[1,"quiz-title"],[1,"quiz-score"],[1,"score"],[1,"timer"],[1,"card-body","quiz-body"],["id","question",1,"quiz-question"],[1,"pokemon-div"],["alt","Pok\xE9mon","class","pokemon-image",3,"src",4,"ngIf"],[1,"quiz-options"],[3,"click"],[1,"card-footer","quiz-foot"],["type","button",3,"click","disabled"],["alt","Pok\xE9mon",1,"pokemon-image",3,"src"]],template:function(t,o){t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),r(4,"Preguntados"),n(),i(5,"div",4)(6,"span"),r(7,"Puntaje: "),i(8,"span",5),r(9),n()(),i(10,"span",6),r(11),n()()(),i(12,"div",7)(13,"h2",8),r(14,"\xBFQu\xE9 Pok\xE9mon es?"),n(),i(15,"div",9),x(16,L,1,1,"img",10),T(17,"async"),n(),i(18,"ul",11)(19,"li",12),p("click",function(){return o.verificarRespuesta(1)}),r(20),n(),i(21,"li",12),p("click",function(){return o.verificarRespuesta(2)}),r(22),n(),i(23,"li",12),p("click",function(){return o.verificarRespuesta(3)}),r(24),n(),i(25,"li",12),p("click",function(){return o.verificarRespuesta(4)}),r(26),n()()(),i(27,"div",13)(28,"button",14),p("click",function(){return o.reiniciar()}),r(29,"Reiniciar"),n()()()()),t&2&&(m(9),E(o.puntaje),m(2),l("Tiempo: ",o.remainingTime,"s"),m(5),d("ngIf",M(17,8,o.pokemonObs$)),m(4),l(" ",o.opcionUno," "),m(2),l(" ",o.opcionDos," "),m(2),l(" ",o.opcionTres," "),m(2),l(" ",o.opcionCuatro," "),m(2),d("disabled",o.botonDeshabilitado))},dependencies:[I,N,D,S],styles:['@charset "UTF-8";.container-fluid[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100vh;background-image:url("./media/Pokemon-LZTWPYA5.jpg");background-size:cover;background-position:center center;background-repeat:no-repeat;position:relative;z-index:0;opacity:.9}.card[_ngcontent-%COMP%]{width:100%;max-width:800px;border-radius:1.5rem;box-shadow:0 4px 6px #0000004d;background:#17202ae6;margin:0 auto;display:flex;flex-direction:column}.quiz-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:1rem;border-bottom:1px solid #333}.quiz-title[_ngcontent-%COMP%]{font-size:2rem;color:#f8f9fa;margin:0}.quiz-score[_ngcontent-%COMP%]{font-weight:600;font-size:1.2rem;display:flex;flex-direction:column;align-items:flex-end;color:#f8f9fa}.score[_ngcontent-%COMP%]{background-color:#28a745;padding:.3rem .5rem;border-radius:.5rem}.timer[_ngcontent-%COMP%]{font-size:1rem}.quiz-body[_ngcontent-%COMP%]{text-align:center;padding:1rem;flex:1}.quiz-question[_ngcontent-%COMP%]{font-size:1.2rem;color:#f8f9fa;margin-bottom:1rem}.pokemon-div[_ngcontent-%COMP%]{width:100%;max-height:300px;background:linear-gradient(to right,#6c757d,#f8f9fa);border-radius:15px;display:flex;justify-content:center;align-items:center;margin-bottom:1rem}.pokemon-image[_ngcontent-%COMP%]{max-height:100%;max-width:100%;border-radius:15px;box-shadow:0 4px 8px #0000004d}.quiz-options[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.quiz-options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-radius:.5rem;font-weight:600;margin-top:.5rem;padding:.5rem 1rem;cursor:pointer;border:3px solid #007bff;background-color:#e9ecef;color:#343a40;box-shadow:0 4px #007bff;transition:background-color .3s ease,color .3s ease,transform .1s ease;width:100%}.quiz-options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#adb5bd;color:#212529;border-color:#adb5bd;box-shadow:0 4px #adb5bd}.quiz-options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active{transform:scale(.97)}.quiz-foot[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:1rem;border-top:1px solid #333}.quiz-foot[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;border-radius:.5rem;font-size:1.2rem;font-weight:600;padding:.5rem 1rem;margin:0;text-transform:uppercase;cursor:pointer;background-color:#007bff;color:#fff;transition:background-color .3s ease,box-shadow .3s ease,transform .1s ease}.quiz-foot[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3;box-shadow:0 4px #003d7a}.quiz-foot[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{transform:scale(.95)}']})};export{j as PreguntadosComponent};
