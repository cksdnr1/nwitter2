(this.webpackJsonpnwitter_2=this.webpackJsonpnwitter_2||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(31),s=a.n(c),i=a(8),o=a(22),u=a(6),l=a(9),j=a.n(l),b=a(15),d=a(16),p=a(23),f=a(24);a(43),a(53),a(54);f.a.initializeApp({apiKey:"AIzaSyAJdshHnGPjt9Y8jF7MRZysgaoCDXGcdaA",authDomain:"nwitter-68443.firebaseapp.com",projectId:"nwitter-68443",storageBucket:"nwitter-68443.appspot.com",messagingSenderId:"944941941847",appId:"1:944941941847:web:46e2fde3f1a340b78fcf12",measurementId:"G-MNKNFYV0FV"});var h=f.a,m=f.a.auth(),O=f.a.firestore(),x=f.a.storage(),v=a(1),g=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),o=s[0],u=s[1],l=Object(n.useState)(""),d=Object(i.a)(l,2),p=d[0],f=d[1],h=Object(n.useState)(""),O=Object(i.a)(h,2),x=O[0],g=O[1],w=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?u(n):"password"===a&&f(n)},N=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!a){e.next=8;break}return e.next=5,m.createUserWithEmailAndPassword(o,p);case 5:e.sent,e.next=11;break;case 8:return e.next=10,m.signInWithEmailAndPassword(o,p);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),g(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:N,className:"container",children:[Object(v.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:o,onChange:w,className:"authInput"}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:p,onChange:w,className:"authInput"}),Object(v.jsx)("input",{type:"submit",className:"authInput authSubmit",value:a?"Create Account":"Log In"}),x&&Object(v.jsx)("span",{className:"authError",children:x})]}),Object(v.jsx)("span",{onClick:function(){return r((function(e){return!e}))},className:"authSwitch",children:a?"Sign in":"Create Account"})]})},w=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new h.auth.GoogleAuthProvider:"github"===a&&(n=new h.auth.GithubAuthProvider),e.next=4,m.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"authContainer",children:[Object(v.jsx)(d.a,{icon:p.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(v.jsx)(g,{}),Object(v.jsxs)("div",{className:"authBtns",children:[Object(v.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google",Object(v.jsx)(d.a,{icon:p.b})]}),Object(v.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github",Object(v.jsx)(d.a,{icon:p.a})]})]})]})},N=a(33),y=a(20),k=function(e){var t=e.nweetObj,a=e.isOwner,r=Object(n.useState)(!1),c=Object(i.a)(r,2),s=c[0],o=c[1],u=Object(n.useState)(t.text),l=Object(i.a)(u,2),p=l[0],f=l[1],h=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure delte this nweet?")){e.next=7;break}return e.next=4,O.doc("nweets/".concat(t.id)).delete();case 4:if(""===t.attachmentURL){e.next=7;break}return e.next=7,x.refFromURL(t.attachmentURL).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return o((function(e){return!e}))},g=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(t,p,a),e.next=4,O.doc("nweets/".concat(t.id)).update({text:p});case 4:o(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"nweet",children:s?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(v.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:p,required:!0,onChange:function(e){var t=e.target.value;f(t)},className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(v.jsxs)("span",{onClick:m,className:"formBtn cancelBtn",children:[" ","Cancel"," "]})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("h4",{children:[" ",t.text," "]}),t.attachmentURL&&Object(v.jsx)("img",{src:t.attachmentURL}),a&&Object(v.jsxs)("div",{className:"nweet__actions",children:[Object(v.jsx)("span",{onClick:h,children:Object(v.jsx)(d.a,{icon:y.d})}),Object(v.jsx)("span",{onClick:m,children:Object(v.jsx)(d.a,{icon:y.a})})]})]})})},S=a(56),I=function(e){var t=e.userObj,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(""),u=Object(i.a)(o,2),l=u[0],p=u[1],f=function(){var e=Object(b.a)(j.a.mark((function e(a){var n,r,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==c){e.next=3;break}return e.abrupt("return");case 3:if(n="",""===l){e.next=12;break}return r=x.ref().child("".concat(t.uid,"/").concat(Object(S.a)())),e.next=8,r.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:n=e.sent;case 12:return o={text:c,createdAt:Date.now(),creatorId:t.uid,attachmentURL:n},e.next=15,O.collection("nweets").add(o);case 15:s(""),p("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(v.jsxs)("div",{className:"factoryInput__container",children:[Object(v.jsx)("input",{className:"factoryInput__input",value:c,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(v.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(v.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"Add photos"}),Object(v.jsx)(d.a,{icon:y.b})]}),Object(v.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;p(t)},a.readAsDataURL(t)},style:{opacity:0}}),l&&Object(v.jsxs)("div",{className:"factoryForm__attachment",children:[Object(v.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(v.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return p("")},children:[Object(v.jsx)("span",{children:"Remove"}),Object(v.jsx)(d.a,{icon:y.c})]})]})]})},C=function(e){var t=e.userObj,a=Object(n.useState)([]),r=Object(i.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)((function(){O.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(I,{userObj:t}),Object(v.jsx)("div",{style:{marginTop:30},children:c.map((function(e){return Object(v.jsx)(k,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.userObj;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-blue",children:Object(v.jsxs)("div",{className:"container-fluid",children:[Object(v.jsxs)("a",{className:"navbar-brand",href:"#",children:[Object(v.jsx)(d.a,{icon:p.c,color:"#04AAFF",size:"1x"}),"Cwitter"]}),Object(v.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(v.jsx)("span",{className:"navbar-toggler-icon"})}),Object(v.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(v.jsxs)("ul",{className:"navbar-nav",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(o.b,{to:"/",className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(o.b,{to:"/profile",className:"nav-link",href:"#",children:t.displayName?"".concat(t.displayName,"'s Profile"):"Profile"})})]})})]})})})},F=function(e){var t=e.refreshUser,a=e.userObj,r=Object(n.useState)(a.displayName),c=Object(i.a)(r,2),s=c[0],o=c[1],l=Object(u.f)(),d=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("nweets").where("creatorId","==",a.uid).orderBy("createdAt").get();case 2:t=e.sent,console.log(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===s){e.next=4;break}return e.next=4,a.updateProfile({displayName:s});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("form",{onSubmit:p,className:"profileForm",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",autoFocus:!0,placeholder:"display Name",value:s,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(v.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){m.signOut(),l.push("/")},children:"Log out"})]})},_=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return Object(v.jsxs)(o.a,{children:[a&&Object(v.jsx)(A,{userObj:n}),Object(v.jsx)(u.c,{children:a?Object(v.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(v.jsx)(u.a,{exact:!0,path:"/",children:Object(v.jsx)(C,{userObj:n})}),Object(v.jsx)(u.a,{exact:!0,path:"/Profile",children:Object(v.jsx)(F,{userObj:n,refreshUser:t})})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(u.a,{exact:!0,path:"/",children:Object(v.jsx)(w,{})})})})]})};var P=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(i.a)(c,2),o=s[0],u=s[1],l=Object(n.useState)(""),j=Object(i.a)(l,2),b=j[0],d=j[1];return Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){e?(u(!0),d({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):u(!1),r(!0)}))}),[]),Object(v.jsx)(v.Fragment,{children:a?Object(v.jsx)(_,{refreshUser:function(){var e=m.currentUser;d({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:o,userObj:b}):"Initializing..."})};a(51);s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(P,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.350434d7.chunk.js.map