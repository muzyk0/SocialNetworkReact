(this["webpackJsonpsocial-network-react"]=this["webpackJsonpsocial-network-react"]||[]).push([[0],{12:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__BRHD6",dialogsItems:"Dialogs_dialogsItems__1aH1f",dialog:"Dialogs_dialog__1glHE",active:"Dialogs_active__3NWs5",messanges:"Dialogs_messanges__WVkjx"}},13:function(e,t,s){e.exports={sidebar:"Sidebar_sidebar__13B6p",active:"Sidebar_active__2WsD6",friendBlock:"Sidebar_friendBlock__2oXRU",friend:"Sidebar_friend__3Y_SH",name:"Sidebar_name__2Hl5y",imgProfilePhoto:"Sidebar_imgProfilePhoto__1UA-e"}},19:function(e,t,s){e.exports={profileData:"ProfileData_profileData__3_er9",wrapperContacts:"ProfileData_wrapperContacts__2yaPx",contacts:"ProfileData_contacts__22veH"}},26:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__1qs7u",posts:"MyPosts_posts__tbkbY"}},32:function(e,t,s){e.exports={userPhoto:"UsersContainer_userPhoto__1HjXU",selectedPage:"UsersContainer_selectedPage__2syrM"}},45:function(e,t,s){e.exports={header:"Header_header__2x0-v"}},46:function(e,t,s){e.exports={wrapper:"Preloader_wrapper__3XCPk",ldsHourglass:"Preloader_ldsHourglass__pzUo-","lds-hourglass":"Preloader_lds-hourglass__1hkv0"}},47:function(e,t,s){e.exports={profile:"Profile_profile__CiwxZ"}},48:function(e,t,s){e.exports={item:"Post_item__2q3Eb"}},50:function(e,t,s){},55:function(e,t,s){},79:function(e,t,s){"use strict";s.r(t),s.d(t,"rerenderEntireTree",(function(){return xe}));var n,a=s(1),r=s.n(a),c=(s(50),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,80)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),r(e),c(e)}))}),i=s(14),o=s(16),l=s(2);!function(e){e.ADD_POST="ADD-POST",e.UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT",e.SET_USER_PROFILE="SET_PROFILE_INFO-NEW-POST-TEXT"}(n||(n={}));var d,u={newPostText:"",posts:[{id:1,message:"Good this site",likesCount:10},{id:2,message:"Good this site",likesCount:10}],profile:null},j="SEND-MESSAGE",O="UPDATE_NEW_DIALOG_MESSAGE",b={newMessageBody:"",dialogs:[{id:1,name:"Dimych"},{id:2,name:"Nasty"},{id:3,name:"Vova"},{id:4,name:"Viktor"},{id:5,name:"Olya"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Dimych"}]},p={friends:[{id:1,name:"Dimych"},{id:2,name:"Nasty"},{id:3,name:"Vova"}]};!function(e){e.FOLLOW="FOLLOW",e.UNFOLLOW="UNFOLLOW",e.SET_USERS="SET_USERS",e.SET_CURRENT_PAGE="SET_CURRENT_PAGE",e.SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT",e.TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING"}(d||(d={}));var g={users:[],pageSize:10,totalCount:0,currentPage:1,isFetching:!1},h=s(42),f=s(43),_=Object(i.combineReducers)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.ADD_POST:var s={id:(new Date).getTime(),message:e.newPostText,likesCount:0},a=s.message;return a?Object(l.a)(Object(l.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[s]),newPostText:""}):e;case n.UPDATE_NEW_POST_TEXT:return Object(l.a)(Object(l.a)({},e),{},{newPostText:t.newText});case n.SET_USER_PROFILE:return Object(l.a)(Object(l.a)({},e),{},{profile:t.profile});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var s={id:(new Date).getTime(),message:e.newMessageBody},n=e.newMessageBody.trim();return n?Object(l.a)(Object(l.a)({},e),{},{messages:[].concat(Object(o.a)(e.messages),[s]),newMessageBody:""}):e;case O:return Object(l.a)(Object(l.a)({},e),{},{newMessageBody:t.body});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;return t.type,e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.FOLLOW:return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(l.a)(Object(l.a)({},e),{},{followed:!0}):e}))});case d.UNFOLLOW:return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(l.a)(Object(l.a)({},e),{},{followed:!1}):e}))});case d.SET_USERS:return Object(l.a)(Object(l.a)({},e),{},{users:Object(o.a)(t.users)});case d.SET_CURRENT_PAGE:return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.currentPage});case d.SET_TOTAL_USERS_COUNT:return Object(l.a)(Object(l.a)({},e),{},{totalCount:t.totalCount});case d.TOGGLE_IS_FETCHING:return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});default:return e}}}),m=Object(i.createStore)(_,Object(f.composeWithDevTools)(Object(i.applyMiddleware)(h.a))),x=s(20),v=s.n(x),P=(s(55),s.p+"static/media/logo.6ce24c58.svg"),T=s(45),E=s.n(T),S=s(0);var N=function(){return Object(S.jsx)("header",{className:E.a.header,children:Object(S.jsx)("img",{src:P,alt:""})})},w=s(11),C=s(4),y=s(12),U=s.n(y),D=function(e){var t="/dialogs/".concat(e.id);return Object(S.jsx)("div",{className:"".concat(U.a.dialog),children:Object(S.jsx)(w.b,{to:t,activeClassName:U.a.active,children:e.name})})},F=function(e){return Object(S.jsx)("div",{className:U.a.message,children:e.message})};var k=function(e){var t=e.dialogsPage,s=t.dialogs.map((function(e){return Object(S.jsx)(D,{name:e.name,id:e.id},e.id)})),n=t.messages.map((function(e){return Object(S.jsx)(F,{message:e.message},e.id)})),a=t.newMessageBody;return Object(S.jsxs)("div",{className:U.a.dialogs,children:[Object(S.jsx)("div",{className:U.a.dialogsItems,children:s}),Object(S.jsxs)("div",{className:U.a.messages,children:[n,Object(S.jsx)("div",{children:Object(S.jsx)("textarea",{placeholder:"Enter your message",value:a,onChange:function(t){var s=t.currentTarget.value;e.updateNewMessageBody(s)}})}),Object(S.jsx)("div",{children:Object(S.jsx)("button",{onClick:function(){e.onSendMessage()},children:"Send message"})})]})]})},L=s(9),I=Object(L.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onSendMessage:function(){e({type:j})},updateNewMessageBody:function(t){e({type:O,body:t})}}}))(k),A=s(13),R=s.n(A),M=function(e){var t=e.friends.map((function(e){return Object(S.jsx)(G,{id:e.id,name:e.name},e.id)}));return Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"Friends"}),Object(S.jsx)("div",{className:R.a.friendBlock,children:t})]})},G=function(e){return Object(S.jsxs)("div",{className:R.a.friend,children:[Object(S.jsx)("div",{className:R.a.imgProfilePhoto}),Object(S.jsx)("p",{className:R.a.name,children:e.name})]})},B=function(e){return Object(S.jsxs)("aside",{className:R.a.sidebar,children:[Object(S.jsx)("nav",{children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:Object(S.jsx)(w.b,{to:"/profile",activeClassName:R.a.active,children:"Profile"})}),Object(S.jsx)("li",{children:Object(S.jsx)(w.b,{to:"/dialogs",activeClassName:R.a.active,children:"Messages"})}),Object(S.jsx)("li",{children:Object(S.jsx)(w.b,{to:"/users",activeClassName:R.a.active,children:"Users"})})]})}),Object(S.jsx)(M,{friends:e.sidebar.friends})]})},W=Object(L.b)((function(e){return{sidebar:e.sidebar}}),(function(){return{}}))(B),H=s(22),z=s(23),X=s(25),J=s(24),V=s(18),q=s.n(V),Y=s.p+"static/media/userPhoto.b89021c6.png",Z=s(32),K=s.n(Z),Q=function(e){for(var t=e.users.map((function(t){return Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{children:Object(S.jsx)(w.b,{to:"profile/".concat(t.id),children:Object(S.jsx)("img",{src:null!==t.photos.small?t.photos.small:Y,className:K.a.userPhoto,alt:"Avatar"})})}),Object(S.jsx)("div",{children:t.followed?Object(S.jsx)("button",{onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(S.jsx)("button",{onClick:function(){e.follow(t.id)},children:"Follow"})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{children:t.name}),Object(S.jsx)("div",{children:t.status})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{children:"u.location.country"}),Object(S.jsx)("div",{children:"u.location.city"})]})]},t.id)})),s=[],n=1;n<=30;n++)s.push(n);return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{children:[s.map((function(t){return Object(S.jsxs)("span",{className:e.currentPage===t?K.a.selectedPage:"",onClick:function(){e.onPageChanged(t)},children:[t," "]},t)})),t]})})},$=s(46),ee=s.n($),te=function(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("div",{className:ee.a.ldsHourglass})})},se=function(e){Object(X.a)(s,e);var t=Object(J.a)(s);function s(){var e;Object(H.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.toggleIsFetching(!0),q.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(t,"&count=").concat(e.props.pageSize)).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items)}))},e}return Object(z.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0),q.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize)).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items),e.props.setTotalUsersCount(t.data.totalCount)}))}},{key:"render",value:function(){return Object(S.jsxs)(S.Fragment,{children:[this.props.isFetching&&Object(S.jsx)(te,{}),Object(S.jsx)(Q,{users:this.props.users,currentPage:this.props.currentPage,pageSize:this.props.pageSize,totalCount:this.props.totalCount,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow})]})}}]),s}(r.a.Component),ne={follow:function(e){return{type:d.FOLLOW,userID:e}},unfollow:function(e){return{type:d.UNFOLLOW,userID:e}},setUsers:function(e){return{type:d.SET_USERS,users:e}},setCurrentPage:function(e){return{type:d.SET_CURRENT_PAGE,currentPage:e}},setTotalUsersCount:function(e){return{type:d.SET_TOTAL_USERS_COUNT,totalCount:e}},toggleIsFetching:function(e){return{type:d.TOGGLE_IS_FETCHING,isFetching:e}}},ae=Object(L.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalCount:e.usersPage.totalCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching}}),ne)(se),re=s(47),ce=s.n(re),ie=s(19),oe=s.n(ie),le=function(e){var t=e.profile;return t?Object(S.jsxs)("div",{className:oe.a.profileData,children:[Object(S.jsx)("img",{src:t.photos.small?t.photos.small:"",alt:"profile avatar"}),Object(S.jsx)("div",{children:Object(S.jsx)("h3",{children:t.fullName})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"About me:"}),Object(S.jsx)("span",{children:t.aboutMe})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"My contacts:"}),Object(S.jsx)(de,{contacts:t.contacts})]}),t.lookingForAJob&&Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443"}),t.lookingForAJobDescription]})]}):Object(S.jsx)(te,{})},de=function(e){var t=Object.keys(e.contacts),s=Object.values(e.contacts);return t.map((function(e){return Object(S.jsx)("div",{children:e})})),Object(S.jsxs)("div",{className:oe.a.wrapperContacts,children:[Object(S.jsx)("div",{className:oe.a.contacts,children:t.map((function(e){return Object(S.jsx)("div",{children:e})}))}),Object(S.jsx)("div",{className:oe.a.contacts,children:s.map((function(e){return Object(S.jsx)("div",{children:e||"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"})}))})]})},ue=s(26),je=s.n(ue),Oe=s(48),be=s.n(Oe),pe=function(e){return Object(S.jsxs)("div",{className:be.a.item,children:[Object(S.jsx)("img",{src:"https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/avatar-2-story.jpg",alt:"Logo with Profile"}),Object(S.jsx)("p",{children:e.message}),Object(S.jsxs)("p",{children:["Like ",e.likesCount]})]})},ge=Object(L.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){e({type:n.ADD_POST})},updateNewPostText:function(t){var s;e((s=t,{type:n.UPDATE_NEW_POST_TEXT,newText:s}))}}}))((function(e){var t=e.posts.map((function(e){return Object(S.jsx)(pe,{id:e.id,message:e.message,likesCount:e.likesCount},e.id)}));return Object(S.jsxs)("div",{className:je.a.postsBlock,children:[Object(S.jsx)("h3",{children:"My Posts"}),Object(S.jsxs)("div",{className:je.a.new_post,children:[Object(S.jsx)("div",{children:Object(S.jsx)("textarea",{value:e.newPostText,onChange:function(t){var s=t.currentTarget.value;e.updateNewPostText(s)}})}),Object(S.jsx)("div",{children:Object(S.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})})]}),Object(S.jsx)("div",{className:je.a.posts,children:t})]})})),he=function(e){return Object(S.jsxs)("div",{className:ce.a.profile,children:[Object(S.jsx)(le,{profile:e.profile}),Object(S.jsx)(ge,{})]})},fe=function(e){Object(X.a)(s,e);var t=Object(J.a)(s);function s(){return Object(H.a)(this,s),t.apply(this,arguments)}return Object(z.a)(s,[{key:"componentDidMount",value:function(){var e=this;q.a.get("https://social-network.samuraijs.com/api/1.0/profile/2").then((function(t){e.props.setUserProfile(t.data)}))}},{key:"render",value:function(){return Object(S.jsx)(he,Object(l.a)(Object(l.a)({},this.props),{},{profile:this.props.profile}))}}]),s}(r.a.Component),_e=Object(L.b)((function(e){return{profile:e.profilePage.profile}}),{setUserProfile:function(e){return{type:n.SET_USER_PROFILE,profile:e}}})(fe),me=function(){return Object(S.jsx)(w.a,{children:Object(S.jsxs)("div",{className:"app_wrapper",children:[Object(S.jsx)(N,{}),Object(S.jsx)(W,{}),Object(S.jsxs)("div",{className:"app_wrapper_content",children:[Object(S.jsx)(C.a,{path:"/profile",render:function(){return Object(S.jsx)(_e,{})}}),Object(S.jsx)(C.a,{path:"/dialogs",render:function(){return Object(S.jsx)(I,{})}}),Object(S.jsx)(C.a,{path:"/users",render:function(){return Object(S.jsx)(ae,{})}})]})]})})},xe=function(){v.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(L.a,{store:m,children:Object(S.jsx)(me,{})})}),document.getElementById("root"))};xe(),m.subscribe((function(){xe()})),c()}},[[79,1,2]]]);
//# sourceMappingURL=main.020664e2.chunk.js.map