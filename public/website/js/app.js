!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=2)}({2:function(t,e,o){t.exports=o("lxhM")},lxhM:function(t,e){function o(t){bootbox.alert(t,function(){})}window.App={init:function(){var t;$(".carousel").carousel({interval:5e3,pause:"hover"}),$(".tooltips").tooltip(),$(".tooltips-show").tooltip("show"),$(".tooltips-hide").tooltip("hide"),$(".tooltips-toggle").tooltip("toggle"),$(".tooltips-destroy").tooltip("destroy"),$(".popovers").popover(),$(".popovers-show").popover("show"),$(".popovers-hide").popover("hide"),$(".popovers-toggle").popover("toggle"),$(".popovers-destroy").popover("destroy"),$("#form-newsletter").on("submit",function(t){t.preventDefault(),$.ajax({type:"POST",url:urlAjaxHandler+"/api/newsletter",data:$("#form-newsletter").serialize(),dataType:"json",success:function(t){var e="";"ok"==t.status?e+="<h4>"+t.msg+"</h4>":$.each(t.errors,function(t,o){e+="<h4>"+o[0]+"</h4>"}),o(e)},error:function(){o("Error")}})}),$().fancybox({selector:".lightbox"}),$(".lightbox-iframe").fancybox({type:"iframe",iframe:{css:{width:"800px"}}}),$(document).on("click",".scroll-to",function(t){t.preventDefault(),App.scrollTo($(this).attr("href"))}),window.location.hash&&App.scrollTo(window.location.hash),$(".form-ghost").each(function(){var t=$(this);t.data("original",t.val())}).blur(function(t){t.preventDefault();var e=$(this);if(e.val()!=e.data("original")){var o=e.data("id"),r=e.data("model"),n=e.data("field"),i=e.val();return $.ajax({type:"POST",url:"/api/update-ghost",data:{id:o,model:r,field:n,value:i,_token:$('meta[name="csrf-token"]').attr("content")},dataType:"json",success:function(t){e.data("original",i),$.each(t.alerts,function(){$.smkAlert({text:this.text,type:this.type,time:this.time})})},error:function(){$.smkAlert({text:trans("website.ghost.error"),type:"danger",time:5})}}),!0}}),$.pbScrollTriger({selector:"nav",class:"navbar-scrolled",use_element_position:!1,apply_class_to_body:!1}),t=$(".navbar.fixed-top").outerHeight()+30,document.addEventListener("invalid",function(e){$(e.target).addClass("override-invalid"),$(".override-invalid:visible").length&&$("html, body").animate({scrollTop:$(".override-invalid:visible").first().offset().top-t},0)},!0),document.addEventListener("change",function(t){$(t.target).removeClass("override-invalid")},!0)},scrollTo:function(t){var e=$("nav").outerHeight(),o=$(t).offset().top;$("html, body").stop().animate({scrollTop:o-e},500)},formValidation:function(t){$("#"+t).submit(function(e){e.preventDefault(),$.ajax({type:"POST",url:urlAjaxHandler+"/api/"+t,data:$("#"+t).serialize(),dataType:"json",success:function(e){"ok"==e.status?($("#"+t).hide(),$("#response").show().text(e.msg)):($.each(e.errors,function(t,e){$('[name="'+t+'"]').addClass("error")}),$("html, body").animate({scrollTop:$("#"+t).offset().top-$("nav").height()},1200,"swing"))}})})}},window.trans=function(t){var e=t.split("."),o=JS_LOCALIZATION,r=!0,n=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var s=a.value;s in o&&(o=o[s])}}catch(t){n=!0,i=t}finally{try{r||null==l.return||l.return()}finally{if(n)throw i}}return"string"==typeof o?o:t}}});