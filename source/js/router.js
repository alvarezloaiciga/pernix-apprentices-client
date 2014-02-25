App.Router.map(function(){
	this.resource('lessons', { path: '/'}, function(){
		this.resource('lesson', { path: '/:lesson_id'}, function(){
			this.resource('task', { path: 'tasks/:task_id' })
		});
	});

	this.route('sign_in');
	this.route('apply');
});

App.LessonsRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('lesson');
	}
});

App.LessonRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('lesson', params.lesson_id);
	}
});

App.LessonTaskRoute = Ember.Route.extend({
	model: function(params){
		console.log(params);
		console.log(this.store.find('task', params.task_id).get('length'));
		return this.store.find('task', params.task_id);
	}
});