var Navbar = function() {
	var entrys = [
		/*
		{
			label : 'Dashboard',
			icon : 'img/icons/home.png',
			view : null
		},*/
		{
			label : 'Lehrer',
			icon : 'img/icons/school.png',
			view : new TeachersView()
		},
		/*
		{
			label : 'Schüler',
			icon : 'img/icons/account.png',
			view : null
		},
		{
			label : 'Klasse',
			icon : 'img/icons/account-multiple.png',
			view : null
		},
		{
			label : 'Logout',
			icon : 'img/icons/logout.png',
			view : null
		}
		*/
	];

	var viewManager = new ViewManager();

	this.init = function() {
		$("nav ul").empty();

		for (var id in entrys) {
			var entry = entrys[id];
			//var navBarItem = $('<a href="' + entry.view.url + '">'
			var navBarItem = $('<a href="#">'
                    + '<li>'
                    +    '<img src="' + entry.icon + '">'
                    +    '<span>' + entry.label + '</span>'
                    + '</li>'
                + '</a>');
			navBarItem.click(function() {
				viewManager.change(entry.view);
			});
			$("nav ul").append(navBarItem);
		}
	};
};

$(window).load(function() {
	new Navbar().init();
});