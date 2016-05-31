toDoApp.controller('ToDoController', function() {

  var self = this

  self.todos = [{task: "ToDo1", completed: true}, {task: "ToDo2", competed: false}, {task: "ToDo3", completed: true}]

  self.addToDo = function(text) {
    self.todos.push({ task: text, completed: false })
  }

  self.removeToDo = function() {
    self.todos.pop();
  }
})