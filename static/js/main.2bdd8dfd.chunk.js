(this.webpackJsonpmonika=this.webpackJsonpmonika||[]).push([[0],[,,,,,,,function(e,s,a){e.exports={title:"Dialogs_title__13qEL",dialogs:"Dialogs_dialogs__3oGrj",dialogItems:"Dialogs_dialogItems__1-ZRS",active:"Dialogs_active__Wcalc",dialog:"Dialogs_dialog__3dTOi",messages:"Dialogs_messages__3yQXq",message:"Dialogs_message__3f6WA",nameWrap:"Dialogs_nameWrap__1cZPX",img:"Dialogs_img__3lozy",name:"Dialogs_name__2pnBj"}},function(e,s,a){e.exports={navbar:"Navbar_navbar__1r5aD",menuItem:"Navbar_menuItem__1CPfg",active:"Navbar_active__3oTBL"}},,,function(e,s,a){e.exports={headerWrap:"Header_headerWrap__2i14z",header:"Header_header__2vj-A",headerMenu:"Header_headerMenu__3AfCv",active:"Header_active__2bEK_",auth:"Header_auth__Gszgd",search:"Header_search__1Q6ak"}},,function(e,s,a){e.exports={title:"MyPosts_title__M0F4l",formWrap:"MyPosts_formWrap__jq0E1"}},function(e,s,a){e.exports={item:"Post_item__131AY",header:"Post_header__3HegY",likes:"Post_likes__2uztb"}},,,,,,,function(e,s,a){e.exports={wrapper:"Layout_wrapper__2HEah"}},,function(e,s,a){e.exports={description:"ProfileInfo_description__L8Ln_"}},function(e,s,a){e.exports={profile:"Profile_profile__3InSw"}},,,,,,function(e,s,a){},function(e,s,a){},,,,,,,function(e,s,a){"use strict";a.r(s);var t=a(0),i=a(1),c=a.n(i),n=a(20),r=a.n(n),o=(a(30),a(31),a(21)),l=a.n(o),d=function(e){var s=e.children;return Object(t.jsx)("div",{className:l.a.wrapper,children:s})},m=a(11),j=a.n(m),h=a.p+"static/media/logo.c055764e.png",b=a.p+"static/media/Kozlov.4bd3f2bc.png",u=a(4),g=function(){return Object(t.jsx)("header",{className:j.a.header,children:Object(t.jsxs)("div",{className:j.a.headerWrap,children:[Object(t.jsxs)("ul",{className:j.a.headerMenu,children:[Object(t.jsx)("li",{children:Object(t.jsx)(u.b,{to:"/home",children:"Home"})}),Object(t.jsx)("li",{children:Object(t.jsx)(u.b,{to:"/dialogs",children:"Message"})}),Object(t.jsx)("li",{children:Object(t.jsx)(u.b,{to:"#a",children:"Notification"})})]}),Object(t.jsx)("div",{children:Object(t.jsx)("a",{href:"/",children:Object(t.jsx)("img",{src:h,width:"50",alt:"img"})})}),Object(t.jsxs)("div",{className:j.a.auth,children:[Object(t.jsx)("div",{className:j.a.search,children:Object(t.jsx)("input",{placeholder:"search"})}),Object(t.jsx)("img",{src:b,alt:"ava"})]})]})})},x=a(8),_=a.n(x),p=function(){return Object(t.jsx)("div",{className:_.a.navbar,children:Object(t.jsxs)("ul",{className:_.a.menu,children:[Object(t.jsx)("li",{className:_.a.menuItem,children:Object(t.jsx)(u.b,{to:"/profile",activeClassName:_.a.active,children:"Profile"})}),Object(t.jsx)("li",{className:_.a.menuItem,children:Object(t.jsx)(u.b,{to:"/dialogs",activeClassName:_.a.active,children:"Message"})}),Object(t.jsx)("li",{className:_.a.menuItem,children:Object(t.jsx)(u.b,{to:"/news",activeClassName:_.a.active,children:"News"})}),Object(t.jsx)("li",{className:_.a.menuItem,children:Object(t.jsx)(u.b,{to:"/music",activeClassName:_.a.active,children:"Music"})}),Object(t.jsx)("li",{className:_.a.menuItem,children:Object(t.jsx)(u.b,{to:"/settings",activeClassName:_.a.active,children:"Settings"})})]})})},O=a(13),f=a.n(O),v=(a(37),a(14)),N=a.n(v),P=a.p+"static/media/max.b7b87ed2.png",k=function(e){var s=e.message,a=e.like,i=e.dislike;return Object(t.jsxs)("div",{className:N.a.item,children:[Object(t.jsxs)("div",{className:N.a.header,children:[Object(t.jsx)("img",{src:P,alt:"ava"}),Object(t.jsx)("span",{children:s})]}),Object(t.jsxs)("div",{className:N.a.likes,children:[Object(t.jsx)("i",{className:"far fa-thumbs-up",children:a}),Object(t.jsx)("i",{className:"far fa-thumbs-down",children:i})]})]})},w=function(e){var s=e.posts,a=e.addPost,i=e.newPostText,n=e.updateNewPostText,r=c.a.createRef();return Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{className:f.a.title,children:"MyPosts"}),Object(t.jsxs)("div",{className:f.a.formWrap,children:[Object(t.jsx)("textarea",{ref:r,value:i,onChange:function(){var e=r.current.value;n(e)}}),Object(t.jsx)("button",{onClick:a,children:"Add post"})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{className:f.a.title,children:"New post"}),s.map((function(e){return Object(t.jsx)(k,{message:e.message,like:e.like,dislike:e.dislike})}))]})]})},y=a(23),T=a.n(y),H=function(){return Object(t.jsx)("div",{className:T.a.description,children:"Ava + Description"})},I=a(24),D=a.n(I),M=function(e){var s=e.profilePage,a=e.addPost,i=e.updateNewPostText;return Object(t.jsxs)("div",{className:D.a.profile,children:[Object(t.jsx)(H,{}),Object(t.jsx)(w,{posts:s.posts,addPost:a,updateNewPostText:i,newPostText:s.newPostText})]})},S=a(7),W=a.n(S),C=function(e){var s=e.name,a=e.id,i="/dialogs/".concat(a);return Object(t.jsx)("div",{className:W.a.dialog+" "+W.a.active,children:Object(t.jsx)(u.b,{to:i,children:Object(t.jsxs)("div",{className:W.a.nameWrap,children:[Object(t.jsx)("img",{src:P,alt:"ava",className:W.a.img}),Object(t.jsx)("span",{className:W.a.name,children:s})]})})})},E=function(e){var s=e.message;return Object(t.jsx)("div",{className:W.a.message,children:s})},z=function(e){var s=e.dialogs,a=e.messages;return Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{className:W.a.title,children:"Dialogs"}),Object(t.jsxs)("div",{className:W.a.dialogs,children:[Object(t.jsx)("div",{className:W.a.dialogItems,children:s.map((function(e){return Object(t.jsx)(C,{name:e.name,id:e.id})}))}),Object(t.jsx)("div",{className:W.a.messages,children:a.map((function(e){return Object(t.jsx)(E,{message:e.message})}))})]})]})},A=a(2);var L=function(e){var s=e.state,a=e.addPost,i=e.updateNewPostText,c=s.dialogsPage,n=s.profilePage;return Object(t.jsxs)(u.a,{children:[Object(t.jsx)(g,{}),Object(t.jsxs)(d,{children:[Object(t.jsx)(p,{}),Object(t.jsxs)("div",{className:"content",children:[Object(t.jsx)(A.a,{path:"/profile",render:function(){return Object(t.jsx)(M,{profilePage:n,addPost:a,updateNewPostText:i})}}),Object(t.jsx)(A.a,{path:"/dialogs",render:function(){return Object(t.jsx)(z,{dialogs:c.dialogs,messages:c.messages})}})]})]})]})},q={_state:{profilePage:{posts:[{id:1,message:"Hi, how are you",like:23,dislike:3},{id:2,message:"I am Ok",like:28,dislike:2},{id:3,message:"Fine",like:13,dislike:13},{id:4,message:"Email correspondence appears to corroborate your story.",like:23,dislike:3},{id:5,message:"How are you",like:27,dislike:32},{id:6,message:"Yo-yo-yo",like:1,dislike:0},{id:7,message:"History, European mostly, Renaissance and some remarkably incriminating correspondence between the Vatican and the Spanish king from the early 16th century.",like:8,dislike:1}],newPostText:""},dialogsPage:{dialogs:[{id:1,name:"Max"},{id:2,name:"Ivan"},{id:3,name:"Nikitos"},{id:4,name:"BurgerMan"},{id:5,name:"Vados"},{id:6,name:"Kukuruzka"},{id:7,name:"Milaha"}],messages:[{id:1,message:"Hi"},{id:2,message:"OK, so whoever took them planned this and got rid of their texts"},{id:3,message:"Hes reading his personal e-mails, looking at his browser history, online purchases."},{id:4,message:"Email correspondence appears to corroborate your story."},{id:5,message:"How are you"},{id:6,message:"Yo-yo-yo<"},{id:7,message:"History, European mostly, Renaissance and some remarkably incriminating correspondence between the Vatican and the Spanish king from the early 16th century."}]}},_callSubscriber:function(){console.log("no subscribers (observers)")},getState:function(){return this._state},subscribe:function(e){this._callSubscriber=e},addPost:function(){var e={id:5,message:this._state.profilePage.newPostText,like:11,dislike:1};this._state.profilePage.posts.push(e),this._state.profilePage.newPostText="",this._callSubscriber(this._state)},updateNewPostText:function(e){this._state.profilePage.newPostText=e,this._callSubscriber(this._state)},dispatch:function(e){}},K=function(e){r.a.render(Object(t.jsx)(L,{state:e,addPost:q.addPost.bind(q),updateNewPostText:q.updateNewPostText.bind(q)}),document.querySelector("#root"))};K(q.getState()),q.subscribe(K)}],[[38,1,2]]]);
//# sourceMappingURL=main.2bdd8dfd.chunk.js.map