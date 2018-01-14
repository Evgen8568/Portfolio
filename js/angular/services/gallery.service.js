(function(){
	angular
	.module('app')
	.factory('galleryServices', galleryFactory);
	
	function galleryFactory(){
		return{
			getGallery: function(){
				$http({
					url: appSettings.baseApiUrl + 'gallery-photos',
					method: 'GET'
				})
				.then(function(response) {
					success(response.data);
				});
			}
		}
	}
})();