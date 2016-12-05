
angular.module("mk.login",  ['ngMaterial', 'ui.router']).component("loginCmp", {
    templateUrl: "src/login/login.html",
    controllerAs:  'loginCtrl',
    controller: function($state, $stateParams) {
      this.sms = false;
      this.showSMS = function () { this.sms = true; };

      this.submit = function() { $state.go("users"); };
    }
});

