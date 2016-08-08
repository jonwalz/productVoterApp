var chart;

// initialize variables
var dataPointsVotes = [];
var dataPointsViews = [];
var localStorageDataVotes = [];
var localStorageDataViews = [];

    dataPointsViews = JSON.parse(localStorage.getItem('dataViews'));

function renderChart() {
    localVotes = getDataVotes();
    localViews = getDataViews();
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
            fontColor: "#F2E394"
        },
        data: [{
            showInLegend: true,
            legendText: "Votes",
            indexLabelFontColor: "#F2E394",
            type: "stackedColumn",
            dataPoints: localVotes
        }, {
            showInLegend: true,
            legendText: "Views",
            type: "stackedColumn",
            dataPoints: localViews
        }]
    });
    chart.render();
    var chartHide = document.getElementById('hideChart');
    chartHide.style.display = 'block';
}

// image click event listener
document.getElementById('container').addEventListener("click", recordClick, true);

// function to re-render chart after button press
function reChart() {
    dataConstruct();
    renderChart();
}