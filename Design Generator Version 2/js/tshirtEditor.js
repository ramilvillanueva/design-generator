var canvas;
var line1;
var line2;
var line3;
var line4;

$(document).ready(function() {
	//changing color of the shirt
	$('li.color-preview').click(function() {
		var color = $(this).css("background-color");
		$('div#shirtDiv').css("background-color", color);
	});
	
	$('button#add-text').click(function() {
		var text = $("input#text-string").val();
	    var textSample = new fabric.Text(text, {
		    fontFamily: 'helvetica',
		    fill: '#000000',
		});
        canvas.add(textSample);
        canvas.centerObject(textSample);  
        $("div#texteditor").css('display', 'block');
        $("div#texteditor2").css('display', 'block');
	});
	  	  		  
	$('button#remove-selected').click(function() {
	    var activeObject = canvas.getActiveObject();
	    canvas.remove(activeObject);
	});
				
	$('input#text-fontcolor').miniColors({
		change: function(hex, rgb) {
			var activeObject = canvas.getActiveObject();
		    if (activeObject && activeObject.type === 'text') {
		    	activeObject.fill = this.value;
		    	canvas.renderAll();
		    }
		},
	});
		
	$('input#text-strokecolor').miniColors({
		change: function(hex, rgb) {
			var activeObject = canvas.getActiveObject();
		    if (activeObject && activeObject.type === 'text') {
		    	activeObject.strokeStyle = this.value;
		    	canvas.renderAll();
		    }
		},
	});

	$("#text-string").keyup(function(){
	  	var activeObject = canvas.getActiveObject();
	    if (activeObject && activeObject.type === 'text') {
	    	activeObject.text = this.value;
	    	canvas.renderAll();
	    }
	});

	$("div#drawingArea").hover(
		function() { 	        	
	        	 canvas.add(line1);
		         canvas.add(line2);
		         canvas.add(line3);
		         canvas.add(line4); 
		         canvas.renderAll();
	    },
	    function() {	        	
	        	 canvas.remove(line1);
		         canvas.remove(line2);
		         canvas.remove(line3);
		         canvas.remove(line4);
		         canvas.renderAll();
	    }
	);

	line1 = new fabric.Line([0,0,200,0], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); // top line
	line2 = new fabric.Line([199,0,200,439], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); // right line
	line3 = new fabric.Line([0,0,0,439], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); //left line
	line4 = new fabric.Line([0,439,200,439], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); //bottom line

	$("select#items").change(function(e){
	  		if($(this).val() == "1"){
	  			$("div#shirtDiv").css('height','590');
	  			$("img#shirt")[0].src = "img/crew_front.png";
				line1 = new fabric.Line([0,0,200,0], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); // top line
	   			line2 = new fabric.Line([199,0,200,439], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); // right line
	  			line3 = new fabric.Line([0,0,0,439], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); //left line
	  			line4 = new fabric.Line([0,439,200,439], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); //bottom line
	  		}
	  		else if ($(this).val() == "2"){
	  			$("div#shirtDiv").css('height','590');
	  			$("img#shirt")[0].src = "img/womens_crew_front.png";
	  			line1 = new fabric.Line([0,0,200,0], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); // top line
	   			line2 = new fabric.Line([199,0,200,439], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); // right line
	   			line3 = new fabric.Line([0,0,0,439], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); //left line
	   			line4 = new fabric.Line([0,439,200,439], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); //bottom line
	  		}
	  		else if ($(this).val() == "3"){	  		
	  			$("div#shirtDiv").css('height','590');
	  			$("img#shirt")[0].src = "img/hoodie.png";
	  			line1 = new fabric.Line([0,0,200,0], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); // top line
	   			line2 = new fabric.Line([199,0,200,439], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); // right line
	   			line3 = new fabric.Line([0,0,0,439], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); //left line
	   			line4 = new fabric.Line([0,439,200,439], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); //bottom line
	  		}
	  		else if ($(this).val() == "4"){	  		
	  			$("div#shirtDiv").css('height','590');
	  			$("img#shirt")[0].src = "img/longsleeves.png";
	  			line1 = new fabric.Line([0,0,200,0], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); // top line
	   			line2 = new fabric.Line([199,0,200,439], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); // right line
	   			line3 = new fabric.Line([0,0,0,439], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); //left line
	   			line4 = new fabric.Line([0,439,200,439], {"strokeWidth":2,hasControls:false,hasRotatingPoint:false,selectable:false}); //bottom line
	  		}
	  		// else if ($(this).val() == "5"){	  		
	  		// 	$("div#shirtDiv").css('height','630');
	  		// 	$("img#shirt")[0].src = "img/sando.png";
	  		// 	line1 = new fabric.Line([200,110,0,110], {"strokeWidth":2}); // top line
	  		// 	line2 = new fabric.Line([199,110,200,439], {"strokeWidth":2}); // right line
	   	// 		line3 = new fabric.Line([0,110,0,439], {"strokeWidth":2}); //left line
	   	// 		line4 = new fabric.Line([0,439,200,439], {"strokeWidth":2}); //bottom line
	  		// }
	  	});
	//setup front side canvas 
 	canvas = new fabric.Canvas('tcanvas');
 	canvas.on({
		'object:selected':onObjectSelected,
		'selection:cleared':onSelectedCleared
	});

 	var addImage = document.getElementById('addImage');
	addImage.addEventListener('change', handleImage, false);

	function handleImage(e) {
  		var reader = new FileReader();
  		reader.onload = function (event) {
    		var img = new Image();
    		img.onload = function () {
        		var imgInstance = new fabric.Image(img, {
            		scaleX: 1,
            		scaleY: 1
        		})
       		 canvas.add(imgInstance);
    		}
    		img.src = event.target.result;
		}
		reader.readAsDataURL(e.target.files[0]);
	}
});

function setFont(font){
	var activeObject = canvas.getActiveObject();
	if (activeObject && activeObject.type === 'text') {
	    activeObject.fontFamily = font;
	    canvas.renderAll();
	}
}

function onObjectSelected(e) {	 
    var selectedObject = e.target;
    $("input#text-string").val("");
    selectedObject.hasRotatingPoint = true
    if (selectedObject && selectedObject.type === 'text') {
    	//display text editor	    	
    	$("div#texteditor").css('display', 'block');
    	$("input#text-string").val(selectedObject.getText());	    	
    	$('input#text-fontcolor').miniColors('value',selectedObject.fill);
    	$('input#text-strokecolor').miniColors('value',selectedObject.strokeStyle);	
    	$("div#texteditor2").css('display', 'block');
    }
    else if (selectedObject && selectedObject.type === 'image'){
	    	//display image editor	
	    	$("#texteditor2").css('display', 'block');	    	
	    }
}

function onSelectedCleared(e) {
	$("div#texteditor").css('display', 'none');
	$("input#text-string").val("");
	$("div#texteditor2").css('display', 'none');
}