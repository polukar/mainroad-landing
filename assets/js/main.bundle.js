!function(e){function t(t){for(var r,s,u=t[0],o=t[1],c=t[2],d=0,_=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&_.push(i[s][0]),i[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(l&&l(t);_.length;)_.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var o=n[u];0!==i[o]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={0:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/js/";var u=window.webpackJsonp=window.webpackJsonp||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=o;a.push([5,1]),n()}({5:function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(6);\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js?")},6:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/js/timer.js\nvar timer=function timer(){document.addEventListener('DOMContentLoaded',function(){var countdown=document.querySelector('#countdown');if(countdown){// склонение числительных\nvar declensionNum=function declensionNum(num,words){return words[num%100>4&&num%100<20?2:[2,0,1,1,1,2][num%10<5?num%10:5]];};// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов\nvar countdownTimer=function countdownTimer(){var diff=deadline-new Date();if(diff<=0){clearInterval(timerId);}var days=diff>0?Math.floor(diff/1000/60/60/24):0;var hours=diff>0?Math.floor(diff/1000/60/60)%24:0;var minutes=diff>0?Math.floor(diff/1000/60)%60:0;$days.textContent=days<10?'0'+days:days;$hours.textContent=hours<10?'0'+hours:hours;$minutes.textContent=minutes<10?'0'+minutes:minutes;$days.dataset.title=declensionNum(days,['день','дня','дней']);$hours.dataset.title=declensionNum(hours,['час','часа','часов']);$minutes.dataset.title=declensionNum(minutes,['минута','минуты','минут']);};// получаем элементы, содержащие компоненты даты\nvar $lastMinutes=parseInt(countdown.getAttribute('data-minutes'));var $lastHours=parseInt(countdown.getAttribute('data-hours'));var $lastDay=parseInt(countdown.getAttribute('data-day'));var $lastMonth=parseInt(countdown.getAttribute('data-month'));;var $lastYear=parseInt(countdown.getAttribute('data-year'));var deadline=new Date($lastYear,$lastMonth-1,$lastDay,$lastHours,$lastMinutes);// id таймера\nvar timerId=null;var $days=document.querySelector('.timer__days');var $hours=document.querySelector('.timer__hours');var $minutes=document.querySelector('.timer__minutes');// вызываем функцию countdownTimer\ncountdownTimer();// вызываем функцию countdownTimer каждую секунду\ntimerId=setInterval(countdownTimer,1000);}});};\n// CONCATENATED MODULE: ./src/js/menu.js\nvar menu=function menu(){var menu=document.querySelector('.mobile-menu');var $open=document.querySelector('.burger.--open');var $close=document.querySelector('.burger.--close');$open.addEventListener('click',function(){menu.classList.add('active');});$close.addEventListener('click',function(){menu.classList.remove('active');});};\n// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js\nvar jquery = __webpack_require__(3);\nvar jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);\n\n// CONCATENATED MODULE: ./src/js/video.js\nvar video_video=function video(){jquery_default()(window).on('load',function(){var elemWidth=jquery_default()('.protection__video iframe').width();var elemHeight=elemWidth*9/16;jquery_default()('.protection__video iframe').css({'height':elemHeight+'px'});});jquery_default()(window).on('resize',function(){var elemWidth=jquery_default()('.protection__video iframe').width();var elemHeight=elemWidth*9/16;jquery_default()('.protection__video iframe').css({'height':elemHeight+'px'});});};\n// EXTERNAL MODULE: ./node_modules/inputmask/dist/inputmask.js\nvar inputmask = __webpack_require__(4);\nvar inputmask_default = /*#__PURE__*/__webpack_require__.n(inputmask);\n\n// CONCATENATED MODULE: ./src/js/form.js\nvar validation=function validation(){var input=document.querySelectorAll('.input.--reqired');var submit=document.querySelector('.btn.--submit');if(input){input.forEach(function(elem){var $input=elem.querySelector('input');$input.addEventListener('keyup',function(){if($input.value.length>0){elem.classList.add('--succed');}else{elem.classList.remove('--succed');}var inputSucced=document.querySelectorAll('.input.--succed');if(inputSucced.length==input.length){submit.classList.remove('--disabled');}else{submit.classList.add('--disabled');}});});}};var form_select=function select(){jquery_default()('.select__main').on('click',function(){jquery_default()('.select__main').removeClass('active');jquery_default()('.select__drop').fadeOut();if(!jquery_default()(this).hasClass('active')){jquery_default()(this).addClass('active');jquery_default()(this).siblings('.select__drop').fadeIn();}else{jquery_default()(this).removeClass('active');jquery_default()(this).siblings('.select__drop').fadeOut();}});jquery_default()('.select__item').on('click',function(){jquery_default()(this).addClass('active').siblings().removeClass('active');var text=jquery_default()(this).text();jquery_default()(this).parents('.select').find('.select__main').removeClass('active');jquery_default()(this).parents('.select').find('.select__main').find('input').val(text);jquery_default()(this).parents('.select__drop').fadeOut();});jquery_default()(document).on('click',function(e){var select=jquery_default()('.select');if(!select.is(e.target)&&select.has(e.target).length===0){jquery_default()('.select__drop').fadeOut();jquery_default()('.select__main').removeClass('active');}});jquery_default()('.clear__filter').on('click',function(e){jquery_default()('.select__main').each(function(){jquery_default()(this).find('input').val('');});jquery_default()('.select__item').removeClass('active');});};var form_mask=function mask(){var tel=document.querySelectorAll('.-js-mask');inputmask_default()({mask:'+7 (999) 999-99-99',showMaskOnHover:false}).mask(tel);};var switcher=function switcher(){var switcher=document.querySelectorAll('.switch');var partic=document.querySelector('.partic');if(switcher){switcher.forEach(function(elem){elem.addEventListener('click',function(){elem.classList.toggle('active');if(partic){if(elem.classList.contains('switch-partic')&&elem.classList.contains('active')){partic.classList.add('active');}else{partic.classList.remove('active');}}});});}};\n// EXTERNAL MODULE: ./node_modules/swiper/esm/components/core/core-class.js + 66 modules\nvar core_class = __webpack_require__(10);\n\n// EXTERNAL MODULE: ./node_modules/swiper/esm/components/navigation/navigation.js\nvar navigation = __webpack_require__(8);\n\n// EXTERNAL MODULE: ./node_modules/swiper/esm/components/pagination/pagination.js\nvar pagination = __webpack_require__(9);\n\n// CONCATENATED MODULE: ./src/js/slider.js\nvar slider_slider=function slider(){core_class[\"a\" /* default */].use([navigation[\"a\" /* default */],pagination[\"a\" /* default */]]);// const swiper = new Swiper('.swiper', {\n//   loop: false,\n//   slidesPerView: 'auto',\n//   spaceBetween: 20,\n//   pagination: {\n//     el: '.swiper-pagination',\n//   },\n// });\nvar swiperNews=new core_class[\"a\" /* default */]('.news__slider',{loop:false,slidesPerView:1,spaceBetween:20,pagination:{el:'.swiper-pagination'}});};\n// CONCATENATED MODULE: ./src/js/project.js\nvar project_project=function project(){jquery_default()('.text-all').on('click',function(){jquery_default()(this).siblings('p').css({\"height\":'auto'});jquery_default()(this).remove();});jquery_default()('.project__description-alltext').on('click',function(){jquery_default()(this).siblings('.project__description-text ').addClass('active');jquery_default()(this).remove();});};\n// CONCATENATED MODULE: ./src/js/app.js\nvar app={init:function init(){// timer();\nmenu();// video();\n// validation();\n// select();\n// mask();\n// switcher();\n// slider();\n// project();\n}};app.init();\n\n//# sourceURL=webpack:///./src/js/app.js_+_6_modules?")}});