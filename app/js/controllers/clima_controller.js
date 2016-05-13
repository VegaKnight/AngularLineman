angular.module("app").controller('ClimaController', function ($scope,YahooService) {
    function onLoadSuccess(data) {
        $scope.dataClima = angular.fromJson(data);
        
        $scope.query = $scope.dataClima.query;
        $scope.channel = $scope.query.results.channel;
        $scope.titleYahoo = $scope.channel.title;
        
        $scope.hora = $scope.channel.lastBuildDate;
        $scope.temp = $scope.channel.item.condition.temp;
        $scope.tempF = parseInt($scope.temp);
        $scope.tempC = ($scope.tempF - 32)/1.0;
    }
    YahooService.findWeather().success(onLoadSuccess).error(onLoadSuccess);
});


