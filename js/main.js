angular.module('main').controller('Main', function($scope, MainService){
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
		MainService.addNewCosmonaut($scope.cosmonaut).then(getAllCosmonauts);
	};

	$scope.removeCosmonaut = function(index){
		MainService.removeCosmonaut(index).then(getAllCosmonauts);
	};

	function getAllCosmonauts(){
		MainService.getAllCosmonauts().then(function(cosmonauts){
			$scope.cosmonauts = cosmonauts;
		});
	}

});