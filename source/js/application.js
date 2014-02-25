window.App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.reopen({
  host: 'http://pernix-apprentices-api.herokuapp.com',
  //host: 'http://localhost:3000',
  namespace: 'api/v1'
});

App.ApplicationSerializer = DS.ActiveModelSerializer.extend({});
App.ShowdownConverter = new Showdown.converter();