var chart;
function renderChart() {
    	chart = new CanvasJS.Chart("chartContainer", {
		height: 260,		
        backgroundColor: "#588C7E",
        axisX : {
            labelFontColor: "#F2E394"
        },
        axisY : {
            labelFontColor: "#F2E394"
        },
	    title: {
	        text: "Voting Data",
            fontColor: "#F2E394"
	    },
	    data: [{
	        // Change type to "doughnut", "line", "splineArea", etc.
            indexLabelFontColor: "#F2E394",
	        type: "doughnut",
	        dataPoints: [{
                color: '#FF974F',
	            label: imageOptions[0].name,
	            y: imageOptions[0].upVotes
	        }, {
                color: '#d47e42',
	            label: imageOptions[1].name,
	            y: imageOptions[1].upVotes
	        },
            {
                color: '#b16835',
	            label: imageOptions[2].name,
	            y: imageOptions[2].upVotes
	        },
            {
                color: '#8a5029',
	            label: imageOptions[3].name,
	            y: imageOptions[3].upVotes
	        },
            {
                color: '#704120',
	            label: imageOptions[4].name,
	            y: imageOptions[4].upVotes
	        },
            {
                color: '#4e2d16',
	            label: imageOptions[5].name,
	            y: imageOptions[5].upVotes
	        }]
	    }]
	});
    chart.render();
}
	document.getElementById('container').addEventListener("click", recordClick);
