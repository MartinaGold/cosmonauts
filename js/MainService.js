var app = angular.module('main');

app.factory('MainService', function($http){
	var mainService = {};

	mainService.addNewCosmonaut = function (cosmonaut){
		return $q(function(resolve, reject){
            $http.post(Packets.ADD_NEW_COSMONAUT, cosmonaut, function (data) {
                if( ! data){
                    return reject();
                }
                
                resolve(data);
            });
        });
	};

	mainService.getAllCosmonauts = function(){
        return $q(function(resolve, reject){
            $http.get(Packets.GET_ALL_COSMONAUTS, {}, function(data){
                if( ! data){
                    return reject();
                }
                
                return resolve(data);
            });
        });
    };

    mainService.removeCosmonaut = function(index){
        return $q(function(resolve, reject){
            $http.post(Packets.REMOVE_COSMONAUT, index, function(data){
                if( ! data){
                    return reject();
                }
                
                return resolve(data);
            });
        });
    };

	return mainService;
});