app.factory('YahooService',function($http,UrlRequest) {
    return {
        findWeather: function() {
            return $http.get(UrlRequest.url);
        }
    };
});


