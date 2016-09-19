
angular.module('full_starter', ['ionic', 'full_starter.controllers', 'full_starter.routes', 'full_starter.services', 'full_starter.directives'])

  .run(function ($ionicPlatform, appService) {

    $ionicPlatform.ready(function () {
      
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        // $cordovaKeyboard.hideAccessoryBar(true);
        // cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })