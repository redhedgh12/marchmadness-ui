(function() {
	app = angular.module('brackets', []);
	
	app.directive('brackets', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/brackets/index.html',
			controller: function($http) {
				this.header = "Brackets";
				this.matchups = {
					"west": {"left": [],"right": []},
					"east": {"left": [],"right": []}
				};
				
				var state = this;
				
				$http.get('data/matchups.json')
				.then(function(response) {
					state.matchups = response.data;
				});
			},
			controllerAs: "brackets"
		};
	});
	
	app.directive('matchup', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/brackets/matchup.html'
		}
	});
})();