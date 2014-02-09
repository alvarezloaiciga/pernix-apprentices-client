App.Task = DS.Model.extend({
	title: DS.attr(),
	description: DS.attr(),
	objective: DS.attr(),
	lesson: DS.belongsTo('lesson')
})

App.Task.FIXTURES = [
	{
		id: 1,
		title: "Guess the number",
		description: "Given this and this and this",
		objective: "Learn ruby & test unit"
	},
	{
		id: 2,
		title: "Mad Libs",
		description: "Given this and this and this",
		objective: "Learn ruby & test unit"
	},
	{
		id: 3,
		title: "LCD Numbers",
		description: "Given this and this and this",
		objective: "Learn ruby & test unit"
	},
];

