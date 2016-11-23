angular.module('main').controller('Main', function($scope, CosmonautService, $uibModal){
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
		CosmonautService.addNewCosmonaut($scope.cosmonaut).then(getAllCosmonauts);
	};

	$scope.removeCosmonaut = function(cosmonaut){
		var modalInstance = $uibModal.open({
            templateUrl: 'js/remove-cosmonaut/remove-cosmonaut.html',
            controller: 'RemoveCosmonautController',
            resolve: {
                cosmonaut: cosmonaut
            }
        };
		modalInstance.result.then(function(){
            $scope.cosmonauts.splice(index, 1)
        });
	};

	function getAllCosmonauts(){
		CosmonautService.getAllCosmonauts().then(function(cosmonauts){
			$scope.cosmonauts = cosmonauts;
		});
	}

});