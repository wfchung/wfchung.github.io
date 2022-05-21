import{_ as v,a as l,C as _,o as i,c as r,b as c,t as g,r as m,F as I,d as f,e as y,w as p,v as h,f as T,g as $}from"./index.86094c6d.js";var D="/assets/ticket.11cb896e.svg";const w={props:{ticketId:String},data(){return{ticketData:null}},methods:{async fetchData(){this.ticketData=null;try{const t=await l.get(`${_.API_HOST}/api/tickets/${this.ticketId}`);this.ticketData=t.data}catch(t){console.error(t)}}},mounted(){this.fetchData()}},S={class:"ticket-item"},x=c("img",{alt:"Ticket",src:D},null,-1),P={key:0},O={key:1},A={class:"tkid"},C={class:"status"};function E(t,e,o,d,s,u){return i(),r("div",S,[x,s.ticketData?(i(),r("div",O,[c("div",A,g(s.ticketData.ticketDisplayId),1),c("div",C,g(s.ticketData.ticketId),1)])):(i(),r("div",P,"Loading..."))])}var H=v(w,[["render",E]]);const L={props:{resourceId:String},data(){return{ticketData:[]}},mounted(){this.fetchData()},components:{Ticket:H},methods:{async fetchData(){this.ticketData=null;try{const t=await l.get(`${_.API_HOST}/api/resources/${this.resourceId}/tickets`);this.ticketData=t.data,console.log(t.data)}catch(t){console.error(t)}}}},M={class:"container-fluid ticket-queue"},V={class:"resource-name"},b={class:"ticket-grid"};function N(t,e,o,d,s,u){const n=m("Ticket");return i(),r("div",M,[c("div",V,"Resource: "+g(o.resourceId),1),c("div",b,[(i(!0),r(I,null,f(s.ticketData,k=>(i(),y(n,{key:k.ticketId,ticketId:k.ticketId},null,8,["ticketId"]))),128))])])}var B=v(L,[["render",N]]);const Q={data(){return{ticketIdList:[],msg:null}}},U={class:"msg-panel"},q={class:"container"},F={class:"row"},K=c("div",{class:"col"}," Send message to: ",-1),R={class:"col"},j={class:"row"},z={class:"col"},G={class:"col"};function J(t,e,o,d,s,u){return i(),r("div",U,[c("div",q,[c("div",F,[K,c("div",R,[p(c("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>s.ticketIdList=n),placeholder:"Enter ticket id"},null,512),[[h,s.ticketIdList]])])]),c("div",j,[c("div",z,[p(c("input",{"onUpdate:modelValue":e[1]||(e[1]=n=>s.msg=n),placeholder:"Enter message to send"},null,512),[[h,s.msg]])]),c("div",G,[c("button",{onClick:e[2]||(e[2]=n=>t.Send(s.ticketIdList,s.msg))},"Send")])])])])}var W=v(Q,[["render",J]]);const X=T("ticket",{state:()=>({tickets:[]}),getters:{getTickets(t){return t.tickets}},actions:{async fetchTickets(){try{const t=await l.get(`${_.API_HOST}/api/tickets`);this.tickets=t.data}catch(t){alert(t),console.log(t)}},async newTicket(t,e){try{let o={ticketDisplayId:t,resourceId:e};const{data:d}=await l.post(`${_.API_HOST}/api/tickets`,o);return d}catch(o){alert(o),console.log(o)}},async fetchTicket(t){try{const{data:e}=await l.get(`${_.API_HOST}/api/tickets/${t}`);return e}catch(e){alert(e),console.log(e)}}}}),Y={data(){return{ticketData:[],resourceId:"",displayedTicketId:""}},mounted(){this.fetchData()},components:{TicketQueue:B,MessagePanel:W},methods:{async fetchData(){this.ticketData=null;try{const t=await l.get(`${_.API_HOST}/api/resources`);this.ticketData=t.data,console.log(t.data)}catch(t){console.error(t)}},NewTicket(t,e){X().newTicket(t,e).then(function(s){s!="OK"&&alert("Error:"+s)}),this.fetchData()}}},Z={class:"container queue-grid"},tt={class:"row"},et={class:"col new-ticket-panel"},st={class:"col"},ct={class:"row ticket-grid"};function ot(t,e,o,d,s,u){const n=m("MessagePanel"),k=m("TicketQueue");return i(),r("div",Z,[c("div",tt,[c("div",et,[p(c("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>s.displayedTicketId=a),placeholder:"Enter ticket id"},null,512),[[h,s.displayedTicketId]]),p(c("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.resourceId=a),placeholder:"Enter Doctor"},null,512),[[h,s.resourceId]]),c("button",{onClick:e[2]||(e[2]=a=>u.NewTicket(s.displayedTicketId,s.resourceId))},"New Ticket")]),c("div",st,[$(n)])]),c("div",ct,[(i(!0),r(I,null,f(s.ticketData,a=>(i(),y(k,{key:a.resourceId,resourceId:a.resourceId},null,8,["resourceId"]))),128))])])}var nt=v(Y,[["render",ot]]);export{nt as default};
