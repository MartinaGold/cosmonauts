angular.module('main').directive('cosmonaut', function(){
	return {
		templateUrl: 'app/cosmonaut-records/cosmonaut.html',
		controller: function($scope, CosmonautService, $mdDialog){
			$scope.cosmonaut = {
				firstName: '',
				surname: '',
				birthdate: '',
				superpower: ''
			};

			getAllCosmonauts();

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
		    		$scope.cosmonauts.splice(index, 1)
		    	});
			};

			$scope.isFormValid = function(form) {
				return form.$valid;
			};

			function getAllCosmonauts(){
				CosmonautService.getAllCosmonauts().then(function(cosmonauts){
					$scope.cosmonauts = cosmonauts;
				});
			}
		}
	}
});