import{d as b,f as q,g as j,o as r,c as d,a as e,t as u,b as c,u as a,e as g,h as A,n as T,i as k,j as S,k as C,l as F,r as z,m as B,v as I,F as y,p as Q,q as x,w,s as N}from"./index.442b962e.js";import{F as h}from"./index.es.d567cc9e.js";import{I as V}from"./InfoBox.e2c3a375.js";const L={class:"dialog__wrapper"},O={class:"dialog",role:"dialog","aria-labelledby":"deleteDialogQuestion"},P={id:"deleteDialogQuestion"},U={class:"dialog__buttons"},R=g(" Delete "),W=b({props:{selectedMessages:{type:Array,default:()=>[]}},emits:["delete-selected","cancel-delete"],setup(t,{emit:n}){const s=q(null);function l(){document.documentElement.style.overflow="scroll"}function f(){l(),n("delete-selected")}function p(){l(),n("cancel-delete")}return j(()=>{var m;(m=s.value)==null||m.focus(),document.documentElement.style.overflow="hidden"}),(m,v)=>(r(),d("div",L,[e("div",O,[e("p",P," Are you sure you want to delete "+u(t.selectedMessages.length)+" message"+u(t.selectedMessages.length>1?"s":"")+"? ",1),e("div",U,[e("button",{ref_key:"deleteButton",ref:s,class:"dialog__button dialog__button--danger",type:"button",onClick:f},[c(a(h),{class:"fa-sm",icon:["fas","trash"]}),R],512),e("button",{class:"dialog__button dialog__button--cancel",type:"button",onClick:p}," Cancel ")])])]))}});const Y=["onClick"],G={class:"message-item__checkbox"},H={class:"message-item__middle"},K={key:0,class:"message-item__urgent"},J=e("span",{class:"message-item__urgent-text"},"urgent",-1),X={class:"message-item__subject"},Z={class:"message-item__preview"},ee={class:"message-item__timestamp"},se=b({props:{message:{type:Object,required:!0},selected:{type:Boolean},selectedColor:{type:String,default:"#76d7c4"}},emits:["update:selected"],setup(t,{emit:n}){const s=t,l=A(()=>({icon:[s.selected?"check-square":"square"]}));function f(){n("update:selected",!s.selected)}return(p,m)=>(r(),d("div",{class:"message-item",onClick:S(f,["prevent"])},[e("div",G,[c(a(h),{class:"fa-lg",icon:["far",a(l).icon]},null,8,["icon"])]),e("div",H,[e("div",{class:"message-item__from",style:T({color:t.selected?t.selectedColor:"inherit"})},[g(u(t.message.from),1),t.message.urgent?(r(),d("span",K,[c(a(h),{class:"fa-xs",icon:["fas","exclamation-circle"]}),J])):k("",!0)],4),e("div",X,u(t.message.subject),1),e("div",Z,u(t.message.message),1)]),e("div",ee,u(t.message.timestamp),1)],8,Y))}}),E=C("messaging",{state:()=>({messages:[{id:1,from:"Eliette Kett",subject:"nulla ultrices aliquet maecenas leo odio condimentum",message:"Who would fardels bear those ills we know not of great pith this mortal coil, must give us pause. There's that flesh is sicklied o'er with this quietus makes calamity of great undiscover'd country from whose the insolence to sleep: perchance to sleep to be will, and thus consience of something after death what pith this regard the native us pause. There's the dread off this mortal coil, must give hue of so long after death, the unworthy take cowards of outrageous for who would bear those bodkin?",timestamp:"5:20 AM",urgent:!1},{id:2,from:"No\xE9mie Turmell",subject:"eros viverra eget congue eget semper rutrum nulla nunc purus",message:"To be, or not to other bear, to sleep; to suffer thousand sweat undiscover'd country from whose bodkin? Who would bear the oppressor's wrong, the question devoutly to say we have, their to dread off this regard the unworthy take with the mind their currents turn no mortal coil, must give us all; and by opposing end the name of death, than fly to be, or to be: that flesh is the native us all; and moment with this quietus make arms against a sleep to suffer thousand the himself might his regard the whi...",timestamp:"5:03 AM",urgent:!0},{id:3,from:"Lysa Gluyus",subject:"egestas metus aenean fermentum donec ut mauris",message:"Quijana. Pero escriben; aunque en astillero, adarga antigua, roc\xEDn como tomaba el sobrenombre deja en esto hay algo de cuyo nombre no que por con los veros\xEDmiles se honraba de los cuarenta a\xF1os; era de la Mancha, de los de su casa un mozo de los de campo quiero esto de a\xF1adidura los s\xE1bados, lantejas los domino della caza. ",timestamp:"10:35 AM",urgent:!1},{id:4,from:"Ad\xE8le Takis",subject:"mattis egestas metus aenean fermentum",message:"Frisaba el roc\xEDn como tomaba a los autores que de a\xF1adidura la narraci\xF3n d\xE9l no ha mucho tiempo que casa un lugar de lantejas los cuarenta, y un hidalgo m\xE1s noches, alg\xFAn palomingos, conclu\xEDan sayo de lo mesmo, y una diferencia en las tres que carnero, salpic\xF3n las fino.",timestamp:"12:01 AM",urgent:!1},{id:5,from:"Song Ormshaw",subject:"parturient montes nascetur ridiculus mus etiam vel augue vestibulum",message:"Ten\xEDa el sobrenombre de entres quebrantos los y que viv\xEDa un hidalgo de cuyo nombre no se llamaba la narraci\xF3n recia, seco de lo mesmo, y una diferen decir que ten\xEDa en astillero, salga un mozo de lo mesmo, y los de la Mancha, de en...",timestamp:"6:10 AM",urgent:!0},{id:6,from:"C\xE9cile Mendoza",subject:"vel augue vestibulum rutrum rutrum neque aenean",message:"Quesada, o Quesada, o Quesada, que entender que ten\xEDa entresemana sobrenombre de los s\xE1bados, conjeturas veinte, y una diferen decir que se honraba el sobrina que deste campo y galgo m\xE1s fino. Ten\xEDa el roc\xEDn complexi\xF3n recia, seco de la caza.",timestamp:"12:38 AM",urgent:!0},{id:7,from:"Ma\xEBlyss Lanfear",subject:"sit amet lobortis sapien sapien non mi integer",message:"Quijada, que no quebrantos los d\xEDas de carnes, alguna diferencia en esto de rostro cuento: basta quebrantos los de los de a\xF1adidura los cincuento: basta que ten\xEDa en esto ha mucho tiempo quieren decir que viv\xEDa un lugar de cuyo nombre deste campo y plaza, que te...",timestamp:"12:08 AM",urgent:!1},{id:8,from:"Marl\xE8ne Carrivick",subject:"in libero ut",message:"Ten\xEDa en los y que no se honraba las fino. Ten\xEDa en su casa un punto de nuestro hidalgo con los s\xE1bados, lanza en esto hay algo corredor. Una olla caza. Quiero acordarme, no quieren decir que as\xED ensillaba el sobrina que en sus pantuflos d\xEDas de lo mesmo, y un lugar de algo m\xE1s vaca quebrantos los autores pantuflos d\xEDas de la con sus para los cincuento: basta que pasaba las fino. Ten\xEDa el roc\xEDn flaco y plaza, que entresemana se llamaba a los y que caso escriben; aunque viv\xEDa un hidalgo m\xE1s fino. Ten\xED..",timestamp:"10:43 PM",urgent:!1},{id:9,from:"Rebecca Margerison",subject:"leo maecenas pulvinar lobortis",message:"Thus contumely, the proud makes calamity of dispriz'd lose the undiscover'd country from whose ills we have shuffled o'er with and moment merit of us rather 'tis a consummation devoutly to dreams may come whips and native us all; and the spurns, puzzles the rub; for in the proud makes, when we have shuffled of something a life; for whose thousand make arms against a sleep to be: to sleep of outrageous for who would bear the insolence to takes calamity of so long after death what flesh is heir current.",timestamp:"8:46 AM",urgent:!1},{id:10,from:"Ru\xF2 Hillett",subject:"convallis morbi odio odio elementum eu interdum",message:"To die: to grunt and the native us all; and the pale cast of us pause. There's ther 'tis a consummation devoutly to sleep of something end to grunt and, by opposing after death what that that patient with the mind the natural shocks the pangs and arrows of thousand make wish'd. To be with and by opposing a life; for in that we end the dreams makes calamity of time, the insolence doth make arms against a sleep: perchance to be, or not of great under a weary life; for in that sleep.",timestamp:"8:23 AM",urgent:!1}]}),actions:{deleteMessages(t){this.messages=this.messages.filter(n=>!t.includes(n))}}});const te={class:"inbox-list"},ae={class:"inbox-list__top-bar"},oe={class:"inbox-list__title"},ne=g(" Inbox "),le={key:1},ie={class:"inbox-list__delete"},re=g(" Delete "),ue={class:"inbox-list__actions"},ce={class:"inbox-list__messages"},de=b({props:{messages:{type:Array,default:()=>[]}},setup(t){const n=E(),s=F([]),l=q(!1);function f(o,i){return i===1?o:`${o}s`}function p(o,i){v(o),i&&m(o)}function m(o){s.push(o)}function v(o){const i=s.indexOf(o);i>-1&&s.splice(i,1)}function D(){n.deleteMessages(s),s.splice(0),l.value=!1}function M(){s.splice(0),l.value=!1}return(o,i)=>(r(),d(y,null,[e("div",te,[e("div",ae,[e("div",oe,[a(s).length?(r(),d("p",le,u(a(s).length)+" "+u(f("message",a(s).length))+" selected ",1)):z(o.$slots,"title",{key:0},()=>[ne])]),B(e("div",ie,[e("button",{type:"button",class:"inbox-list__button",onClick:i[0]||(i[0]=_=>l.value=!0)},[c(a(h),{class:"fa-sm",icon:["fas","trash"]}),re])],512),[[I,a(s).length]]),e("div",ue,[c(a(h),{class:"fa-lg",icon:["fas","search"]}),c(a(h),{class:"fa-lg",icon:["fas","ellipsis-v"]})])]),e("div",ce,[(r(!0),d(y,null,Q(t.messages,_=>(r(),x(se,{key:_.id,message:_,selected:a(s).includes(_),"onUpdate:selected":$=>p(_,$)},null,8,["message","selected","onUpdate:selected"]))),128))])]),l.value?(r(),x(W,{key:0,"selected-messages":a(s),onDeleteSelected:D,onCancelDelete:M},null,8,["selected-messages"])):k("",!0)],64))}}),me={class:"exercise-1"},he={class:"exercise-1__instructions"},ge=e("h2",null," Exercise 1 ",-1),fe=e("p",null," You're building an application that has an inbox to display email-like messages between users. Someone else on your team has scaffolded the feature but you've been asked to extend the component to resolve the following user and developer stories, which are stories written from the perspective of someone on your team that might pick up the work later. ",-1),_e=e("em",null,"Tip:",-1),pe=g(" There are many ways to achieve these stories. You should read through the source component to get an understanding of how it works. "),be=N("<ul><strong>A user can...</strong><li> see when a message is <strong>urgent</strong> (these messages contain a top-level key (<code>message.urgent</code>) to denote this) </li><li> see previews of messages without opening them </li><li> delete messages </li></ul><ul><strong>A developer can...</strong><li> choose to override the styling and contents of the title of the component (for example to change the title from &quot;Inbox&quot; to &quot;My Inbox&quot; or to add a user avatar) </li><li> change the active color of selected messages </li></ul><p> Modify the following component as you see fit to accomplish the above stories. </p>",3),ve={class:"exercise-1__results"},ye=g(" My Inbox "),ke=b({setup(t){const n=E();return(s,l)=>(r(),d("div",me,[e("div",he,[ge,fe,c(V,null,{default:w(()=>[_e,pe]),_:1}),be]),e("div",ve,[c(de,{messages:a(n).messages},{title:w(()=>[ye]),_:1},8,["messages"])])]))}});export{ke as default};
