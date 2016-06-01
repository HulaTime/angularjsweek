toDoApp.factory('ToDoFactory', function() {

  Todo = function(todoText){
    this.task = todoText
    this.completed = (typeof completed !== 'undefined') ? completed : false
  }

  Todo.prototype.complete = function() {
    this.completed = true
  }
  return Todo
})
