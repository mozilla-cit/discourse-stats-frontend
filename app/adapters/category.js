import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({
	find: function() {
		return ajax(""); // change this to reference window url?
	}
});