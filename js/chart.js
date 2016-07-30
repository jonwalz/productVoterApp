function renderChart() {
    	var chart = new CanvasJS.Chart("chartContainer", {
	    title: {
	        text: "Voting Data"
	    },
	    data: [{
	        // Change type to "doughnut", "line", "splineArea", etc.
	        type: "column",
	        dataPoints: [{
	            label: imageOptions[0].name,
	            y: imageOptions[0].upVotes
	        }, {
	            label: imageOptions[1].name,
	            y: imageOptions[1].upVotes
	        },
            {
	            label: imageOptions[2].name,
	            y: imageOptions[2].upVotes
	        },
            {
	            label: imageOptions[3].name,
	            y: imageOptions[3].upVotes
	        },
            {
	            label: imageOptions[4].name,
	            y: imageOptions[4].upVotes
	        },
            {
	            label: imageOptions[5].name,
	            y: imageOptions[5].upVotes
	        }]
	    }]
	});
    chart.render();
}
	document.getElementById('container').addEventListener("click", recordClick);