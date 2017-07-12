/**
 * Created by root on 12/7/17.
 */
(function() {
    'use strict';

    angular
        .module('imagecrop')
        .factory('NetworkFactory', NetworkFactory);

    /** @ngInject */
    function NetworkFactory($http, $q) {
        var factory = {};
        factory.get = function(url,data){

            var finalUrl =  API_VERSION+'/';
            var defer = $q.defer();
            if(data!=undefined)
                finalUrl = finalUrl+url+'?'+data;
            else
                finalUrl = finalUrl+url;
            $http.get(finalUrl)
                .success(function(res){
                    defer.resolve(res);
                })
                .error(function (err, status) {
                    defer.resolve(err);
                });
            return defer.promise;
        };

        factory.post = function(url,data){
            var finalUrl = API_VERSION+'/';
            var defer = $q.defer();
            finalUrl = finalUrl+url;
            $http({
                method: 'POST',
                url: finalUrl,
                data: data,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .success(function(res){
                    defer.resolve(res);
                })
                .error(function(err,status){
                    defer.resolve(err);
                });
            return defer.promise;
        };
        return factory;
    }

})();