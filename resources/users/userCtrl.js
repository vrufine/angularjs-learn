app.controller('userCtrl', ($scope, $http) => {
  $scope.users = []
  $scope.newUser = {
    email: '',
    password: ''
  }
  $scope.getUsers = () => {
    $http.get('http://localhost:3000/usuarios')
      .then(res => {
        $scope.users = res.data
      })
  }
  $scope.registerNewUser = () => {
    $http({
      method: 'POST',
      url: 'http://localhost:3000/usuarios',
      headers: {
        'Content-Type': 'application/json'
      },
      data: $scope.newUser
    }).then(res => {
      $scope.newUser = {
        email: '',
        password: ''
      }
      $scope.getUsers()
    }).catch(err => {
      alert('Error!')
    })
  }
  $scope.deleteUser = (id) => {
    $http({
      method: 'DELETE',
      url: `http://localhost:3000/usuarios/${id}`,
    }).then(res => {
      $scope.getUsers()
    }).catch(err => {
      alert('Error!')
    })
  }
  $scope.getUsers()
})
