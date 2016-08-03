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

	console.log(dataPointsViews);
}
console.log("data views:" + dataPointsViews);

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
			// dataPoints: [{
			// 	color: '#FF974F',
			// 	label: imageOptions[0].name,
			// 	y: imageOptions[0].upVotes
			// }, {
			// 	color: '#d47e42',
			// 	label: imageOptions[1].name,
			// 	y: imageOptions[1].upVotes
			// }, {
			// 	color: '#b16835',
			// 	label: imageOptions[2].name,
			// 	y: imageOptions[2].upVotes
			// }, {
			// 	color: '#8a5029',
			// 	label: imageOptions[3].name,
			// 	y: imageOptions[3].upVotes
			// }, {
			// 	color: '#704120',
			// 	label: imageOptions[4].name,
			// 	y: imageOptions[4].upVotes
			// }, {
			// 	color: '#4e2d16',
			// 	label: imageOptions[5].name,
			// 	y: imageOptions[5].upVotes
			// }]
		}, {
			type: "stackedBar100",
			dataPoints: [{
				y: imageOptions[0].displays - imageOptions[0].upVotes
			}, {
				y: imageOptions[1].displays - imageOptions[1].upVotes
			}, {
				y: imageOptions[2].displays - imageOptions[2].upVotes
			}, {
				y: imageOptions[3].displays - imageOptions[3].upVotes
			}, {
				y: imageOptions[4].displays - imageOptions[4].upVotes
			}, {
				y: imageOptions[5].displays - imageOptions[5].upVotes
			}, ]
		}]
	});
	chart.render();
}
document.getElementById('container').addEventListener("click", recordClick, true);