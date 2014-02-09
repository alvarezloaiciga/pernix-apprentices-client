App.Task = DS.Model.extend({
	title: DS.attr(),
	description: DS.attr(),
	objective: DS.attr(),
	lesson: DS.belongsTo('lesson')
});