//D3 DEMO

//executes script when window is loaded
window.onload = function(){
	var w= 900, h= 500;

	//gets the <body> element from the DOM
    var container = d3.select("body") 
	    //puts a new svg in the body
	    .append("svg")
	    //assign the width
	    .attr("width", w)
	     //assign the height
	    .attr("height", h)
	    //always assign a class (as the block name) for styling and future selection
	    .attr("class","container");

	//adds a <rect> </rect> element, this is an html elements. we are appending this to
	//the contianer svg and not to d3.
	var rectangle= container.append("rect")
		//a single value is a datum--data
		.datum(400)
		//creates an anonomous fumction
	    .attr("width", function(d){
	    	return d * 2;
	    })
	    .attr("height", function(d){
	    	return d;
	    })
	    .attr("x",50)
	    .attr("y",50)
	    .attr("class","rectangle");

	 var dataArray= [10,20,30,40,50];

	 var cityPop= [
	    {
	    	city: 'Iva',
	    	population: 1252
	    },
	    {
	    	city: 'Pulaski',
	    	population: 3554
	    },
	    {
	    	city: 'Mercer',
	    	population: 1732
	    },
	    {
	    	city: 'Whitefish',
	    	population: 6649
	    }
    ];

     //find the minimum value of the array
    var minPop = d3.min(cityPop, function(d){
        return d.population;
    });

    //finds the maximum value of the array
    var maxPop= d3.max(cityPop, function(d){
    	return d.population;
    });

    var x = d3.scale.linear()
     	.range([90, 810])
     	.domain([0, 3]);
    //scales for circles center y coord
    var y = d3.scale.linear()
    	.range([440,95])
    	.domain([
    		minPop,
    		maxPop
    	]);

    //color scale generator
    var color = d3.scale.linear()
    	.range([
    		"#febaaa",
    		"#c82803"
    	])
    	.domain([
    		minPop,
    		maxPop
    	]);

	 var circles = container.selectAll(".circles")
	 	//feeds in the array
	 	.data(cityPop)
	 	.enter()
	 	//adds a circle for each datum
	 	.append("circle")
	 	//applies a class name to all circles
	 	.attr("class","circles")
	 	.attr("id",function(d){
	 		return d.city;
	 	})
	 	//circle's radius
	 	.attr("r", function(d){
	 		var area = d.population * 1;
	 		return Math.sqrt(area/Math.PI);
        })
           //x coordinate
          .attr("cx", function(d, i){ 
            return x(i);
        })
          //y coordinate
          .attr("cy", function(d){ 
            return y(d.population);
        })
        .style("fill", function(d,i){
        	return color(d.population);
        })
        .style("stroke","#000");
     


    
}






