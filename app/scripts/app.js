(function() {
	var app = angular.module('mm', ['scoreboard', 'brackets']);
	
	app.controller('AppController', function() {
		this.tab = 0;
	});
	
	app.controller('StoreController', function() {
		this.products = gems;
	});
	
	var gems = [
		{
			name: "Dodecahedron",
			price: 2.95,
			description: "Here is the description of a dodecahedron.",
			canPurchase: true
		},
		{
			name: "Pentagonal Gem",
			price: 5.95,
			description: "Here is the description of a pentagonal gem.",
			canPurchase: true
		}
	]
})();