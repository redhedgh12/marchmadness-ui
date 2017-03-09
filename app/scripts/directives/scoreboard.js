(function() {
	app = angular.module('scoreboard', []);
	
	app.directive('scoreboardPage', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/scoreboard/index.html'
		};
	});
	
	app.directive('scoreboardTable', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/scoreboard/table.html',
			controller: function($http) {
				this.playerScores = [];
				
				var state = this;
				$http.get('data/player-scores.json')
				.then(function(response) {
					state.playerScores = response.data;
				});
			},
			controllerAs: 'scoreTableCtrl'
		};
	});
	
})();