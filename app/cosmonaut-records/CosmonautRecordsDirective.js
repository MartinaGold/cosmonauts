angular.module('main').directive('cosmonautRecords', function(){
	return {
		templateUrl: 'app/cosmonaut-records/cosmonaut-records.html',
		controller: function($scope, CosmonautService, $mdDialog){
			$scope.cosmonaut = {
				firstName: '',
				surname: '',
				birthdate: '',
				superpower: ''
			};
			$scope.cosmonauts = [];

			initAllCosmonauts();

			$scope.addNewCosmonaut = function(){
				CosmonautService.addNewCosmonaut($scope.cosmonaut).then($scope.cosmonauts.push(angular.copy($scope.cosmonaut)));
			};

			$scope.removeCosmonaut = function(index){
				var confirm = $mdDialog.confirm()
				    .title('Smazat kosmonauta')
				    .textContent('Opravdu chcete kosmonauta smazat?')
				    .ariaLabel('Lucky day')
				    .ok('Ano')
				    .cancel('Ne');

				$mdDialog.show(confirm).then(function() {
		    		CosmonautService.removeCosmonaut(/*cosmonautId*/).then(function(){
		    			$scope.cosmonauts.splice(index, 1)
		    		});		
		    	});
			};

			$scope.isFormValid = function(form) {
				return form.$valid;
			};

			function initAllCosmonauts(){
				CosmonautService.getAllCosmonauts().then(function(cosmonauts){
					$scope.cosmonauts = cosmonauts;
				});
			}
		}
	}
});