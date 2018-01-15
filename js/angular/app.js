(function(appSettings) {
	angular
	.module('app', ['ngRoute', 'ui.router'])
	.config(config)		//позволяет добавить конфигурацию
	.run(run);			//Что сделать по выполнению
	
	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('about', {
			url: '/',
			templateUrl:'/js/angular/about/about.view.html',
			controller: 'aboutController'
		})
			   
		.state('blog', {
			url:'/',
			templateUrl:'/js/angular/blog/blog.view.html',
			controller: 'blogController'
		})
					  
		.state('contact', {
			url:'/',
			templateUrl:'/js/angular/contact/contact.view.html',
			controller: 'contactController'
		})
							 
		.state('gallery', {
			url:'/',
			templateUrl:'/js/angular/gallery/gallery.view.html',
			controller: 'galleryController'
		});
		
		$urlRouterProvider.otherwise('/');   //Что включить если не нашло
	}
	
	
	run.$inject = ['$rootScope'];
	function run($rootScope) {
		$rootScope.appSettings = appSettings;
	}
	
})({baseApiUrl: 'https://my-json-server.typicode.com/Evgen8568/Portfolio'});