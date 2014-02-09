App.Lesson = DS.Model.extend({
	title: DS.attr('string'),
	tasks: DS.hasMany('task', { async: true })
});

App.Lesson.FIXTURES = [
	{
		id: 1,
		title: "Lesson 1",
		tasks: [1,2,3]
	},
	{
		id: 2,
		title: "Lesson 2",
		tasks: []
	},
	{
		id: 3,
		title: "Lesson 3",
		tasks: []
	}
];

