const app = angular.module('mainApp', ['ngRoute'])

app.config(($routeProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: './views/home.html'
    })
    .when('/users', {
      templateUrl: './resources/users/userView.html'
    })
    .when('/products', {
      templateUrl: './resources/products/productsView.html'
    })
})
