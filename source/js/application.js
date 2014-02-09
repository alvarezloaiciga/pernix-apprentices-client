window.App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.reopen({
  host: 'http://pernix-apprentices-api.herokuapp.com',
  namespace: 'api/v1'
});

App.ApplicationSerializer = DS.ActiveModelSerializer.extend({});