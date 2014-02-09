App.Lesson = DS.Model.extend({
	title: DS.attr('string'),
	tasks: DS.hasMany('task')
});