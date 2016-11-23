var app = angular.module('main');

app.factory('CosmonautService', function($http){
	var cosmonautService = {};

	cosmonautService.addNewCosmonaut = function (cosmonaut){
		return $q(function(resolve, reject){
            $http.post(Packets.ADD_NEW_COSMONAUT, cosmonaut, function (data) {
                if( ! data){
                    return reject();
                }
                
                resolve(data);
            });
        });
	};

	cosmonautService.getAllCosmonauts = function(){
        return $q(function(resolve, reject){
            $http.get(Packets.GET_ALL_COSMONAUTS, {}, function(data){
                if( ! data){
                    return reject();
                }
                
                return resolve(data);
            });
        });
    };

    cosmonautService.removeCosmonaut = function(index){
        return $q(function(resolve, reject){
            $http.post(Packets.REMOVE_COSMONAUT, index, function(data){
                if( ! data){
                    return reject();
                }
                
                return resolve(data);
            });
        });
    };

	return cosmonautService;
});