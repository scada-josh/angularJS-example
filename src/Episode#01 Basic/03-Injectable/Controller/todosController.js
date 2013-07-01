Todos.controller('todosCtrl',function($scope, TodosModel) {

	$scope.todos = TodosModel.todos();

	$scope.addTodo = function(){
		if ($scope.todoText) {
			$scope.todos.push({text:$scope.todoText, done:false});
			$scope.todoText = '';
		}
		
	}

	$scope.remaining = function(){
		//alert('55');
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
			//count += todo.done ? 0 : 1;
			if(todo.done)
				count = count +1;
		});
		return count;
  
	}


	$scope.archive = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo) {
			if (!todo.done) 
				$scope.todos.push(todo);
		});
	};
	
});
