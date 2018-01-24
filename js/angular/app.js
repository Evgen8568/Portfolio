(function(appSettings) {
	angular
	.module('app', ['ngRoute', 'ui.router', 'ngValidate', 'ngStorage'])
	.config(config)		//позволяет добавить конфигурацию
	.run(run);			//Что сделать по выполнению
	
	config.$inject = ['$stateProvider', '$urlRouterProvider', '$validatorProvider'];
	function config($stateProvider, $urlRouterProvider, $validatorProvider){
		$stateProvider
		.state('about', {
			url: '/',
			templateUrl:'/js/angular/about/about.view.html',
			controller: 'aboutController'
		})
			   
		.state('blog', {
			url:'/blog',
			templateUrl:'/js/angular/blog/blog.view.html',
			controller: 'blogController'
		})
					  
		.state('contact', {
			url:'/contact',
			templateUrl:'/js/angular/contact/contact.view.html',
			controller: 'contactController'
		})
							 
		.state('gallery', {
			url:'/gallery',
			templateUrl:'/js/angular/gallery/gallery.view.html',
			controller: 'galleryController'
		});
		
		$urlRouterProvider.otherwise('/');   //Что включить если не нашло
	
	
	$validatorProvider.setDefaults({
             errorElement: 'span'
         });
         $validatorProvider.setDefaultMessages({
             required: 'Это поле обязательно для заполнения.',
             email: 'Неверный формат email-адреса.'
         });
         $validatorProvider.addMethod('tel', function (value, element) {
             return /\+[\d\s\-]{9,}/.test(value);
         }, 'Неверный формат номера телефона.');
}
	run.$inject = ['$rootScope'];
	function run($rootScope) {
		$rootScope.appSettings = appSettings;
	}
	
})({baseApiUrl: 'https://my-json-server.typicode.com/Evgen8568/Portfolio/'});