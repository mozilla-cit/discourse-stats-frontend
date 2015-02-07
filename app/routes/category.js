import Ember from 'ember';
import ajax from 'ic-ajax';
import CategoryAdapter from 'discourse-stats-frontend/adapters/category';

export default Ember.Route.extend({
	model: function() {
		var adapter = CategoryAdapter.create();
		return adapter.find();
	}
});