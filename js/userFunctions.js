var app = angular.module('myApp', []);
app.run(function($rootScope) {
    $rootScope.names = [{
        name: 'Vinayak',
        country: 'India'
    }, {
        name: 'Tanish',
        country: 'India'
    }, {
        name: 'Saatvik',
        country: 'USA'
    }];
});
app.controller('myCtrl', function($scope) {
    $scope.names = [{
        name: 'Jani',
        country: 'Norway'
    }, {
        name: 'Hege',
        country: 'Sweden'
    }, {
        name: 'Kai',
        country: 'Denmark'
    }];
});
app.controller('myCt', function($scope) {
    $scope.names = [{
        name: 'Jani',
        country: 'Norway'
    }, {
        name: 'Hege',
        country: 'Sweden'
    }, {
        name: 'Kai',
        country: 'Denmark'
    }, {
        name: 'Karan',
        country: 'China'
    }, {
        name: 'Yashwanth',
        country: 'Indinesia'
    }, {
        name: 'Rohan',
        country: 'Japan'
    }];
});

app.controller('addSearch', function($scope) {
    $scope.addDetails = function() {
        var count = $scope.names.length + 1;
        var tempName = $scope.name,
            tempCountry = $scope.country;
        if (tempName && tempCountry) {
            $scope.names.splice(count, 0, {
                name: tempName,
                country: tempCountry
            });
        } else {
            $(document).ready(function() {
                $("#nameInput").addClass("error field");
                $("#countryInput").addClass("error field");
            });
        }
    }
});
$('select.dropdown')
  .dropdown('set selected', ['meteor', 'ember'])
;
