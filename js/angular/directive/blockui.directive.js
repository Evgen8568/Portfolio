(function () {

	angular.module('app').directive('blockUi', blockUi);

	var template = '<div id="blockUi" class="blockui"><div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div></div>';

	function blockUi() {
		return {
			restrict: 'A',
            link: function (scope, element, attrs) {
                element[0].classList.add('block-ui');
                scope.$watch(attrs.blockUi, function (newValue) {
                    if (newValue) {
                        element.prepend(template);
                    } else {
                        element.find('#blockUi').remove();
                    }
                });
            }
		}
	}
})();
