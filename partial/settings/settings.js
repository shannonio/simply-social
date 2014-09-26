angular.module('simplySocial').controller('SettingsCtrl',function($scope){
  $scope.user = {
    name: "Shannon Bertucci",
    email: "hello@shannon.io",
    password: "password"
  };

  $scope.notificationOptions = [
    {label: "email me when my posts are marked as favorites"},
    {label: "email me when im mentioned"},
    {label: "email me when i get a reply"},
    {label: "email me when someone follows me"}
  ];

  $scope.privacyOptions = [
    {label: "allow anyone to tag me"},
    {label: "only allow people I follow to tag me"},
    {label: "dont allow anyone to tag me"},
    {label: "add a location to my posts"},
    {label: "let others find me by email"},
    {label: "tailor ads based on my information"}
  ];

});