(this["webpackJsonpsocial-network-react"]=this["webpackJsonpsocial-network-react"]||[]).push([[0],{113:function(e,t,n){e.exports={wrapper:"Preloader_wrapper__3XCPk",ldsHourglass:"Preloader_ldsHourglass__pzUo-","lds-hourglass":"Preloader_lds-hourglass__1hkv0"}},114:function(e,t,n){e.exports={profile:"Profile_profile__CiwxZ"}},115:function(e,t,n){e.exports={item:"Post_item__2q3Eb"}},119:function(e,t,n){},202:function(e,t,n){},22:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__BRHD6",dialogsItems:"Dialogs_dialogsItems__1aH1f",dialog:"Dialogs_dialog__1glHE",active:"Dialogs_active__3NWs5",messanges:"Dialogs_messanges__WVkjx"}},23:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__13B6p",active:"Sidebar_active__2WsD6",friendBlock:"Sidebar_friendBlock__2oXRU",friend:"Sidebar_friend__3Y_SH",name:"Sidebar_name__2Hl5y",imgProfilePhoto:"Sidebar_imgProfilePhoto__1UA-e"}},247:function(e,t,n){"use strict";n.r(t);var s,r=n(1),a=n.n(r),c=(n(119),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,251)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))}),o=n(8),i=n(17),u=n.n(i),l=n(34),d=n(31),j=n(4),b=n(109),p=n.n(b).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"458be47a-15a2-43bc-bb9e-a21974e6a059"}}),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return p.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return p.post("follow/".concat(e)).then((function(e){return e.data}))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return p.delete("follow/".concat(e)).then((function(e){return e.data}))},g=function(e){return p.get("profile/".concat(e))},v=function(e){return p.get("/profile/status/".concat(e))},x=function(e){return p.put("/profile/status/",{status:e})},m=function(){return p.get("auth/me")},_=function(e,t,n){return p.post("auth/login",{email:e,password:t,rememberMe:n})};!function(e){e.ADD_POST="APP/PROFILE/ADD-POST",e.UPDATE_NEW_POST_TEXT="APP/PROFILE/UPDATE-NEW-POST-TEXT",e.SET_USER_PROFILE="APP/PROFILE/SET_PROFILE_INFO-NEW-POST-TEXT",e.SET_STATUS="APP/PROFILE/SET_STATUS"}(s||(s={}));var P,S={newPostText:"",posts:[{id:1,message:"Good this site",likesCount:10},{id:2,message:"Good this site",likesCount:10}],profile:null,status:""},T=function(e){return{type:s.SET_STATUS,status:e}},E="SEND-MESSAGE",w="UPDATE_NEW_DIALOG_MESSAGE",y={newMessageBody:"",dialogs:[{id:1,name:"Dimych"},{id:2,name:"Nasty"},{id:3,name:"Vova"},{id:4,name:"Viktor"},{id:5,name:"Olya"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Dimych"}]},C={friends:[{id:1,name:"Dimych"},{id:2,name:"Nasty"},{id:3,name:"Vova"}]};!function(e){e.FOLLOW="FOLLOW",e.UNFOLLOW="UNFOLLOW",e.SET_USERS="SET_USERS",e.SET_CURRENT_PAGE="SET_CURRENT_PAGE",e.SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT",e.TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING",e.TOGGLE_IS_FOLLOWING_IN_PROGRESS="TOGGLE_IS_FOLLOWING_IN_PROGRESS"}(P||(P={}));var N,A={users:[],pageSize:10,totalCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},I=function(e){return{type:P.TOGGLE_IS_FETCHING,isFetching:e}},L=function(e,t){return{type:P.TOGGLE_IS_FOLLOWING_IN_PROGRESS,isFollow:e,userId:t}},U=n(110),k=n(111);!function(e){e.SET_USER_DATA="SET_USER_DATA"}(N||(N={}));var D={id:null,login:null,email:null,isAuth:!1},F=function(e,t,n){return{type:N.SET_USER_DATA,payload:{id:e,login:t,email:n}}},R=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n,s,r,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:n=e.sent,s=n.data.data,r=s.id,a=s.login,c=s.email,n.data.resultCode||t(F(r,a,c)),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},G=n(250),M=Object(o.combineReducers)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.ADD_POST:var n={id:(new Date).getTime(),message:e.newPostText,likesCount:0},r=n.message;return r?Object(j.a)(Object(j.a)({},e),{},{posts:[].concat(Object(d.a)(e.posts),[n]),newPostText:""}):e;case s.UPDATE_NEW_POST_TEXT:return Object(j.a)(Object(j.a)({},e),{},{newPostText:t.newText});case s.SET_USER_PROFILE:return Object(j.a)(Object(j.a)({},e),{},{profile:t.profile});case s.SET_STATUS:return Object(j.a)(Object(j.a)({},e),{},{status:t.status});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var n={id:(new Date).getTime(),message:e.newMessageBody},s=e.newMessageBody.trim();return s?Object(j.a)(Object(j.a)({},e),{},{messages:[].concat(Object(d.a)(e.messages),[n]),newMessageBody:""}):e;case w:return Object(j.a)(Object(j.a)({},e),{},{newMessageBody:t.body});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.FOLLOW:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case P.UNFOLLOW:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case P.SET_USERS:return Object(j.a)(Object(j.a)({},e),{},{users:Object(d.a)(t.users)});case P.SET_CURRENT_PAGE:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case P.SET_TOTAL_USERS_COUNT:return Object(j.a)(Object(j.a)({},e),{},{totalCount:t.totalCount});case P.TOGGLE_IS_FETCHING:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case P.TOGGLE_IS_FOLLOWING_IN_PROGRESS:return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFollow?[].concat(Object(d.a)(e.followingInProgress),[t.userId]):Object(d.a)(e.followingInProgress.filter((function(e){return e!==t.userId})))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.SET_USER_DATA:return Object(j.a)(Object(j.a)(Object(j.a)({},e),t.payload),{},{isAuth:!0});default:return e}},form:G.a}),B=Object(o.createStore)(M,Object(k.composeWithDevTools)(Object(o.applyMiddleware)(U.a))),W=n(54),H=n.n(W),z=(n(202),n(12)),X=n(10),J=n(22),V=n.n(J),Y=n(0),q=function(e){var t="/dialogs/".concat(e.id);return Object(Y.jsx)("div",{className:"".concat(V.a.dialog),children:Object(Y.jsx)(z.b,{to:t,activeClassName:V.a.active,children:e.name})})},K=function(e){return Object(Y.jsx)("div",{className:V.a.message,children:e.message})};var Z=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(Y.jsx)(q,{name:e.name,id:e.id},e.id)})),s=t.messages.map((function(e){return Object(Y.jsx)(K,{message:e.message},e.id)})),r=t.newMessageBody;return Object(Y.jsxs)("div",{className:V.a.dialogs,children:[Object(Y.jsx)("div",{className:V.a.dialogsItems,children:n}),Object(Y.jsxs)("div",{className:V.a.messages,children:[s,Object(Y.jsx)("div",{children:Object(Y.jsx)("textarea",{placeholder:"Enter your message",value:r,onChange:function(t){var n=t.currentTarget.value;e.updateNewMessageBody(n)}})}),Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{onClick:function(){e.onSendMessage()},children:"Send message"})})]})]})},Q=n(9),$=n(116),ee=function(e){return{isAuth:e.auth.isAuth}};var te=function(e){return Object(Q.b)(ee)((function(t){t.isAuth;var n=Object($.a)(t,["isAuth"]);return t.isAuth?Object(Y.jsx)(e,Object(j.a)({},n)):Object(Y.jsx)(X.a,{to:"/login"})}))},ne=Object(o.compose)(te,Object(Q.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onSendMessage:function(){e({type:E})},updateNewMessageBody:function(t){e({type:w,body:t})}}})))(Z),se=n(23),re=n.n(se),ae=function(e){var t=e.friends.map((function(e){return Object(Y.jsx)(ce,{id:e.id,name:e.name},e.id)}));return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h3",{children:"Friends"}),Object(Y.jsx)("div",{className:re.a.friendBlock,children:t})]})},ce=function(e){return Object(Y.jsxs)("div",{className:re.a.friend,children:[Object(Y.jsx)("div",{className:re.a.imgProfilePhoto}),Object(Y.jsx)("p",{className:re.a.name,children:e.name})]})},oe=function(e){return Object(Y.jsxs)("aside",{className:re.a.sidebar,children:[Object(Y.jsx)("nav",{children:Object(Y.jsxs)("ul",{children:[Object(Y.jsx)("li",{children:Object(Y.jsx)(z.b,{to:"/profile",activeClassName:re.a.active,children:"Profile"})}),Object(Y.jsx)("li",{children:Object(Y.jsx)(z.b,{to:"/dialogs",activeClassName:re.a.active,children:"Messages"})}),Object(Y.jsx)("li",{children:Object(Y.jsx)(z.b,{to:"/users",activeClassName:re.a.active,children:"Users"})})]})}),Object(Y.jsx)(ae,{friends:e.sidebar.friends})]})},ie=Object(Q.b)((function(e){return{sidebar:e.sidebar}}),(function(){return{}}))(oe),ue=n(26),le=n(27),de=n(29),je=n(28),be=n.p+"static/media/userPhoto.b89021c6.png",pe=n(76),Oe=n.n(pe),he=function(e){for(var t=e.users.map((function(t){return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{children:Object(Y.jsx)(z.b,{to:"profile/".concat(t.id),children:Object(Y.jsx)("img",{src:null!==t.photos.small?t.photos.small:be,className:Oe.a.userPhoto,alt:"Avatar"})})}),Object(Y.jsx)("div",{children:t.followed?Object(Y.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(Y.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{children:t.name}),Object(Y.jsx)("div",{children:t.status})]}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{children:"u.location.country"}),Object(Y.jsx)("div",{children:"u.location.city"})]})]},t.id)})),n=[],s=1;s<=30;s++)n.push(s);return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsxs)("div",{children:[n.map((function(t){return Object(Y.jsxs)("span",{className:e.currentPage===t?Oe.a.selectedPage:"",onClick:function(){e.onPageChanged(t)},children:[t," "]},t)})),t]})})},fe=n(113),ge=n.n(fe),ve=function(){return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)("div",{className:ge.a.ldsHourglass})})},xe=function(e){Object(de.a)(n,e);var t=Object(je.a)(n);function n(){var e;Object(ue.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize),e.props.setCurrentPage(t)},e.onFollow=function(t){e.props.follow(t)},e.onUnFollow=function(t){e.props.unfollow(t)},e}return Object(le.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(Y.jsxs)(Y.Fragment,{children:[this.props.isFetching&&Object(Y.jsx)(ve,{}),Object(Y.jsx)(he,{users:this.props.users,currentPage:this.props.currentPage,pageSize:this.props.pageSize,totalCount:this.props.totalCount,onPageChanged:this.onPageChanged,follow:this.onFollow,unfollow:this.onUnFollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),me=Object(Q.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalCount:e.usersPage.totalCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{setCurrentPage:function(e){return{type:P.SET_CURRENT_PAGE,currentPage:e}},getUsers:function(e,t){return function(n){n(I(!0)),O(e,t).then((function(e){var t,s;n(I(!1)),n((t=e.items,{type:P.SET_USERS,users:t})),n((s=e.totalCount,{type:P.SET_TOTAL_USERS_COUNT,totalCount:s}))}))}},follow:function(e){return function(t){t(L(!0,e)),h(e).then((function(n){var s;0===n.resultCode&&(t((s=e,{type:P.FOLLOW,userID:s})),t(L(!1,e)))}))}},unfollow:function(e){return function(t){t(L(!0,e)),f(e).then((function(n){var s;0===n.resultCode&&(t((s=e,{type:P.UNFOLLOW,userID:s})),t(L(!1,e)))}))}}})(xe),_e=n(114),Pe=n.n(_e),Se=n(45),Te=n.n(Se),Ee=function(e){Object(de.a)(n,e);var t=Object(je.a)(n);function n(){var e;Object(ue.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={editMode:!1,title:e.props.title},e.activateEditMode=function(){e.setState(Object(j.a)(Object(j.a)({},e.state),{},{editMode:!0}))},e.DeactivateEditMode=function(){e.setState(Object(j.a)(Object(j.a)({},e.state),{},{editMode:!1})),e.props.onChange(e.state.title)},e.onChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(le.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){e.title!==this.state.title&&this.setState({title:this.props.title})}},{key:"render",value:function(){return Object(Y.jsxs)("div",{children:[!this.state.editMode&&Object(Y.jsx)("div",{children:Object(Y.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.title||"Status is not defined"})}),this.state.editMode&&Object(Y.jsx)("div",{children:Object(Y.jsx)("input",{type:"text",value:this.state.title,onBlur:this.DeactivateEditMode,onChange:this.onChange,autoFocus:!0})})]})}}]),n}(a.a.Component),we=function(e){var t=e.profile;return t?Object(Y.jsxs)("div",{className:Te.a.profileData,children:[Object(Y.jsx)("img",{src:t.photos.small?t.photos.small:be,alt:"profile avatar"}),Object(Y.jsx)("div",{children:Object(Y.jsx)("h3",{children:t.fullName})}),Object(Y.jsx)(Ee,{title:e.status,onChange:e.updateStatus}),t.aboutMe&&Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h3",{children:"About me:"}),Object(Y.jsx)("span",{children:t.aboutMe})]}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h3",{children:"My contacts:"}),Object(Y.jsx)(ye,{contacts:t.contacts})]}),t.lookingForAJob&&Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h3",{children:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443"}),t.lookingForAJobDescription]})]}):Object(Y.jsx)(ve,{})},ye=function(e){var t=Object.keys(e.contacts),n=Object.values(e.contacts);return t.map((function(e){return Object(Y.jsx)("div",{children:e})})),Object(Y.jsxs)("div",{className:Te.a.wrapperContacts,children:[Object(Y.jsx)("div",{className:Te.a.contacts,children:t.map((function(e){return Object(Y.jsx)("div",{children:e})}))}),Object(Y.jsx)("div",{className:Te.a.contacts,children:n.map((function(e){return Object(Y.jsx)("div",{children:e||"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"})}))})]})},Ce=n(56),Ne=n.n(Ce),Ae=n(115),Ie=n.n(Ae),Le=function(e){return Object(Y.jsxs)("div",{className:Ie.a.item,children:[Object(Y.jsx)("img",{src:"https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/avatar-2-story.jpg",alt:"Logo with Profile"}),Object(Y.jsx)("p",{children:e.message}),Object(Y.jsxs)("p",{children:["Like ",e.likesCount]})]})},Ue=Object(Q.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){e({type:s.ADD_POST})},updateNewPostText:function(t){var n;e((n=t,{type:s.UPDATE_NEW_POST_TEXT,newText:n}))}}}))((function(e){var t=e.posts.map((function(e){return Object(Y.jsx)(Le,{id:e.id,message:e.message,likesCount:e.likesCount},e.id)}));return Object(Y.jsxs)("div",{className:Ne.a.postsBlock,children:[Object(Y.jsx)("h3",{children:"My Posts"}),Object(Y.jsxs)("div",{className:Ne.a.new_post,children:[Object(Y.jsx)("div",{children:Object(Y.jsx)("textarea",{value:e.newPostText,onChange:function(t){var n=t.currentTarget.value;e.updateNewPostText(n)}})}),Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})})]}),Object(Y.jsx)("div",{className:Ne.a.posts,children:t})]})})),ke=function(e){return Object(Y.jsxs)("div",{className:Pe.a.profile,children:[Object(Y.jsx)(we,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(Y.jsx)(Ue,{})]})},De=function(e){Object(de.a)(n,e);var t=Object(je.a)(n);function n(){return Object(ue.a)(this,n),t.apply(this,arguments)}return Object(le.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="15859"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(Y.jsx)(ke,Object(j.a)(Object(j.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(a.a.Component),Fe=Object(Q.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfile:function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(e);case 3:r=t.sent,n((a=r.data,{type:s.SET_USER_PROFILE,profile:a})),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),new Error;case 10:case"end":return t.stop()}var a}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(e);case 3:s=t.sent,n(T(s.data)),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),new Error;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(e);case 3:0===t.sent.data.resultCode&&n(T(e)),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),new Error;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}),Re=Object(o.compose)(Fe,X.f,te)(De),Ge=n.p+"static/media/logo.6ce24c58.svg",Me=n(77),Be=n.n(Me),We=function(e){return Object(Y.jsxs)("header",{className:Be.a.header,children:[Object(Y.jsx)("img",{src:Ge,alt:""}),Object(Y.jsx)("div",{className:Be.a.loginBlock,children:e.isAuth?e.login:Object(Y.jsx)(z.b,{to:"/Login",children:"Login"})})]})},He=function(e){Object(de.a)(n,e);var t=Object(je.a)(n);function n(){return Object(ue.a)(this,n),t.apply(this,arguments)}return Object(le.a)(n,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(Y.jsx)(We,Object(j.a)({},this.props))}}]),n}(a.a.Component),ze=Object(Q.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:R})(He),Xe=n(249),Je=n(248),Ve=Object(Je.a)({form:"Login"})((function(e){return Object(Y.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Y.jsx)("div",{children:Object(Y.jsx)(Xe.a,{component:"input",name:"login",placeholder:"Login"})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(Xe.a,{component:"input",name:"password",placeholder:"Password",type:"password"})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(Xe.a,{component:"input",name:"rememberMe",type:"checkbox"})}),Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{children:"Login"})})]})})),Ye=Object(Q.b)(null,{loginTC:function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var s,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s=e.login,r=e.password,a=e.rememberMe,t.next=4,_(s,r,a);case 4:t.sent.data.resultCode||n(R()),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(0),new Error;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h1",{children:"Login"}),Object(Y.jsx)(Ve,{onSubmit:function(t){e.loginTC(t)}})]})})),qe=function(){return Object(Y.jsx)(z.a,{children:Object(Y.jsxs)("div",{className:"app_wrapper",children:[Object(Y.jsx)(ze,{}),Object(Y.jsx)(ie,{}),Object(Y.jsxs)("div",{className:"app_wrapper_content",children:[Object(Y.jsx)(X.b,{path:"/login",render:function(){return Object(Y.jsx)(Ye,{})}}),Object(Y.jsx)(X.b,{path:"/profile/:userId?",render:function(){return Object(Y.jsx)(Re,{})}}),Object(Y.jsx)(X.b,{path:"/dialogs",render:function(){return Object(Y.jsx)(ne,{})}}),Object(Y.jsx)(X.b,{path:"/users",render:function(){return Object(Y.jsx)(me,{})}})]})]})})};H.a.render(Object(Y.jsx)(a.a.StrictMode,{children:Object(Y.jsx)(Q.a,{store:B,children:Object(Y.jsx)(qe,{})})}),document.getElementById("root")),c()},45:function(e,t,n){e.exports={profileData:"ProfileData_profileData__3_er9",wrapperContacts:"ProfileData_wrapperContacts__2yaPx",contacts:"ProfileData_contacts__22veH"}},56:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1qs7u",posts:"MyPosts_posts__tbkbY"}},76:function(e,t,n){e.exports={userPhoto:"UsersContainer_userPhoto__1HjXU",selectedPage:"UsersContainer_selectedPage__2syrM"}},77:function(e,t,n){e.exports={header:"Header_header__2x0-v",loginBlock:"Header_loginBlock__1i9Ib"}}},[[247,1,2]]]);
//# sourceMappingURL=main.b047e10b.chunk.js.map