(this["webpackJsonplog-in"]=this["webpackJsonplog-in"]||[]).push([[0],{10:function(e,a,t){e.exports=t(24)},15:function(e,a,t){},18:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),l=t.n(i),m=(t(15),t(9)),s=t.n(m),c=(t(16),t(17),t(18),t(2)),o=t(6),d=t(5);function g(){var e=document.getElementById("login"),a=document.getElementById("register"),t=document.getElementById("login-error"),n=document.getElementById("email-error"),r=document.getElementById("pass-error");e.className="animate__animated animate__fadeInLeft container-login display-none",a.className="animate__animated animate__fadeInLeft container-register",t.className="animate__animated animate__fadeInLeft login-error display-none",n.className="animate__animated animate__fadeInLeft register-error display-none",r.className="animate__animated animate__fadeInLeft register-error display-none"}function u(){var e=document.getElementById("login"),a=document.getElementById("register"),t=document.getElementById("register-error"),n=document.getElementById("email-error"),r=document.getElementById("pass-error");e.className="animate__animated animate__fadeInLeft container-login",a.className="animate__animated animate__fadeInLeft container-register display-none",t.className="animate__animated animate__fadeInLeft register-error display-none",n.className="animate__animated animate__fadeInLeft register-error display-none",r.className="animate__animated animate__fadeInLeft register-error display-none"}function _(){var e=document.getElementById("login-successful"),a=document.getElementById("login-card"),t=document.getElementById("login-card__left"),n=document.getElementById("login-card__right"),r=document.getElementById("login-error"),i=document.getElementById("username").value,l=document.getElementById("password").value;!0===("admin"==i)&&!0===(12345==l)?(e.className="login-successful",a.className="login-card display-none",t.className="login-card__left display-none",n.className="login-card__right display-none"):r.className="animate__animated animate__fadeInLeft login-error"}function f(){var e=document.getElementById("login-card"),a=document.getElementById("login-card__left"),t=document.getElementById("login-card__right"),n=document.getElementById("register-error"),r=document.getElementById("email-error"),i=document.getElementById("pass-error"),l=document.getElementById("register-successful"),m=document.getElementById("useremail").value,s=document.getElementById("passemail").value,c=m.includes("mail.com");!0===c&&s.length>=8?(l.className="register-successful",e.className="login-card display-none",a.className="login-card__left display-none",t.className="login-card__right display-none"):!1===c?(n.className="animate__animated animate__fadeInLeft register-error display-none",r.className="animate__animated animate__fadeInLeft register-error",i.className="animate__animated animate__fadeInLeft register-error display-none"):s.length<8?(n.className="animate__animated animate__fadeInLeft register-error display-none",r.className="animate__animated animate__fadeInLeft register-error display-none",i.className="animate__animated animate__fadeInLeft register-error"):(n.className="animate__animated animate__fadeInLeft register-error",r.className="animate__animated animate__fadeInLeft register-error display-none",i.className="animate__animated animate__fadeInLeft register-error display-none")}var p=function(){return r.a.createElement("div",{className:"login"},r.a.createElement("div",{id:"login-successful",className:"login-successful display-none"},r.a.createElement("div",{className:"animate__animated animate__fadeInDown login-succesful-content"},r.a.createElement("h1",null,"Login Success"),r.a.createElement("i",null,r.a.createElement(c.a,{className:"fas fa-check-circle",icon:d.a})))),r.a.createElement("div",{id:"register-successful",className:"register-successful display-none"},r.a.createElement("div",{className:"animate__animated animate__fadeInDown register-successful-content"},r.a.createElement("i",null,r.a.createElement(c.a,{className:"fas fa-check-circle",icon:d.a})),r.a.createElement("h1",null,"Register Success"),r.a.createElement("p",null,"Thank you. We have sent you email, Please click the link in that message to activate your account."))),r.a.createElement("div",{id:"login-card",className:"login-card"},r.a.createElement("div",{id:"login-card__left",className:"login-card__left"},r.a.createElement("img",{className:"img-icon",src:s.a,alt:"icon"}),r.a.createElement("div",{className:"animate__animated animate__fadeInDown get-started"},r.a.createElement("div",{className:"get-started__info"},r.a.createElement("h1",null,"Get Started"),r.a.createElement("a",{target:"blank",href:"https://www.google.com/"},r.a.createElement("input",{type:"button",value:"Sign in with Google+"})),r.a.createElement("a",{target:"blank",href:"https://www.facebook.com/"},r.a.createElement("input",{type:"button",value:"Sign in with Facebook"})),r.a.createElement("a",{target:"blank",href:"https://www.google.com/"},r.a.createElement(c.a,{className:"social",icon:o.b})),r.a.createElement("a",{target:"blank",href:"https://www.facebook.com/"},r.a.createElement(c.a,{className:"social",icon:o.a}))))),r.a.createElement("div",{id:"login-card__right",className:"login-card__right"},r.a.createElement("div",{className:"animate__animated animate__fadeInUp login-register"},r.a.createElement("input",{id:"login-button",className:"login-button",type:"button",value:"Log In",onClick:u}),r.a.createElement("input",{id:"register-button",className:"register-button",type:"button",value:"Register",onClick:g})),r.a.createElement("div",{id:"login",className:"animate__animated animate__fadeInLeft container-login"},r.a.createElement("h1",null,"Log In"),r.a.createElement("div",{className:"register-input"},r.a.createElement("h2",null,"Username"),r.a.createElement("input",{id:"username",className:"input-text",type:"text",placeholder:"Type here your name..."}),r.a.createElement("h2",null,"Password"),r.a.createElement("input",{id:"password",className:"input-text",type:"password",placeholder:"Type here your password..."})),r.a.createElement("input",{id:"send-button-login",className:"signin-button",type:"button",value:"Sign In",onClick:_}),r.a.createElement("div",{className:"forgot-password"},r.a.createElement("a",{href:"/#"},r.a.createElement("span",null,"Forgot Password")),r.a.createElement("a",{id:"not-a-member-yet",href:"/#",onClick:g},r.a.createElement("span",null,"Not a ",r.a.createElement("u",null,"Member")," yet"))),r.a.createElement("div",{id:"login-error",className:"animate__animated animate__fadeInLeft login-error display-none"},r.a.createElement("p",null,"Error! The user is wrong",r.a.createElement("span",null,r.a.createElement("a",{href:"/#"},"\xbfforgot password?"))))),r.a.createElement("div",{id:"register",className:"animate__animated animate__fadeInLeft container-register display-none"},r.a.createElement("h1",null,"Register"),r.a.createElement("div",{className:"register-input"},r.a.createElement("h2",null,"Email"),r.a.createElement("input",{id:"useremail",className:"input-text",type:"text",placeholder:"Type here your email@email.com..."}),r.a.createElement("h2",null,"Password"),r.a.createElement("input",{id:"passemail",className:"input-text",type:"password",placeholder:"Type here your password..."})),r.a.createElement("input",{id:"send-button-register",className:"signin-button",type:"button",value:"Register",onClick:f}),r.a.createElement("div",{id:"register-error",className:"animate__animated animate__fadeInLeft register-error display-none"},r.a.createElement("p",null,"a problem has been occurred while submitting your data")),r.a.createElement("div",{id:"email-error",className:"animate__animated animate__fadeInLeft register-error display-none"},r.a.createElement("p",null,"Your email must contain @email.com")),r.a.createElement("div",{id:"pass-error",className:"animate__animated animate__fadeInLeft register-error display-none"},r.a.createElement("p",null,"Your Password Security Is Weak"))))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))},9:function(e,a,t){e.exports=t.p+"static/media/icon.d8bd756c.png"}},[[10,1,2]]]);
//# sourceMappingURL=main.d97b2c9c.chunk.js.map