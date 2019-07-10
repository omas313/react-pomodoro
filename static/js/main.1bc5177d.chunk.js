(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(t,e,n){t.exports=n(38)},32:function(t,e,n){},34:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),a=n(13),i=n.n(a),c=n(11),s=n.n(c),u=n(14),l=n(12),m=n(5),d=n(6),b=n(9),h=n(8),p=n(10),g=n(4),f=n(7),O=n(2),k="#db0504",v="#800100",j="#e84a07",S="#612004",y="#ff9900",T="#eff5dc",E="#ccd2df",C="#800100",x="#272727",M={light:{primary:k,primaryDarker:v,secondary:j,secondaryDarker:S,tertiary:y,light:T,foreground:C,background:"#fff0f0",controlForeground:C,controlBackground:"#ffbfbf",controlBackgroundFocus:"#fff0f0"},dark:{primary:k,primaryDarker:v,secondary:j,secondaryDarker:S,tertiary:y,light:T,foreground:E,background:x,controlForeground:E,controlBackground:"#212121",controlBackgroundFocus:x}},w=o.a.createContext({theme:M.dark,toggleTheme:function(){}});function D(){var t=Object(f.a)(["\n            animation: "," 10s ease-in-out 0.4s infinite;\n            -webkit-animation: "," 10s ease-in-out 0.4s infinite;\n          "]);return D=function(){return t},t}function B(){var t=Object(f.a)(["\n            background-color: ",";\n            margin-bottom: 2rem;\n          "]);return B=function(){return t},t}function R(){var t=Object(f.a)(["\n            background-color: ",";\n            margin-bottom: 2rem;\n            transition: background-color 1s;\n\n            a.navbar-brand, a.nav-link, .navbar-toggler-icon{\n              color: "," !important;\n            }\n          "]);return R=function(){return t},t}function A(){var t=Object(f.a)(["\n            0% { background-color: ","; }\n            20% { background-color: ","; }\n            60% { background-color: "," }\n            100% { background-color: "," }\n          "]);return A=function(){return t},t}var P=function(t){function e(){var t,n;Object(m.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(b.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={isOpen:!1},n.handleToggle=function(){n.setState({isOpen:!n.state.isOpen})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this,e=this.state.isOpen,n=this.props,r=n.title,o=n.isBreakTime,a=n.isWorking,i=n.onInfoClick,c=n.onSettingsClick;return Object(O.b)(w.Consumer,null,function(n){var s=n.theme,u=(n.toggleTheme,Object(O.c)(A(),s.primary,s.secondary,s.tertiary,s.primary)),l=Object(O.a)(R(),s.primary,s.light),m=Object(O.a)(B(),s.secondary),d=Object(O.a)(D(),u,u),b=[l,o?m:null,a?d:null].filter(function(t){return null!==t});return Object(O.b)("div",null,Object(O.b)(g.q,{css:b,dark:!0,expand:"md"},Object(O.b)(g.r,{href:"/"},r),Object(O.b)(g.s,{onClick:t.handleToggle}),Object(O.b)(g.d,{isOpen:e,navbar:!0},Object(O.b)(g.n,{className:"ml-auto",navbar:!0},Object(O.b)(g.o,null,Object(O.b)(g.p,{id:"info-nav-link",className:"clickable",onClick:i},"Info")),Object(O.b)(g.o,null,Object(O.b)(g.p,{id:"settings-nav-link",className:"clickable",onClick:c},"Settings"))))))})}}]),e}(r.Component);function N(){var t=Object(f.a)(["\n          max-height: 80vh !important;\n          max-width: 80vw !important;\n          background-color: "," !important;\n          margin: 0.5rem auto;\n\n          a {\n            color: "," !important;\n            text-decoration: none;\n          }\n          a:hover {\n            color: "," !important;\n            text-decoration: none;\n          }\n          .modal-header {\n            background-color: ",";\n            border: none;\n          }\n          .modal-content {\n            background-color: ",";\n            color: ",";\n            border: none;\n            border-radius: 0;\n            outline: none;\n          }\n          button span {\n            color: ","\n          }\n        "]);return N=function(){return t},t}var _=function(t){var e=t.isOpen,n=t.onToggle;return Object(O.b)(w.Consumer,null,function(t){var r=t.theme,o=(t.toggleTheme,Object(O.a)(N(),r.background,r.primary,r.secondary,r.primary,r.background,r.foreground,r.foreground));return Object(O.b)(g.k,{css:o,isOpen:e,toggle:n,className:"info-modal"},Object(O.b)(g.m,{toggle:n},"Info"),Object(O.b)(g.l,null,Object(O.b)("h5",null,"Pomodoro, pomodori?"),Object(O.b)("p",null,"Pomodoro is the Italian word for tomato, and the plural is pomodori."),Object(O.b)("h5",null,"What is this website?"),Object(O.b)("p",null,"It is a timer web application I developed to implement the Pomodoro Technique."),Object(O.b)("h5",null,"The Pomodoro Technique"),Object(O.b)("p",null,"It is a time-management and productivity booster technique created by Francesco Cirillo.",Object(O.b)("br",null),"It can help size up tasks and maintain focus throughout your work by diving it into time chunks.",Object(O.b)("br",null),"You can read more about it"," ",Object(O.b)("a",{href:"https://francescocirillo.com/pages/pomodoro-technique",className:"link",target:"_blank",rel:"noopener noreferrer"},"here"),".")))})};function I(){var t=Object(f.a)(["\n                  border: 1px solid "," !important;\n                  font-size: 1.1rem !important;\n                  transition: background-color 0.3s, border-color 0.3s;\n                  background-color: "," !important;\n                  color: ","  !important;\n                  \n                  &:focus {\n                    background-color: "," !important;\n                    color: ","  !important;\n                    box-shadow: none !important;\n                  }\n                "]);return I=function(){return t},t}var F=function(t){function e(){var t,n;Object(m.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(b.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={value:0},n.handleChange=function(t){var e=t.currentTarget,r=n.props,o=r.name,a=r.min,i=r.max,c=r.onChange;e.value<a||e.value>i||(c(o,Number(e.value)),n.setState({value:e.value}))},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.setState({value:this.props.default})}},{key:"render",value:function(){var t=this,e=this.state.value,n=this.props,r=n.name,o=n.label,a=n.min,i=n.max;return Object(O.b)(g.f,null,Object(O.b)(g.t,null,Object(O.b)(g.c,null,Object(O.b)(g.h,{for:r},o)),Object(O.b)(g.c,null,Object(O.b)(w.Consumer,null,function(n){var o=n.theme,c=(n.toggleTheme,Object(O.a)(I(),o.primary,o.controlBackground,o.controlForeground,o.controlBackgroundFocus,o.foreground));return Object(O.b)(g.g,{css:c,type:"number",min:a,max:i,name:r,value:e,onChange:t.handleChange})}))))}}]),e}(r.Component);F.defaultProps={name:"",value:0,onChange:function(){return null}};var K=F,z=function t(){Object(m.a)(this,t)};z.OVERTIME=!1,z.DARK_MODE=!1,z.POMODORO=25,z.SHORT_BREAK=5,z.LONG_BREAK=10,z.TIMER_MIN=1,z.TIMER_MAX=120,z.getOvertime=function(){return z.OVERTIME},z.setOvertime=function(t){return z.OVERTIME=t},z.getDarkMode=function(){return z.DARK_MODE},z.setDarkMode=function(t){return z.DARK_MODE=t},z.validTimers=function(t){return!Object.keys(t).some(function(e){return t[e]<z.TIMER_MIN||t[e]>z.TIMER_MAX})},z.setTimers=function(t){0!==t.pomodoro&&(z.POMODORO=t.pomodoro),0!==t.shortBreak&&(z.SHORT_BREAK=t.shortBreak),0!==t.longBreak&&(z.LONG_BREAK=t.longBreak)},z.getTimers=function(){return{pomodoro:z.POMODORO,shortBreak:z.SHORT_BREAK,longBreak:z.LONG_BREAK}},z.getBreakduration=function(t){return t>0&&t%4===0?z.LONG_BREAK:z.SHORT_BREAK},z.getTextFromTime=function(t){switch(t){case z.SHORT_BREAK:return"Break (S)";case z.LONG_BREAK:return"Break (L)";default:return"Pomodoro"}};var L=function(t){function e(){var t,n;Object(m.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(b.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={value:!1},n.handleChange=function(t){var e=t.currentTarget.checked;n.props.onChange(e),n.setState({value:e})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.setState({value:this.props.default})}},{key:"render",value:function(){var t=this.state.value,e=this.props.label;return o.a.createElement(g.f,{check:!0},o.a.createElement(g.t,null,o.a.createElement(g.c,null,o.a.createElement(g.h,{check:!0},o.a.createElement(g.g,{type:"checkbox",checked:t,onChange:this.handleChange})," ",e))))}}]),e}(r.Component);L.defaultProps={default:!1,onChange:function(){return null}};var V=L,G={pomodoro:"pomodoro",shortBreak:"sb",longBreak:"lb"},W="overtime",q="darkMode";var H={getTimers:function(){var t=Object.keys(G).map(function(t){return Number(localStorage.getItem(G[t]))});return{pomodoro:t[0],shortBreak:t[1],longBreak:t[2]}},saveTimers:function(t){localStorage.setItem(G.pomodoro,t.pomodoro),localStorage.setItem(G.shortBreak,t.shortBreak),localStorage.setItem(G.longBreak,t.longBreak)},getOvertime:function(){var t=localStorage.getItem(W);return null!==t&&"true"===t.toString()},setOvertime:function(t){null===t&&(t=!1),localStorage.setItem(W,"true"===t.toString())},getDarkMode:function(){var t=localStorage.getItem(q);return null!==t&&"true"===t.toString()},setDarkMode:function(t){null===t&&(t=!1),localStorage.setItem(q,"true"===t.toString())}};function U(){var t=Object(f.a)(["\n            background-color: ","\n          "]);return U=function(){return t},t}function X(){var t=Object(f.a)(["\n            .modal-header {\n              background-color: ",";\n              border: none;\n            }\n            .modal-content {\n              background-color: ",";\n              color: ","\n            }\n            button span {\n              color: ","\n            }\n          "]);return X=function(){return t},t}var J=function(t){function e(){var t,n;Object(m.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(b.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={timers:{pomodoro:0,shortBreak:0,longBreak:0},overtime:!1,darkMode:!1},n.handleTimerChange=function(t,e){var r=Object(l.a)({},n.state.timers);r[t]=e,n.setState({timers:r})},n.handleOvertimeChange=function(t){n.setState({overtime:t})},n.handleToggleTheme=function(t,e){n.setState({darkMode:t}),e()},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.setState({timers:z.getTimers(),overtime:z.getOvertime(),darkMode:z.getDarkMode()})}},{key:"componentDidUpdate",value:function(t,e){t.isOpen&&!this.props.isOpen&&this.save()}},{key:"save",value:function(){var t=this.state,e=t.timers,n=t.overtime,r=t.darkMode;z.validTimers(e)&&(z.setTimers(e),z.setOvertime(n),z.setDarkMode(r),H.saveTimers(e),H.setOvertime(n),H.setDarkMode(r))}},{key:"render",value:function(){var t=this,e=this.state,n=e.timers,r=e.overtime,o=this.props,a=o.isOpen,i=o.onToggle;return Object(O.b)(w.Consumer,null,function(e){var o=e.theme,c=e.toggleTheme,s=Object(O.a)(X(),o.primary,o.background,o.foreground,o.foreground),u=Object(O.a)(U(),o.primary);return Object(O.b)(g.k,{isOpen:a,toggle:i,css:s},Object(O.b)(g.m,{toggle:i},"Settings"),Object(O.b)(g.l,null,Object(O.b)("div",{className:"mb-3"},Object(O.b)("strong",null,"Timer Durations")),Object(O.b)(K,{name:"pomodoro",label:"Pomodoro",min:z.TIMER_MIN,max:z.TIMER_MAX,default:n.pomodoro,onChange:t.handleTimerChange}),Object(O.b)(K,{name:"shortBreak",label:"Short Break",min:z.TIMER_MIN,max:z.TIMER_MAX,default:n.shortBreak,onChange:t.handleTimerChange}),Object(O.b)(K,{name:"longBreak",label:"Long Break",min:z.TIMER_MIN,max:z.TIMER_MAX,default:n.longBreak,onChange:t.handleTimerChange}),Object(O.b)(V,{label:"Overtime",default:r,onChange:t.handleOvertimeChange}),Object(O.b)(V,{label:"Dark theme",default:o===M.dark,onChange:function(e){return t.handleToggleTheme(e,c)}}),Object(O.b)("div",{style:{textAlignLast:"right"}},Object(O.b)(g.b,{css:u,id:"settings-submit-button",color:"danger",onClick:i},"Submit"))))})}}]),e}(r.Component),Y=function(t){var e=t.children;return o.a.createElement(g.c,{lg:{size:8,order:1},xs:{size:12,order:2},className:"left-to-bottom-column"},e)},$=function(t){var e=t.children;return o.a.createElement(g.c,{lg:{size:4,order:2},xs:{size:12,order:1}},e)};function Q(){var t=Object(f.a)(["\n              background-color: "," !important;\n              border-color: "," !important;\n\n              &:hover {\n                background-color: "," !important;\n                border-color: "," !important;\n              }\n            "]);return Q=function(){return t},t}function Z(){var t=Object(f.a)(["\n            background-color: "," !important;\n            border-color: "," !important;\n\n            &:hover {\n              background-color: "," !important;\n              border-color: "," !important;\n            }\n          "]);return Z=function(){return t},t}function tt(){var t=Object(f.a)(["\n            text-align: center;\n            \n            button {\n              color: "," !important;\n              width: 70px;\n              height: 70px;\n              margin: 3px;\n            }\n      \n            button img {\n              width: 30px;\n              max-height: 35px;\n            }\n          "]);return tt=function(){return t},t}var et=function(t){function e(){var t,n;Object(m.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(b.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).isActive=function(t){return n.props.currentSession===t},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this,e=this.props.onButtonClick;return Object(O.b)(w.Consumer,null,function(n){var r=n.theme,o=(n._,Object(O.a)(tt(),r.light)),a=Object(O.a)(Z(),t.isActive(z.POMODORO)?r.primary:r.primaryDarker,t.isActive(z.POMODORO)?r.primary:r.primaryDarker,r.primary,r.primary),i=function(e){return Object(O.a)(Q(),t.isActive(e)?r.secondary:r.secondaryDarker,t.isActive(e)?r.secondary:r.secondaryDarker,r.secondary,r.secondary)};return Object(O.b)("div",{css:o},Object(O.b)(g.b,{css:a,id:"pomodoro-button",onClick:function(){return e(z.POMODORO)}},Object(O.b)("img",{src:"./img/pomodoro.png",alt:"pomodoro",className:"session-button-img"})),Object(O.b)(g.b,{css:i(z.SHORT_BREAK),className:"break-button",onClick:function(){return e(z.SHORT_BREAK)}},Object(O.b)("img",{src:"./img/time-5.png",alt:"Short break",className:"session-button-img"})),Object(O.b)(g.b,{css:i(z.LONG_BREAK),className:"break-button",onClick:function(){return e(z.LONG_BREAK)}},Object(O.b)("img",{src:"./img/time-10.png",alt:"Long break",className:"session-button-img"})))})}}]),e}(r.Component);function nt(){var t=Object(f.a)(["\n      border-top: 1px solid ",";\n      border-bottom: 1px solid ",";\n      padding: 0.6rem;\n      margin: 1rem 0 !important;\n    "]);return nt=function(){return t},t}var rt=function(t){var e=t.taskCount,n=t.pomodoroCount,r=t.overtime,o=t.showOvertime;return Object(O.b)(w.Consumer,null,function(t){var a=t.theme,i=(t._,Object(O.a)(nt(),a.primary,a.primary));return Object(O.b)("div",{css:i},Object(O.b)(g.t,null,Object(O.b)(g.c,{className:"text-center"},Object(O.b)("p",{className:"text-bold"},"Tasks"),Object(O.b)("p",{id:"summary-task-count"},e)),Object(O.b)(g.c,{className:"text-center"},Object(O.b)("p",{className:"text-bold"},"Pomodori"),Object(O.b)("p",{id:"summary-pomodoro-count"},n))),o&&Object(O.b)(g.t,null,Object(O.b)(g.c,{className:"text-center"},Object(O.b)("p",{className:"text-bold"},"Overtime (P)"),Object(O.b)("p",{id:"summary-overtime-pomodoro"},r.pomodori)),Object(O.b)(g.c,{className:"text-center"},Object(O.b)("p",{className:"text-bold"},"Overtime (B)"),Object(O.b)("p",{id:"summary-overtime-breaks"},r.breaks))))})},ot=n(15);function at(){var t=Object(f.a)(["\n              background-color: ",";\n              color: ",";\n              border-color: ",";\n              \n              &:focus {\n                color: ",";\n                background-color: ",";\n                border-color: ",";\n                outline: none;\n                box-shadow: none;\n              }\n            "]);return at=function(){return t},t}var it=function(t){function e(){var t,n;Object(m.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(b.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={text:""},n.handleChange=function(t){var e=t.currentTarget;n.props.onChange(e.value),n.setState({text:e.value})},n.handleKeyDown=function(t){var e=t.key,r=n.state.text;"Enter"===e&&n.handleSubmit(r)},n.handleSubmit=function(t){t.trim()&&((0,n.props.onSubmit)(t),n.setState({text:""}))},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.setState({text:this.props.text})}},{key:"render",value:function(){var t=this,e=this.state.text,n=this.props.placeholder;return Object(O.b)(g.f,null,Object(O.b)(w.Consumer,null,function(r){var o=r.theme,a=(r._,Object(O.a)(at(),o.controlBackground,o.foreground,o.primary,o.foreground,o.controlBackgroundFocus,o.primary));return Object(O.b)(g.g,{css:a,name:"task-input",placeholder:n,value:e,onChange:t.handleChange,onKeyDown:t.handleKeyDown,onBlur:function(){return t.handleSubmit(e)},autoFocus:!0})}))}}]),e}(r.Component);it.defaultProps={text:"",placeholder:"",onChange:function(){return null}};var ct=it,st=n(0),ut=(Object(st.shape)({_id:st.string.isRequired,name:st.string.isRequired,pomodori:st.number.isRequired}),function(t){function e(){return Object(m.a)(this,e),Object(b.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"renderActionButtons",value:function(){var t=this.props,e=t.task,n=t.onDelete,r=t.hideEditButton,a=t.onEditClick;return o.a.createElement(o.a.Fragment,null,!r&&o.a.createElement(g.b,{id:"task-edit-button",className:"action-button task-button",size:"sm",color:"primary",outline:!0,onClick:a},o.a.createElement("img",{src:"./img/edit.svg",alt:"Edit"})),o.a.createElement(g.b,{id:"task-delete-button",className:"action-button task-button",size:"sm",color:"primary",outline:!0,onClick:function(){return n(e)}},o.a.createElement("img",{src:"./img/delete.svg",alt:"Delete"})))}},{key:"renderSubmitEditButton",value:function(){var t=this.props,e=t.newName,n=t.onSubmit;return o.a.createElement(g.b,{id:"task-submit-edit-button",className:"action-button",size:"sm",color:"primary",outline:!0,onClick:function(){return n(e)}},o.a.createElement("img",{src:"./img/check-mark.svg",alt:"Edit"}))}},{key:"render",value:function(){return this.props.isEditing?this.renderSubmitEditButton():this.renderActionButtons()}}]),e}(r.Component));function lt(){var t=Object(f.a)(["\n            color: "," !important;\n            border-radius: 10px !important;\n            transition: background-color 0.3s, border-color 0.3s, display 0.3s;\n            animation: fadeIn 0.3s ease-in 0s 1;\n            -webkit-animation: fadeIn 0.3s ease-in 0s 1;\n            \n            ","\n\n            &:hover {\n              background-color: "," !important;\n            }\n            \n            & .task-name {\n              color: ",";\n              overflow: auto;\n              font-size: 1.1rem;\n            }\n\n            & .action-button img {\n              max-width: 20px;\n            }\n            \n            & .task-button {\n              outline: none !important;\n              border: none !important;\n            }\n            \n            & .btn-outline-primary {\n              color: "," !important;\n              border-color: "," !important;\n            }\n            & .btn-outline-primary:hover, & .btn-outline-primary:active {\n              background-color: "," !important;\n            }\n          "]);return lt=function(){return t},t}function mt(){var t=Object(f.a)(["\n        background-color: "," !important;\n        color: "," !important;\n      "]);return mt=function(){return t},t}function dt(){var t=Object(f.a)(["\n        background-color: "," !important;\n        color: "," !important;\n      "]);return dt=function(){return t},t}function bt(){var t=Object(f.a)(["\n      transition: background-color 0.3s;\n    "]);return bt=function(){return t},t}var ht=function(t){function e(){var t,n;Object(m.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(b.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={isEditing:!1,newName:""},n.handleEditClick=function(){var t=n.state.isEditing;n.setState({isEditing:!t})},n.handleEditSubmit=function(t){var e=n.props,r=e.task;(0,e.onEdit)(r._id,t),n.setState({isEditing:!1})},n.handleChange=function(t){n.setState({newName:t})},n.getBadgeStyles=function(t){return[Object(O.a)(bt()),0===n.props.task.pomodori?Object(O.a)(dt(),t.background,t.foreground):Object(O.a)(mt(),t.primary,t.foreground)]},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return Object(O.b)(w.Consumer,null,function(e){var n=e.theme,r=(e._,t.state),o=r.isEditing,a=r.newName,i=t.props,c=i.task,s=i.isActive,u=i.onSetActive,l=i.onDelete,m=Object(O.a)(lt(),n.foreground,s?"\n              background-color: ".concat(n.background," !important;\n              border-top: 2px solid ").concat(n.primary," !important;\n              border-bottom: 2px solid ").concat(n.primary," !important;\n              opacity: 1 !important;\n            "):"\n              background-color: ".concat(n.controlBackground," !important;\n              border-color: ").concat(n.primaryDarker," !important;\n              margin-left: 3rem;\n              margin-right: 3rem;\n              opacity: 0.5;\n            "),n.primary,n.foreground,n.foreground,n.primaryDarker,n.foreground);return Object(O.b)(g.j,{css:m},Object(O.b)(g.t,null,Object(O.b)(g.c,{className:"w-100 clickable task-name",onClick:function(){return u(c)}},o?Object(O.b)(ct,{text:c.name,onChange:t.handleChange,onSubmit:t.handleEditSubmit}):c.name),Object(O.b)(g.c,{md:"2",xs:"1"},Object(O.b)(g.a,{css:t.getBadgeStyles(n),pill:!0},c.pomodori)),Object(O.b)(g.c,{md:"3",xs:"3",className:"text-right action-buttons"},Object(O.b)(ut,{task:c,newName:a,isEditing:o,hideEditButton:!s,onSubmit:t.handleEditSubmit,onEditClick:t.handleEditClick,onDelete:l}))))})}}]),e}(r.Component),pt=function(t){function e(){return Object(m.a)(this,e),Object(b.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"isActive",value:function(t){var e=this.props.currentTask;return e&&e._id===t}},{key:"render",value:function(){var t=this,e=this.props,n=e.tasks,r=e.onSetActiveTask,a=e.onDelete,i=e.onEdit;return o.a.createElement(g.i,{flush:!0},0===n.length&&o.a.createElement("p",null,"Add a task and start working!"),n&&n.map(function(e){return o.a.createElement(ht,{key:e._id,task:e,isActive:t.isActive(e._id),onSetActive:r,onDelete:a,onEdit:i})}))}}]),e}(r.Component),gt="tasks";var ft={getAll:function(){return JSON.parse(localStorage.getItem(gt))},save:function(t){return localStorage.setItem(gt,JSON.stringify(t))}},Ot=function t(e,n,r){var o=this;Object(m.a)(this,t),this.addPomodoro=function(){return o.pomodori++},this._id=e,this.name=n,this.pomodori=r};Ot.getDefaultTask=function(){return new Ot("1","Untitled task",0)};var kt=function(t){function e(){var t,n;Object(m.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(b.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={tasks:[],currentTask:null},n.handleSetActiveTask=function(t){n.setState({currentTask:t})},n.handleNewTask=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(">>es"===t)return n.props.DEBUG_se_hack();var r=Object(ot.a)(n.state.tasks),o=new Ot("".concat(t.length).concat(1e6*Math.random()),t.trim(),e);r.push(o),n.setState({tasks:r})},n.handleDeleteTask=function(t){var e=n.state,r=e.tasks,o=e.currentTask;if(r.length<=1){var a=Ot.getDefaultTask();return n.setState({tasks:[a],currentTask:a})}var i=Object(ot.a)(r),c={};i.splice(i.indexOf(t),1),c.tasks=i,o&&t._id!==o._id&&1!==i.length||(c.currentTask=i[0]),n.setState(c)},n.handleEditTask=function(t,e){var r=n.state,o=r.tasks,a=r.currentTask,i=Object(ot.a)(o),c=i.findIndex(function(e){return e._id===t}),s=new Ot(i[c]._id,e.trim(),i[c].pomodori);i[c]=s;var u={tasks:i};s._id===a._id&&(u.currentTask=s),n.setState(u)},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.initTasks()}},{key:"componentDidUpdate",value:function(t,e){e.tasks!==this.state.tasks&&this.onTasksChanged(),!t.pendingPomodoro&&this.props.pendingPomodoro&&this.addPomodoroToCurrentTask()}},{key:"initTasks",value:function(){var t=ft.getAll();t&&0!==t.length||(t=[Ot.getDefaultTask()]),this.setState({tasks:t,currentTask:t[0]})}},{key:"getTotalPomodori",value:function(){var t=this.state.tasks;return 0===t.length?0:t.reduce(function(t,e){return t+e.pomodori},0)}},{key:"onTasksChanged",value:function(){var t=this.state.tasks,e=this.props.onTasksChanged;e(t.length,this.getTotalPomodori()),ft.save(t)}},{key:"addPomodoroToCurrentTask",value:function(){var t=this.state,e=t.tasks,n=t.currentTask,r=this.props.onPomodoroAssigned,o=Object(ot.a)(e),a=o.indexOf(n),i=new Ot(o[a]._id,o[a].name,o[a].pomodori+1);o[a]=i,this.setState({tasks:o,currentTask:i}),r()}},{key:"render",value:function(){var t=this.state,e=t.tasks,n=t.currentTask;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ct,{placeholder:"Enter task here...",onSubmit:this.handleNewTask}),o.a.createElement(pt,{tasks:e,currentTask:n,onSetActiveTask:this.handleSetActiveTask,onEdit:this.handleEditTask,onDelete:this.handleDeleteTask}))}}]),e}(r.Component),vt=function(){function t(e,n){Object(m.a)(this,t),this.min=e,this.sec=n}return Object(d.a)(t,[{key:"incSeconds",value:function(t){this.sec+=t,this.sec>=60&&(this.min+=Math.floor(this.sec/60),this.sec=this.sec%60)}},{key:"toString",value:function(){var t=this.min<10?"0".concat(this.min):this.min,e=this.sec<10?"0".concat(this.sec):this.sec;return"".concat(t," : ").concat(e)}},{key:"totalSeconds",get:function(){return 60*this.min+this.sec}}],[{key:"secToMinSecString",value:function(t){var e=Math.floor(t/60),n=t%60,r=e<10?"0".concat(e):e,o=n<10?"0".concat(n):n;return"".concat(r,":").concat(o)}}]),t}(),jt=function(t){function e(t){var n;return Object(m.a)(this,e),(n=Object(b.a)(this,Object(h.a)(e).call(this,t))).audioRef=o.a.createRef(),n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.audioRef.current.volume=.2}},{key:"componentDidUpdate",value:function(t){!t.play&&this.props.play&&this.audioRef.current.play()}},{key:"render",value:function(){return o.a.createElement("audio",{src:"./sound/alert.mp3",ref:this.audioRef},"It looks like your browser doesn't support audio playback through html...")}}]),e}(r.Component),St=function t(){Object(m.a)(this,t)};function yt(){var t=Object(f.a)(["\n            animation: blink 2s ease-in-out 0s infinite;\n            -webkit-animation: blink 2s ease-in-out 0s infinite;\n          "]);return yt=function(){return t},t}function Tt(){var t=Object(f.a)(["\n            margin: 1rem 1rem 2rem 1rem;\n            text-align: center;\n            font-size: 3rem;\n            transition: color 1s;\n            cursor: pointer;\n            color: ",";\n\n            @media (max-width: 575.98px) {\n              font-size: 3rem !important;\n            }\n            @media(max-width: 991.98px) {\n              font-size: 4rem;\n            }\n            @media (min-width: 1200px) {\n              font-size: 4.5rem;\n            }\n          "]);return Tt=function(){return t},t}St.value="",St.session="",St.time="",St.isPaused=!1,St.update=function(){return document.title="".concat(St.session," - ").concat(St.time)+(St.isPaused?" - PAUSED":"")},St.setSession=function(t){St.session=t,St.update()},St.setTime=function(t){St.time=t,St.update()},St.setState=function(t){St.isPaused=t,St.update()};var Et=function(t){function e(){var t,n;Object(m.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(b.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={running:!1,time:new vt(0,0),timer:null,playSound:!1,overtime:!1},n.setTime=function(t,e){return n.setState({time:new vt(t,e)},function(){return St.setTime(n.state.time.toString())})},n.handleSecondPassed=function(){var t=n.state,e=t.time;if(t.overtime)return n.onOvertime();var r=Object(l.a)({},e);if(0===e.sec&&0===e.min)return z.getOvertime()?n.setState({overtime:!0},function(){return n.playSound()}):n.timerFinished();0===e.sec?(r.min=e.min-1,r.sec=59):r.sec=e.sec-1,n.setTime(r.min,r.sec)},n.onOvertime=function(){var t=n.state.time,e=Object(l.a)({},t);59===t.sec?(e.min=t.min+1,e.sec=0):e.sec=t.sec+1,n.setTime(e.min,e.sec)},n.handleTimerToggle=Object(u.a)(s.a.mark(function t(){var e,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.state,r=e.running,e.overtime&&n.setState({overtime:!1},function(){n.props.onOvertimeDone(n.state.time.totalSeconds),n.timerFinished()}),!r){t.next=7;break}return t.next=5,n.stopTimer();case 5:t.next=9;break;case 7:return t.next=9,n.startTimer();case 9:St.setState(n.isPaused());case 10:case"end":return t.stop()}},t,this)})),n.onNewSession=function(){var t=n.props,e=t.currentSessionValue,r=t.startOnChange;n.setTime(e,0),r&&n.startTimer()},n.timerFinished=function(){var t=n.props.onTimerDone;n.stopTimer(),z.getOvertime()||n.playSound(),t()},n.isPaused=function(){var t=n.state,e=t.time,r=t.timer,o=n.props.currentSessionValue;return!r&&e.min!==o&&0!==e.min&&0!==e.sec},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.setTime(this.props.currentSessionValue,0)}},{key:"componentDidUpdate",value:function(t,e){t.currentSessionValue!==this.props.currentSessionValue&&this.onNewSession()}},{key:"stopTimer",value:function(){var t=Object(u.a)(s.a.mark(function t(){var e,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.timer,n=this.props.onTimerStop,clearInterval(e),t.next=5,this.setState({timer:null,running:!1});case 5:n();case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"startTimer",value:function(){var t=Object(u.a)(s.a.mark(function t(){var e,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.state.running,n=this.props.onTimerStart,!e){t.next=5;break}return t.next=5,this.stopTimer();case 5:return t.next=7,this.setState({timer:setInterval(this.handleSecondPassed,1e3),running:!0});case 7:n();case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"playSound",value:function(){var t=this;this.setState({playSound:!0},function(){setTimeout(function(){return t.setState({playSound:!1})},5e3)})}},{key:"render",value:function(){var t=this,e=this.state,n=e.time,r=e.playSound,a=e.overtime,i=this.props.isPomodoro;return Object(O.b)(w.Consumer,null,function(e){var c=e.theme,s=(e.toggleTheme,Object(O.a)(Tt(),i?c.primary:c.secondary)),u=Object(O.a)(yt()),l=[t.isPaused()?u:null,s];return Object(O.b)(o.a.Fragment,null,Object(O.b)("h3",{id:"time",css:l,onClick:t.handleTimerToggle},a?"+".concat(n.toString()):n.toString()),Object(O.b)(jt,{play:r}))})}}]),e}(r.Component),Ct=(n(32),function(t){function e(t){var n;return Object(m.a)(this,e),(n=Object(b.a)(this,Object(h.a)(e).call(this,t))).handleSessionEnd=function(){n.state.currentSession===z.POMODORO?n.onPomodoroFinished():n.handleSetSession(z.POMODORO)},n.handleSetSession=function(t){return n.setState({currentSession:t},function(){return St.setSession(z.getTextFromTime(n.state.currentSession))})},n.handleTimerStart=function(){n.setState({isWorking:n.state.currentSession===z.POMODORO})},n.handleTimerStop=function(){return n.setState({isWorking:!1})},n.handleTaskCountChange=function(t,e){return n.setState({taskCount:t,pomodoroCount:e})},n.handlePomodoroAssigned=function(){n.state.pendingPomodoro&&n.setState({pendingPomodoro:!1})},n.handleInfoModalToggle=function(){return n.setState({infoModalOpen:!n.state.infoModalOpen})},n.handleSettingsModalToggle=function(){return n.setState({settingsModalOpen:!n.state.settingsModalOpen})},n.handleOvertime=function(t){var e=Object(l.a)({},n.state.overtime);n.state.currentSession===z.POMODORO?e.pomodori+=t:e.breaks+=t,n.setState({overtime:e})},n.mapOvertimeToString=function(t){var e=t.pomodori,n=t.breaks;return{pomodori:vt.secToMinSecString(e),breaks:vt.secToMinSecString(n)}},n.toggleTheme=function(){n.setState(function(t){return{theme:t.theme===M.dark?M.light:M.dark}})},n.state={currentSession:0,taskCount:0,pomodoroCount:0,pendingPomodoro:!1,isWorking:!1,infoModalOpen:!1,settingsModalOpen:!1,initCompleted:!1,overtime:{pomodori:0,breaks:0},theme:M.light,toggleTheme:n.toggleTheme},n.styles={width:"100%",height:"100%",minHeight:"100%",margin:0,position:"fixed",top:0,left:0,bottom:0,right:0,overflow:"auto"},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=Object(u.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.initSettings();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"initSettings",value:function(){var t=Object(u.a)(s.a.mark(function t(){var e=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.initTimers(),t.next=3,this.initOtherSettings();case 3:return this.initTitle(),t.next=6,this.setState({currentSession:z.POMODORO},function(){return e.setState({initCompleted:!0})});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"initTimers",value:function(){var t=H.getTimers();z.setTimers(t)}},{key:"initOtherSettings",value:function(){var t=Object(u.a)(s.a.mark(function t(){var e,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=H.getOvertime(),z.setOvertime(e),n=H.getDarkMode(),z.setDarkMode(n),t.next=6,this.setState({theme:n?M.dark:M.light});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"initTitle",value:function(){var t=this.state.currentSession;St.setSession(z.getTextFromTime(t))}},{key:"onPomodoroFinished",value:function(){var t=this.state.pomodoroCount+1;this.setState({pomodoroCount:t,pendingPomodoro:!0}),this.handleSetSession(z.getBreakduration(t))}},{key:"render",value:function(){return o.a.createElement(w.Provider,{value:this.state},this.renderContent())}},{key:"renderContent",value:function(){var t=this.state,e=t.pomodoroCount,n=t.currentSession,r=t.pendingPomodoro,a=t.isWorking,i=t.taskCount,c=t.infoModalOpen,s=t.settingsModalOpen,u=t.initCompleted,m=t.overtime,d=t.theme,b=n===z.POMODORO,h=Object(l.a)({},this.styles,{background:d.background,color:d.foreground});return o.a.createElement("div",{style:h},o.a.createElement(P,{title:"Pomodori Story",isBreakTime:!b,isWorking:a,onInfoClick:this.handleInfoModalToggle,onSettingsClick:this.handleSettingsModalToggle}),o.a.createElement(_,{isOpen:c,onToggle:this.handleInfoModalToggle}),u&&o.a.createElement(J,{isOpen:s,onToggle:this.handleSettingsModalToggle}),o.a.createElement(g.e,null,o.a.createElement(g.t,null,o.a.createElement(Y,null,o.a.createElement(kt,{pendingPomodoro:r,onTasksChanged:this.handleTaskCountChange,onPomodoroAssigned:this.handlePomodoroAssigned,DEBUG_se_hack:this.handleSessionEnd})),o.a.createElement($,null,o.a.createElement(et,{currentSession:n,onButtonClick:this.handleSetSession}),o.a.createElement(Et,{currentSessionValue:n,isPomodoro:b,startOnChange:u,onTimerStart:this.handleTimerStart,onTimerStop:this.handleTimerStop,onTimerDone:this.handleSessionEnd,onOvertimeDone:this.handleOvertime}),o.a.createElement(rt,{taskCount:i,pomodoroCount:e,overtime:this.mapOvertimeToString(m),showOvertime:z.OVERTIME})))))}}]),e}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(34),n(36);i.a.render(o.a.createElement(Ct,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.1bc5177d.chunk.js.map