angular.module('main').controller('RemoveCosmonautController', function($scope, cosmonaut, $uibModalInstance, CosmonautService){
	$scope.cosmonaut = angular.copy(cosmonaut);


});