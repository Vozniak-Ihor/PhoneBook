"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[594],{5594:function(e,s,n){n.r(s),n.d(s,{default:function(){return N}});var r=n(2791),t="Home_conteiner__cG3z9",a="Home_svgHome__0TR7o",o="Home_book__ioCjX",i="Home_text__YlQ2v",l="Home_wrapper__iZIsl",c="Home_scrollIcon__xiyJz",u="Home_arrow__zkzIP",m=n(9439),d=n(1413),p=function(e,s){var n=(0,r.useState)(e),t=(0,m.Z)(n,2),a=t[0],o=t[1],i=(0,r.useState)(!1),l=(0,m.Z)(i,2),c=l[0],u=l[1],p=function(e,s){var n=(0,r.useState)(!1),t=(0,m.Z)(n,2),a=t[0],o=t[1],i=(0,r.useState)(!1),l=(0,m.Z)(i,2),c=l[0],u=l[1],d=(0,r.useState)(!1),p=(0,m.Z)(d,2),h=p[0],g=p[1],x=(0,r.useState)(!1),f=(0,m.Z)(x,2),v=f[0],y=f[1],j=(0,r.useState)(!1),w=(0,m.Z)(j,2),N=w[0],E=w[1],k=(0,r.useState)(!1),b=(0,m.Z)(k,2),F=b[0],_=b[1],C=(0,r.useState)(!1),S=(0,m.Z)(C,2),I=S[0],B=S[1];return(0,r.useEffect)((function(){for(var n in s)switch(n){case"isEmpty":o(!e);break;case"isName":var r=/[A-Za-z\s]{2,25}/.test(String(e).toLowerCase());u(!r);break;case"isEmail":/(?=.{1,256}$)[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?!-)[a-zA-Z]{2,63}/.test(String(e).toLowerCase())?g(!1):g(!0);break;case"isPassword":/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(String(e))?y(!1):y(!0);break;case"minLength":e.length<s[n]?E(!0):E(!1);break;case"maxLength":e.length>s[n]?_(!0):_(!1);break;default:return}}),[e,s]),(0,r.useEffect)((function(){B(!(a||v||h||c||F||N))}),[a,c,v,h,F,N]),{isEmpty:a,nameError:c,emailError:h,passwordError:v,minLengthError:N,maxLengthError:F,inputValid:I}}(a,s);return(0,d.Z)({value:a,onChange:function(e){o(e.target.value)},onBlur:function(e){u(!0)},isDirty:c},p)},h=n(9434),g=n(4217),x=n(2195),f=n(184),v=function(){var e,s=(0,h.v9)(g.VO),n=(0,h.I0)(),r=p("",{isEmpty:!0,isName:!0}),t=p("",{isEmpty:!0,isEmail:!0}),a=p("",{isEmpty:!0,isPassword:!0});return(0,f.jsx)("div",{className:"form-container sign-up-container",children:(0,f.jsxs)("form",{className:"logForm",onSubmit:function(e){e.preventDefault();var s=e.target.elements.name.value,r=e.target.elements.password.value,t=e.target.elements.email.value;s&&r&&t?n((0,x.ce)({name:s,email:t,password:r})):alert("Please fill in all fields of the form")},children:[(0,f.jsx)("h1",{className:"logFormTitle",children:"Create Account"}),(0,f.jsx)("input",{className:"logFormInput".concat(r.isDirty&&r.nameError?" inputError":""),type:"text",name:"name",placeholder:"User name",required:!0,value:r.value,onChange:function(e){return r.onChange(e)},onBlur:function(e){return r.onBlur(e)}}),(e="Min 2 English letters",r.isDirty&&r.nameError||r.isDirty&&r.isEmpty?(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:"errorMessage",children:e})}):""),(0,f.jsx)("input",{className:"logFormInput".concat(t.isDirty&&t.emailError?" inputError":""),type:"email",name:"email",placeholder:"Email",required:!0,value:t.value,onChange:function(e){return t.onChange(e)},onBlur:function(e){return t.onBlur(e)}}),function(e){return t.isDirty&&t.emailError||t.isDirty&&t.isEmpty?(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:"errorMessage",children:e})}):""}("Not valid e-mail*"),(0,f.jsxs)("div",{className:"checkboxConteiner",children:[(0,f.jsx)("input",{className:"logFormInput".concat(a.isDirty&&a.passwordError?" inputError":""),type:"password",id:"passwordInputt",name:"password",placeholder:"Password",required:!0,onChange:function(e){return a.onChange(e)},onBlur:function(e){return a.onBlur(e)}}),(0,f.jsx)("input",{className:"checkbox",type:"checkbox",onChange:function(){var e=document.getElementById("passwordInputt");"password"===e.type?e.type="text":e.type="password"},style:{display:a?"block":"none"}})]}),function(e){return a.isDirty&&a.passwordError||a.isDirty&&a.isEmpty?(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:"errorMessage",children:e})}):""}("Min 8 chars, incl. both upper and lower case"),(0,f.jsx)("button",{className:"logFormButtonSubmit",type:"submit",disabled:!r.inputValid||!a.inputValid||!t.inputValid,children:s?"Loading...":"Sign In"})]})})},y=n(5264),j=function(){var e=(0,h.v9)(g.VO),s=(0,h.I0)(),n=p("",{isEmpty:!0,isEmail:!0}),r=p("",{isEmpty:!0,isPassword:!0});return(0,f.jsx)("div",{className:"form-container sign-in-container",children:(0,f.jsxs)("form",{className:"logForm",onSubmit:function(e){e.preventDefault();var n=e.target.elements.password.value,r=e.target.elements.email.value;s((0,x.Fv)({email:r,password:n})).then((function(e){"Request failed with status code 401"===e.payload&&y.Notify.failure("Incorrect email or password*")})).catch((function(e){console.error(e)}))},children:[(0,f.jsx)("h1",{className:"logFormTitle",children:"Sign in"}),(0,f.jsx)("input",{type:"text",name:"email",placeholder:"Email",required:!0,value:n.value,onChange:function(e){return n.onChange(e)},onBlur:function(e){return n.onBlur(e)},className:"logFormInput"}),(0,f.jsxs)("div",{className:"checkboxConteiner",children:[(0,f.jsx)("input",{type:"password",id:"passwordInput",name:"password",placeholder:"Password",required:!0,onChange:function(e){return r.onChange(e)},onBlur:function(e){return r.onBlur(e)},className:"logFormInput"}),(0,f.jsx)("input",{className:"checkbox",type:"checkbox",onChange:function(){var e=document.getElementById("passwordInput");"password"===e.type?e.type="text":e.type="password"},style:{display:r?"block":"none"}})]}),(0,f.jsx)("p",{className:"logFormText2",children:"Forgot your password?"}),(0,f.jsx)("button",{className:"logFormButtonSubmit",type:"submit",disabled:n.isEmpty||r.isEmpty,children:e?"Loading...":"Sign In"})]})})};y.Notify.init({showOnlyTheLastOne:!0,position:"left-top",useIcon:!1,clickToClose:!0,messageMaxLength:200,timeout:5e3,width:"300px"});var w=function(){var e=(0,r.useState)(!1),s=(0,m.Z)(e,2),n=s[0],t=s[1],a=function(){t(!n)};return(0,f.jsxs)("div",{className:"container ".concat(n?"right-panel-active":""),id:"register",children:[(0,f.jsx)(v,{}),(0,f.jsx)(j,{}),(0,f.jsx)("div",{className:"overlay-container",children:(0,f.jsxs)("div",{className:"overlay",children:[(0,f.jsxs)("div",{className:"overlay-panel overlay-left",children:[(0,f.jsx)("h1",{className:"logFormTitle",children:"Welcome Back!"}),(0,f.jsx)("p",{className:"logFormText",children:"To keep connected with us please login with your personal info"}),(0,f.jsx)("button",{className:"logFormButton",onClick:a,id:"signIn",children:"Sign In"})]}),(0,f.jsxs)("div",{className:"overlay-panel overlay-right",children:[(0,f.jsx)("h1",{className:"logFormTitle",children:"Hello, Friend!"}),(0,f.jsx)("p",{className:"logFormText",children:"Enter your personal details and start the journey with us"}),(0,f.jsx)("button",{className:" logFormButton",onClick:a,id:"signUp",children:"Sign Up"})]})]})})]})},N=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:t,children:(0,f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1915.5 351",className:a,children:[(0,f.jsx)("path",{className:o,d:"M1.5 245.5c280-41 365-149 467-151 32-4 75-35 136-46l-18-22s-3-3 2-9 10-7 10-7 5.1-2.1 9 2c5.9 6.3 106 131 106 131 24 10 52 34 38 54 0 0-8.6 21.5-45.6.5l-2.4-1.5s8-32 16-35c41 13 39 39 23 46-19 9-69-9-83-11-57-11-73 16-94 19 0 0-42 11-64 6-9-9 52 1 85-12 0 0 76-29 97 7 21 32 22 62 6 59s-21-30-34-35c0 0-48.1-13.5-51.1-17.5 0 0-9.4-10.4-44.7 8.8-39.5 24.3-153.4 14.5-233.6 8.5-138.7 4.3-54-50.4-46.9-55.7 272.8-72.5 198.5-154.7-5.1 2-11 12.1-74.8 54.7 44.4 53.2 27.6 1.6 102.7 6.9 124 6.4 111.5 8.6 151.3-26.1 163.6-16.6 0 0 18.4-.5 22.7-1.2 0 0 10.1 16.1 22.6 18.3 4.3 1.1 6.1 7.9 12.2 7.2 0 0 17.8 30.4 31.8 20.7 0 0 9.9 17.4 26.9 2.6 0 0-21.5-23-11.9-43.1 0 0-9.3.7-12-15.6 0 0-13.2-1.5-19.6-12.7-.6-2.8 28 11.5 56.6 9.4l31.7 33.5 4.5-1.9 22.7 29.1s2.1-1 5.9 0c3.8 1 14.7 12 14.7 12l-34.8-46.5-4.4 3-10.3-9.3c-2.9-6.9-22.7 42.1-32.7 39.3-9.7-.9-44.7-26.9 6-59.9 0 0 15.9-7.1 17.8-18.6l9.1 11.9s-9.2-.1-7.9-22.5-20.4-29-26.3-40.8c0 0-6.9-18.4 15.7-34.3 14.1-11.5 1.2-12.2-7.3-2.5 0 0-13.4 11.7-10.6 38.5-37.3-15.8-84.3-14.4-95.4-20.4-9.5-12.6-39.8-27.8-45.7-23.9-3 3.9 21.6 21.8 49.5 25.4 0 0 24.2 4.2 33.8 3.6L610 54.4s2.8-3.4-2-11L580.9 9.2s6.5-9.9 11.4-5.6l28.8 34.6s.5 2.6 10.5 0S656 34 684.5 52c28.6 18 93.7 25.9 92.9 57 0 0 2 46.7.6 59.2-1.4 12.6 18 41.8 1.9 41.8-10.6 1.4-14.5-4-13.5-.9l18.7 23.8-.6 3.7 21 29s-.4 4.5 2.4 7.4l7 15h374l27.7 64.1s70.2-70.5 147.6-32.1h38.2s69.1-75.7 137.1-56.6l-20.4-45.1c-52.4 5.4-97.3 20.8-121.4 63.6l-79.2-167.5s-114.1-18.9-149.3 15.4l74.5 164.6s85.5-47.4 128.2-11.9c0 0-71.1-11-153.5 41l-21.5-45.2-19.4-3.6-35.3-92.7s23.7 15.2 26-22.9c50.3-40 143.7-26.9 143.7-26.9s39.6-80.1 137.4-64.7l56.5 121.4s-82.6 25.6-93.6 103.3l504.6.4",fill:"none",stroke:"#292929",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10"}),(0,f.jsx)("text",{className:i,x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle",fill:"#292929",fontSize:"30",fontFamily:"Arial, sans-serif",fontWeight:"bold",children:"Phone book"})]})}),(0,f.jsx)("div",{children:(0,f.jsx)("a",{href:"#register",className:l,children:(0,f.jsxs)("svg",{viewBox:"0 0 24 90",className:c,children:[(0,f.jsx)("path",{d:"M2,12H2V30a10,10,0,1,0,20,0V12A10,10,0,1,0,2,12ZM0,12a12,12,0,1,1,24,0V30A12,12,0,1,1,0,30V12Z"}),(0,f.jsx)("path",{d:"M11,7v4a1,1,0,0,0,2,0V7a1,1,0,0,0-2,0Z"}),(0,f.jsx)("path",{className:u,d:"M12,53l5.5-5.5a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.42l-6.2,6.2a1,1,0,0,1-1.42,0L5,48.86a1,1,0,0,1,1.41-1.41Z"})]})})}),(0,f.jsx)(w,{})]})}}}]);
//# sourceMappingURL=594.f6c051ce.chunk.js.map