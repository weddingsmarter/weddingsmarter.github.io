$(function () {
	"use strict";
	$(function () {
		$(".preloader").fadeOut()
	}), $(function () {
		$('[data-toggle="tooltip"]').tooltip()
	}), $(function () {
		$('[data-toggle="popover"]').popover()
	}), jQuery(document).on("click", ".mega-dropdown", function (o) {
		o.stopPropagation()
	}), jQuery(document).on("click", ".navbar-nav > .dropdown", function (o) {
		o.stopPropagation()
	}), $(".dropdown-submenu").click(function () {
		$(".dropdown-submenu > .dropdown-menu").toggleClass("show")
	}), $("body").trigger("resize");

	var o = $(window);

	AOS.init(), $(".bt-top").on("click", function (o) {
		o.preventDefault(), $("html,body").animate({scrollTop: 0}, 700)
	})
});