(this.webpackJsonpmonika=this.webpackJsonpmonika||[]).push([[0],[,,,,,,,function(e,s,a){e.exports={title:"Dialogs_title__13qEL",dialogs:"Dialogs_dialogs__3oGrj",dialogItems:"Dialogs_dialogItems__1-ZRS",active:"Dialogs_active__Wcalc",dialog:"Dialogs_dialog__3dTOi",messages:"Dialogs_messages__3yQXq",message:"Dialogs_message__3f6WA",nameWrap:"Dialogs_nameWrap__1cZPX",img:"Dialogs_img__3lozy",name:"Dialogs_name__2pnBj"}},function(e,s,a){e.exports={navbar:"Navbar_navbar__1r5aD",menuItem:"Navbar_menuItem__1CPfg",active:"Navbar_active__3oTBL"}},,,function(e,s,a){e.exports={headerWrap:"Header_headerWrap__2i14z",header:"Header_header__2vj-A",headerMenu:"Header_headerMenu__3AfCv",active:"Header_active__2bEK_",auth:"Header_auth__Gszgd",search:"Header_search__1Q6ak"}},,function(e,s,a){e.exports={title:"MyPosts_title__M0F4l",formWrap:"MyPosts_formWrap__jq0E1"}},function(e,s,a){e.exports={item:"Post_item__131AY",header:"Post_header__3HegY",likes:"Post_likes__2uztb"}},,,,,,,function(e,s,a){e.exports={wrapper:"Layout_wrapper__2HEah"}},,function(e,s,a){e.exports={description:"ProfileInfo_description__L8Ln_"}},function(e,s,a){e.exports={profile:"Profile_profile__3InSw"}},,,,,,function(e,s,a){},function(e,s,a){},,,,,,,function(e,s,a){"use strict";a.r(s);var i=a(0),t=a(1),c=a.n(t),n=a(20),r=a.n(n),l=(a(30),a(31),a(21)),o=a.n(l),d=function(e){var s=e.children;return Object(i.jsx)("div",{className:o.a.wrapper,children:s})},m=a(11),j=a.n(m),h=a.p+"static/media/logo.c055764e.png",b=a.p+"static/media/Kozlov.4bd3f2bc.png",u=a(4),g=function(){return Object(i.jsx)("header",{className:j.a.header,children:Object(i.jsxs)("div",{className:j.a.headerWrap,children:[Object(i.jsxs)("ul",{className:j.a.headerMenu,children:[Object(i.jsx)("li",{children:Object(i.jsx)(u.b,{to:"/home",children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(u.b,{to:"/dialogs",children:"Message"})}),Object(i.jsx)("li",{children:Object(i.jsx)(u.b,{to:"#a",children:"Notification"})})]}),Object(i.jsx)("div",{children:Object(i.jsx)("a",{href:"/",children:Object(i.jsx)("img",{src:h,width:"50",alt:"img"})})}),Object(i.jsxs)("div",{className:j.a.auth,children:[Object(i.jsx)("div",{className:j.a.search,children:Object(i.jsx)("input",{placeholder:"search"})}),Object(i.jsx)("img",{src:b,alt:"ava"})]})]})})},x=a(8),_=a.n(x),p=function(){return Object(i.jsx)("div",{className:_.a.navbar,children:Object(i.jsxs)("ul",{className:_.a.menu,children:[Object(i.jsx)("li",{className:_.a.menuItem,children:Object(i.jsx)(u.b,{to:"/profile",activeClassName:_.a.active,children:"Profile"})}),Object(i.jsx)("li",{className:_.a.menuItem,children:Object(i.jsx)(u.b,{to:"/dialogs",activeClassName:_.a.active,children:"Message"})}),Object(i.jsx)("li",{className:_.a.menuItem,children:Object(i.jsx)(u.b,{to:"/news",activeClassName:_.a.active,children:"News"})}),Object(i.jsx)("li",{className:_.a.menuItem,children:Object(i.jsx)(u.b,{to:"/music",activeClassName:_.a.active,children:"Music"})}),Object(i.jsx)("li",{className:_.a.menuItem,children:Object(i.jsx)(u.b,{to:"/settings",activeClassName:_.a.active,children:"Settings"})})]})})},O=a(13),v=a.n(O),f=(a(37),a(14)),N=a.n(f),k=a.p+"static/media/max.b7b87ed2.png",y=function(e){var s=e.message,a=e.like,t=e.dislike;return Object(i.jsxs)("div",{className:N.a.item,children:[Object(i.jsxs)("div",{className:N.a.header,children:[Object(i.jsx)("img",{src:k,alt:"ava"}),Object(i.jsx)("span",{children:s})]}),Object(i.jsxs)("div",{className:N.a.likes,children:[Object(i.jsx)("i",{className:"far fa-thumbs-up",children:a}),Object(i.jsx)("i",{className:"far fa-thumbs-down",children:t})]})]})},P=function(e){var s=e.posts,a=e.addPost,t=c.a.createRef();return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{className:v.a.title,children:"MyPosts"}),Object(i.jsxs)("div",{className:v.a.formWrap,children:[Object(i.jsx)("textarea",{ref:t}),Object(i.jsx)("button",{onClick:function(){var e=t.current.value;t.current.value="",a(e)},children:"Add post"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{className:v.a.title,children:"New post"}),s.map((function(e){return Object(i.jsx)(y,{message:e.message,like:e.like,dislike:e.dislike})}))]})]})},w=a(23),H=a.n(w),I=function(){return Object(i.jsx)("div",{className:H.a.description,children:"Ava + Description"})},D=a(24),M=a.n(D),W=function(e){var s=e.posts,a=e.addPost;return Object(i.jsxs)("div",{className:M.a.profile,children:[Object(i.jsx)(I,{}),Object(i.jsx)(P,{posts:s,addPost:a})]})},C=a(7),E=a.n(C),z=function(e){var s=e.name,a=e.id,t="/dialogs/".concat(a);return Object(i.jsx)("div",{className:E.a.dialog+" "+E.a.active,children:Object(i.jsx)(u.b,{to:t,children:Object(i.jsxs)("div",{className:E.a.nameWrap,children:[Object(i.jsx)("img",{src:k,alt:"ava",className:E.a.img}),Object(i.jsx)("span",{className:E.a.name,children:s})]})})})},A=function(e){var s=e.message;return Object(i.jsx)("div",{className:E.a.message,children:s})},S=function(e){var s=e.dialogs,a=e.messages;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{className:E.a.title,children:"Dialogs"}),Object(i.jsxs)("div",{className:E.a.dialogs,children:[Object(i.jsx)("div",{className:E.a.dialogItems,children:s.map((function(e){return Object(i.jsx)(z,{name:e.name,id:e.id})}))}),Object(i.jsx)("div",{className:E.a.messages,children:a.map((function(e){return Object(i.jsx)(A,{message:e.message})}))})]})]})},L=a(2);var q=function(e){var s=e.state,a=e.addPost,t=s.dialogsPage,c=s.profilePage;return Object(i.jsxs)(u.a,{children:[Object(i.jsx)(g,{}),Object(i.jsxs)(d,{children:[Object(i.jsx)(p,{}),Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)(L.a,{path:"/profile",render:function(){return Object(i.jsx)(W,{posts:c.posts,addPost:a})}}),Object(i.jsx)(L.a,{path:"/dialogs",render:function(){return Object(i.jsx)(S,{dialogs:t.dialogs,messages:t.messages})}})]})]})]})},K={profilePage:{posts:[{id:1,message:"Hi, how are you",like:23,dislike:3},{id:2,message:"I am Ok",like:28,dislike:2},{id:3,message:"Fine",like:13,dislike:13},{id:4,message:"Email correspondence appears to corroborate your story.",like:23,dislike:3},{id:5,message:"How are you",like:27,dislike:32},{id:6,message:"Yo-yo-yo",like:1,dislike:0},{id:7,message:"History, European mostly, Renaissance and some remarkably incriminating correspondence between the Vatican and the Spanish king from the early 16th century.",like:8,dislike:1}]},dialogsPage:{dialogs:[{id:1,name:"Max"},{id:2,name:"Ivan"},{id:3,name:"Nikitos"},{id:4,name:"BurgerMan"},{id:5,name:"Vados"},{id:6,name:"Kukuruzka"},{id:7,name:"Milaha"}],messages:[{id:1,message:"Hi"},{id:2,message:"OK, so whoever took them planned this and got rid of their texts"},{id:3,message:"Hes reading his personal e-mails, looking at his browser history, online purchases."},{id:4,message:"Email correspondence appears to corroborate your story."},{id:5,message:"How are you"},{id:6,message:"Yo-yo-yo<"},{id:7,message:"History, European mostly, Renaissance and some remarkably incriminating correspondence between the Vatican and the Spanish king from the early 16th century."}]}},R=function(e){var s={id:5,message:e,like:11,dislike:1};K.profilePage.posts.push(s),Y(K)},Y=function(e){r.a.render(Object(i.jsx)(q,{state:e,addPost:R}),document.querySelector("#root"))};Y(K)}],[[38,1,2]]]);
//# sourceMappingURL=main.c4b7deb2.chunk.js.map