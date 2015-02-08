import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({
	find: function() {
		return ajax("").then(function(data){
			var labelData = [];
			var usersWatching = [];
			var usersTracking = [];
			for (var i = 0; i < data.data.length; i++) {
				labelData[i] = data.data[i].name;
				usersWatching[i] = data.data[i].users_watching;
				usersTracking[i] = data.data[i].users_tracking;
			}
			return {
				full: data,
				chart: {
					labels: labelData,
					datasets: [{
						label: "Watching",
            			fillColor: "rgba(220,220,220,0.5)",
            			strokeColor: "rgba(220,220,220,0.8)",
            			highlightFill: "rgba(220,220,220,0.75)",
            			highlightStroke: "rgba(220,220,220,1)",
						data: usersWatching
					},
					{
						label: "Tracking",
            			fillColor: "rgba(151,187,205,0.5)",
            			strokeColor: "rgba(151,187,205,0.8)",
            			highlightFill: "rgba(151,187,205,0.75)",
            			highlightStroke: "rgba(151,187,205,1)",
						data: usersTracking
					}]
				}
			};
		});
	}
});