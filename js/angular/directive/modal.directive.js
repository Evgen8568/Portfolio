(function(){
	angular
	.module('app1',[])
	.directive('modal', modal);
	
	function modal(){
		return {
			restrict: 'A',
			link: function(scope, element, attrs){
				element.on('click', function(){
					var target = element;
					if(attrs.target){
						target = '#' + attrs.target;
					}
					
					$(element).modal();
				});
			}
		}
	}
})();