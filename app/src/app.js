angular.module( 'mk-app', ['ngMaterial', 'mk.login', 'mk.users'])
    .config(function($mdIconProvider, $mdThemingProvider, $stateProvider, $urlRouterProvider) {
        $mdIconProvider
          .defaultIconSet("./assets/svg/avatars.svg", 128)
          .icon("menu", "./assets/svg/menu.svg", 24)
          .icon("share", "./assets/svg/share.svg", 24)
          .icon("google_plus", "./assets/svg/google_plus.svg", 24)
          .icon("hangouts", "./assets/svg/hangouts.svg", 24)
          .icon("twitter", "./assets/svg/twitter.svg", 24)
          .icon("phone", "./assets/svg/phone.svg", 24)
          .icon("search", "./assets/svg/search.svg", 24);

        $mdThemingProvider.theme('default').primaryPalette('brown').accentPalette('red');


        $stateProvider.state('login', {
          url: "/login",
          template: "<login-cmp></login-cmp>"
        }).state('users', {
          url: "/users",
          template: "<user-info-cmp></user-info-cmp>"
        });

        $urlRouterProvider.otherwise('/login');
    });
