(this.webpackJsonpnwitter_2=this.webpackJsonpnwitter_2||[]).push([[0],{73:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(29),s=n.n(r),i=n(12),o=n(33),u=n(11),l=n(14),j=n.n(l),d=n(22),b=n(23),p=n(36),O=n(39);n(71),n(85),n(86);O.a.initializeApp({apiKey:"AIzaSyAJdshHnGPjt9Y8jF7MRZysgaoCDXGcdaA",authDomain:"nwitter-68443.firebaseapp.com",projectId:"nwitter-68443",storageBucket:"nwitter-68443.appspot.com",messagingSenderId:"944941941847",appId:"1:944941941847:web:46e2fde3f1a340b78fcf12",measurementId:"G-MNKNFYV0FV"});var h=O.a,m=O.a.auth(),f=O.a.firestore(),x=O.a.storage(),v=n(97),g=n(57),w=n(92),y=(n(73),n(2)),N=function(e){var t=e.joinModal,n=e.setJoinModal;return Object(y.jsx)("div",{className:"modalBackground",children:Object(y.jsxs)("div",{className:"modalContainer",children:[Object(y.jsx)("div",{className:"titleCloseBtn",children:Object(y.jsx)(g.a,{onClick:function(){return n(0)},children:"X"})}),Object(y.jsx)("div",{className:"title",children:"Join us"}),1===t?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"body",children:Object(y.jsx)(v.a,{className:"pwdInput",type:"email",placeholder:"put your email address"})}),Object(y.jsxs)("div",{className:"footer",children:[Object(y.jsx)(g.a,{onClick:function(){return n(2)},children:"Next"}),Object(y.jsx)(g.a,{onClick:function(){return n(0)},id:"cancelBtn",children:"Cancel"})]})]}):2===t?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"body",children:Object(y.jsxs)(w.a,{className:"PasswordGroup",children:[Object(y.jsx)(v.a,{className:"pwdInput",as:"input",type:"text",placeholder:"First Name"}),Object(y.jsx)(v.a,{className:"pwdInput",as:"input",type:"text",placeholder:"last Name"}),Object(y.jsx)(v.a,{className:"pwdInput",as:"input",type:"password",placeholder:"set a password"})]})}),Object(y.jsxs)("div",{className:"footer",children:[Object(y.jsx)(g.a,{onClick:function(){return n(0)},children:"Join"}),Object(y.jsx)(g.a,{onClick:function(){return n(0)},id:"cancelBtn",children:"Cancel"})]})]}):void 0]})})},k=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=(t[1],Object(a.useState)("")),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),b=l[0],p=l[1],O=Object(a.useState)(""),h=Object(i.a)(O,2),f=h[0],x=h[1],v=Object(a.useState)(0),w=Object(i.a)(v,2),k=w[0],C=w[1],I=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?o(a):"password"===n&&p(a)},S=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!n){e.next=8;break}return e.next=5,m.createUserWithEmailAndPassword(s,b);case 5:e.sent,e.next=11;break;case 8:return e.next=10,m.signInWithEmailAndPassword(s,b);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),x(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("form",{onSubmit:S,className:"container",children:[Object(y.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:s,onChange:I,className:"authInput"}),Object(y.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:b,onChange:I,className:"authInput"}),Object(y.jsx)("input",{type:"submit",className:"authInput authSubmit",value:"Log In"}),f&&Object(y.jsx)("span",{className:"authError",children:f})]}),Object(y.jsx)(g.a,{onClick:function(){C(1),console.log(k)},style:{background:"transparent",color:"black",border:"None"},children:"Join"}),function(){if(0!==k)return Object(y.jsx)(N,{joinModal:k,setJoinModal:C})}()]})},C=function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new h.auth.GoogleAuthProvider:"github"===n&&(a=new h.auth.GithubAuthProvider),e.next=4,m.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"authContainer",children:[Object(y.jsx)(b.a,{icon:p.c,color:"#04AAFF",size:"3x",style:{marginBottom:70}}),Object(y.jsx)(k,{}),Object(y.jsxs)("div",{className:"authBtns",children:[Object(y.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google",Object(y.jsx)(b.a,{icon:p.b})]}),Object(y.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github",Object(y.jsx)(b.a,{icon:p.a})]})]})]})},I=n(61),S=n(37),F=function(e){var t=e.nweetObj,n=e.isOwner,c=e.userObj,r=Object(a.useState)(!1),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(t.text),p=Object(i.a)(l,2),O=p[0],h=p[1],m=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure delte this nweet?")){e.next=7;break}return e.next=4,f.doc("nweets/".concat(t.id)).delete();case 4:if(""===t.attachmentURL){e.next=7;break}return e.next=7,x.refFromURL(t.attachmentURL).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){return u((function(e){return!e}))},g=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(t,O,n),e.next=4,f.doc("nweets/".concat(t.id)).update({text:O});case 4:u(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{className:"nweet",children:o?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(y.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:O,required:!0,onChange:function(e){var t=e.target.value;h(t)},className:"formInput"}),Object(y.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(y.jsxs)("span",{onClick:v,className:"formBtn cancelBtn",children:[" ","Cancel"," "]})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("h4",{children:[" ",t.text," ",c.displayName," "]}),t.attachmentURL&&Object(y.jsx)("img",{src:t.attachmentURL}),n&&Object(y.jsxs)("div",{className:"nweet__actions",children:[Object(y.jsx)("span",{onClick:m,children:Object(y.jsx)(b.a,{icon:S.d})}),Object(y.jsx)("span",{onClick:v,children:Object(y.jsx)(b.a,{icon:S.a})})]})]})})},B=n(96),A=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],p=u[1],O=function(){var e=Object(d.a)(j.a.mark((function e(n){var a,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==r){e.next=3;break}return e.abrupt("return");case 3:if(a="",""===l){e.next=12;break}return c=x.ref().child("".concat(t.uid,"/").concat(Object(B.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentURL:a},e.next=15,f.collection("nweets").add(o);case 15:s(""),p("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("form",{onSubmit:O,className:"factoryForm",children:[Object(y.jsxs)("div",{className:"factoryInput__container",children:[Object(y.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(y.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(y.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(y.jsx)("span",{children:"Add photos"}),Object(y.jsx)(b.a,{icon:S.b})]}),Object(y.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;p(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(y.jsxs)("div",{className:"factoryForm__attachment",children:[Object(y.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(y.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return p("")},children:[Object(y.jsx)("span",{children:"Remove"}),Object(y.jsx)(b.a,{icon:S.c})]})]})]})},_=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){f.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(I.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)(A,{userObj:t}),Object(y.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(y.jsx)(F,{nweetObj:e,isOwner:e.creatorId===t.uid,userObj:t},e.id)}))})]})},P=n(94),U=n(95),L=n(93),R=function(){m.signOut()},E=function(e){var t=e.userObj;return Object(y.jsxs)(P.a,{bg:"myRed",variant:"dark",sticky:"top",expand:"sm",children:[Object(y.jsxs)(P.a.Brand,{children:[Object(y.jsx)(b.a,{icon:p.c,color:"white",size:"1x"}),"Cwitter"]}),Object(y.jsx)(P.a.Toggle,{}),Object(y.jsx)(P.a.Collapse,{children:Object(y.jsxs)(U.a,{children:[Object(y.jsx)(o.b,{className:"nav-link",to:"/Home",activeClassName:"active",children:"Home"}),Object(y.jsxs)(L.a,{title:"profile",id:"basic-nav-dropdown",children:[Object(y.jsx)(o.b,{className:"nav-link",style:{color:"black"},to:"/profile",children:t.displayName?"".concat(t.displayName,"'s profile"):"Profile"}),Object(y.jsx)(o.b,{className:"nav-link",style:{color:"black"},to:"/",children:Object(y.jsx)("span",{onClick:R,children:"Log Out"})})]})]})})]})},D=function(e){var t=e.refreshUser,n=e.userObj,c=Object(a.useState)(n.displayName),r=Object(i.a)(c,2),s=r[0],o=r[1],l=Object(u.f)(),b=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.collection("nweets").where("creatorId","==",n.uid).orderBy("createdAt").get();case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===s){e.next=4;break}return e.next=4,n.updateProfile({displayName:s});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){b()}),[]),Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)("form",{onSubmit:p,className:"profileForm",children:[Object(y.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",autoFocus:!0,placeholder:"display Name",value:s,className:"formInput"}),Object(y.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(y.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){m.signOut(),l.push("/")},children:"Log out"})]})},G=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(y.jsxs)(o.a,{children:[n&&Object(y.jsx)(E,{userObj:a}),Object(y.jsx)(u.c,{children:n?Object(y.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(y.jsx)(u.a,{exact:!0,path:"/",children:Object(y.jsx)(_,{userObj:a})}),Object(y.jsx)(u.a,{exact:!0,path:"/Home",children:Object(y.jsx)(_,{userObj:a})}),Object(y.jsx)(u.a,{exact:!0,path:"/Profile",children:Object(y.jsx)(D,{userObj:a,refreshUser:t})})]}):Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(u.a,{exact:!0,path:"/",children:Object(y.jsx)(C,{})})})})]})};var J=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),d=j[0],b=j[1];return Object(a.useEffect)((function(){m.onAuthStateChanged((function(e){e?(u(!0),b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):u(!1),c(!0)}))}),[]),Object(y.jsx)(y.Fragment,{children:n?Object(y.jsx)(G,{refreshUser:function(){var e=m.currentUser;b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:o,userObj:d}):"Initializing..."})};n(82),n(83);s.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(J,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.418559fd.chunk.js.map