var Storage = function() {
	this.data = {
		login : false
	};
	
	this.load = function() {
		var data = localStorage.getItem("studentnote");
		if (data) {
			this.data = JSON.parse(data);
		}
	};

	this.save = function() {
		localStorage.setItem("studentnote", JSON.stringify(this.data));
	};
};