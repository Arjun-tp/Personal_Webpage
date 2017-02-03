app.controller('homeController',['$scope',function($scope) {

    $scope.social = {
        linkedin: 'https://www.linkedin.com/in/arjun.tp',
        skype: 'skype:arjun_bhz',
        github: 'https://github.com/arjun.tp/'
    };
    $scope.phone = '+91 9945267042';
    $scope.address = {street: 'Koramangala, Bangalore - 560068', state: 'KA, India.'};
    $scope.mail = 'arjuntpnambiar@gmail.com';
}]);