(this.webpackJsonpresource=this.webpackJsonpresource||[]).push([[0],{76:function(e,t,a){},77:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),s=a(41),c=a.n(s),r=(a(52),a(53),a(75),a(76),a(77),a(8)),o=a(42),l=a.n(o),d=a.p+"static/media/dark.68573fd4.svg",b=a.p+"static/media/light.6adb286f.svg",m=a(1);function u(){var e=i.a.useState("dark"===localStorage.getItem("bgmode")),t=Object(r.a)(e,2),a=t[0],n=t[1],s=i.a.useState(a?d:b),c=Object(r.a)(s,2),o=c[0],u=c[1],j=function(){n(!0),u(d),document.querySelectorAll(".bg-light").forEach((function(e){e.className=e.className.replace(/-light/g,"-dark")})),document.body.classList.add("bg-dark"),document.body.classList.contains("text-dark")?document.body.classList.replace("text-dark","text-light"):document.body.classList.add("text-light"),document.body.classList.remove("light-scroll"),document.body.classList.add("dark-scroll")},h=function(){n(!1),u(b),document.querySelectorAll(".bg-dark").forEach((function(e){e.className=e.className.replace(/-dark/g,"-light")})),document.body.classList.remove("bg-dark"),document.body.classList.contains("text-light")?document.body.classList.replace("text-light","text-dark"):document.body.classList.add("text-dark"),document.body.classList.remove("dark-scroll"),document.body.classList.add("light-scroll")};return i.a.useEffect((function(){var e=localStorage.getItem("bgmode");if(null==e&&(e=(e=window.matchMedia("(prefers-color-scheme: dark)").matches)?"dark":"light",localStorage.setItem("bgmode",e)),"dark"===e){n(!0),u(d);var t=setInterval((function(){l()(".bg-light").length&&(clearInterval(t),j())}),100)}else h()}),[]),Object(m.jsxs)("div",{className:"form-check form-switch ms-auto mt-3 me-3 darkmode-toggler",children:[Object(m.jsx)("label",{className:"form-check-label ms-3",htmlFor:"lightSwitch",style:{marginLeft:"3px"},children:Object(m.jsx)("img",{src:o,className:"bi bi-brightness-high",width:"25",height:"25",fill:"white",alt:"light/dark toggler",viewBox:"0 0 16 16",style:{marginBottom:"7px",cursor:"pointer"}})}),Object(m.jsx)("input",{className:"form-check-input",type:"checkbox",id:"lightSwitch",onChange:function(){var e="dark"===localStorage.getItem("bgmode")?"light":"dark";localStorage.setItem("bgmode",e),"dark"===e?j():h()},checked:a,style:{marginLeft:"0px",cursor:"pointer"}})]})}var j=a(25),h=a.n(j);function g(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){var e=document.getElementById("btn-back-to-top");window.scrollY>400?(i(!0),document.body.classList.contains("bg-dark")?e.className="btn btn-outline-light btn-rounded slide-in-bottom-animation":e.className="btn btn-outline-dark btn-rounded slide-in-bottom-animation"):e.style.display="none";var t=setInterval((function(){document.body.classList.contains("bg-dark")?e.className=e.className.replace("btn-outline-dark","btn-outline-light"):e.className=e.className.replace("btn-outline-light","btn-outline-dark")}),100),a=document.getElementById("about-me-section"),n=a.offsetHeight,s=document.getElementById("about-nav"),c=document.getElementById("projects-nav"),r=document.getElementById("contact-nav"),o=function(){s.classList.remove("active"),c.classList.remove("active"),r.classList.remove("active")},l=function(t){"animationend"===t.type&&("slide-in-bottom-disappear"===t.animationName?e.style.display="none":e.style.display="block")};e.addEventListener("animationend",l,!1),window.onresize=function(){n=a.offsetHeight};var d=document.querySelector(".darkmode-toggler");return window.scrollY>400&&window.innerWidth<575&&(d.classList.remove("moveRight-animation"),d.classList.add("moveLeft-animation")),window.onscroll=function(){window.scrollY>400?(window.innerWidth<575&&(d.classList.remove("moveRight-animation"),d.classList.add("moveLeft-animation")),i(!0),document.body.classList.contains("bg-dark")?e.className="btn btn-outline-light btn-rounded slide-in-bottom-animation":e.className="btn btn-outline-dark btn-rounded slide-in-bottom-animation",window.scrollY>n-150&&window.scrollY<n+150&&(o(),s.classList.add("active")),window.scrollY>2*n-150&&window.scrollY<2*n+150&&(o(),c.classList.add("active")),window.scrollY>3*n-200&&window.scrollY<3*n+200&&(o(),r.classList.add("active"))):(o(),i(!1),document.body.classList.contains("bg-dark")?e.className="btn btn-outline-light btn-rounded slide-in-bottom-disappear-animation":e.className="btn btn-outline-dark btn-rounded slide-in-bottom-disappear-animation",d.classList.contains("moveLeft-animation")&&(d.classList.remove("moveLeft-animation"),d.classList.add("moveRight-animation")))},function(){clearInterval(t),e.removeEventListener("animationend",l,!1),window.onresize=null,window.onscroll=null}}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u,{}),Object(m.jsx)(h.a,{top:!0,when:a,children:Object(m.jsx)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light border-bottom fixed-top",id:"navbar_top",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)("a",{className:"navbar-brand",href:"/#",style:{cursor:a?"pointer":"default"},children:Object(m.jsx)("span",{style:{fontSize:"26px"},children:"Dadangdut33"})}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(m.jsxs)("ul",{className:"navbar-nav me-auto",style:{fontSize:"20px"},children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link","aria-current":"page",href:"#about-me",style:{cursor:a?"pointer":"default"},id:"about-nav",children:"About"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link",href:"#projects",style:{cursor:a?"pointer":"default"},id:"projects-nav",children:"Projects"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link",href:"#contact-me",style:{cursor:a?"pointer":"default"},id:"contact-nav",children:"Contact"})})]})})]})})}),Object(m.jsx)("div",{children:Object(m.jsx)("a",{href:"/#",className:"btn btn-outline-light btn-rounded slide-in-bottom-disappear-animation",id:"btn-back-to-top",children:Object(m.jsx)("i",{className:"bi bi-arrow-up"})})})]})}var p=a(43),f=a.n(p),x=a(89);function v(e){var t=e.typingDelay,a=e.erasingDelay,i=e.newTextDelay,s=e.textArray,c=e.loop,o=Object(n.useState)([]),l=Object(r.a)(o,2),d=l[0],b=l[1],u=Object(n.useState)(0),j=Object(r.a)(u,2),h=j[0],g=j[1],p=Object(n.useState)(""),f=Object(r.a)(p,2),x=f[0],v=f[1],O=Object(n.useState)(!1),y=Object(r.a)(O,2),N=y[0],k=y[1],w=Object(n.useCallback)((function(){var e=[];s.forEach((function(n){for(var s=1;s<=n.length;s++)e.push({text:n.substr(0,s),delay:t});for(var c=n.length-1;c>=0;c--)e.push({text:n.substr(0,c),delay:c===n.length-1?i:a});e.push({text:"",delay:t})})),b(e)}),[a,t,i,s]);Object(n.useEffect)((function(){w()}),[w]),Object(n.useEffect)((function(){if(0!==d.length){var e=d[h].delay,n=(h+1)%d.length,i=s.slice(-1)[0].length;if(n!==d.length-i||c){var r=setTimeout((function(){var e=d[n].delay;k(e===t||e===a),v(d[h].text),g(n)}),e);return function(){return clearTimeout(r)}}}}),[d,h,a,t,c,s]);var L=["cursor"];return N&&L.push("typing"),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{className:"typed-text",children:x}),Object(m.jsx)("span",{className:L.join(" "),children:"\xa0"})]})}var O=a.p+"static/media/hover.8b10f053.mp3",y=a.p+"static/media/click.0b3e7735.mp3";function N(){var e=Object(n.useState)("btn btn-primary pulse-animation"),t=Object(r.a)(e,2),a=t[0],i=t[1],s=new Audio(O),c=new Audio(y);return Object(m.jsx)("section",{className:"center-flex-column",id:"top",children:Object(m.jsx)(h.a,{children:Object(m.jsxs)("div",{className:"center-horizontal-vertical",style:{paddingBottom:"70px"},children:[Object(m.jsxs)("div",{className:"flex-dir-row",children:[Object(m.jsxs)("div",{className:"flex-dir-column",children:[Object(m.jsx)("img",{src:"./logo512.png",alt:"Logo",className:"logo-main content center-horizontal"})," ",Object(m.jsxs)(x.a.div,{className:"center-horizontal",style:{paddingTop:"4px"},whileHover:{scale:1.1},children:[Object(m.jsx)("a",{href:"https://github.com/Dadangdut33",target:"_blank",rel:"noreferrer",onMouseEnter:function(){return s.play()},onClick:function(){return c.play()},children:Object(m.jsx)("i",{className:"bi bi-github pad-small"})}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/fauzan-farhan-antoro/",target:"_blank",rel:"noreferrer",onMouseEnter:function(){return s.play()},onClick:function(){return c.play()},children:Object(m.jsx)("i",{className:"bi bi-linkedin pad-small"})}),Object(m.jsx)("a",{href:"https://steamcommunity.com/id/dadangdut33/",target:"_blank",rel:"noreferrer",onMouseEnter:function(){return s.play()},onClick:function(){return c.play()},children:Object(m.jsx)("i",{className:"bi bi-steam pad-small"})}),Object(m.jsx)("a",{href:"https://ko-fi.com/dadangdut33",target:"_blank",rel:"noreferrer",onMouseEnter:function(){return s.play()},children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:22,height:22,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",className:"ko-fi-logo",children:Object(m.jsx)("path",{d:"M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734c4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09c-.443-.441-3.368-3.049-4.034-3.954c-.709-.965-1.041-2.7-.091-3.71c.951-1.01 3.005-1.086 4.363.407c0 0 1.565-1.782 3.468-.963c1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z",fill:"currentColor"})})})]})]}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsxs)("div",{className:"flex-dir-row persist",children:[Object(m.jsx)("h1",{style:{marginRight:"1rem"},children:Object(m.jsx)("strong",{children:"Hello!"})}),Object(m.jsx)("h1",{style:{marginRight:"0.5rem"},children:"I'm Fauzan"}),Object(m.jsx)("h1",{children:Object(m.jsx)(f.a,{delay:750,children:"\ud83d\udc4b"})})]}),Object(m.jsxs)("h2",{className:"lead",children:["A ",Object(m.jsx)(v,{typingDelay:150,erasingDelay:100,newTextDelay:5e3,textArray:["Full Stack Developer","Student","Learner"],loop:!0})]}),Object(m.jsxs)("h4",{className:"text-muted",children:["I'm currently pursuing my bachelor degree as an Informatics Engineering Student at"," ",Object(m.jsx)("a",{href:"https://www.uinjkt.ac.id/",className:"subtle-link",target:"_blank",rel:"noopener noreferrer",children:"UIN Jakarta"}),Object(m.jsx)("br",{}),"I like to learn new things and do some coding for side projects on my free time."]})]})]}),Object(m.jsx)("div",{className:"center",children:Object(m.jsxs)(x.a.a,{className:a,href:"#about-me",style:{margin:"0 auto"},id:"read-more-btn",onMouseEnter:function(){s.play(),i("btn btn-primary")},onMouseLeave:function(){return i("btn btn-primary pulse-animation")},whileHover:{scale:1.1},onClick:function(){return c.play()},children:["Read more ",Object(m.jsx)("i",{className:"bi bi-arrow-down-short"})]})})]})})})}var k=a(45),w=a(27);function L(){var e=Object(w.a)({triggerOnce:!1,rootMargin:"-250px 0px"}),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(m.jsx)("section",{className:"center-flex-column",id:"about-me-section",children:Object(m.jsxs)("div",{className:"center-horizontal-vertical justify wrap-mid",children:[Object(m.jsx)("span",{className:"anchor",id:"about-me"}),Object(m.jsx)("h1",{className:"display-1 text-center underline-1",style:{paddingBottom:"6px"},children:"A little more about me"}),Object(m.jsxs)(x.a.div,{className:"about-me content-outline",ref:a,initial:"hidden",animate:n?"visible":"hidden",variants:{hidden:{opacity:0,height:0,transition:{duration:.6}},visible:{opacity:1,height:"fit-content",transition:{duration:.6}}},style:{overflow:"hidden",position:"absolute"},children:[Object(m.jsxs)("p",{className:"subtle-text",children:["At first, I have never thought of becoming a programmer because I had a feeling that it's a"," ",Object(m.jsx)("strong",{"data-tip":!0,"data-for":"imgPopup-1",children:"hard job"}),Object(m.jsx)(k.a,{id:"imgPopup-1",className:"tooltip-img",children:Object(m.jsx)("img",{src:"https://c.tenor.com/OB4K11sbmrMAAAAM/spongebob-thinking.gif",alt:"thinking-hard-gif"})}),", but then i realize that other stuff are also hard. So, why don't i try to pursue something that i could enjoy and ... here I am."]}),Object(m.jsx)("p",{className:"subtle-text",children:"I like games, anime, movie, manga, etc. I am very interested in programming, especially in topics related to stuff that I like. I have a passion for learning new things and I am always trying to improve my skills."}),Object(m.jsx)("p",{className:"subtle-text",children:"I really hope things that i create can be useful, even if just a little."})]})]})})}a(83);function I(){return Object(m.jsx)("section",{className:"center-flex-column",id:"projects-section",children:Object(m.jsxs)("div",{className:"center-horizontal-vertical",children:[Object(m.jsx)("span",{className:"anchor",id:"projects"}),Object(m.jsx)("h1",{className:"text-center",children:"Some of my Repositories"})]})})}a(84);function S(e){var t=e.color,a=e.id,n=e.label;return Object(m.jsx)("div",{children:Object(m.jsx)("a",{title:n,className:"kofi-button",style:{backgroundColor:t},href:"https://ko-fi.com/"+a,target:"_blank",rel:"noopener noreferrer",children:Object(m.jsxs)("span",{className:"kofitext",children:[Object(m.jsx)("img",{src:"https://ko-fi.com/img/cup-border.png",className:"kofiimg",alt:"Ko-Fi button"}),n]})})})}function E(){return Object(m.jsxs)("footer",{className:"text-center text-lg-start",children:[Object(m.jsx)("div",{className:"container p-4 pb-0",children:Object(m.jsx)("section",{className:"d-flex justify-content-center align-items-center",style:{marginBottom:"18px"},children:Object(m.jsx)(S,{color:"29abe0",id:"dadangdut33",label:"Buy Me a Ko-Fi"})})}),Object(m.jsxs)("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["\xa9 2021 ",Object(m.jsx)("strong",{children:"Dadangdut33"})]})]})}function M(){var e=new Audio(O),t=new Audio(y),a=Object(w.a)({triggerOnce:!1,rootMargin:"-270px 0px"}),i=Object(r.a)(a,2),s=i[0],c=i[1],o=Object(n.useState)(!1),l=Object(r.a)(o,2),d=l[0],b=l[1],u=Object(n.useState)(!1),j=Object(r.a)(u,2),h=j[0],g=j[1],p=Object(n.useState)(!1),f=Object(r.a)(p,2),v=f[0],N=f[1],k={hidden:{opacity:0,transition:{duration:.15}},visible:{opacity:1,transition:{duration:.15}}};return Object(m.jsxs)("section",{className:"flex-dir-column",id:"contact-me-section",children:[Object(m.jsxs)("div",{className:"center-horizontal-vertical",children:[Object(m.jsx)("span",{className:"anchor",id:"contact-me"}),Object(m.jsx)("h1",{className:"display-1 text-center",children:"Contact Me"}),Object(m.jsx)(x.a.div,{className:"contact-me",ref:s,initial:"hidden",animate:c?"visible":"hidden",variants:{hidden:{height:"0px",transition:{duration:.6}},visible:{height:"fit-content",transition:{duration:.6}}},style:{overflow:"hidden",position:"absolute"},children:Object(m.jsxs)("div",{className:"center-horizontal-vertical",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("i",{class:"bi bi-envelope"})," ",Object(m.jsxs)("a",{href:"mailto:dadang.contact@gmail.com",target:"_blank",rel:"noreferrer",className:"no-decoration",onMouseEnter:function(){e.play(),b(!0)},onMouseLeave:function(){return b(!1)},onClick:function(){return t.play()},children:["dadang.contact@gmail.com"," ",Object(m.jsx)(x.a.span,{variants:k,initial:"hidden",animate:d?"visible":"hidden",children:"\u25c0"})]})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("i",{className:"bi bi-github"})," ",Object(m.jsxs)("a",{href:"https://github.com/Dadangdut33",target:"_blank",rel:"noreferrer",className:"no-decoration",onMouseEnter:function(){e.play(),g(!0)},onMouseLeave:function(){return g(!1)},onClick:function(){return t.play()},children:["Dadangdut33"," ",Object(m.jsx)(x.a.span,{variants:k,initial:"hidden",animate:h?"visible":"hidden",children:"\u25c0"})]})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("i",{className:"bi bi-linkedin"})," ",Object(m.jsxs)("a",{href:"https://www.linkedin.com/in/fauzan-farhan-antoro/",target:"_blank",rel:"noreferrer",className:"no-decoration",onMouseEnter:function(){e.play(),N(!0)},onMouseLeave:function(){return N(!1)},onClick:function(){return t.play()},children:["Fauzan Farhan Antoro"," ",Object(m.jsx)(x.a.span,{variants:k,initial:"hidden",animate:v?"visible":"hidden",children:"\u25c0"})]})]})]})})]}),Object(m.jsx)(E,{})]})}var z=a(46),A=a(90);function D(){var e=Object(z.a)(-100),t=Object(z.a)(-100),a={damping:25,stiffness:250},i=Object(A.a)(e,a),s=Object(A.a)(t,a);return Object(n.useEffect)((function(){var a=function(a){e.set(a.clientX-16),t.set(a.clientY-16)};return window.addEventListener("mousemove",a),function(){window.removeEventListener("mousemove",a)}}),[e,t]),Object(m.jsx)(x.a.div,{className:"cursor",style:{translateX:i,translateY:s}})}var B=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(D,{}),Object(m.jsx)(g,{}),Object(m.jsxs)("main",{className:"App",children:[Object(m.jsx)(N,{}),Object(m.jsx)(L,{}),Object(m.jsx)(I,{}),Object(m.jsx)(M,{})]})]})};c.a.render(Object(m.jsx)(B,{}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.db2eb28d.chunk.js.map