angular.module("app").controller('LoginController', function ($scope, $location, AuthenticationService,
        SidenavFactory, $mdDialog, $route, $mdSidenav) {
    $scope.credentials = {username: "", password: ""};

    var onLoginSuccess = function () {
        $location.path('/home');
    };


    $scope.login = function () {
        $scope.authResponse = AuthenticationService.crendentials;
        if ($scope.credentials.username === $scope.authResponse.username && $scope.credentials.password === $scope.authResponse.password) {
            $location.path('/iglesias');
            SidenavFactory.setSidenav(true);
            SidenavFactory.setToolbar(true);
        } else {
            $mdDialog.show(
                    $mdDialog.alert().clickOutsideToClose(true)
                    .title('Ups ')
                    .textContent('Contraseña o nombre de usuario incorrectos')
                    .ok('Ok')
                    );
        }
    };

    $scope.showSidenav = function () {
        $scope.show = SidenavFactory.getSidenav();
        return $scope.show;
    };
    $scope.showToolbar = function () {
        $scope.showT = SidenavFactory.getToolbar();
        $scope.toolbarTitle = SidenavFactory.getTitle();
        return $scope.showT;
    };
    $scope.irIglesias = function () {
        SidenavFactory.setSidenav(true);
        SidenavFactory.setToolbar(true);
        SidenavFactory.setTitle("Iglesias");
        $location.path('/iglesias');
    };
    $scope.irSitios = function () {
        SidenavFactory.setSidenav(true);
        SidenavFactory.setToolbar(true);
        SidenavFactory.setTitle("Sitios Turisticos");
        $location.path('/sitios');
    };
    $scope.irClima = function () {
        SidenavFactory.setSidenav(true);
        SidenavFactory.setToolbar(true);
        SidenavFactory.setTitle("Clima");
        $location.path('/clima');
    };
    $scope.menu = function () {
        if (SidenavFactory.getSidenav() === true) {
            SidenavFactory.setSidenav(false);
        } else {
            SidenavFactory.setSidenav(true);
        }
    };
});
