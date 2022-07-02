(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&n(t,e)}function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}function r(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var c=o(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return i(this,n)}}function i(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var l=a((function t(e){s(this,t),this.id=e,this.status=!1,this.visible=!0})),u=function(t){e(i,t);var n=r(i);function i(t,e){var r;return s(this,i),(r=n.call(this,t)).descr=e,r}return a(i)}(l),d=function(t){e(i,t);var n=r(i);function i(t,e){var r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return s(this,i),(r=n.call(this,t)).title=e,r.descr=o,r.endDate=c,r.startDate=a,r.list=l,r}return a(i)}(l),f=function(t){e(i,t);var n=r(i);function i(t,e){var r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return s(this,i),(r=n.call(this,t)).title=e,r.list=o,r}return a(i)}(l),h=a((function t(){s(this,t);var e=localStorage.projectList;this.list=e?JSON.parse(e):[]}));function v(t,e){return t.status?e:""}function p(t){return t.filter((function(t){return t.visible}))}var y=function(t){var e=document.createElement("div");return e.innerHTML=t,1!==e.childElementCount?e:e.firstChild},m={Todo:{standard:function(t){return'<div id="todo-background">\n            <form id="todo-details" class="'.concat(v(t,"done"),'">\n                <input required class="title" name="title" value="').concat(t.title,'">\n                <textarea class="descr" name="descr">').concat(t.descr,'</textarea>\n                <div class="checklist-container">\n                    <h3>Tasks</h3>\n                    <div id="checklist"></div>\n                </div>\n                <div class="dates">\n                    <div class="date-container">\n                        <p class="date-type">Start Date</p>\n                        <input type="date" name="startDate" value="').concat(t.startDate||"",'">\n                    </div>\n                    <div class="date-container">\n                        <p class="date-type">End Date</p>\n                        <input type="date" name="endDate" value="').concat(t.endDate||"",'">\n                    </div>\n                </div>\n                <div class="button-container">\n                    <button class="save button" type="submit" name="save">Save</button>\n                    <div class="done-toggle button">Done</div>\n                    <div class="delete button">Delete</div>\n                </div>\n            </form>\n        </div>')}},Project:{standard:function(t){return'<div class="card '.concat(v(t,"done"),'" data-child-id="').concat(t.id,'">\n            <h2 class="title">').concat(t.title,'</h2>\n            <p class="descr">').concat(t.descr,'</p>\n            <h4 class="checklist-title">Tasks</h4>\n            <div class="checklist-container">').concat(p(t.list).map((function(t){return'<li class="checklist-item '.concat(v(t,"done"),'">').concat(t.descr,"</li>")})).slice(0,3).join("")+(p(t.list).length>3?'<div class="more-items-inside"></div>':""),'</div>\n            <div class="button-container">\n                <div class="done-toggle button">Done</div>\n                <div class="delete button">Delete</div>\n            </div>\n        </div>')},add:function(){return'<form id="new-todo" class="card">\n            <input required class="title" name="title" placeholder="New Todo">\n            <textarea class="descr" name="descr" placeholder="Description"></textarea>\n            <h4 class="checklist-title">Tasks</h4>\n            <div class="checklist-container">\n                <input name ="checklist" class="checklist-input">\n                <input name ="checklist" class="checklist-input">\n                <input name ="checklist" class="checklist-input">\n            </div>\n            <div class="button-container">\n                <button type="submit" id="add-todo" class="button">Add</button>\n                <button type="reset" id="reset-todo-inputs" class="button">Reset</div>\n            </div>\n        </form>'},edit:function(t){var e=p(t.list);return'<form class="edit-form card">\n            <input required class="title" name="title" value="'.concat(t.title,'">\n            <textarea class="descr" name="descr">').concat(t.descr,'</textarea>\n            <h4 class="checklist-title">Tasks</h4>\n            <div class="checklist-container">\n                    <input name ="list" class="checklist-input" value="').concat(e[0]?e[0].descr:"",'">\n                    <input name ="list" class="checklist-input" value="').concat(e[1]?e[1].descr:"",'">\n                    <input name ="list" class="checklist-input" value="').concat(e[2]?e[2].descr:"",'">\n            </div>\n            <div class="button-container">\n                <button type="submit" id="add-todo" class="button">Save</button>\n                <div id="reset-todo-inputs" class="button">Delete</div>\n            </div>\n        </form>')},empty:function(){return'<div id="new-app">← Add a new project</div>'}},Checklist:{add:function(){return'<form id="new-checklist-item"><input required placeholder="New task" name="descr"><form>'},standard:function(t){return'<div class="checklist-item '.concat(v(t,"done"),'" data-child-id="').concat(t.id,'">\n                            <input class="descr" value="').concat(t.descr,'">\n                            <div class="item-button-container">    \n                                <div class="item-button done-toggle">✓</div>\n                                <div class="item-button delete">x</div>\n                            </div>\n                        </div>')}},ProjectList:{standard:function(t){return'<div class="project"  data-child-id="'.concat(t.id,'" >\n        <p class="name">').concat(t.title,'</p>\n        <div class="delete">x</div>\n    </div>')},add:function(){return'<form id="new-project"><input required placeholder="New Project" name="name"><form>'},edit:function(t){return'<form class="edit-form"><input required value="'.concat(t.title,'" name="title"><form>')}}};function b(t,e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=m[t][e](n);return y(r)}}function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function g(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function j(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=E(t);if(e){var i=E(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return S(this,n)}}function S(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t,e,n){return e&&A(t.prototype,e),n&&A(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var D={get Checklist(){return document.getElementById("checklist")},get Todo(){return document.body},get Project(){return document.querySelector("main")},get ProjectList(){return document.getElementById("projects")}},_=function(){function t(e,n){if(T(this,t),this.constructor===t)throw new Error("Abstract Class");this.model=e,this.container=D[n],this.standardTemplate=b(n,"standard")}return C(t,[{key:"render",value:function(){}}]),t}(),R=function(t){j(n,t);var e=P(n);function n(t,r){var i;return T(this,n),(i=e.call(this,t,r)).list=t.list,i.addFormTemplate=b(r,"add"),i.editFormTemplate=b(r,"edit"),i}return C(n,[{key:"getActive",value:function(){return this.list.filter((function(t){return t.visible}))}},{key:"render",value:function(){var t=this;this.container.innerHTML="",this.getActive().forEach((function(e){var n=t.standardTemplate(e);t.container.appendChild(n)})),this.addForm=this.container.appendChild(this.addFormTemplate())}},{key:"editMode",value:function(t){var e=this.container.querySelector('[data-child-id="'.concat(t,'"]'));this.editForm=this.editFormTemplate(this.model.list[t]),e.replaceWith(this.editForm)}},{key:"setClass",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];g(this.container.children).forEach((function(i){parseInt(i.getAttribute("data-child-id"),10)===t?i.classList[n?"remove":"add"](e):r&&i.classList.remove(e)}))}}]),n}(_),L=function(t){j(n,t);var e=P(n);function n(t){return T(this,n),e.call(this,t,"Todo")}return C(n,[{key:"render",value:function(){this.standardElement=this.standardTemplate(this.model),this.container.appendChild(this.standardElement),this.form=this.standardElement.querySelector("form")}},{key:"hide",value:function(){this.container.removeChild(this.standardElement)}},{key:"setClass",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.form.classList[e?"remove":"add"](t)}}]),n}(_),x=function(){function t(){T(this,t),this.emptyTemplate=b("Project","empty"),this.container=D.Project,this.render()}return C(t,[{key:"render",value:function(){this.container.innerHTML="",this.element=this.emptyTemplate(),this.container.appendChild(this.element)}}]),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function I(t){return function(t){if(Array.isArray(t))return t}(t)||B(t)||Q(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(t){return function(t){if(Array.isArray(t))return X(t)}(t)||B(t)||Q(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=N(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},M.apply(this,arguments)}function N(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=W(t)););return t}function H(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function V(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=W(t);if(e){var i=W(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return J(this,n)}}function J(t,e){if(e&&("object"===F(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return $(t)}function $(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(t){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},W(t)}function z(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function K(t,e,n){return e&&G(t.prototype,e),n&&G(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Q(t,e){if(t){if("string"==typeof t)return X(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(t,e):void 0}}function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Y=new h;function Z(t,e,n,r,i){var o=e.querySelectorAll(n);if(o){var c,a=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Q(t))){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){a=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw o}}}}(o);try{for(a.s();!(c=a.n()).done;)c.value.addEventListener(r,i.bind(t))}catch(t){a.e(t)}finally{a.f()}}}function tt(t){var e=t.composedPath().find((function(t){return t.hasAttribute("data-child-id")}));return parseInt(e.getAttribute("data-child-id"),10)}var et=function(){function t(e){if(z(this,t),this.constructor===t)throw new Error("Abstract Class");this.model=e}return K(t,[{key:"save",value:function(){localStorage.projectList=JSON.stringify(Y.list)}},{key:"update",value:function(){this.save(),this.view.render(),this.listeners()}},{key:"edit",value:function(){}},{key:"listeners",value:function(){}},{key:"remove",value:function(){}},{key:"toggle",value:function(){}}]),t}(),nt=function(t){H(n,t);var e=V(n);function n(t,r){var i;return z(this,n),(i=e.call(this,t)).list=i.model.list,i.view=new R(i.model,r),i}return K(n,[{key:"add",value:function(){}},{key:"remove",value:function(t){this.list[t].visible=!1,this.update()}},{key:"toggle",value:function(t){this.list[t].status=!this.list[t].status;var e=!this.list[t].status;this.view.setClass(t,"done",e)}},{key:"getVisible",value:function(){return this.list.filter((function(t){return t.visible}))}}]),n}(et),rt=function(t){H(n,t);var e=V(n);function n(t){var r,i;return z(this,n),M((r=$(i=e.call(this,t,"Checklist")),W(n.prototype)),"update",r).call(r),i}return K(n,[{key:"edit",value:function(t){var e=tt(t),r=t.target.value;r?(this.list[e].descr=r,M(W(n.prototype),"save",this).call(this)):(M(W(n.prototype),"remove",this).call(this,e),this.update(),this.view.addForm.descr.focus())}},{key:"add",value:function(){var t=this.view.addForm,e=this.list.length;this.list.push(new u(e,t.descr.value)),this.update();var n=this.view.container.querySelector('[data-child-id="'.concat(e,'"] input')),r=n.value;n.focus(),n.value="",n.value=r}},{key:"listeners",value:function(){var t=this,e=this.view.container;Z(this,e,".checklist-item","input",this.edit),Z(this,e,"#new-checklist-item","input",this.add),Z(this,e,".delete","click",(function(e){return t.remove(tt(e))})),Z(this,e,".done-toggle","click",(function(e){return M(W(n.prototype),"toggle",t).call(t,tt(e))}))}}]),n}(nt),it=function(t){H(n,t);var e=V(n);function n(t){var r;return z(this,n),(r=e.call(this,t)).view=new L(t),r.update(),r.form=r.view.form,r.checklist=new rt(t),r}return K(n,[{key:"close",value:function(){this.view.hide(),this.projectController.update()}},{key:"clickOut",value:function(t){t.target===t.currentTarget&&this.view.form.elements.save.click()}},{key:"edit",value:function(t){var e=t.target,n=e.name;this.model[n]=e.value,this.save()}},{key:"remove",value:function(){this.model.visible=!1,this.close()}},{key:"toggle",value:function(){this.model.status=!this.model.status;var t=!this.model.status;this.view.setClass("done",t)}},{key:"listeners",value:function(){var t=this;Z(this,this.view.form,"input,textarea","input",this.edit),Z(this,this.view.container,"#todo-background","click",this.clickOut),Z(this,this.view.form,".delete","click",this.remove),Z(this,this.view.form,".done-toggle","click",this.toggle),this.view.form.addEventListener("submit",(function(e){e.preventDefault(),t.close()}))}}]),n}(et),ot=function(t){H(n,t);var e=V(n);function n(t){var r,i;return z(this,n),M((r=$(i=e.call(this,t,"Project")),W(n.prototype)),"update",r).call(r),i}return K(n,[{key:"add",value:function(t){t.preventDefault();var e=I(q(t.target.elements).map((function(t){return t.value}))),r=e[0],i=e[1],o=e.slice(2).filter((function(t){return t})).map((function(t,e){return new u(e,t)})),c=this.list.length,a=new d(c,r,i,null,null,o);this.list.push(a),M(W(n.prototype),"update",this).call(this)}},{key:"edit",value:function(t){var e=this;M(W(n.prototype),"update",this).call(this),this.view.editMode(t),this.view.container.querySelector(".edit-form").addEventListener("submit",(function(r){r.preventDefault();var i=I(q(r.target.elements).filter((function(t){return"BUTTON"!==t.tagName})).map((function(t){return t.value}))),o=i[0],c=i[1],a=i.slice(2),s=e.model.list[t];s.title=o,s.descr=c;var l=s.list.filter((function(t){return t.visible}));a.forEach((function(t,e){if(t||l[e])if(l[e]){var n=l[e].id;t?s.list[n].descr=t:s.list[n].visible=!1}else{var r=s.list.length;s.list.push(new u(r,t))}})),M(W(n.prototype),"update",e).call(e)}))}},{key:"select",value:function(t){this.todoController=new it(this.list[t]),this.todoController.projectController=this}},{key:"listeners",value:function(){var t=this,e=this.view.container;this.view.addForm.addEventListener("submit",this.add.bind(this)),Z(this,e,".delete","click",(function(e){return t.remove(tt(e))})),Z(this,e,".done-toggle","click",(function(e){return M(W(n.prototype),"toggle",t).call(t,tt(e))})),Z(this,e,".card:not(#new-todo) :is(p,h2,h4,li)","dblclick",(function(e){return t.edit(tt(e))})),Z(this,e,".card:not(#new-todo, button)","click",(function(e){e.target===e.currentTarget&&t.select(tt(e))}))}}]),n}(nt);new(function(t){H(n,t);var e=V(n);function n(){var t,r;return z(this,n),M((t=$(r=e.call(this,Y,"ProjectList")),W(n.prototype)),"update",t).call(t),r.selectDefault(),r}return K(n,[{key:"add",value:function(t){t.preventDefault();var e=this.list.length,r=t.target.elements.name.value;this.model.list.push(new f(e,r)),M(W(n.prototype),"update",this).call(this),this.select(e)}},{key:"select",value:function(t){var e=this.model.list[t];this.projectController=new ot(e),this.previousProject=this.activetProject,this.activetProject=e,this.view.setClass(t,"active",!1,!0)}},{key:"selectDefault",value:function(){var t=M(W(n.prototype),"getVisible",this).call(this);t.length?this.select(t[0].id):this.emptyView=new x}},{key:"remove",value:function(t){var e;M(W(n.prototype),"remove",this).call(this,t),t===this.activetProject.id?null!==(e=this.previousProject)&&void 0!==e&&e.visible?this.select(this.previousProject.id):this.selectDefault():this.select(this.activetProject.id)}},{key:"edit",value:function(t){var e=this;M(W(n.prototype),"update",this).call(this),this.view.editMode(t);var r=this.view.editForm.title;r.focus();var i=r.value;r.value="",r.value=i;var o=this.model.list[t],c=o.title;r.addEventListener("input",(function(){var t=r.value;o.title=t||c}));var a=function(r){r.preventDefault(),M(W(n.prototype),"update",e).call(e),e.select(t)};this.view.editForm.addEventListener("focusout",a),this.view.editForm.addEventListener("submit",a)}},{key:"listeners",value:function(){var t=this,e=this.view.container;this.view.addForm.addEventListener("submit",this.add.bind(this)),Z(this,e,".name","click",(function(e){return t.select(tt(e))})),Z(this,e,".delete","click",(function(e){return t.remove(tt(e))})),Z(this,e,".project","dblclick",(function(e){return t.edit(tt(e))}))}}]),n}(nt))})();
//# sourceMappingURL=main.js.map