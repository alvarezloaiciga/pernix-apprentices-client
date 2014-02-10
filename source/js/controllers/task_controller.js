App.TaskController = Ember.ObjectController.extend({
	markdown: function(){
		var model = this.get('model');
		return App.ShowdownConverter.makeHtml(model.get('description'));
	}.property('description')
});