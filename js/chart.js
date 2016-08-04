var chart;

// datapoints constructor
var dataPointsVotes = [];
var dataPointsViews = [];

function dataConstruct() {
	imageOptions.forEach(function(el, i) {
		dataPointsVotes.push({
			y: imageOptions[i].upVotes,
			label: imageOptions[i].name
		});
	});

	imageOptions.forEach(function(el, i) {
		dataPointsViews.push({
			y: imageOptions[i].displays
		});
	});

}

function renderChart() {

	// set width of chart 
	var chartWidthRef = document.getElementById('chartStyle').clientWidth;

	chart = new CanvasJS.Chart("chartContainer", {
		width: chartWidthRef,
		height: 260,
		backgroundColor: "#4EAB59",
		axisX: {
			labelFontColor: "#F2E394",
			title: "Items",
			titleFontColor: '#F2E394'
		},
		axisY: {
			labelFontColor: "#F2E394",
			title: "Number of Votes",
			titleFontColor: '#F2E394'
		},
		title: {
			text: "Voting Data",
			fontColor: "#F2E394",
		},
		data: [{
			indexLabelFontColor: "#F2E394",
			type: "stackedBar100",
			dataPoints: dataPointsVotes,
		}, {
			type: "stackedBar100",
			dataPoints: dataPointsViews
		}]
	});
	chart.render();
	console.log(dataPointsViews);
}
document.getElementById('container').addEventListener("click", recordClick, true);