import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({
	find: function() {
		return ajax("stats/categories.json").then(function(data){
			var labelDataWT = [];
			var labelsFull = [];
			var usersWatchingWT = [];
			var usersTrackingWT = [];
			var j = 0;
			for (var i = 0; i < data.data.length; i++) {
				labelsFull[i] = data.data[i].name;
				// get our chart data for watchers and trackers
				if (data.data[i].users_watching == 0 && data.data[i].users_tracking == 0){
					console.log(data.data[i].name + " has no watchers or trackers, not showing on graph");
				}
				else {
					labelDataWT[j] = data.data[i].name;
					usersWatchingWT[j] = data.data[i].users_watching;
					usersTrackingWT[j] = data.data[i].users_tracking;
					j++;
				}
			}
			return {
				full: data,
				chartWT: {
					labels: labelDataWT,
					datasets: [{
						label: "Watching",
            			fillColor: "rgba(220,220,220,0.5)",
            			strokeColor: "rgba(220,220,220,0.8)",
            			highlightFill: "rgba(220,220,220,0.75)",
            			highlightStroke: "rgba(220,220,220,1)",
						data: usersWatchingWT
					},
					{
						label: "Tracking",
            			fillColor: "rgba(151,187,205,0.5)",
            			strokeColor: "rgba(151,187,205,0.8)",
            			highlightFill: "rgba(151,187,205,0.75)",
            			highlightStroke: "rgba(151,187,205,1)",
						data: usersTrackingWT
					}],
					options: {
						stackBar: true
					}
				}
			};
		});
	}
});