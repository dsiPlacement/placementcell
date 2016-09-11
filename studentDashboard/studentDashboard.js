var dashboard = angular.module('studentDashboard', ["ngRoute"]);
dashboard.controller('sidebar', function($scope) {
    $scope.pageList = [{
      pageName: 'Company Feeds',
      link : 'companyFeeds'
    } , {
        pageName: 'Profile',
        link: 'studentProfile'
    }, {
        pageName: 'Messages',
        link: 'studentMessages'
    }, {
        pageName: 'Recruiters',
        link: 'registeredCompanies'
    }, {
        pageName: 'Contact',
        link: 'contactForm'
    }, {
        pageName: 'Campus Drives',
        link: 'upcomingCompanies'
    }];
});

dashboard.config(function($routeProvider) {
    $routeProvider
        .when("/studentProfile", {
            templateUrl: "profile.html",
            activetab: 'Profile'
        })
        .when("/studentMessages", {
            templateUrl: "messages.html",
            activetab: 'Messages'
        })
        .when("/registeredCompanies", {
            templateUrl: "recruiters.html"
        })
        .when("/contactForm", {
            templateUrl: "../contact.html"
        })
        .when("/upcomingCompanies", {
            templateUrl: "upcomingCompanies.html"
        });
});
