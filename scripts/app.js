var kevinPortfolio = angular.module('kevinPortfolio', ['ui.router']);

kevinPortfolio.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        .state('home', {
            url: '/home',
            templateUrl: '../templates/home.html'
        })
        .state('resume', {
            url: '/resume',
            templateUrl: '../templates/resume.html'
        })
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: '../templates/portfolio.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '../templates/contact.html'
        })
        .state('parasitic_symbiotic', {
            url: '/parasitic_symbiotic',
            templateUrl: '../templates/parasitic_symbiotic.html'
        })
        .state('memorial_trail', {
            url: '/memorial_trail',
            templateUrl: '../templates/memorial_trail.html'
        })
        .state('pershing_square', {
            url: '/pershing_square',
            templateUrl: '../templates/pershing_square.html'
        })
        .state('wetland', {
            url: '/wetland',
            templateUrl: '../templates/wetland.html'
        })
        .state('pan_pacific', {
            url: '/pan_pacific',
            templateUrl: '../templates/pan_pacific.html'
        })
        .state('other_works', {
            url: '/other_works',
            templateUrl: '../templates/other_works.html'
        })
        .state('photography', {
            url: '/photography',
            templateUrl: '../templates/photography.html'
        });
        
});

$(document).ready(function(){
    $(this).scrollTop(0);
});