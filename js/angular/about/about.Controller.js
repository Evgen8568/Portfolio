(function(){
	angular
	.module('app')
	.controller('aboutController', aboutController);
	
	aboutController.inject =['$scope']
	function aboutController($scope) {
		$scope.model = {
			name: 'Русецкий Евгений Анатольевич',
			birthday: '13.08.88',
			education: 'Высшее(БГУИР)'
		};
		
		$scope.openModal = function(e) {
			$(e.currentTarget).modal();
		}
	}
})();