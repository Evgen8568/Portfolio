(function () {
    'use strict'

    angular
        .module('app')
        .directive('formInput', formInput);

    function formInput() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/js/angular/directive/form-input.directive.html',
            scope: {
                name: '@',
                value: '=',
                type: '@',
                title: '@',
                placeholder: '@'
            },
			link: function(scope, element, attrs){
				var pla =  scope.placeholder = scope.placeholder ? scope.placeholder : scope.title;
				scope.restorePlaceholder = function(){
					scope.placeholder = pla;
				}
			
					    scope.hidePlaceholder = function(){
					scope.placeholder = '';
				
}    
}
        }
    }
})();