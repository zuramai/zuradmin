var ps = new PerfectScrollbar('.sidebar-wrapper', {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
});

$('.has-sub').click(function() {
	var submenu = $(this).find('.submenu')
	var icon = $(this).find('.menu-icon');
	if (submenu.is(":hidden")) {
		icon.fadeOut(200, function () {
			icon.html("<i class='dripicons-chevron-down'>")
		}).fadeIn(200);
	} else {
		icon.fadeOut(200, function () {
			icon.html("<i class='dripicons-chevron-right'>")
		}).fadeIn(200);
	}
    submenu.slideToggle(400);
});