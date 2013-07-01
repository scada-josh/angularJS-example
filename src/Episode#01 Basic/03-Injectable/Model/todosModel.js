Todos.service('TodosModel',function() {

    this.todos = function() {
      
      return [
              {text:'learn angular', done:true},
              {text:'build an angular app', done:false},
              {text:'learn PHP', done:false}
              ];
    };

});