var Login = function() {
	var t = this;
	var store = new Storage();

	this.init = function() {
		this.setEvents();

		store.load();
		if (store.data.login) {
			t.onSuccess();
		}
	};
	
	this.setEvents = function() {
		$("#login button").click(function() {
			t.check();
		});	
	};
	
	this.check = function() {
		var loginEmail = $('#login input[type="email"]');
		var loginPassword = $('#login input[type="password"]');
		if (
			loginEmail.val() == "admin@admin.de"
			&& loginPassword.val() == "admin"
		) {
			t.onSuccess();
		} else {
			t.onFailure();
		}
		
	};
	
	this.onSuccess = function() {
		store.data.login = true;
		store.save();
		window.location.href = "dashboard.html";
	};
	
	this.onFailure = function() {
		alert("Falscher Benutzername oder falsches Passwort");
	};
};

$(window).load(function() {
	var login = new Login();
	login.init();
});