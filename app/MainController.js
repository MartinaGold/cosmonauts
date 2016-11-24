angular.module('main').controller('Main', function($scope, CosmonautService, $mdDialog){
	$scope.cosmonaut = {
		firstName: '',
		surname: '',
		birthdate: '',
		superpower: ''
	};

	$scope.cosmonauts = [
		{
			firstName: 'Karel',
			surname: 'Novak',
			birthdate: '10. 5. 1986',
			superpower: 'fir'
		},
		{
			firstName: 'Karel',
			surname: 'Novak',
			birthdate: '10. 5. 1986',
			superpower: 'fir'
		}
	];

	$scope.addNewCosmonaut = function(){
		CosmonautService.addNewCosmonaut($scope.cosmonaut).then($scope.cosmonauts.push($scope.cosmonaut));
	};

	$scope.removeCosmonaut = function(index){
		var confirm = $mdDialog.confirm()
		    .title('Smazat kosmonauta')
		    .textContent('Opravdu chcete kosmonauta smazat?')
		    .ariaLabel('Lucky day')
		    .ok('Ano')
		    .cancel('Ne');

		$mdDialog.show(confirm).then(function() {
    		$scope.cosmonauts.splice(cosmonaut, 1)
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

});