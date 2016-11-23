angular.module('main').controller('Main', function($scope, CosmonautService){
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

	$scope.removeCosmonaut = function(index){
		CosmonautService.removeCosmonaut(index).then(getAllCosmonauts);
	};

	function getAllCosmonauts(){
		CosmonautService.getAllCosmonauts().then(function(cosmonauts){
			$scope.cosmonauts = cosmonauts;
		});
	}

});