var app = angular.module('main');

app.factory('CosmonautService', function($http, $q){
	var cosmonautService = {};

	cosmonautService.addNewCosmonaut = function (cosmonaut){
		return $q(function(resolve, reject){
            resolve();
            /*$http.post('url', cosmonaut, function (data) {
                if( ! data){
                    return reject();
                }
                
                resolve(data);
            });*/
        });
	};

	cosmonautService.getAllCosmonauts = function(){
        return $q(function(resolve, reject){
            resolve(cosmonauts = [
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
            ]);
            /*$http.get('url', {}, function(data){
                if( ! data){
                    return reject();
                }
                
                return resolve(data);
            });*/
        });
    };

    cosmonautService.removeCosmonaut = function(index){
        return $q(function(resolve, reject){
            $http.post('url', index, function(data){
                if( ! data){
                    return reject();
                }
                
                return resolve(data);
            });
        });
    };

	return cosmonautService;
});