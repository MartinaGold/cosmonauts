var app = angular.module('main');

app.factory('CosmonautService', function($http, $q){
	var cosmonautService = {};

	cosmonautService.addNewCosmonaut = function (cosmonaut){
		return $q(function(resolve, reject){
            resolve();
            /*$http.post('', cosmonaut, function (data) {
                if( ! data){
                    return reject();
                }
                
                resolve(data);
            });*/
        });
	};

	cosmonautService.getAllCosmonauts = function(){
        return $q(function(resolve, reject){
            $http.get('', {}, function(data){
                if( ! data){
                    return reject();
                }
                
                return resolve(data);
            });
        });
    };

    cosmonautService.removeCosmonaut = function(index){
        return $q(function(resolve, reject){
            $http.post('', index, function(data){
                if( ! data){
                    return reject();
                }
                
                return resolve(data);
            });
        });
    };

	return cosmonautService;
});