(function() {
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
		})
									
		.state('note', {
			url:'/',
			templateUrl:'/js/angular/note/note.view.html',
			controller: 'noteController'
		});
		
		$urlRouterProvider.otherwise('/');   //Что включить если не нашло
	}
	
	
	function run($rootScope) {
	
	}
	
})({
	baseApiUrl: 'https://my-json-server.typicode.com//Evgen8568/Portfolio'
});