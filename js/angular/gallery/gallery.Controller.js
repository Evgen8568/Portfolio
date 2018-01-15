(function(){
	'use strict';
	
	angular
	.module('app')
	.controller('galleryController', galleryController);
	
	/*galleryController.inject = ['$scope', 'galleryService']
	
	function galleryController($scope, galleryService) {
	galleryService.getGallery(function (gallery) {
            $scope.gallery = gallery;
	});
	}*/
	
	function galleryController($scope) {
    $scope.gallery = [{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery1.jpg',
        thumbnail: '/img/Gallery/small/Gallery1_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery2.jpg',
        thumbnail: '/img/Gallery/small/Gallery2_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery3.jpg',
        thumbnail: '/img/Gallery/small/Gallery3_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery4.jpg',
        thumbnail: '/img/Gallery/small/Gallery4_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery5.jpg',
        thumbnail: '/img/Gallery/small/Gallery5_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery6.jpg',
        thumbnail: '/img/Gallery/small/Gallery6_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery7.jpg',
        thumbnail: '/img/Gallery/small/Gallery7_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery8.jpg',
        thumbnail: '/img/Gallery/small/Gallery8_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery9.jpg',
        thumbnail: '/img/Gallery/small/Gallery9_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery10.jpg',
        thumbnail: '/img/Gallery/small/Gallery10_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery11.jpg',
        thumbnail: '/img/Gallery/small/Gallery11_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery12.jpg',
        thumbnail: '/img/Gallery/small/Gallery12_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery13.jpg',
        thumbnail: '/img/Gallery/small/Gallery13_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery14.jpg',
        thumbnail: '/img/Gallery/small/Gallery14_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery15.jpg',
        thumbnail: '/img/Gallery/small/Gallery15_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery16.jpg',
        thumbnail: '/img/Gallery/small/Gallery16_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery17.jpg',
        thumbnail: '/img/Gallery/small/Gallery17_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery18.jpg',
        thumbnail: '/img/Gallery/small/Gallery18_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery19.jpg',
        thumbnail: '/img/Gallery/small/Gallery19_s.jpg',
  		},
		{
        car: 'Subaru BRZ',
        url: '/img/Gallery/Gallery20.jpg',
        thumbnail: '/img/Gallery/small/Gallery20_s.jpg',
  		}];
	}

})();