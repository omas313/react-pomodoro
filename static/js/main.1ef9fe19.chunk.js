(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},25:function(e,t,n){},27:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(9),i=n.n(r),s=n(4),l=n(5),c=n(7),u=n(6),m=n(8),d=n(3),h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isOpen:!1},n.handleToggle=function(){n.setState({isOpen:!n.state.isOpen})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.isOpen,t=this.props,n=t.title,a=t.isBreakTime,r=t.isWorking,i=t.onInfoClick,s=t.onSettingsClick,l="".concat(a?"break-vibe":""," ").concat(r?"animate":"");return o.a.createElement("div",null,o.a.createElement(d.q,{dark:!0,expand:"md",className:l},o.a.createElement(d.r,{href:"/"},n),o.a.createElement(d.s,{onClick:this.handleToggle}),o.a.createElement(d.d,{isOpen:e,navbar:!0},o.a.createElement(d.n,{className:"ml-auto",navbar:!0},o.a.createElement(d.o,null,o.a.createElement(d.p,{id:"info-nav-link",className:"clickable",onClick:i},"Info")),o.a.createElement(d.o,null,o.a.createElement(d.p,{id:"settings-nav-link",className:"clickable",onClick:s},"Settings"))))))}}]),t}(a.Component),p=function(e){var t=e.isOpen,n=e.onToggle;return o.a.createElement(d.k,{isOpen:t,toggle:n,className:"info-modal"},o.a.createElement(d.m,{toggle:n},"Info"),o.a.createElement(d.l,null,o.a.createElement("h5",null,"Pomodoro, pomodori?"),o.a.createElement("p",null,"It is the Italian word for tomato, and the plural is pomodori."),o.a.createElement("h5",null,"What is this website?"),o.a.createElement("p",null,"It is a timer web application I developed to implement the Pomodoro Technique."),o.a.createElement("h5",null,"The Pomodoro Technique"),o.a.createElement("p",null,"It is a time-management and productivity booster technique created by Francesco Cirillo.",o.a.createElement("br",null),"It can help size up tasks and maintain focus throughout your work by diving it into time chunks.",o.a.createElement("br",null),"You can read more about it"," ",o.a.createElement("a",{href:"https://francescocirillo.com/pages/pomodoro-technique",className:"link",target:"_blank",rel:"noopener noreferrer"},"here"),".")))},g=n(11),k=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={value:0},n.handleChange=function(e){var t=e.currentTarget,a=n.props,o=a.name,r=a.min,i=a.max,s=a.onChange;t.value<r||t.value>i||(s(o,Number(t.value)),n.setState({value:t.value}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({value:this.props.default})}},{key:"render",value:function(){var e=this.state.value,t=this.props,n=t.name,a=t.label,r=t.min,i=t.max;return o.a.createElement(d.f,null,o.a.createElement(d.t,null,o.a.createElement(d.c,null,o.a.createElement(d.h,{for:n},a)),o.a.createElement(d.c,null,o.a.createElement(d.g,{type:"number",min:r,max:i,name:n,value:e,onChange:this.handleChange}))))}}]),t}(a.Component);k.defaultProps={name:"",value:0,onChange:function(){return null}};var f=k,v=function e(){Object(s.a)(this,e)};v.POMODORO=25,v.SHORT_BREAK=5,v.LONG_BREAK=10,v.TIMER_MIN=1,v.TIMER_MAX=120,v.validTimers=function(e){return!Object.keys(e).some(function(t){return e[t]<v.TIMER_MIN||e[t]>v.TIMER_MAX})},v.setTimers=function(e){0!==e.pomodoro&&(v.POMODORO=e.pomodoro),0!==e.shortBreak&&(v.SHORT_BREAK=e.shortBreak),0!==e.longBreak&&(v.LONG_BREAK=e.longBreak)},v.getTimers=function(){return{pomodoro:v.POMODORO,shortBreak:v.SHORT_BREAK,longBreak:v.LONG_BREAK}},v.getBreakduration=function(e){return e>0&&e%4===0?v.LONG_BREAK:v.SHORT_BREAK};var b={pomodoro:"pomodoro",shortBreak:"sb",longBreak:"lb"};var O={getTimers:function(){var e=Object.keys(b).map(function(e){return Number(localStorage.getItem(b[e]))});return{pomodoro:e[0],shortBreak:e[1],longBreak:e[2]}},saveTimers:function(e){localStorage.setItem(b.pomodoro,e.pomodoro),localStorage.setItem(b.shortBreak,e.shortBreak),localStorage.setItem(b.longBreak,e.longBreak)}},E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={timers:{pomodoro:0,shortBreak:0,longBreak:0}},n.handleTimerChange=function(e,t){var a=Object(g.a)({},n.state.timers);a[e]=t,n.setState({timers:a})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({timers:v.getTimers()})}},{key:"componentDidUpdate",value:function(e,t){e.isOpen&&!this.props.isOpen&&this.save()}},{key:"save",value:function(){var e=this.state.timers;v.validTimers(e)&&(v.setTimers(e),O.saveTimers(e))}},{key:"render",value:function(){var e=this.state.timers,t=this.props,n=t.isOpen,a=t.onToggle;return o.a.createElement(d.k,{isOpen:n,toggle:a,className:"settings-modal"},o.a.createElement(d.m,{toggle:a},"Settings"),o.a.createElement(d.l,null,o.a.createElement("div",{className:"mb-3"},o.a.createElement("strong",null,"Timer Durations")),o.a.createElement(f,{name:"pomodoro",label:"Pomodoro",min:v.TIMER_MIN,max:v.TIMER_MAX,default:e.pomodoro,onChange:this.handleTimerChange}),o.a.createElement(f,{name:"shortBreak",label:"Short Break",min:v.TIMER_MIN,max:v.TIMER_MAX,default:e.shortBreak,onChange:this.handleTimerChange}),o.a.createElement(f,{name:"longBreak",label:"Long Break",min:v.TIMER_MIN,max:v.TIMER_MAX,default:e.longBreak,onChange:this.handleTimerChange}),o.a.createElement("div",{className:"settings-submit-button-container"},o.a.createElement(d.b,{id:"settings-submit-button",className:"action-button",color:"danger",onClick:a},"Submit"))))}}]),t}(a.Component),S=function(e){var t=e.children;return o.a.createElement(d.c,{lg:{size:8,order:1},xs:{size:12,order:2},className:"left-to-bottom-column"},t)},T=function(e){var t=e.children;return o.a.createElement(d.c,{lg:{size:4,order:2},xs:{size:12,order:1}},t)},y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).isActive=function(e){return n.props.currentSession===e},n.getButtonClasses=function(e){var t=e===v.POMODORO,a=t?"pomodoro-button":"break-button";return n.isActive(e)&&(a+=t?" working":" break"),a},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.onButtonClick;return o.a.createElement("div",{className:"session-buttons"},o.a.createElement(d.b,{id:"pomodoro-session-button",className:this.getButtonClasses(v.POMODORO),onClick:function(){return e(v.POMODORO)}},o.a.createElement("img",{src:"./img/pomodoro.png",alt:"pomodoro",className:"session-button-img"})),o.a.createElement(d.b,{id:"short-break-session-button",className:this.getButtonClasses(v.SHORT_BREAK),onClick:function(){return e(v.SHORT_BREAK)}},o.a.createElement("img",{src:"./img/time-5.png",alt:"Short break",className:"session-button-img"})),o.a.createElement(d.b,{id:"long-break-session-button",className:this.getButtonClasses(v.LONG_BREAK),onClick:function(){return e(v.LONG_BREAK)}},o.a.createElement("img",{src:"./img/time-10.png",alt:"Long break",className:"session-button-img"})))}}]),t}(a.Component),C=function(e){var t=e.taskCount,n=e.pomodoroCount;return o.a.createElement(d.t,{className:"summary"},o.a.createElement(d.c,{className:"text-center"},o.a.createElement("p",{className:"text-bold"},"Tasks"),o.a.createElement("p",{id:"summary-task-count"},t)),o.a.createElement(d.c,{className:"text-center"},o.a.createElement("p",{className:"text-bold"},"Pomodori"),o.a.createElement("p",{id:"summary-pomodoro-count"},n)))},j=n(10),B=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={text:""},n.handleChange=function(e){var t=e.currentTarget;n.props.onChange(t.value),n.setState({text:t.value})},n.handleKeyDown=function(e){var t=e.key,a=n.state.text;"Enter"===t&&n.handleSubmit(a)},n.handleSubmit=function(e){e.trim()&&((0,n.props.onSubmit)(e),n.setState({text:""}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({text:this.props.text})}},{key:"render",value:function(){var e=this,t=this.state.text,n=this.props.placeholder;return o.a.createElement(d.f,null,o.a.createElement(d.g,{name:"task-input",placeholder:n,value:t,onChange:this.handleChange,onKeyDown:this.handleKeyDown,onBlur:function(){return e.handleSubmit(t)},autoFocus:!0}))}}]),t}(a.Component);B.defaultProps={text:"",placeholder:"",onChange:function(){return null}};var N=B,M=n(0),w=n.n(M),R=(Object(M.shape)({_id:M.string.isRequired,name:M.string.isRequired,pomodori:M.number.isRequired}),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderActionButtons",value:function(){var e=this.props,t=e.task,n=e.onDelete,a=e.onEditClick;return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.b,{id:"task-edit-button",className:"action-button",size:"sm",color:"primary",outline:!0,onClick:a},o.a.createElement("img",{src:"./img/edit.svg",alt:"Edit"})),o.a.createElement(d.b,{id:"task-delete-button",className:"action-button",size:"sm",color:"primary",outline:!0,onClick:function(){return n(t)}},o.a.createElement("img",{src:"./img/delete.svg",alt:"Delete"})))}},{key:"renderSubmitEditButton",value:function(){var e=this.props,t=e.newName,n=e.onSubmit;return o.a.createElement(d.b,{id:"task-submit-edit-button",className:"action-button",size:"sm",color:"primary",outline:!0,onClick:function(){return n(t)}},o.a.createElement("img",{src:"./img/check-mark.svg",alt:"Edit"}))}},{key:"render",value:function(){return this.props.isEditing?this.renderSubmitEditButton():this.renderActionButtons()}}]),t}(a.Component)),A=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isEditing:!1,newName:""},n.handleEditClick=function(){var e=n.state.isEditing;n.setState({isEditing:!e})},n.handleEditSubmit=function(e){var t=n.props,a=t.task;(0,t.onEdit)(a._id,e),n.setState({isEditing:!1})},n.handleChange=function(e){n.setState({newName:e})},n.getBadgeColor=function(){return 0===n.props.task.pomodori?"secondary":"primary"},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isEditing,n=e.newName,a=this.props,r=a.task,i=a.isActive,s=a.onSetActive,l=a.onDelete,c="task"+(i?" active":"");return o.a.createElement(d.j,{className:c},o.a.createElement(d.t,null,o.a.createElement(d.c,{className:"w-100 clickable task-name",onClick:function(){return s(r)}},t?o.a.createElement(N,{text:r.name,onChange:this.handleChange,onSubmit:this.handleEditSubmit}):r.name),o.a.createElement(d.c,{md:"2",xs:"1"},o.a.createElement(d.a,{color:this.getBadgeColor(),pill:!0},r.pomodori)),o.a.createElement(d.c,{md:"3",xs:"3",className:"text-right action-buttons"},o.a.createElement(R,{task:r,newName:n,isEditing:t,onSubmit:this.handleEditSubmit,onEditClick:this.handleEditClick,onDelete:l}))))}}]),t}(a.Component),P=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"isActive",value:function(e){var t=this.props.currentTask;return t&&t._id===e}},{key:"render",value:function(){var e=this,t=this.props,n=t.tasks,a=t.onSetActiveTask,r=t.onDelete,i=t.onEdit;return o.a.createElement(d.i,{flush:!0},0===n.length&&o.a.createElement("p",null,"Add a task and start working!"),n&&n.map(function(t){return o.a.createElement(A,{key:t._id,task:t,isActive:e.isActive(t._id),onSetActive:a,onDelete:r,onEdit:i})}))}}]),t}(a.Component),I="tasks";var D={getAll:function(){return JSON.parse(localStorage.getItem(I))},save:function(e){return localStorage.setItem(I,JSON.stringify(e))}},_=function e(t,n,a){var o=this;Object(s.a)(this,e),this.addPomodoro=function(){return o.pomodori++},this._id=t,this.name=n,this.pomodori=a};_.getDefaultTask=function(){return new _("1","Untitled task",0)};var x=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={tasks:[],currentTask:null},n.handleSetActiveTask=function(e){n.setState({currentTask:e})},n.handleNewTask=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(">>es"===e)return n.props.DEBUG_se_hack();var a=Object(j.a)(n.state.tasks),o=new _("".concat(e.length).concat(1e6*Math.random()),e.trim(),t);a.push(o),n.setState({tasks:a})},n.handleDeleteTask=function(e){var t=n.state,a=t.tasks,o=t.currentTask;if(a.length<=1){var r=_.getDefaultTask();return n.setState({tasks:[r],currentTask:r})}var i=Object(j.a)(a),s={};i.splice(i.indexOf(e),1),s.tasks=i,o&&e._id!==o._id&&1!==i.length||(s.currentTask=i[0]),n.setState(s)},n.handleEditTask=function(e,t){var a=n.state,o=a.tasks,r=a.currentTask,i=Object(j.a)(o),s=i.findIndex(function(t){return t._id===e}),l=new _(i[s]._id,t.trim(),i[s].pomodori);i[s]=l;var c={tasks:i};l._id===r._id&&(c.currentTask=l),n.setState(c)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.initTasks()}},{key:"componentDidUpdate",value:function(e,t){t.tasks!==this.state.tasks&&this.onTasksChanged(),!e.pendingPomodoro&&this.props.pendingPomodoro&&this.addPomodoroToCurrentTask()}},{key:"initTasks",value:function(){var e=D.getAll();e&&0!==e.length||(e=[_.getDefaultTask()]),this.setState({tasks:e,currentTask:e[0]})}},{key:"getTotalPomodori",value:function(){var e=this.state.tasks;return 0===e.length?0:e.reduce(function(e,t){return e+t.pomodori},0)}},{key:"onTasksChanged",value:function(){var e=this.state.tasks,t=this.props.onTasksChanged;t(e.length,this.getTotalPomodori()),D.save(e)}},{key:"addPomodoroToCurrentTask",value:function(){var e=this.state,t=e.tasks,n=e.currentTask,a=this.props.onPomodoroAssigned,o=Object(j.a)(t),r=o.indexOf(n),i=new _(o[r]._id,o[r].name,o[r].pomodori+1);o[r]=i,this.setState({tasks:o,currentTask:i}),a()}},{key:"render",value:function(){var e=this.state,t=e.tasks,n=e.currentTask;return o.a.createElement(o.a.Fragment,null,o.a.createElement(N,{placeholder:"Enter task here...",onSubmit:this.handleNewTask}),o.a.createElement(P,{tasks:t,currentTask:n,onSetActiveTask:this.handleSetActiveTask,onEdit:this.handleEditTask,onDelete:this.handleDeleteTask}))}}]),t}(a.Component),K=function(){function e(t,n){Object(s.a)(this,e),this.min=t,this.sec=n}return Object(l.a)(e,[{key:"toString",value:function(){var e=this.min<10?"0".concat(this.min):this.min,t=this.sec<10?"0".concat(this.sec):this.sec;return"".concat(e," : ").concat(t)}}]),e}(),q=function(){return o.a.createElement("audio",{volume:"0.5",src:"./sound/alert.mp3",autoPlay:!0},"It looks like your browser doesn't support audio playback through html...")},z=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={running:!1,time:new K(0,0),timer:null},n.setTime=function(e,t){return n.setState({time:new K(e,t)})},n.handleSecondPassed=function(){var e=n.state.time,t=Object(g.a)({},e);if(0===e.sec&&0===e.min)return n.timerFinished();0===e.sec?(t.min=e.min-1,t.sec=59):t.sec=e.sec-1,n.setTime(t.min,t.sec)},n.handleTimerToggle=function(){n.state.running?n.stopTimer():n.startTimer()},n.onNewSession=function(){var e=n.props,t=e.currentSessionValue,a=e.startOnChange;n.setTime(t,0),a&&n.startTimer()},n.timerFinished=function(){var e=n.props.onTimerDone;n.stopTimer(),n.playSound(),e()},n.isPaused=function(){var e=n.state,t=e.time,a=e.timer,o=n.props.currentSessionValue;return!a&&t.min!==o&&0!==t.min&&0!==t.sec},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setTime(this.props.currentSessionValue,0)}},{key:"componentDidUpdate",value:function(e,t){e.currentSessionValue!==this.props.currentSessionValue&&this.onNewSession()}},{key:"stopTimer",value:function(){var e=this.state.timer,t=this.props.onTimerStop;clearInterval(e),this.setState({timer:null,running:!1}),t()}},{key:"startTimer",value:function(){var e=this.state.running,t=this.props.onTimerStart;e&&this.stopTimer(),this.setState({timer:setInterval(this.handleSecondPassed,1e3),running:!0}),t()}},{key:"playSound",value:function(){var e=this;this.setState({playSound:!0},function(){setTimeout(function(){return e.setState({playSound:!1})},5e3)})}},{key:"render",value:function(){var e=this.state,t=e.time,n=e.playSound,a=this.props.isPomodoro,r="time clickable";return r+=(this.isPaused()?" blink":"")+(a?" working":" break"),o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",{id:"time",className:r,onClick:this.handleTimerToggle},t.toString()),n&&o.a.createElement(q,null))}}]),t}(a.Component);K.propTypes={currentSessionValue:w.a.number.isRequired,isPomodoro:w.a.bool.isRequired,startOnChange:w.a.bool.isRequired,onTimerStart:w.a.func.isRequired,onTimerStop:w.a.func.isRequired,onTimerDone:w.a.func.isRequired};var F=z,W=(n(25),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={currentSession:0,taskCount:0,pomodoroCount:0,pendingPomodoro:!1,isWorking:!1,infoModalOpen:!1,settingsModalOpen:!1,timersInitialized:!1},n.handleSessionEnd=function(){n.state.currentSession===v.POMODORO?n.onPomodoroFinished():n.handleSetSession(v.POMODORO)},n.handleSetSession=function(e){return n.setState({currentSession:e})},n.handleTimerStart=function(){n.setState({isWorking:n.state.currentSession===v.POMODORO})},n.handleTimerStop=function(){return n.setState({isWorking:!1})},n.handleTaskCountChange=function(e,t){return n.setState({taskCount:e,pomodoroCount:t})},n.handlePomodoroAssigned=function(){n.state.pendingPomodoro&&n.setState({pendingPomodoro:!1})},n.handleInfoModalToggle=function(){return n.setState({infoModalOpen:!n.state.infoModalOpen})},n.handleSettingsModalToggle=function(){return n.setState({settingsModalOpen:!n.state.settingsModalOpen})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.initTimers()}},{key:"initTimers",value:function(){var e=this,t=O.getTimers();v.setTimers(t),this.setState({currentSession:v.POMODORO},function(){return e.setState({timersInitialized:!0})})}},{key:"onPomodoroFinished",value:function(){var e=this.state.pomodoroCount+1;this.setState({pomodoroCount:e,pendingPomodoro:!0}),this.handleSetSession(v.getBreakduration(e))}},{key:"render",value:function(){var e=this.state,t=e.pomodoroCount,n=e.currentSession,a=e.pendingPomodoro,r=e.isWorking,i=e.taskCount,s=e.infoModalOpen,l=e.settingsModalOpen,c=e.timersInitialized,u=n===v.POMODORO;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{title:"Pomodori Story",isBreakTime:!u,isWorking:r,onInfoClick:this.handleInfoModalToggle,onSettingsClick:this.handleSettingsModalToggle}),o.a.createElement(p,{isOpen:s,onToggle:this.handleInfoModalToggle}),o.a.createElement(E,{isOpen:l,onToggle:this.handleSettingsModalToggle}),o.a.createElement(d.e,null,o.a.createElement(d.t,null,o.a.createElement(S,null,o.a.createElement(x,{pendingPomodoro:a,onTasksChanged:this.handleTaskCountChange,onPomodoroAssigned:this.handlePomodoroAssigned,DEBUG_se_hack:this.handleSessionEnd})),o.a.createElement(T,null,o.a.createElement(y,{currentSession:n,onButtonClick:this.handleSetSession}),o.a.createElement(F,{currentSessionValue:n,isPomodoro:u,startOnChange:c,onTimerStart:this.handleTimerStart,onTimerStop:this.handleTimerStop,onTimerDone:this.handleSessionEnd}),o.a.createElement(C,{taskCount:i,pomodoroCount:t})))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(27),n(29);i.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.1ef9fe19.chunk.js.map