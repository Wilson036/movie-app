(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{184:function(e,n,t){},211:function(e,n,t){"use strict";t.r(n);var a,i,r,c,o,s,l,d,b,u=t(13),j=t(0),p=t(19),f=t.n(p),h=(t(184),t(7)),O=t(11),m=t(31),x=t(14),g=t(14).atom,v=g({key:"areas",default:[]}),y=g({key:"theaters",default:[]}),w=g({key:"movies",default:[]}),k=g({key:"isLoggedIn",default:!!localStorage.getItem("token")}),_=g({key:"message",default:""}),S=(g({key:"mylist",default:[]}),g({key:"userData",default:{username:"",avatar:"",favorite_movies:[]}})),C=t(9),$=t(120),M=function(){var e=Object(x.useRecoilState)(k),n=Object(C.a)(e,2),t=(n[0],n[1]);return function(){t(!!localStorage.getItem("token"))}},q=function(){var e=Object(x.useRecoilState)(S),n=Object(C.a)(e,2),t=n[0],a=n[1],i=t.favorite_movies;return function(e,n){a(e?Object(u.a)(Object(u.a)({},t),{},{favorite_movies:i.concat(n)}):Object(u.a)(Object(u.a)({},t),{},{favorite_movies:i.filter((function(e){return e!==n}))}))}},z=t(2),I=O.c.div(a||(a=Object(h.a)(["\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  background: ",";\n  width: 32px;\n  height: 32px;\n  font-size: 16px;\n  border-radius: 32px;\n  overflow: hidden;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  opacity: 0;\n\n  &:hover {\n    border: 2px solid #ffffff;\n    div {\n      top: -32px;\n    }\n  }\n  div {\n    position: absolute;\n    top: ",";\n    left: 4px;\n    height: 64px;\n    width: 32px;\n    -webkit-transition: 0.125s ease;\n    transition: 0.125s ease;\n    svg {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 32px;\n      width: 32px;\n    }\n  }\n"])),(function(e){return e.toggled?"#e50914":"none"}),(function(e){return e.toggled?"-32px":"0"})),D=function(e){var n=e.movie_id,t=Object(x.useRecoilValue)(S).favorite_movies,a=Object(j.useState)(!1),i=Object(C.a)(a,2),r=i[0],c=i[1],o=q(),s=Object(j.useRef)(!1);return Object(j.useEffect)((function(){c(t.includes(n))}),[t]),Object(j.useEffect)((function(){return s.current?o(r,n):s.current=!0,function(){s.current=!1}}),[r]),Object(z.jsx)(I,{toggled:r,onClick:function(e){e.preventDefault(),c(!r)},children:Object(z.jsxs)("div",{children:[Object(z.jsx)($.a,{icon:["fas","plus"],size:"lg"}),Object(z.jsx)($.a,{icon:["fas","check"],size:"lg"})]})})},T=O.c.div(i||(i=Object(h.a)(["\n  width: 230px;\n  background-color: #000;\n  background-image: url(",");\n  background-position: center;\n  background-size: 100%;\n  height: 328px;\n  background-repeat: no-repeat;\n  overflow: hidden;\n  margin-right: 10px;\n  transition: background 1s ease;\n  margin-bottom: 20px;\n  &:last-child {\n    margin-right: 0;\n  }\n  &:hover {\n    background-size: 150%;\n    div {\n      opacity: 1;\n      div:nth-child(3) {\n        margin-top: 10px;\n      }\n    }\n    div :first-child {\n      pointer-events: all;\n    }\n  }\n"])),(function(e){return"".concat(e.backdrop)})),R=O.c.div(r||(r=Object(h.a)(["\n  background: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0.75) 0%,\n    transparent 100%\n  );\n  padding: 20px;\n  position: relative;\n  height: 100%;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.125s ease;\n"]))),F=O.c.div(c||(c=Object(h.a)(["\n  font-size: 22px;\n  font-weight: 200;\n  opacity: 0;\n  transition: opacity 0.25s ease;\n  &:hover {\n    margin-top: 10px;\n    opacity: 1;\n  }\n"]))),E=O.c.div(o||(o=Object(h.a)(["\n  font-size: 14px;\n  opacity: 0;\n  transition: opacity 0.25s ease 0.125s;\n"]))),L=O.c.div(s||(s=Object(h.a)(["\n  font-size: 14px;\n  margin-top: 100px;\n  font-weight: 300;\n  line-height: 1.6;\n  opacity: 0;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n  text-overflow: ellipsis;\n  transition: margin 0.25s ease 0.125s, opacity 0.25s ease 0.25s;\n"])));function A(e){var n=e.info,t=n.title,a=n.anticipation,i=n.img_src,r=n.release_text,c=n.movie_id,o=Object(x.useRecoilValue)(k);return Object(z.jsx)(T,{backdrop:i,children:Object(z.jsx)(m.b,{to:{pathname:"/movie-info/".concat(t),state:Object(u.a)({},n)},children:Object(z.jsxs)(R,{children:[Object(z.jsx)(F,{children:t}),Object(z.jsx)(E,{children:a}),Object(z.jsxs)(L,{children:[" ",r]}),o&&Object(z.jsx)(D,{movie_id:c})]})})})}var B,P,W,V,N,U=O.c.div(l||(l=Object(h.a)(["\n  padding: 20px 40px;\n  box-sizing: border-box;\n  transition: opacity 3s ease;\n  opacity: 1;\n  position: relative;\n  z-index: 4;\n"]))),Q=O.c.div(d||(d=Object(h.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 20px 0;\n  width: calc(100vw - 80px);\n  box-sizing: border-box;\n"]))),H=O.c.div(b||(b=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 1.4;\n  margin-bottom: 1em;\n"])));function Z(e){var n=e.title,t=e.movieDatas.map((function(e){return Object(z.jsx)(A,{info:e},e.movie_id)}));return Object(z.jsx)(U,{children:Object(z.jsxs)(H,{children:[Object(z.jsx)("h1",{children:n}),Object(z.jsx)(Q,{children:t})]})})}var G,J,Y=O.c.div(B||(B=Object(h.a)(["\n  position: relative;\n  z-index: 4;\n  width: 500px;\n  left: 60px;\n  top: 40vh;\n  margin-right: 72px;\n  p {\n    width: 100%;\n  }\n  h2 {\n    font-size: 24px;\n    margin-bottom: 24px;\n  }\n"]))),K=O.c.p(P||(P=Object(h.a)(["\n  font-size: 48px;\n  font-weight: 600;\n  margin-bottom: 16px;\n"]))),X=O.c.div(W||(W=Object(h.a)(["\n  display: flex;\n  width: 200px;\n  margin-top: 30px;\n  justify-content: space-between;\n"]))),ee=O.c.button(V||(V=Object(h.a)(["\n  ","\n  background: transparent;\n  display: flex;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  padding: 20px;\n  box-sizing: border-box;\n  border: 2px solid rgba(245, 245, 241, 0.2);\n  border-radius: 40px;\n  font-size: 14px;\n  font-weight: 600;\n  transition: border 0.125s ease, background 0.125s ease;\n  cursor: pointer;\n  &:focus {\n    outline: none;\n  }\n  &:hover,\n  &:active {\n    border: 2px solid #fff;\n  }\n"])),(function(e){return e.toggled&&Object(O.b)(N||(N=Object(h.a)(["\n      border: 2px solid red !important;\n      color: red !important;\n    "])))}));function ne(e){var n=e.info,t=n.title,a=n.movie_id,i=Object(x.useRecoilValue)(S).favorite_movies,r=q(),c=i.includes(a),o=Object(j.useState)(c),s=Object(C.a)(o,2),l=s[0],d=s[1],b=Object(j.useRef)(!1),p=Object(x.useRecoilValue)(k);return Object(j.useEffect)((function(){b.current?r(l,a):b.current=!0}),[l]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(Y,{children:[Object(z.jsx)(K,{children:n.title}),Object(z.jsx)("h2",{children:"Now available"}),Object(z.jsxs)(X,{children:[Object(z.jsx)(ee,{children:Object(z.jsx)(m.b,{to:{pathname:"/movie-info/".concat(t),state:Object(u.a)({},n)},children:"\u6642\u523b\u8868"})}),p&&Object(z.jsxs)(ee,{toggled:l,onClick:function(){return d(!l)},children:[l?" On":"+ My"," List"]})]})]}),Object(z.jsx)("img",{src:n.img_src,alt:n.title})]})}var te=O.c.div(G||(G=Object(h.a)(["\n  background-image: ",";\n  width: 100%;\n  position: relative;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 952px;\n"])),(function(e){return"url(".concat(e.url,")")})),ae=O.c.div(J||(J=Object(h.a)(["\n  height: 100%;\n  background-image: linear-gradient(\n    rgba(0, 0, 0, 0.85) 15%,\n    rgba(0, 0, 0, 0.2) 40%,\n    #000 90%\n  );\n  display: flex;\n"])));function ie(e){var n=e.info;return Object(z.jsx)(te,{url:n.img_src,children:Object(z.jsx)(ae,{children:Object(z.jsx)(ne,{info:n})})})}var re,ce,oe,se,le,de,be,ue,je,pe=t(153),fe=t.n(pe),he=t(20).gql,Oe=he(re||(re=Object(h.a)(["\n  mutation queryTimeByMovieId(\n    $id: String!\n    $date: String!\n    $theater_ids: [String!]!\n  ) {\n    queryTimeByMovieId(id: $id, date: $date, theater_ids: $theater_ids) {\n      theater_id\n      type\n      show_time\n    }\n  }\n"]))),me=he(ce||(ce=Object(h.a)(["\n  mutation LoginWithOauth($email: String!, $id: String!) {\n    LoginWithOauth(email: $email, id: $id)\n  }\n"]))),xe=he(oe||(oe=Object(h.a)(["\n  mutation logout {\n    logout\n  }\n"]))),ge=he(se||(se=Object(h.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password)\n  }\n"]))),ve=he(le||(le=Object(h.a)(["\n  mutation registerUser(\n    $username: String!\n    $email: String!\n    $password: String!\n  ) {\n    registerUser(\n      data: { username: $username, email: $email, password: $password }\n    )\n  }\n"]))),ye=he(de||(de=Object(h.a)(["\n  mutation sendComfiredEmail($email: String!) {\n    sendComfiredEmail(email: $email)\n  }\n"]))),we=he(be||(be=Object(h.a)(["\n  mutation changePassword($password: String!, $token: String!) {\n    changePassword(data: { password: $password, token: $token })\n  }\n"]))),ke=he(ue||(ue=Object(h.a)(["\n  mutation addFoviesMovie($favorite_movies: [String!]!) {\n    addFoviesMovie(favorite_movies: $favorite_movies)\n  }\n"]))),_e=he(je||(je=Object(h.a)(["\n  mutation me {\n    me {\n      username\n      favorite_movies\n      avatar\n    }\n  }\n"]))),Se=[{img_src:"https://movies.yahoo.com.tw/i/o/production/movies/March2021/vsfkM9g2D2WvlOqvcuS2-672x953.jpg",title:"\u7576\u7537\u4eba\u6200\u611b\u6642",movie_id:"11255"},{img_src:"https://movies.yahoo.com.tw/i/o/production/movies/March2021/S5Cyarbok0LDaYkEhe9x-742x1080.jpg",title:"\u540d\u5075\u63a2\u67ef\u5357\uff1a\u7dcb\u8272\u7684\u4e0d\u5728\u5834\u8b49\u660e",movie_id:"11281"},{img_src:"https://movies.yahoo.com.tw/i/o/production/movies/March2021/zdiICr3wA7jaeEANB68a-757x1080.jpg",title:"\u6c38\u751f\u6230",movie_id:"11073"},{img_src:"https://movies.yahoo.com.tw/i/o/production/movies/March2021/Li5ikEWlp63wbE4lLWWb-757x1080.jpg",title:"\u807d\u898b\u6b4c \u518d\u5531",movie_id:"11232"},{img_src:"https://movies.yahoo.com.tw/i/o/production/movies/March2021/dlEo9295zU5P29FppTiN-757x1080.jpg",title:"\u54e5\u5409\u62c9\u5927\u6230\u91d1\u525b",movie_id:"11215"}];var Ce,$e,Me,qe,ze,Ie,De=function(){var e=Object(x.useRecoilValue)(w);return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(fe.a,{stopAutoPlayOnHover:!0,animation:"slide",interval:3e3,navButtonsAlwaysVisible:!0,children:Se.map((function(e,n){return Object(z.jsx)(ie,{info:e},n)}))}),Object(z.jsx)(Z,{title:"\u73fe\u6b63\u71b1\u6620\u4e2d",movieDatas:e})]})},Te=t(27),Re=t(77),Fe=t(161),Ee=t(125),Le=t(20),Ae=t(20).gql,Be=Ae(Ce||(Ce=Object(h.a)(["\n  query queryAllArea {\n    queryAllArea {\n      area_name\n      area_id\n    }\n  }\n"]))),Pe=Ae($e||($e=Object(h.a)(["\n  query getAllTheaters {\n    getAllTheaters {\n      theater_id\n      theater_name\n      area_id\n    }\n  }\n"]))),We=Ae(Me||(Me=Object(h.a)(["\n  query queryMoviesByDate($date: String!) {\n    queryMoviesByDate(date: $date) {\n      movie_id\n      title\n      anticipation\n      satifaction\n      img_src\n      release_time\n      release_text\n      info_src\n    }\n  }\n"]))),Ve=(Ae(qe||(qe=Object(h.a)(["\n  query queryTimeById($id: String!) {\n    queryTimeById(id: $id) {\n      theater_id\n      type\n      show_time\n    }\n  }\n"]))),Ae(ze||(ze=Object(h.a)(["\n  query queryMoviesByIds($ids: [String!]) {\n    queryMoviesByIds(ids: $ids) {\n      movie_id\n      title\n      anticipation\n      satifaction\n      img_src\n      release_time\n      release_text\n      info_src\n    }\n  }\n"])))),Ne=t(265),Ue=t(263),Qe=O.c.input(Ie||(Ie=Object(h.a)(["\n  color: #fff;\n  font-family: 'Lato', sans-serif;\n  font-weight: 300;\n  font-size: 14px;\n  height: 36px;\n  width: ",";\n  appearance: none;\n  border: 0;\n  border: 2px solid rgba(245, 245, 245, 0.1);\n  background: transparent;\n  outline: none;\n  border-radius: 36px;\n  padding: 0 10px;\n  pointer-events: all;\n  transition: border 0.25s ease, width 0.125s ease 0.125s;\n  &:focus {\n    border: 2px solid #e50914;\n    width: ",";\n  }\n"])),(function(e){return"".concat(e.width,"%")}),(function(e){return"".concat(1.5*Number(e.width),"%")}));var He,Ze=function(e){var n=e.text,t=e.width,a=e.searchEvent;return Object(z.jsx)(Qe,{type:"search",placeholder:n,width:t,onBlur:a})},Ge=Object(x.selector)({key:"messageState",get:function(e){var n=e.get;return{isOpen:Boolean(n(_))}}}),Je=t(52),Ye=function(e,n){return e.reduce((function(e,t){var a=n.filter((function(e){var n=e.theater_id;return t.theater_id===n}));return a.length>0&&(e[t.theater_name]=a.reduce((function(e,n){var t=n.type;return e[t]||(e[t]=[]),e[t].push(n),e}),{})),e}),{})},Ke=function(e){var n="".concat(e.getMonth()+1).padStart(2,"0"),t="".concat(e.getDate()).padStart(2,"0");return"".concat(e.getFullYear(),"-").concat(n,"-").concat(t)},Xe=function(e,n,t){var a=e.target.value,i=e.target.name,r=null;switch(i){case"username":a.trim()||(r="\u8acb\u8f38\u5165\u59d3\u540d");break;case"password":a.trim().length<8&&(r="\u5bc6\u78bc\u9577\u5ea6\u9700\u5927\u65bc8");break;case"email":/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(a)||(r="email\u683c\u5f0f\u4e0d\u5c0d");break;case"comfiredPassword":document.querySelector("#password").value!==document.querySelector("#comfiredPassword").value&&(r="\u5bc6\u78bc\u4e0d\u543b\u5408");break;case"readTerms":r=!t[i]}n(Object(u.a)(Object(u.a)({},t),{},Object(Je.a)({},i,r)))},en=O.c.nav(He||(He=Object(h.a)(["\n  ul {\n    display: flex;\n    height: 37px;\n    align-items: center;\n    padding: 0 10px;\n    li {\n      font-weight: 400;\n      padding: 8px 10px;\n      transition: background 0.125s ease;\n      border-radius: 4px;\n      &:hover {\n        background: rgba(255, 255, 255, 0.2);\n        cursor: pointer;\n      }\n    }\n  }\n"])));var nn,tn,an,rn=function(){var e=Object(x.useRecoilValue)(k);return Object(z.jsx)(en,{children:Object(z.jsxs)("ul",{children:[Object(z.jsx)("li",{children:Object(z.jsx)(m.b,{to:"/",children:"Browse"})}),e&&Object(z.jsxs)("li",{children:[" ",Object(z.jsx)(m.b,{to:"/myList",children:"My List"})]})]})})},cn=t(23),on=t.n(cn),sn=t(39),ln=t(251),dn=O.c.div(nn||(nn=Object(h.a)(["\n  cursor: pointer;\n  display: flex;\n"]))),bn=O.c.div(tn||(tn=Object(h.a)(["\n  border-radius: 40px;\n  margin-left: 12px;\n  overflow: hidden;\n  width: 40px;\n  height: 40px;\n  border: 3px solid transparent;\n  transition: broder 0.125s ease;\n  &:hover {\n    border: 3px solid #e50914;\n  }\n  img {\n    width: 100%;\n    display: block;\n  }\n"]))),un=O.c.h2(an||(an=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  font-weight: 300;\n  height: 40px;\n  font-size: 24px;\n"])));var jn,pn,fn,hn=Object(Te.g)((function(e){var n=Object(x.useRecoilState)(_),t=Object(C.a)(n,2),a=(t[0],t[1]),i=Object(Le.useMutation)(_e),r=Object(C.a)(i,2),c=r[0],o=r[1],s=(o.error,o.loading),l=M(),d=Object(x.useRecoilValue)(k),b=Object(Le.useMutation)(xe),u=Object(C.a)(b,1)[0],p=Object(Le.useMutation)(ke),f=Object(C.a)(p,1)[0],h=Object(x.useRecoilState)(S),O=Object(C.a)(h,2),m=O[0],g=O[1],v=Object(j.useRef)(!1),y=function(){var e=Object(sn.a)(on.a.mark((function e(){var n,t;return on.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c();case 3:n=e.sent,t=n.data,g(t.me),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(j.useEffect)((function(){d&&y()}),[]),Object(j.useEffect)((function(){if(v.current)try{f({variables:{favorite_movies:m.favorite_movies}})}catch(e){console.error(e)}else v.current=!0}),[m.favorite_movies]);var w=function(){var n=Object(sn.a)(on.a.mark((function n(){var t;return on.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u();case 3:t=n.sent,t.data.logout&&(localStorage.removeItem("token"),l(),g({username:"",avatar:"",favorite_movies:[]}),a("\u60a8\u5df2\u7d93\u767b\u51fa"),e.history.push("/")),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return s?Object(z.jsx)("div",{children:"....loading"}):Object(z.jsxs)(dn,{children:[Object(z.jsx)(ln.a,{onClick:w,color:"secondary",children:"\u767b\u51fa"}),Object(z.jsx)(un,{children:m.username}),Object(z.jsx)(bn,{children:Object(z.jsx)("img",{src:m.avatar,alt:"profile"})})]})})),On=O.c.div(jn||(jn=Object(h.a)(["\n  margin-left: auto;\n  a {\n    margin-left: 12px;\n  }\n"]))),mn=O.c.header(pn||(pn=Object(h.a)(["\n  background: linear-gradient(to bottom, black 0%, transparent 100%);\n  display: flex;\n  padding: 40px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 1200px;\n  z-index: 5;\n"]))),xn=O.c.div(fn||(fn=Object(h.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  left: 0;\n  pointer-events: none;\n"])));var gn,vn=Object(Te.g)((function(){var e=Object(Le.useQuery)(We,{variables:{date:Ke(new Date)}}),n=e.data,t=e.error,a=e.loading,i=Object(Te.f)().pathname,r=Object(x.useRecoilValue)(k),c=Object(x.useRecoilValue)(Ge).isOpen,o=Object(x.useRecoilState)(w),s=Object(C.a)(o,2),l=s[0],d=s[1],b=Object(j.useState)([]),u=Object(C.a)(b,2),p=u[0],f=u[1],h=Object(x.useRecoilState)(_),O=Object(C.a)(h,2),g=O[0],v=O[1];Object(j.useEffect)((function(){t||a||(d(n.queryMoviesByDate),f(n.queryMoviesByDate))}),[n,t,a]);var y=function(e,n){"clickaway"!==n&&v("")};return Object(z.jsxs)(mn,{children:[Object(z.jsx)(Ne.a,{open:c,autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"center"},onClose:y,children:Object(z.jsx)(Ue.a,{elevation:6,variant:"filled",severity:"success",onClose:y,children:g})}),Object(z.jsx)(rn,{}),"/"===i&&Object(z.jsx)(xn,{children:Object(z.jsx)(Ze,{text:"search movie title",width:"20",searchEvent:function(e){if(e.target.value){var n=l.filter((function(n){return n.title.includes(e.target.value)}));d(n)}else d(p)}})}),Object(z.jsx)(On,{children:r?Object(z.jsx)(hn,{}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(m.b,{to:"/singUp",children:"\u8a3b\u518a"}),Object(z.jsx)(m.b,{to:"/singIn",children:"\u767b\u5165"})]})})]})})),yn=O.c.main(gn||(gn=Object(h.a)(["\n  padding: 1em;\n  margin-top: 100px;\n  overflow-y: scroll;\n  width: 100%;\n"])));var wn,kn,_n=function(e){var n=e.children,t=Object(x.useRecoilState)(v),a=Object(C.a)(t,2),i=(a[0],a[1]),r=Object(x.useRecoilState)(y),c=Object(C.a)(r,2),o=(c[0],c[1]),s=Object(Le.useQuery)(Be),l=Object(Le.useQuery)(Pe),d=Object(Te.f)().pathname;return Object(j.useEffect)((function(){window.scrollTo(0,0)}),[d]),Object(j.useEffect)((function(){s.loading||s.error||i(s.data.queryAllArea),l.loading||l.error||o(l.data.getAllTheaters)}),[s,l]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(vn,{}),Object(z.jsx)(yn,{children:n})]})},Sn=t(267),Cn=t(262),$n=t(269),Mn=O.c.div(wn||(wn=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),qn=O.c.div(kn||(kn=Object(h.a)(["\n  margin: 8px;\n  min-width: 120px;\n"])));function zn(e){var n=e.area,t=e.getAreaValue,a=e.areaItems,i=e.searchTheater;return Object(z.jsxs)(Mn,{children:[Object(z.jsxs)(qn,{children:[Object(z.jsx)(Sn.a,{id:"arae-label",children:"\u9078\u64c7\u5730\u5340"}),Object(z.jsx)(Cn.a,{labelId:"arae-label",value:n,onChange:t,children:a.map((function(e){return Object(z.jsx)($n.a,{value:e.area_id,children:e.area_name},e.area_id)}))})]}),Object(z.jsx)(Ze,{text:"search movie title",width:"50",searchEvent:i})]})}var In,Dn,Tn,Rn,Fn=t(253),En=O.c.div(In||(In=Object(h.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  div {\n    width: 20%;\n    height: 80px;\n    margin-top: 8px;\n  }\n"]))),Ln=Object(O.c)(ln.a)(Dn||(Dn=Object(h.a)(["\n  width: 100%;\n"]))),An=O.c.p(Tn||(Tn=Object(h.a)(["\n  margin: 0;\n  font-size: 20px;\n"])));function Bn(e){var n=e.setQueryDate;return Object(z.jsx)(En,{children:[0,1,2,3,4].map((function(e){var t=new Date;return t.setDate(t.getDate()+e),Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(Fn.a,{elevation:2,children:Object(z.jsxs)(Ln,{onClick:function(){n(t)},children:[" ",Object(z.jsxs)(An,{children:[t.getMonth()+1," \u6708 ",Object(z.jsx)("br",{}),t.getDate(),"\u65e5"]},"".concat(e,"-p"))]},"".concat(e,"-Button"))},"".concat(e,"-Paper"))})}))})}var Pn,Wn,Vn,Nn,Un=O.c.ul(Rn||(Rn=Object(h.a)(["\n  height: 510px;\n  overflow-y: scroll;\n"])));function Qn(e){var n=e.timeList;return Object(z.jsx)(Un,{children:Object.keys(n).map((function(e){return Object(z.jsxs)("li",{children:[e,":",Object(z.jsx)("div",{children:Object.keys(n[e]).map((function(t){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("div",{children:t},"".concat(e,"-").concat(t)),Object(z.jsx)("div",{children:n[e][t].map((function(n){var a=n.show_time;return Object(z.jsx)("button",{children:a},"".concat(e,"-").concat(t,"-").concat(a))}))},"".concat(e,"-").concat(t,"-time"))]})}))},"".concat(e,"-div"))]},e)}))})}var Hn=O.c.div(Pn||(Pn=Object(h.a)(["\n  margin: 100px;\n  margin-top: 0;\n"]))),Zn=O.c.div(Wn||(Wn=Object(h.a)(["\n  border-radius: 3px;\n  background: rgba(177, 165, 165, 0.112);\n  padding: 0;\n  width: 100%;\n  display: flex;\n"]))),Gn=O.c.div(Vn||(Vn=Object(h.a)(["\n  width: 50%;\n  background-image: url(",");\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n"])),(function(e){return"".concat(e.backDrop)})),Jn=O.c.div(Nn||(Nn=Object(h.a)(["\n  width: 50%;\n  padding: 25px;\n  color: #fafafa;\n"])));function Yn(e){var n=e.location.state,t=n.movie_id,a=n.title,i=(n.anticipation,n.satifaction,n.img_src),r=(n.release_time,n.info_src,Object(Le.useMutation)(Oe)),c=Object(C.a)(r,1)[0],o=Object(x.useRecoilValue)(v),s=Object(x.useRecoilValue)(y),l=Object(j.useState)({}),d=Object(C.a)(l,2),b=d[0],p=d[1],f=Object(j.useState)(new Date),h=Object(C.a)(f,2),O=h[0],m=h[1],g=Object(j.useState)({}),w=Object(C.a)(g,2),k=w[0],_=w[1],S=Object(j.useState)(28),$=Object(C.a)(S,2),M=$[0],q=$[1],I=Object(j.useState)("\u53f0\u5317\u5e02"),D=Object(C.a)(I,2),T=D[0],R=D[1],F=Object(j.useState)(s.filter((function(e){return"28"===e.area_id}))),E=Object(C.a)(F,2),L=E[0],A=E[1];Object(j.useEffect)((function(){A(s.filter((function(e){return e.area_id==="".concat(M)})))}),[M,s]),Object(j.useEffect)((function(){B(t,Ke(O),L)}),[O,L,t]);var B=function(){var e=Object(sn.a)(on.a.mark((function e(n,t,a){var i,r,o;return on.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.map((function(e){return e.theater_id})),e.prev=1,e.next=4,c({variables:{id:n,date:t,theater_ids:i}});case 4:r=e.sent,o=Ye(a,r.data.queryTimeByMovieId),p(Object(u.a)({},o)),_(Object(u.a)({},o)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n,t,a){return e.apply(this,arguments)}}();return Object(z.jsx)(Hn,{children:Object(z.jsxs)(Zn,{children:[Object(z.jsx)(Gn,{backDrop:i}),Object(z.jsxs)(Jn,{children:[Object(z.jsx)("h1",{children:a}),Object(z.jsx)(zn,{area:M,getAreaValue:function(e){var n=e.target.value;q(n),R(o.find((function(e){return e.area_id===n})).area_name)},areaItems:o,searchTheater:function(e){var n=e.target.value.trim();if(n){var t=Object.entries(k).reduce((function(e,t){var a=Object(C.a)(t,2),i=a[0],r=a[1];return i.includes(n)&&(e[i]=r),e}),{});p(Object(u.a)({},t))}else p(Object(u.a)({},k))}}),Object(z.jsx)(Bn,{setQueryDate:function(e){m(e)}}),Object(z.jsx)("h1",{children:T}),Object(z.jsx)(Qn,{timeList:b})]})]})})}var Kn,Xn=t(266),et=t(264),nt=t(261),tt=t(260),at=t(160),it=t.n(at),rt=t(167),ct=t(259),ot=t(158),st=t.n(ot),lt=t(159),dt=t.n(lt),bt=t(134),ut=Object(bt.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center",marginLeft:e.spacing(2),marginRight:e.spacing(2)},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3),color:"white"},submit:{margin:e.spacing(3,0,2)},multilineColor:{color:"white"}}})),jt=O.c.div(Kn||(Kn=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  text-align: center;\n  &::before,\n  &::after {\n    content: '';\n    flex: 1;\n    border-bottom: 1px solid white;\n  }\n  &:not(:empty)::before {\n    margin-right: 0.25em;\n  }\n  &:not(:empty)::after {\n    margin-left: 0.25em;\n  }\n"])));function pt(e){var n=e.children;return Object(z.jsx)(jt,{children:n})}var ft,ht,Ot,mt,xt,gt,vt=t(256),yt=t(133),wt=t(257),kt=t(258),_t=Object(O.c)(et.a)(ft||(ft=Object(h.a)(["\n  background: #8c8c8c;\n  label {\n    color: white;\n  }\n"])));function St(e){var n=e.text,t=e.vaildateFun,a=e.onChangeFun,i=e.errorState,r=Object(j.useState)(!1),c=Object(C.a)(r,2),o=c[0],s=c[1],l=n.charAt(0).toUpperCase()+n.slice(1);return Object(z.jsx)(_t,{variant:"filled",color:"secondary",required:!0,fullWidth:!0,name:n,label:l,type:o?"text":"password",id:n,autoComplete:'"current-'.concat(n,'"'),error:!!i[n],helperText:i[n],onChange:function(e){a(e),t(e)},InputProps:{endAdornment:Object(z.jsx)(vt.a,{position:"end",children:Object(z.jsx)(yt.a,{"aria-label":"toggle password visibility",onClick:function(){s(!o)},onMouseDown:function(e){e.preventDefault()},children:o?Object(z.jsx)(wt.a,{}):Object(z.jsx)(kt.a,{})})})}})}var Ct,$t,Mt,qt=Object(O.c)(ct.a)(ht||(ht=Object(h.a)(["\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 8px;\n  padding-top: 2px;\n"]))),zt=Object(O.c)(et.a)(Ot||(Ot=Object(h.a)(["\n  background: #8c8c8c;\n  label {\n    color: white;\n  }\n"]))),It=O.c.input(mt||(mt=Object(h.a)(["\n  width: 16px;\n  height: 16px;\n  margin: 0 8px;\n"]))),Dt=Object(O.c)(ln.a)(xt||(xt=Object(h.a)(["\n  &:disabled {\n    background-color: #e0e0e0 !important;\n  }\n"]))),Tt=Object(O.c)(st.a)(gt||(gt=Object(h.a)(["\n  width: 100%;\n  justify-content: center;\n  div {\n    display: flex;\n  }\n"]))),Rt=Object(Te.g)((function(e){var n=e.formStyle,t=e.action,a="singUp"===n,i={password:"",email:""};a&&(i.username="",i.comfiredPassword="");var r=ut(),c=M(),o=Object(Le.useMutation)(me),s=Object(C.a)(o,1)[0],l=Object(j.useState)(i),d=Object(C.a)(l,2),b=d[0],p=d[1],f=Object(j.useState)(Object(u.a)(Object(u.a)({},i),{},{readTerms:a})),h=Object(C.a)(f,2),O=h[0],x=h[1],g=Object(j.useState)(!0),v=Object(C.a)(g,2),y=v[0],w=v[1],k=Object(j.useRef)(!1);Object(j.useEffect)((function(){if(k.current){var e=Object.values(O).map(Boolean).some((function(e){return e}))||!Object.values(b).map(Boolean).every((function(e){return e}));w(e)}else k.current=!0}),[O]);var _=function(e){p(Object(u.a)(Object(u.a)({},b),{},Object(Je.a)({},e.target.name,e.target.value)))},S=function(e){Xe(e,x,O)},$=function(){var e=Object(sn.a)(on.a.mark((function e(n,t){return on.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D({email:n,id:t},s,"LoginWithOauth");case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),q=function(){var e=Object(sn.a)(on.a.mark((function e(n){var t,a;return on.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.email,a=n.id,$(t,a);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),I=function(){var e=Object(sn.a)(on.a.mark((function e(n){return on.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),D(b,t,a?"registerUser":"login");case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),D=function(){var n=Object(sn.a)(on.a.mark((function n(t,a,i){var r,o;return on.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a({variables:Object(u.a)({},t)});case 3:r=n.sent,o=r.data,e.history.push("/"),localStorage.setItem("token",o[i]),c(),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,t,a){return n.apply(this,arguments)}}();return Object(z.jsx)(qt,{component:"main",maxWidth:"xs",children:Object(z.jsxs)("div",{className:r.paper,children:[Object(z.jsx)(Xn.a,{className:r.avatar,children:Object(z.jsx)(it.a,{})}),Object(z.jsx)(rt.a,{component:"h1",variant:"h4",children:"singUp"===n?"Sign Up":"Sign In"}),Object(z.jsxs)("form",{className:r.form,onSubmit:I,children:[Object(z.jsxs)(tt.a,{container:!0,spacing:2,children:["singUp"===n&&Object(z.jsxs)(z.Fragment,{children:[" ",Object(z.jsx)(tt.a,{item:!0,xs:12,children:Object(z.jsx)(zt,{autoComplete:"name",color:"secondary",name:"username",variant:"filled",required:!0,fullWidth:!0,id:"username",label:"Name",error:!!O.username,helperText:O.username,onChange:function(e){_(e),S(e)}})})]}),Object(z.jsx)(tt.a,{item:!0,xs:12,children:Object(z.jsx)(zt,{variant:"filled",color:"secondary",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",error:!!O.email,helperText:O.email,onChange:function(e){_(e),S(e)}})}),Object(z.jsxs)(tt.a,{item:!0,xs:12,children:[Object(z.jsx)(St,{text:"password",errorState:O,vaildateFun:S,onChangeFun:_}),"singUp"!==n&&Object(z.jsx)(tt.a,{container:!0,justify:"flex-end",children:Object(z.jsx)(tt.a,{item:!0,children:Object(z.jsx)(m.b,{to:"/forgetPassword",children:"\u5fd8\u8a18\u5bc6\u78bc"})})})]}),"singUp"===n&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(tt.a,{item:!0,xs:12,children:Object(z.jsx)(St,{text:"comfiredPassword",vaildateFun:S,onChangeFun:_,errorState:O})}),Object(z.jsx)(tt.a,{item:!0,xs:12,children:Object(z.jsx)(nt.a,{control:Object(z.jsx)(It,{type:"checkbox",name:"readTerms",id:"readTerms",onChange:S}),label:"\u6211\u5df2\u7d93\u8a73\u7d30\u95b1\u8b80\u689d\u6b3e"})})]})]}),Object(z.jsx)(Dt,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:r.submit,disabled:y,children:a?"\u8a3b\u518a":"\u767b\u5165"}),a&&Object(z.jsx)(tt.a,{container:!0,justify:"flex-end",children:Object(z.jsx)(tt.a,{item:!0,children:Object(z.jsx)(m.b,{to:"/singIn",children:"\u5df2\u7d93\u6709\u5e33\u865f\u4e86\u55ce\uff1f \u767b\u5165"})})}),Object(z.jsx)(pt,{children:"\u6216"}),Object(z.jsx)("br",{}),Object(z.jsx)(Tt,{clientId:"136386216549-trpc3906jqgug4po7gbi5q5fveups9nr.apps.googleusercontent.com",buttonText:"Login with Google",onSuccess:function(e){var n=e.profileObj,t=n.email,a=n.googleId;$(t,a)},cookiePolicy:"single_host_origin"}),Object(z.jsx)("br",{}),Object(z.jsx)(dt.a,{appId:"1608569532866737",autoLoad:!1,fields:"name,email,picture",callback:q,cssClass:"my-fb-class",icon:"fa-facebook"})]})]})})}));function Ft(){var e=Object(Le.useMutation)(ve),n=Object(C.a)(e,2),t=n[0];return n[1].loading?Object(z.jsx)("div",{children:"isLoading ...."}):Object(z.jsx)(Rt,{formStyle:"singUp",action:t})}function Et(){var e=Object(Le.useMutation)(ge),n=Object(C.a)(e,2),t=n[0];return n[1].loading?Object(z.jsx)("div",{children:"isLoading ...."}):Object(z.jsx)(Rt,{formStyle:"singIn",action:t})}var Lt=Object(O.c)(ct.a)(Ct||(Ct=Object(h.a)(["\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 8px;\n  padding-top: 2px;\n"]))),At=Object(O.c)(et.a)($t||($t=Object(h.a)(["\n  background: #8c8c8c;\n  label {\n    color: white;\n  }\n"]))),Bt=Object(O.c)(ln.a)(Mt||(Mt=Object(h.a)(["\n  &:disabled {\n    background-color: #e0e0e0 !important;\n  }\n"])));var Pt,Wt,Vt,Nt,Ut,Qt=Object(Te.g)((function(e){var n=e.formType,t=e.action,a=Object(Te.f)().pathname,i="comfired"===n,r=ut(),c=Object(j.useState)({}),o=Object(C.a)(c,2),s=o[0],l=o[1],d=Object(j.useState)({}),b=Object(C.a)(d,2),p=b[0],f=b[1];Object(j.useEffect)((function(){if(!i){var e=a.slice(17);f(Object(u.a)(Object(u.a)({},p),{},{token:e}))}}),[a]);var h=Object(x.useRecoilState)(_),O=Object(C.a)(h,2),m=(O[0],O[1]),g=function(e){Xe(e,l,s)},v=function(e){f(Object(u.a)(Object(u.a)({},p),{},Object(Je.a)({},e.target.name,e.target.value)))},y=function(){var n=Object(sn.a)(on.a.mark((function n(a){var r;return on.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,n.next=4,t({variables:Object(u.a)({},p)});case 4:r=n.sent,r.data.sendComfiredEmail&&m("\b\u5df2\u5bc4\u51fa\u9a57\u8b49\u4fe1"),i||(m("\u91cd\u8a2d\u5bc6\u78bc\u6210\u529f\uff0c\u8acb\u91cd\u65b0\u767b\u5165"),e.history.push("/")),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}();return Object(z.jsx)(Lt,{component:"main",maxWidth:"xs",children:Object(z.jsxs)("div",{className:r.paper,children:[Object(z.jsx)(rt.a,{component:"h1",variant:"h4",children:i?"Forget Password":"Reset Password"}),Object(z.jsxs)("div",{className:r.form,children:[Object(z.jsxs)(tt.a,{container:!0,spacing:2,children:[i&&Object(z.jsx)(tt.a,{item:!0,xs:12,children:Object(z.jsx)(At,{variant:"filled",color:"secondary",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:v})}),!i&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(tt.a,{item:!0,xs:12,children:Object(z.jsx)(St,{text:"password",errorState:s,vaildateFun:g,onChangeFun:v})}),Object(z.jsx)(tt.a,{item:!0,xs:12,children:Object(z.jsx)(St,{text:"comfiredPassword",vaildateFun:g,onChangeFun:v,errorState:s})})]})]}),Object(z.jsx)(Bt,{type:"button",fullWidth:!0,variant:"contained",color:"secondary",className:r.submit,onClick:y,children:i?"\u5bc4\u9001\u9a57\u8b49\u4fe1":"\u91cd\u8a2d\u5bc6\u78bc"})]})]})})}));function Ht(){var e=Object(Le.useMutation)(ye),n=Object(C.a)(e,2),t=n[0],a=n[1];a.error,a.loading;return Object(z.jsx)(Qt,{formType:"comfired",action:t})}function Zt(){var e=Object(Le.useMutation)(we),n=Object(C.a)(e,2),t=n[0],a=n[1],i=a.error;return a.loading?Object(z.jsx)("div",{children:"NOW LOADING"}):i?Object(z.jsx)("div",{children:i}):Object(z.jsx)(Qt,{formType:"reset",action:t})}var Gt=O.c.li(Pt||(Pt=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  padding-bottom: 36px;\n  border-bottom: 1px solid red;\n  margin-bottom: 36px;\n  color: #000;\n"]))),Jt=O.c.div(Wt||(Wt=Object(h.a)(["\n  padding: 20px;\n  border-right: 1px solid #d2d2d2;\n  justify-content: center;\n"]))),Yt=O.c.div(Vt||(Vt=Object(h.a)(["\n  padding: 20px;\n  a {\n    line-height: 1.3;\n    color: #434eae;\n    text-decoration: underline;\n  }\n"]))),Kt=O.c.div(Nt||(Nt=Object(h.a)(["\n  background: #ececec;\n  border: 1px solid #d2d2d2;\n  display: flex;\n  width: 800px;\n"]))),Xt=O.c.p(Ut||(Ut=Object(h.a)(["\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 7;\n  -webkit-box-orient: vertical;\n  text-overflow: ellipsis;\n"])));function ea(){var e=Object(x.useRecoilValue)(S).favorite_movies,n=Object(Le.useQuery)(Ve,{variables:{ids:e}}),t=n.data,a=n.loading,i=n.error,r=Object(j.useState)([]),c=Object(C.a)(r,2),o=c[0],s=c[1];return Object(j.useEffect)((function(){a||i||s(t.queryMoviesByIds)}),[t]),e.length?Object(z.jsx)("ul",{children:o.map((function(e){var n=e.title,t=e.anticipation,a=e.img_src,i=e.release_time,r=e.release_text,c=e.info_src;return Object(z.jsx)(Gt,{children:Object(z.jsxs)(Kt,{children:[Object(z.jsx)(Jt,{children:Object(z.jsx)("img",{src:a,width:"294px",alt:""})}),Object(z.jsxs)(Yt,{children:[Object(z.jsx)("h1",{children:n}),Object(z.jsx)("p",{children:i}),Object(z.jsx)("p",{children:t}),Object(z.jsx)(Xt,{children:r}),Object(z.jsx)("a",{href:c,children:"\u8a73\u5168\u6587"})]})]})},n)}))}):Object(z.jsx)("div",{children:"\u5c1a\u7121\u559c\u611b\u96fb\u5f71\u8cc7\u6599"})}Re.b.add(Fe.a,Ee.a,Ee.b);var na,ta=function(){return Object(z.jsx)(m.a,{basename:"/movie-app",children:Object(z.jsx)(_n,{children:Object(z.jsxs)(Te.c,{children:[Object(z.jsx)(Te.a,{path:"/",exact:!0,component:De}),Object(z.jsx)(Te.a,{path:"/singUp",component:Ft}),Object(z.jsx)(Te.a,{path:"/singIn",component:Et}),Object(z.jsx)(Te.a,{path:"/forgetPassword",component:Ht}),Object(z.jsx)(Te.a,{path:"/change-password/:token",component:Zt}),Object(z.jsx)(Te.a,{path:"/movie-info/:movieId",component:Yn}),Object(z.jsx)(Te.a,{path:"/myList",component:ea})]})})})},aa=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,270)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),a(e),i(e),r(e),c(e)}))},ia=t(162),ra=t.n(ia),ca=Object(O.a)(na||(na=Object(h.a)(["\n    ",'\n\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video {\n      margin: 0 ;\n      padding: 0;\n      border: 0;\n      font-size: 100%;\n      font: inherit;\n      vertical-align: baseline;\n    }\n    /* HTML5 display-role reset for older browsers */\n    article, aside, details, figcaption, figure, \n      footer, header, hgroup, menu, nav, section {\n      display: block;\n    }\n    body {\n      line-height: 1;\n    }\n    ol, ul {\n      list-style: none;\n    }\n\n    * {\n        @import "https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900";\n      }\n\n    *, *:before, *:after {\n        box-sizing: border-box;\n      }\n    \n      body,\n      html {\n        height: 100%;\n        margin: 0;\n      }\n    \n      body {\n        font-family: "Lato", sans-serif;\n        background-color: #fff;\n        line-height: 1.4;\n        background: #221f1f;\n        color: #ffffff;\n      }\n      \n      a,a:hover{\n        color: #fff;\n        text-decoration:none;\n      }\n    \n      code,\n      pre {\n        max-width: 100%;\n        overflow: auto;\n        margin: 0 auto;\n      }\n\n      .my-fb-class{\n        width: 100%;\n        background: #4c69ba !important;\n        color: #fff;\n        border-right: 1px solid transition !important;\n        border-radius:2px;\n        padding: 10px;\n        font-size: 14px;\n        margin-top: 8px;\n        font-weight: 500;\n        margin-bottom: 20px;\n    }\n\n    .my-fb-class i{\n        margin-right: 20px;\n    }\n'])),ra.a),oa=t(163),sa=new Le.InMemoryCache,la=Object(Le.createHttpLink)({uri:"https://showtimesapi.herokuapp.com/movie-api"}),da=Object(oa.a)((function(e,n){var t=n.headers;return{headers:Object(u.a)(Object(u.a)({},t),{},{authorization:localStorage.getItem("token")||""})}})),ba=new Le.ApolloClient({link:da.concat(la),cache:sa,connectToDevTools:!0});f.a.render(Object(z.jsx)(Le.ApolloProvider,{client:ba,children:Object(z.jsxs)(x.RecoilRoot,{children:[Object(z.jsx)(ca,{}),Object(z.jsx)(ta,{})]})}),document.getElementById("root")),aa()}},[[211,1,2]]]);
//# sourceMappingURL=main.a3fec3a5.chunk.js.map