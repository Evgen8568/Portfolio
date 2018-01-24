(function(){
	'use strict'
	
	angular
	.module('app')
	.controller('historyController', historyController);
	
	historyController.$inject = ['$scope', '$window', '$rootScope']
	function historyController($scope, $window, $rootScope){
		$scope.canBack = $window.history.length > 2;
		$scope.back = function(){
			$scope.$emit('backPressed', $window.history.length - 2)
			$window.history.back();
		}
		$rootScope.$broadcast('name', {});
		$rootScope.$emit('name', {});
		$rootScope.$on('name', function(data){});  //Имя любое
	}
})();