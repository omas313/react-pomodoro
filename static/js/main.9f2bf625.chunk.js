(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(35)},29:function(e,t,n){},31:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(10),i=n.n(o),s=n(9),c=n.n(s),l=n(12),u=n(11),m=n(4),h=n(5),d=n(7),p=n(6),g=n(8),v=n(3),f=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},n.handleToggle=function(){n.setState({isOpen:!n.state.isOpen})},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.isOpen,t=this.props,n=t.title,a=t.isBreakTime,o=t.isWorking,i=t.onInfoClick,s=t.onSettingsClick,c="".concat(a?"break-vibe":""," ").concat(o?"animate":"");return r.a.createElement("div",null,r.a.createElement(v.q,{dark:!0,expand:"md",className:c},r.a.createElement(v.r,{href:"/"},n),r.a.createElement(v.s,{onClick:this.handleToggle}),r.a.createElement(v.d,{isOpen:e,navbar:!0},r.a.createElement(v.n,{className:"ml-auto",navbar:!0},r.a.createElement(v.o,null,r.a.createElement(v.p,{id:"info-nav-link",className:"clickable",onClick:i},"Info")),r.a.createElement(v.o,null,r.a.createElement(v.p,{id:"settings-nav-link",className:"clickable",onClick:s},"Settings"))))))}}]),t}(a.Component),k=function(e){var t=e.isOpen,n=e.onToggle;return r.a.createElement(v.k,{isOpen:t,toggle:n,className:"info-modal"},r.a.createElement(v.m,{toggle:n},"Info"),r.a.createElement(v.l,null,r.a.createElement("h5",null,"Pomodoro, pomodori?"),r.a.createElement("p",null,"It is the Italian word for tomato, and the plural is pomodori."),r.a.createElement("h5",null,"What is this website?"),r.a.createElement("p",null,"It is a timer web application I developed to implement the Pomodoro Technique."),r.a.createElement("h5",null,"The Pomodoro Technique"),r.a.createElement("p",null,"It is a time-management and productivity booster technique created by Francesco Cirillo.",r.a.createElement("br",null),"It can help size up tasks and maintain focus throughout your work by diving it into time chunks.",r.a.createElement("br",null),"You can read more about it"," ",r.a.createElement("a",{href:"https://francescocirillo.com/pages/pomodoro-technique",className:"link",target:"_blank",rel:"noopener noreferrer"},"here"),".")))},O=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},n.handleChange=function(e){var t=e.currentTarget,a=n.props,r=a.name,o=a.min,i=a.max,s=a.onChange;t.value<o||t.value>i||(s(r,Number(t.value)),n.setState({value:t.value}))},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.setState({value:this.props.default})}},{key:"render",value:function(){var e=this.state.value,t=this.props,n=t.name,a=t.label,o=t.min,i=t.max;return r.a.createElement(v.f,null,r.a.createElement(v.t,null,r.a.createElement(v.c,null,r.a.createElement(v.h,{for:n},a)),r.a.createElement(v.c,null,r.a.createElement(v.g,{type:"number",min:o,max:i,name:n,value:e,onChange:this.handleChange}))))}}]),t}(a.Component);O.defaultProps={name:"",value:0,onChange:function(){return null}};var b=O,E=function e(){Object(m.a)(this,e)};E.OVERTIME=!1,E.POMODORO=25,E.SHORT_BREAK=5,E.LONG_BREAK=10,E.TIMER_MIN=1,E.TIMER_MAX=120,E.getOvertime=function(){return E.OVERTIME},E.setOvertime=function(e){return E.OVERTIME=e},E.validTimers=function(e){return!Object.keys(e).some(function(t){return e[t]<E.TIMER_MIN||e[t]>E.TIMER_MAX})},E.setTimers=function(e){0!==e.pomodoro&&(E.POMODORO=e.pomodoro),0!==e.shortBreak&&(E.SHORT_BREAK=e.shortBreak),0!==e.longBreak&&(E.LONG_BREAK=e.longBreak)},E.getTimers=function(){return{pomodoro:E.POMODORO,shortBreak:E.SHORT_BREAK,longBreak:E.LONG_BREAK}},E.getBreakduration=function(e){return e>0&&e%4===0?E.LONG_BREAK:E.SHORT_BREAK},E.getTextFromTime=function(e){switch(e){case E.SHORT_BREAK:return"Break (S)";case E.LONG_BREAK:return"Break (L)";default:return"Pomodoro"}};var S={pomodoro:"pomodoro",shortBreak:"sb",longBreak:"lb"},T="overtime";var y={getTimers:function(){var e=Object.keys(S).map(function(e){return Number(localStorage.getItem(S[e]))});return{pomodoro:e[0],shortBreak:e[1],longBreak:e[2]}},saveTimers:function(e){localStorage.setItem(S.pomodoro,e.pomodoro),localStorage.setItem(S.shortBreak,e.shortBreak),localStorage.setItem(S.longBreak,e.longBreak)},getOvertime:function(){var e=localStorage.getItem(T);return null!==e&&"true"===e.toString()},setOvertime:function(e){null===e&&(e=!1),localStorage.setItem(T,"true"===e.toString())}},C=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={value:!1},n.handleChange=function(e){var t=e.currentTarget.checked;n.props.onChange(t),n.setState({value:t})},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.setState({value:this.props.default})}},{key:"render",value:function(){var e=this.state.value,t=this.props.label;return r.a.createElement(v.f,{check:!0},r.a.createElement(v.t,null,r.a.createElement(v.c,null,r.a.createElement(v.h,{check:!0},r.a.createElement(v.g,{type:"checkbox",checked:e,onChange:this.handleChange})," ",t))))}}]),t}(a.Component);C.defaultProps={default:!1,onChange:function(){return null}};var j=C,M=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={timers:{pomodoro:0,shortBreak:0,longBreak:0},overtime:!1},n.handleTimerChange=function(e,t){var a=Object(u.a)({},n.state.timers);a[e]=t,n.setState({timers:a})},n.handleOvertimeChange=function(e){n.setState({overtime:e})},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.setState({timers:E.getTimers(),overtime:E.getOvertime()})}},{key:"componentDidUpdate",value:function(e,t){e.isOpen&&!this.props.isOpen&&this.save()}},{key:"save",value:function(){var e=this.state,t=e.timers,n=e.overtime;E.validTimers(t)&&(E.setTimers(t),y.saveTimers(t),E.setOvertime(n),y.setOvertime(n))}},{key:"render",value:function(){var e=this.state,t=e.timers,n=e.overtime,a=this.props,o=a.isOpen,i=a.onToggle;return r.a.createElement(v.k,{isOpen:o,toggle:i,className:"settings-modal"},r.a.createElement(v.m,{toggle:i},"Settings"),r.a.createElement(v.l,null,r.a.createElement("div",{className:"mb-3"},r.a.createElement("strong",null,"Timer Durations")),r.a.createElement(b,{name:"pomodoro",label:"Pomodoro",min:E.TIMER_MIN,max:E.TIMER_MAX,default:t.pomodoro,onChange:this.handleTimerChange}),r.a.createElement(b,{name:"shortBreak",label:"Short Break",min:E.TIMER_MIN,max:E.TIMER_MAX,default:t.shortBreak,onChange:this.handleTimerChange}),r.a.createElement(b,{name:"longBreak",label:"Long Break",min:E.TIMER_MIN,max:E.TIMER_MAX,default:t.longBreak,onChange:this.handleTimerChange}),r.a.createElement(j,{label:"Overtime",default:n,onChange:this.handleOvertimeChange}),r.a.createElement("div",{className:"settings-submit-button-container"},r.a.createElement(v.b,{id:"settings-submit-button",className:"action-button",color:"danger",onClick:i},"Submit"))))}}]),t}(a.Component),w=function(e){var t=e.children;return r.a.createElement(v.c,{lg:{size:8,order:1},xs:{size:12,order:2},className:"left-to-bottom-column"},t)},B=function(e){var t=e.children;return r.a.createElement(v.c,{lg:{size:4,order:2},xs:{size:12,order:1}},t)},N=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).isActive=function(e){return n.props.currentSession===e},n.getButtonClasses=function(e){var t=e===E.POMODORO,a=t?"pomodoro-button":"break-button";return n.isActive(e)&&(a+=t?" working":" break"),a},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.onButtonClick;return r.a.createElement("div",{className:"session-buttons"},r.a.createElement(v.b,{id:"pomodoro-session-button",className:this.getButtonClasses(E.POMODORO),onClick:function(){return e(E.POMODORO)}},r.a.createElement("img",{src:"./img/pomodoro.png",alt:"pomodoro",className:"session-button-img"})),r.a.createElement(v.b,{id:"short-break-session-button",className:this.getButtonClasses(E.SHORT_BREAK),onClick:function(){return e(E.SHORT_BREAK)}},r.a.createElement("img",{src:"./img/time-5.png",alt:"Short break",className:"session-button-img"})),r.a.createElement(v.b,{id:"long-break-session-button",className:this.getButtonClasses(E.LONG_BREAK),onClick:function(){return e(E.LONG_BREAK)}},r.a.createElement("img",{src:"./img/time-10.png",alt:"Long break",className:"session-button-img"})))}}]),t}(a.Component),R=function(e){var t=e.taskCount,n=e.pomodoroCount,a=e.overtime,o=e.showOvertime;return r.a.createElement(v.t,{className:"summary"},r.a.createElement(v.c,{className:"text-center"},r.a.createElement("p",{className:"text-bold"},"Tasks"),r.a.createElement("p",{id:"summary-task-count"},t)),r.a.createElement(v.c,{className:"text-center"},r.a.createElement("p",{className:"text-bold"},"Pomodori"),r.a.createElement("p",{id:"summary-pomodoro-count"},n)),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.c,{className:"text-center"},r.a.createElement("p",{className:"text-bold"},"Overtime (P)"),r.a.createElement("p",{id:"summary-overtime-pomodoro"},a.pomodori)),r.a.createElement(v.c,{className:"text-center"},r.a.createElement("p",{className:"text-bold"},"Overtime (B)"),r.a.createElement("p",{id:"summary-overtime-breaks"},a.breaks))))},P=n(13),x=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},n.handleChange=function(e){var t=e.currentTarget;n.props.onChange(t.value),n.setState({text:t.value})},n.handleKeyDown=function(e){var t=e.key,a=n.state.text;"Enter"===t&&n.handleSubmit(a)},n.handleSubmit=function(e){e.trim()&&((0,n.props.onSubmit)(e),n.setState({text:""}))},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.setState({text:this.props.text})}},{key:"render",value:function(){var e=this,t=this.state.text,n=this.props.placeholder;return r.a.createElement(v.f,null,r.a.createElement(v.g,{name:"task-input",placeholder:n,value:t,onChange:this.handleChange,onKeyDown:this.handleKeyDown,onBlur:function(){return e.handleSubmit(t)},autoFocus:!0}))}}]),t}(a.Component);x.defaultProps={text:"",placeholder:"",onChange:function(){return null}};var A=x,D=n(0),I=(Object(D.shape)({_id:D.string.isRequired,name:D.string.isRequired,pomodori:D.number.isRequired}),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"renderActionButtons",value:function(){var e=this.props,t=e.task,n=e.onDelete,a=e.onEditClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.b,{id:"task-edit-button",className:"action-button",size:"sm",color:"primary",outline:!0,onClick:a},r.a.createElement("img",{src:"./img/edit.svg",alt:"Edit"})),r.a.createElement(v.b,{id:"task-delete-button",className:"action-button",size:"sm",color:"primary",outline:!0,onClick:function(){return n(t)}},r.a.createElement("img",{src:"./img/delete.svg",alt:"Delete"})))}},{key:"renderSubmitEditButton",value:function(){var e=this.props,t=e.newName,n=e.onSubmit;return r.a.createElement(v.b,{id:"task-submit-edit-button",className:"action-button",size:"sm",color:"primary",outline:!0,onClick:function(){return n(t)}},r.a.createElement("img",{src:"./img/check-mark.svg",alt:"Edit"}))}},{key:"render",value:function(){return this.props.isEditing?this.renderSubmitEditButton():this.renderActionButtons()}}]),t}(a.Component)),_=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isEditing:!1,newName:""},n.handleEditClick=function(){var e=n.state.isEditing;n.setState({isEditing:!e})},n.handleEditSubmit=function(e){var t=n.props,a=t.task;(0,t.onEdit)(a._id,e),n.setState({isEditing:!1})},n.handleChange=function(e){n.setState({newName:e})},n.getBadgeColor=function(){return 0===n.props.task.pomodori?"secondary":"primary"},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isEditing,n=e.newName,a=this.props,o=a.task,i=a.isActive,s=a.onSetActive,c=a.onDelete,l="task"+(i?" active":"");return r.a.createElement(v.j,{className:l},r.a.createElement(v.t,null,r.a.createElement(v.c,{className:"w-100 clickable task-name",onClick:function(){return s(o)}},t?r.a.createElement(A,{text:o.name,onChange:this.handleChange,onSubmit:this.handleEditSubmit}):o.name),r.a.createElement(v.c,{md:"2",xs:"1"},r.a.createElement(v.a,{color:this.getBadgeColor(),pill:!0},o.pomodori)),r.a.createElement(v.c,{md:"3",xs:"3",className:"text-right action-buttons"},r.a.createElement(I,{task:o,newName:n,isEditing:t,onSubmit:this.handleEditSubmit,onEditClick:this.handleEditClick,onDelete:c}))))}}]),t}(a.Component),K=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"isActive",value:function(e){var t=this.props.currentTask;return t&&t._id===e}},{key:"render",value:function(){var e=this,t=this.props,n=t.tasks,a=t.onSetActiveTask,o=t.onDelete,i=t.onEdit;return r.a.createElement(v.i,{flush:!0},0===n.length&&r.a.createElement("p",null,"Add a task and start working!"),n&&n.map(function(t){return r.a.createElement(_,{key:t._id,task:t,isActive:e.isActive(t._id),onSetActive:a,onDelete:o,onEdit:i})}))}}]),t}(a.Component),F="tasks";var L={getAll:function(){return JSON.parse(localStorage.getItem(F))},save:function(e){return localStorage.setItem(F,JSON.stringify(e))}},V=function e(t,n,a){var r=this;Object(m.a)(this,e),this.addPomodoro=function(){return r.pomodori++},this._id=t,this.name=n,this.pomodori=a};V.getDefaultTask=function(){return new V("1","Untitled task",0)};var G=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={tasks:[],currentTask:null},n.handleSetActiveTask=function(e){n.setState({currentTask:e})},n.handleNewTask=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(">>es"===e)return n.props.DEBUG_se_hack();var a=Object(P.a)(n.state.tasks),r=new V("".concat(e.length).concat(1e6*Math.random()),e.trim(),t);a.push(r),n.setState({tasks:a})},n.handleDeleteTask=function(e){var t=n.state,a=t.tasks,r=t.currentTask;if(a.length<=1){var o=V.getDefaultTask();return n.setState({tasks:[o],currentTask:o})}var i=Object(P.a)(a),s={};i.splice(i.indexOf(e),1),s.tasks=i,r&&e._id!==r._id&&1!==i.length||(s.currentTask=i[0]),n.setState(s)},n.handleEditTask=function(e,t){var a=n.state,r=a.tasks,o=a.currentTask,i=Object(P.a)(r),s=i.findIndex(function(t){return t._id===e}),c=new V(i[s]._id,t.trim(),i[s].pomodori);i[s]=c;var l={tasks:i};c._id===o._id&&(l.currentTask=c),n.setState(l)},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.initTasks()}},{key:"componentDidUpdate",value:function(e,t){t.tasks!==this.state.tasks&&this.onTasksChanged(),!e.pendingPomodoro&&this.props.pendingPomodoro&&this.addPomodoroToCurrentTask()}},{key:"initTasks",value:function(){var e=L.getAll();e&&0!==e.length||(e=[V.getDefaultTask()]),this.setState({tasks:e,currentTask:e[0]})}},{key:"getTotalPomodori",value:function(){var e=this.state.tasks;return 0===e.length?0:e.reduce(function(e,t){return e+t.pomodori},0)}},{key:"onTasksChanged",value:function(){var e=this.state.tasks,t=this.props.onTasksChanged;t(e.length,this.getTotalPomodori()),L.save(e)}},{key:"addPomodoroToCurrentTask",value:function(){var e=this.state,t=e.tasks,n=e.currentTask,a=this.props.onPomodoroAssigned,r=Object(P.a)(t),o=r.indexOf(n),i=new V(r[o]._id,r[o].name,r[o].pomodori+1);r[o]=i,this.setState({tasks:r,currentTask:i}),a()}},{key:"render",value:function(){var e=this.state,t=e.tasks,n=e.currentTask;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{placeholder:"Enter task here...",onSubmit:this.handleNewTask}),r.a.createElement(K,{tasks:t,currentTask:n,onSetActiveTask:this.handleSetActiveTask,onEdit:this.handleEditTask,onDelete:this.handleDeleteTask}))}}]),t}(a.Component),W=function(){function e(t,n){Object(m.a)(this,e),this.min=t,this.sec=n}return Object(h.a)(e,[{key:"incSeconds",value:function(e){this.sec+=e,this.sec>=60&&(this.min+=Math.floor(this.sec/60),this.sec=this.sec%60)}},{key:"toString",value:function(){var e=this.min<10?"0".concat(this.min):this.min,t=this.sec<10?"0".concat(this.sec):this.sec;return"".concat(e," : ").concat(t)}},{key:"totalSeconds",get:function(){return 60*this.min+this.sec}}],[{key:"secToMinSecString",value:function(e){var t=Math.floor(e/60),n=e%60,a=t<10?"0".concat(t):t,r=n<10?"0".concat(n):n;return"".concat(a,":").concat(r)}}]),e}(),q=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).audioRef=r.a.createRef(),n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.audioRef.current.volume=.2}},{key:"componentDidUpdate",value:function(e){!e.play&&this.props.play&&this.audioRef.current.play()}},{key:"render",value:function(){return r.a.createElement("audio",{src:"./sound/alert.mp3",ref:this.audioRef},"It looks like your browser doesn't support audio playback through html...")}}]),t}(a.Component),z=function e(){Object(m.a)(this,e)};z.value="",z.session="",z.time="",z.isPaused=!1,z.update=function(){return document.title="".concat(z.session," - ").concat(z.time)+(z.isPaused?" - PAUSED":"")},z.setSession=function(e){z.session=e,z.update()},z.setTime=function(e){z.time=e,z.update()},z.setState=function(e){z.isPaused=e,z.update()};var U=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={running:!1,time:new W(0,0),timer:null,playSound:!1,overtime:!1},n.setTime=function(e,t){return n.setState({time:new W(e,t)},function(){return z.setTime(n.state.time.toString())})},n.handleSecondPassed=function(){var e=n.state,t=e.time;if(e.overtime)return n.onOvertime();var a=Object(u.a)({},t);if(0===t.sec&&0===t.min)return E.getOvertime()?n.setState({overtime:!0},function(){return n.playSound()}):n.timerFinished();0===t.sec?(a.min=t.min-1,a.sec=59):a.sec=t.sec-1,n.setTime(a.min,a.sec)},n.onOvertime=function(){var e=n.state.time,t=Object(u.a)({},e);59===e.sec?(t.min=e.min+1,t.sec=0):t.sec=e.sec+1,n.setTime(t.min,t.sec)},n.handleTimerToggle=Object(l.a)(c.a.mark(function e(){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.state,a=t.running,t.overtime&&n.setState({overtime:!1},function(){n.props.onOvertimeDone(n.state.time.totalSeconds),n.timerFinished()}),!a){e.next=7;break}return e.next=5,n.stopTimer();case 5:e.next=9;break;case 7:return e.next=9,n.startTimer();case 9:z.setState(n.isPaused());case 10:case"end":return e.stop()}},e,this)})),n.onNewSession=function(){var e=n.props,t=e.currentSessionValue,a=e.startOnChange;n.setTime(t,0),a&&n.startTimer()},n.timerFinished=function(){var e=n.props.onTimerDone;n.stopTimer(),E.getOvertime()||n.playSound(),e()},n.isPaused=function(){var e=n.state,t=e.time,a=e.timer,r=n.props.currentSessionValue;return!a&&t.min!==r&&0!==t.min&&0!==t.sec},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.setTime(this.props.currentSessionValue,0)}},{key:"componentDidUpdate",value:function(e,t){e.currentSessionValue!==this.props.currentSessionValue&&this.onNewSession()}},{key:"stopTimer",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.timer,n=this.props.onTimerStop,clearInterval(t),e.next=5,this.setState({timer:null,running:!1});case 5:n();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"startTimer",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.running,n=this.props.onTimerStart,!t){e.next=5;break}return e.next=5,this.stopTimer();case 5:return e.next=7,this.setState({timer:setInterval(this.handleSecondPassed,1e3),running:!0});case 7:n();case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"playSound",value:function(){var e=this;this.setState({playSound:!0},function(){setTimeout(function(){return e.setState({playSound:!1})},5e3)})}},{key:"render",value:function(){var e=this.state,t=e.time,n=e.playSound,a=e.overtime,o=this.props.isPomodoro,i="time clickable";return i+=(this.isPaused()?" blink":"")+(o?" working":" break"),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{id:"time",className:i,onClick:this.handleTimerToggle},a?"+".concat(t.toString()):t.toString()),r.a.createElement(q,{play:n}))}}]),t}(a.Component),H=(n(29),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={currentSession:0,taskCount:0,pomodoroCount:0,pendingPomodoro:!1,isWorking:!1,infoModalOpen:!1,settingsModalOpen:!1,initCompleted:!1,overtime:{pomodori:0,breaks:0}},n.handleSessionEnd=function(){n.state.currentSession===E.POMODORO?n.onPomodoroFinished():n.handleSetSession(E.POMODORO)},n.handleSetSession=function(e){return n.setState({currentSession:e},function(){return z.setSession(E.getTextFromTime(n.state.currentSession))})},n.handleTimerStart=function(){n.setState({isWorking:n.state.currentSession===E.POMODORO})},n.handleTimerStop=function(){return n.setState({isWorking:!1})},n.handleTaskCountChange=function(e,t){return n.setState({taskCount:e,pomodoroCount:t})},n.handlePomodoroAssigned=function(){n.state.pendingPomodoro&&n.setState({pendingPomodoro:!1})},n.handleInfoModalToggle=function(){return n.setState({infoModalOpen:!n.state.infoModalOpen})},n.handleSettingsModalToggle=function(){return n.setState({settingsModalOpen:!n.state.settingsModalOpen})},n.handleOvertime=function(e){var t=Object(u.a)({},n.state.overtime);n.state.currentSession===E.POMODORO?t.pomodori+=e:t.breaks+=e,n.setState({overtime:t})},n.mapOvertimeToString=function(e){var t=e.pomodori,n=e.breaks;return{pomodori:W.secToMinSecString(t),breaks:W.secToMinSecString(n)}},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initSettings();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"initSettings",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.initTimers(),this.initOtherSettings(),this.initTitle(),e.next=5,this.setState({currentSession:E.POMODORO},function(){return t.setState({initCompleted:!0})});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"initTimers",value:function(){var e=y.getTimers();E.setTimers(e)}},{key:"initOtherSettings",value:function(){var e=y.getOvertime();E.setOvertime(e)}},{key:"initTitle",value:function(){var e=this.state.currentSession;z.setSession(E.getTextFromTime(e))}},{key:"onPomodoroFinished",value:function(){var e=this.state.pomodoroCount+1;this.setState({pomodoroCount:e,pendingPomodoro:!0}),this.handleSetSession(E.getBreakduration(e))}},{key:"render",value:function(){var e=this.state,t=e.pomodoroCount,n=e.currentSession,a=e.pendingPomodoro,o=e.isWorking,i=e.taskCount,s=e.infoModalOpen,c=e.settingsModalOpen,l=e.initCompleted,u=e.overtime,m=n===E.POMODORO;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{title:"Pomodori Story",isBreakTime:!m,isWorking:o,onInfoClick:this.handleInfoModalToggle,onSettingsClick:this.handleSettingsModalToggle}),r.a.createElement(k,{isOpen:s,onToggle:this.handleInfoModalToggle}),l&&r.a.createElement(M,{isOpen:c,onToggle:this.handleSettingsModalToggle}),r.a.createElement(v.e,null,r.a.createElement(v.t,null,r.a.createElement(w,null,r.a.createElement(G,{pendingPomodoro:a,onTasksChanged:this.handleTaskCountChange,onPomodoroAssigned:this.handlePomodoroAssigned,DEBUG_se_hack:this.handleSessionEnd})),r.a.createElement(B,null,r.a.createElement(N,{currentSession:n,onButtonClick:this.handleSetSession}),r.a.createElement(U,{currentSessionValue:n,isPomodoro:m,startOnChange:l,onTimerStart:this.handleTimerStart,onTimerStop:this.handleTimerStop,onTimerDone:this.handleSessionEnd,onOvertimeDone:this.handleOvertime}),r.a.createElement(R,{taskCount:i,pomodoroCount:t,overtime:this.mapOvertimeToString(u),showOvertime:E.OVERTIME})))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(31),n(33);i.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.9f2bf625.chunk.js.map