"use strict";$(document).ready(function(){var a=$(".js-buttonSignUp"),n=$(".js-registrationOverlay"),e=$(".js-registrationContent");u(a,n,e);var t=$(".js-buttonSignIn"),s=$(".js-getMoreOverlay"),d=$(".js-getMoreContent");u(t,s,d);var o=$(".js-linkForgot"),i=$(".js-forgotOverlay"),f=$(".js-forgotContent");function l(a,n,e,t,s){a.on("click",function(a){a.preventDefault(),n.css("display","flex"),n.addClass("animated fadeIn"),e.addClass("animated fadeInDown"),t.addClass("animated fadeOut"),s.addClass("animated fadeOutUp"),setTimeout(function(){t.css("display","none"),t.removeClass("animated fadeIn fadeOut"),s.removeClass("animated fadeInDown fadeOutUp")},800)})}function u(a,n,e){function t(){$(document).off("keydown",s),n.removeClass("animated fadeIn"),n.addClass("animated fadeOut"),setTimeout(function(){n.css("display","none"),n.removeClass("animated fadeIn fadeOut"),e.removeClass("animated fadeInDown fadeOutUp")},800),e.removeClass("animated fadeInDown"),e.addClass("animated fadeOutUp")}function s(a){27==a.which&&t()}a.is("button")&&a.on("click",function(){$(document).on("keydown",s),n.css("display","flex"),n.removeClass("animated fadeOut"),n.addClass("animated fadeIn"),e.removeClass("animated fadeOutUp"),e.addClass("animated fadeInDown")}),n.on("click",function(){t()}),e.on("click",function(a){a.stopPropagation()})}u(o,i,f),l(o,i,f,s,d),l($(".js-linkSignUp"),n,e,s,d),l($(".js-linkSignIn"),s,d,n,e)});