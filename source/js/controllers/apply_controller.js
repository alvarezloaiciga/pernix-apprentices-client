App.ApplyController = Ember.ObjectController.extend({
	github: '',
	email: '',

	githubError: null,
	emailError: null,
	validForm: true,

  	applySuccess: false,

  	isEmail: function(val){
  		var error = false;
  		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	if(!(re.test(this.get(val)))){
  			error = true;
  		}

  		this.set(val+"Error", error);

  		return !error;
  	},

  	isNotEmpty: function(val){
  		var error = false;
  		if (!(result = !!this.get(val))){
  			error = true;
  		}

  		this.set(val+"Error", error);

  		return result;
  	},

  	validateGithub: function(){
  		return this.isNotEmpty('github');
  	},

  	validateEmail: function(){
  		return this.isNotEmpty('email') && this.isEmail('email');
  	},

  	isValidForm: function(){
  		return (this.isNotEmpty('github') && this.isNotEmpty('email') && this.isEmail('email'));
  	},

	actions: {
		createApplicant: function(){
			var github = this.get('github');
			var email = this.get('email');

       		var host = this.store.adapterFor('application').host;
       		var namespace = this.store.adapterFor('application').namespace;
       		var appliesUrl = [ host, namespace, 'applies' ].join('/');

			var template = this;
			console.log(this.isValidForm());

			if(this.isValidForm()){
				$.post(appliesUrl, { apply: { email: email, github: github } },
					function(data, textStatus, jqXHR){
						template.set('github', '');
						template.set('email', '');
  						template.set("githubError", false);
  						template.set("emailError", false);
						template.set('applySuccess', true);
						template.set('validForm', true);
					}
				)
			} else {
				template.set('applySuccess', false);
				template.set('validForm', false);
			}

			
		}
	}
});