toDoApp.service('ToDoService', ['$http', function($http) {

  this.getAll = function() {
    $http.get('http://quiet-beach-24792.herokuapp.com/todos.json')
    .then(function(response){
      'A-ok'
       console.log(response)
    }, {
       'Not ok'
    })
  }

}])