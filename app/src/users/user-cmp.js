angular
	.module("mk.users", ['ngMaterial', 'mk.service'])
	.component("usersList", {
	    bindings         : {  users: '<', selected : '<', showDetails : '&onSelected' },
	    templateUrl      : 'src/users/views/list/UsersList.html',
	    controller: function() { }
 	})
	.component("userDetails", {
		bindings         : {  selected: '<' },
	    templateUrl      : 'src/users/views/details/UserDetails.html',
	    controller       : function($mdBottomSheet, $log) {
    		this.states = [{state:'NSW'}, {state:'ACT'}, {state:'QLD'}, {state:'TAS'}, {state:'NT'}];
    		this.share = function() {
				var user = this.selected;

				$mdBottomSheet.show({
					parent: angular.element(document. getElementById('content')),
					templateUrl: 'src/users/views/details/ContactSheet.html',
					controller: [ '$mdBottomSheet', UserSheetController],
					controllerAs: "$ctrl",
					bindToController : true
				}).then(function(clickedItem) {
					$log.debug( clickedItem.name + ' clicked!');
				});
				
				function UserSheetController( $mdBottomSheet ) {
					this.user = user;
					this.items = [
						{ name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
						{ name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
						{ name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
						{ name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
					];
					this.performAction = function(action) {
						$mdBottomSheet.hide(action);
					};
				}
    		};
	    }
	})
  	.component("userInfoCmp", {
	  	templateUrl: "src/users/user-cmp.html",
      	controllerAs: 'usr',
	  	controller: function(UsersDataService, $mdSidenav, $scope) { 
			var self = this;
			self.selected     = null;
			self.users        = [];
			self.selectUser   = function(user) {
				self.selected = angular.isNumber(user) ? $scope.users[user] : user;
			};
			self.toggleList   = function() {
				$mdSidenav('left').toggle(); 
			};

			UsersDataService.loadAllUsers().then( function( users ) {
				self.users    = [].concat(users);
				self.selected = users[0];
			});
	    }
	});