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
	        }]
	    }]
	});

	document.getElementById('container').addEventListener("click", recordClick);