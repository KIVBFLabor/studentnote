var List = function(selector) {
	var element = null;
	var removable = false;

	var handler = {
		'onadd' : function() {},
		'onselect' : function() {},
		'onremove' : function() {}
	};
	
	this.init = (function() {
		element = $(selector)
	})();

	this.fill = function(data) {
		var addButton = $('<a href="#">'
                        + '<li>'
                        +     '<img src="img/icons/add.png">'
                        + '</li>'
                    + '</a>');
		addButton.click(function() {
			handler['onadd']();
		});

		element.empty();
		element.add(addButton);

		for (var id in data) {
			var entry = data[id];
			var item = $('<a href="#">'
				+ '<li data-id="' + entry.id + '">'
				+    entry.value
				+    (removable ? '<span></span>' : '')
				+ '</li>'
			+ '</a>');
			
			item.find("li span").click(handler['onremove']);
			item.find("li").click(handler['onselect']);
			
			element.add(list);
		}
	};
	
	this.removable = function(r) {
		removable = r;
	};
	
	this.onAddHeander = function(func) {
		handler['onadd'] = func;
	};

	this.onSelectHeander = function(func) {
		handler['onselect'] = func;
	};

	this.onRemoveHeander = function(func) {
		handler['onremove'] = func;
	};	
};