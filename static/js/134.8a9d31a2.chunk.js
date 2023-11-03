"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{9134:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var a=n(6727),c="LoginForm_addContactForm__+od-e",s="LoginForm_contactInput__5EvF1",i="LoginForm_submitButton__b7EE6",r=n(2791),o=n(5705),l=n(5984),u=n(9434),m=n(208),d=function(t){return t.contacts.isLoading},_=function(t){return t.contacts.items},h=n(184),p=a.Ry().shape({name:a.Z_().required("\u0406\u043c'\u044f \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435"),phoneNumber:a.Z_()}),f={name:"",phoneNumber:""},x=function(){var t=(0,u.v9)(_),e=(0,u.I0)();return(0,h.jsx)(o.J9,{initialValues:f,onSubmit:function(n,a){var c=(0,l.x0)();if(t.some((function(t){return t.name===n.name})))alert("".concat(n.name," is already in contacts"));else{var s={id:c,name:n.name,number:n.phoneNumber.toString()};e((0,m.uK)(s)),a.resetForm()}},validationSchema:p,children:(0,h.jsxs)(o.l0,{className:c,autoComplete:"off",children:[(0,h.jsxs)("label",{children:["Name",(0,h.jsx)(o.gN,{className:s,type:"text",name:"name"}),(0,h.jsx)(o.Bc,{name:"name",component:"div"})]}),(0,h.jsxs)("label",{children:["Number",(0,h.jsx)(o.gN,{className:s,type:"tel",name:"phoneNumber"}),(0,h.jsx)(o.Bc,{name:"phoneNumber",component:"div"})]}),(0,h.jsx)("button",{className:i,type:"submit",children:"Add contact"})]})})},j={contactList:"ContactsList_contactList__qIIH9",contactItem:"ContactsList_contactItem__r1MhY",contactDetails:"ContactsList_contactDetails__5eQl1",deleteButton:"ContactsList_deleteButton__PTxB1",isLoading:"ContactsList_isLoading__wUvWP"},v=function(t){return t.filter.filter},b=n(643),N=function(){var t=(0,u.v9)(d),e=(0,u.v9)(_),n=(0,u.v9)(v),a=(0,u.I0)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("ul",{className:j.contactList,children:[t&&(0,h.jsx)("div",{className:j.isLoadingWrapper,children:(0,h.jsx)(b.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:j.isLoading,wrapperStyle:"",visible:!0})}),e.filter((function(t){return t.name.toUpperCase().includes(n.toUpperCase())})).map((function(t){var e=t.id,n=t.name,c=t.number;return(0,h.jsxs)("li",{className:j.contactItem,children:[(0,h.jsxs)("p",{className:j.contactDetails,children:[n,": ",c]}),(0,h.jsx)("button",{className:j.deleteButton,type:"button",onClick:function(){return function(t){a((0,m.GK)(t))}(e)},children:"delete"})]},e)}))]})})},g="Filter_searchContactForm__jlYdo",C="Filter_searchLabel__NCLjj",L="Filter_d__g75jA",F="Filter_searchInput__n8k5T",I="Filter_deleteSvgIcon__Mrb-f",k=n(8268),w=function(){var t=(0,u.v9)(v),e=(0,u.I0)();return(0,h.jsxs)("form",{className:g,children:[(0,h.jsx)("h2",{className:C,htmlFor:"findContacts",children:"Find contacts by name"}),(0,h.jsxs)("div",{className:L,children:[(0,h.jsx)("input",{className:F,type:"text",id:"findContacts",onChange:function(t){return n=t.target.value,void e((0,k.U8)(n));var n},value:t}),t&&(0,h.jsx)("span",{onClick:function(){e((0,k.nV)())},children:(0,h.jsx)("svg",{className:I,width:"14",height:"14",viewBox:"0 0 32 32",children:(0,h.jsx)("path",{d:"M30.726 25.101c-0-0-0-0-0-0l-9.101-9.101 9.101-9.101c0-0 0-0 0-0 0.098-0.098 0.169-0.213 0.214-0.334 0.124-0.333 0.053-0.723-0.215-0.991l-4.299-4.299c-0.268-0.268-0.658-0.339-0.991-0.214-0.122 0.045-0.236 0.116-0.334 0.214 0 0-0 0-0 0l-9.101 9.101-9.101-9.101c-0-0-0-0-0-0-0.098-0.098-0.213-0.169-0.334-0.214-0.333-0.124-0.723-0.054-0.991 0.214l-4.299 4.299c-0.268 0.268-0.339 0.658-0.214 0.991 0.045 0.122 0.116 0.236 0.214 0.334 0 0 0 0 0 0l9.101 9.101-9.101 9.101c-0 0-0 0-0 0-0.098 0.098-0.169 0.213-0.214 0.334-0.124 0.333-0.054 0.723 0.214 0.991l4.299 4.299c0.268 0.268 0.658 0.339 0.991 0.215 0.122-0.045 0.236-0.116 0.334-0.214 0-0 0-0 0-0l9.101-9.101 9.101 9.101c0 0 0 0 0 0 0.098 0.098 0.213 0.169 0.334 0.214 0.333 0.124 0.723 0.053 0.991-0.215l4.299-4.299c0.268-0.268 0.339-0.658 0.215-0.991-0.045-0.122-0.116-0.236-0.214-0.334z"})})})]})]})},y=function(){var t=(0,u.I0)(),e=(0,u.v9)((function(t){return t.auth.token}));return(0,r.useEffect)((function(){e&&t((0,m.yF)())}),[e,t]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x,{}),(0,h.jsx)(w,{}),(0,h.jsx)(N,{})]})}}}]);
//# sourceMappingURL=134.8a9d31a2.chunk.js.map