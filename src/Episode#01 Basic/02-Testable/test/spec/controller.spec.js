describe('todoCtrl', function(){
	var scope, ctrl;

	beforeEach(function(){
		scope = {},
		ctrl = new todoCtrl(scope);
	});

	it('should set the default value of propertyName model', function(){
		//expect(1).toEqual(1);
		expect(scope.propertyName).toBe('age');
	});

	it('The first element of todos is - learn angular', function(){
		//expect(1).toEqual(1);
		expect(scope.todos[0].text).toEqual('learn angular');
	});
})