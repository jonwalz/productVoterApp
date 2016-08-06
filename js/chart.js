var chart;

// datapoints constructor
var dataPointsVotes = [];
var dataPointsViews = [];
var localStorageDataVotes = [];
var localStorageDataViews = [];

function dataConstruct() {
	dataPointsVotes = [];
	dataPointsViews = [];
	imageOptions.forEach(function(el, i) {
		dataPointsVotes.push({
			y: imageOptions[i].upVotes,
			label: imageOptions[i].name
		});
		localStorageDataVotes.push({
			y: imageOptions[i].upVotes,
			label: imageOptions[i].name
		});
	});

	// localStorageDataVotes = [];
	// localStorageDataViews = [];
	imageOptions.forEach(function(el, i) {
		dataPointsViews.push({
			y: imageOptions[i].displays,
			label: imageOptions[i].name
		});
	});

	// construct data for local storage
	
	localStorage.setItem('dataVotes', JSON.stringify(dataPointsVotes));
	localStorage.setItem('dataViews', JSON.stringify(dataPointsViews));
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
		height: 560,
		backgroundColor: "#4EAB59",
		axisX: {
			labelAutoFit: true,
			labelFontSize: 12,
			labelFontColor: "#F2E394",
			title: "Items",
			titleFontColor: '#F2E394'
		},
		axisY: {
			labelAutoFit: true,
			labelFontSize: 12,
			labelFontColor: "#F2E394",
			title: "Number of Views",
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
// image click event listener
document.getElementById('container').addEventListener("click", recordClick, true);
document.getElementById('container').addEventListener("click", dataConstruct, true);

// function to re-render chart after button press

function reChart(){
	dataPointsVotes = [];
	dataPointsViews = [];
	dataConstruct();
    renderChart();
}

// function to render chart if data persists in local storage
 
function renderLocalChart(event){
	if(localStorage.getItem('dataVotes') != null) {
		renderChart();
	} else {
		
	};
};