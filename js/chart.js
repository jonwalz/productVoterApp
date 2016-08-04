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
			y: imageOptions[i].displays,
			label: imageOptions[i].name
		});
	});

}

function renderChart() {

	// set width of chart 
	var chartWidthRef = document.getElementById('chartStyle').clientWidth;
	CanvasJS.addColorSet("greenShades", [
		"#2F4F4F",
		"#008080",
		"#2E8B57",
		"#3CB371",
		"#90EE90"
	]);
	chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		animationDuration: 2000,
		colorSet: "greenShades",
		width: chartWidthRef,
		height: 460,
		backgroundColor: "#4EAB59",
		axisX: {
			labelAutoFit: true,
			labelFontSize: 12,
			labelAngle: 45,
			labelFontColor: "#F2E394",
			title: "Items",
			titleFontColor: '#F2E394'
		},
		axisY: {
			labelAutoFit: true,
			labelFontSize: 12,
			labelFontColor: "#F2E394",
			title: "Number of Votes",
			titleFontColor: '#F2E394'
		},
		title: {
			text: "Voting Data",
			fontColor: "#F2E394",
		},
		data: [{
			showInLegend: true,
			legendText: "Votes",
			indexLabelFontColor: "#F2E394",
			type: "stackedColumn",
			dataPoints: dataPointsVotes,
		}, {
			showInLegend: true,
			legendText: "Views",
			type: "stackedColumn",
			dataPoints: dataPointsViews
		}]
	});
	chart.render();
	console.log(dataPointsViews);
}
document.getElementById('container').addEventListener("click", recordClick, true);