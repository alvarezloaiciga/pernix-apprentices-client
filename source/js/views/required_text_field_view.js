App.RequiredTextFieldView = Ember.TextField.extend({
	focusOut: function(event){
		var controller = this.get('_parentView.controller');
		var viewName = this.get('viewName');
		var validatorName = "" + Em.String.classify(viewName);
		controller["validate"+validatorName]();
	}
});