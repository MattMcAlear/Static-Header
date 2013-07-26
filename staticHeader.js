// Purpose: Animated Logo for Design Firm
// By: 		Matt M.
// Date:	08-26-2012
setTimeout(function(){
	increment=1;
},950);
var canvas2 = document.getElementById('logo');
var ctx2 = canvas2.getContext('2d');

var x=canvas2.width/2;
var y=canvas2.height/2;

var rectWidth = 50;
var rectHeight = 20;

var rectWidth2 = 70;
var rectHeight2 = 20;

var tSide=50;
var tHeight = tSide * (Math.sqrt(3)/2);

var tSideSmall=tSide/2;
var tHeightSmall = tSideSmall * (Math.sqrt(3)/2);

var rotate = 1;
var rotate2 = 1;

var increment = 10

var t1 = "#633";
var t2 = "#069";
var t3 = "#969";
var t4 = "#C96";
var t5 = "black";
var t6 = "gray";

function init(){
	return setInterval(draw, 50);
}

function clear(){
	ctx2.clearRect(0,0,canvas2.width,canvas2.height);	
}

function draw(){
	clear();
	
	triangle();
}

function triangle(){
	if(rotate > 360){
		rotate=1;	
	}else{
		rotate=rotate+increment;
	}
	
	if(rotate2 > 360){
		rotate2=1;
	}else{
		rotate2=rotate2+5;	
	}
	ctx2.save();
	ctx2.beginPath();
	ctx2.moveTo(x,y);
	ctx2.lineTo(x+(tSide/2),y+(tHeight));
	ctx2.lineTo(x+(tSide/2)-(tSide),y+(tHeight));
	ctx2.lineTo(x,y);
	ctx2.fillStyle="#333"
	ctx2.fill();
	ctx2.closePath();
	ctx2.clip();
	/*
	//5th triangles
	ctx2.save();
	// update
	var date = new Date();
	var time = date.getTime();
	var amplitude = tHeightSmall;
	// in ms
	var period = 5000;
	var centerY = canvas2.height / 2 + tHeight / 2;
	var nextY = amplitude * Math.sin(time * 2 * Math.PI / period) + centerY;
	ctx2.translate(canvas2.width / 2, nextY);
	ctx2.rotate((Math.PI/180)*rotate2);
	ctx2.beginPath();
	ctx2.fillStyle="black";
	
	ctx2.moveTo(0,0);
	ctx2.lineTo(0+(tSideSmall/2),0+(tHeightSmall));
	ctx2.lineTo(0+(tSideSmall/2)-(tSideSmall),0+(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	
	ctx2.beginPath();
	ctx2.fillStyle="black";
	ctx2.moveTo(0,0);
	ctx2.lineTo(0+(tHeightSmall),0-(tSideSmall/2));
	ctx2.lineTo(0+(tHeightSmall),0-(tSideSmall/2)+(tSideSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	
	ctx2.beginPath();
	ctx2.fillStyle="black";
	ctx2.moveTo(0,0);
	ctx2.lineTo(0-(tHeightSmall),0+(tSideSmall/2));
	ctx2.lineTo(0-(tHeightSmall),0+(tSideSmall/2)-(tSideSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	
	ctx2.beginPath();
	ctx2.fillStyle="black";
	ctx2.moveTo(0,0);
	ctx2.lineTo(0-(tSideSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0-(tSideSmall/2)+(tSideSmall),0-(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	ctx2.restore();
	*/
	//4th triangles
	ctx2.save();
	ctx2.beginPath();
	ctx2.moveTo(x,y+(tHeightSmall*2));
	ctx2.lineTo(x+(tSideSmall/2),y+(tHeightSmall*2)-(tHeightSmall));
	ctx2.lineTo(x+(tSideSmall/2)-(tSideSmall),y+(tHeightSmall*2)-(tHeightSmall));
	ctx2.lineTo(x,y+(tHeightSmall*2));
	ctx2.closePath();
	ctx2.clip();
	
	ctx2.save();
	ctx2.translate(canvas2.width / 2, canvas2.height / 2+(tHeightSmall*2));
	ctx2.rotate((Math.PI/180)*rotate);
	//1
	ctx2.beginPath();
	ctx2.fillStyle=t1;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0+(tSideSmall/2),0+(tHeightSmall));
	ctx2.lineTo(0+(tSideSmall/2)-(tSideSmall),0+(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//2
	ctx2.beginPath();
	ctx2.fillStyle=t2;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0+(tHeightSmall/2),0+(tHeightSmall));
	ctx2.lineTo(0+(tSideSmall),0);
	ctx2.lineTo(0,0);
	ctx2.fill();
	//3
	ctx2.beginPath();
	ctx2.fillStyle=t3;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0+(tSideSmall),0);
	ctx2.lineTo(0+(tHeightSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//4
	ctx2.beginPath();
	ctx2.fillStyle=t4;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0-(tSideSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0+(tSideSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//5
	ctx2.beginPath();
	ctx2.fillStyle=t5;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0-(tSideSmall),0);
	ctx2.lineTo(0-(tSideSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//6
	ctx2.beginPath();
	ctx2.fillStyle=t6;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0-(tSideSmall),0);
	ctx2.lineTo(0-(tSideSmall/2),0+(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	
	ctx2.restore();
	ctx2.restore();
	
	//1st triangles
	ctx2.save();
	ctx2.beginPath();
	ctx2.moveTo(x,y);
	ctx2.lineTo(x+(tSideSmall/2),y+(tHeightSmall));
	ctx2.lineTo(x+(tSideSmall/2)-(tSideSmall),y+(tHeightSmall));
	ctx2.lineTo(x,y);
	ctx2.closePath();
	ctx2.clip();
	
	ctx2.save();
	ctx2.translate(canvas2.width / 2, canvas2.height / 2);
	ctx2.rotate((Math.PI/180)*rotate);
	//1
	ctx2.beginPath();
	ctx2.fillStyle=t1;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0+(tSideSmall/2),0+(tHeightSmall));
	ctx2.lineTo(0+(tSideSmall/2)-(tSideSmall),0+(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//2
	ctx2.beginPath();
	ctx2.fillStyle=t2;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0+(tHeightSmall/2),0+(tHeightSmall));
	ctx2.lineTo(0+(tSideSmall),0);
	ctx2.lineTo(0,0);
	ctx2.fill();
	//3
	ctx2.beginPath();
	ctx2.fillStyle=t3;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0+(tSideSmall),0);
	ctx2.lineTo(0+(tHeightSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//4
	ctx2.beginPath();
	ctx2.fillStyle=t4;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0-(tSideSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0+(tSideSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//5
	ctx2.beginPath();
	ctx2.fillStyle=t5;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0-(tSideSmall),0);
	ctx2.lineTo(0-(tSideSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//6
	ctx2.beginPath();
	ctx2.fillStyle=t6;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0-(tSideSmall),0);
	ctx2.lineTo(0-(tSideSmall/2),0+(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	
	ctx2.restore();
	ctx2.restore();
	
	//2nd triangles
	ctx2.save();
	ctx2.beginPath();
	ctx2.moveTo(x-tSideSmall,y+(tHeightSmall*2));
	ctx2.lineTo(x-tSideSmall+(tSideSmall/2),y+(tHeightSmall*2)-(tHeightSmall));
	ctx2.lineTo(x,y+(tHeightSmall*2));
	ctx2.lineTo(x-tSideSmall,y+(tHeightSmall*2));
	ctx2.closePath();
	ctx2.clip();
	
	ctx2.save();
	ctx2.translate(canvas2.width / 2-tSideSmall, canvas2.height / 2+(tHeightSmall*2));
	ctx2.rotate((Math.PI/180)*rotate+67);
	//1
	ctx2.beginPath();
	ctx2.fillStyle=t1;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0+(tSideSmall/2),0+(tHeightSmall));
	ctx2.lineTo(0+(tSideSmall/2)-(tSideSmall),0+(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//2
	ctx2.beginPath();
	ctx2.fillStyle=t2;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0+(tHeightSmall/2),0+(tHeightSmall));
	ctx2.lineTo(0+(tSideSmall),0);
	ctx2.lineTo(0,0);
	ctx2.fill();
	//3
	ctx2.beginPath();
	ctx2.fillStyle=t3;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0+(tSideSmall),0);
	ctx2.lineTo(0+(tHeightSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//4
	ctx2.beginPath();
	ctx2.fillStyle=t4;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0-(tSideSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0+(tSideSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//5
	ctx2.beginPath();
	ctx2.fillStyle=t5;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0-(tSideSmall),0);
	ctx2.lineTo(0-(tSideSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//6
	ctx2.beginPath();
	ctx2.fillStyle=t6;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0-(tSideSmall),0);
	ctx2.lineTo(0-(tSideSmall/2),0+(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	
	ctx2.restore();
	ctx2.restore();
	
	//3rd triangles
	ctx2.save();
	ctx2.beginPath();
	ctx2.moveTo(x+tSideSmall,y+(tHeightSmall*2));
	ctx2.lineTo(x+tSideSmall-(tSideSmall/2),y+(tHeightSmall*2)-(tHeightSmall));
	ctx2.lineTo(x,y+(tHeightSmall*2));
	ctx2.lineTo(x+tSideSmall,y+(tHeightSmall*2));
	ctx2.closePath();
	ctx2.clip();
	
	ctx2.save();
	ctx2.translate(canvas2.width / 2+tSideSmall, canvas2.height / 2+(tHeightSmall*2));
	ctx2.rotate((Math.PI/180)*rotate-67);
	//1
	ctx2.beginPath();
	ctx2.fillStyle=t1;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0+(tSideSmall/2),0+(tHeightSmall));
	ctx2.lineTo(0+(tSideSmall/2)-(tSideSmall),0+(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//2
	ctx2.beginPath();
	ctx2.fillStyle=t2;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0+(tHeightSmall/2),0+(tHeightSmall));
	ctx2.lineTo(0+(tSideSmall),0);
	ctx2.lineTo(0,0);
	ctx2.fill();
	//3
	ctx2.beginPath();
	ctx2.fillStyle=t3;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0+(tSideSmall),0);
	ctx2.lineTo(0+(tHeightSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//4
	ctx2.beginPath();
	ctx2.fillStyle=t4;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0-(tSideSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0+(tSideSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//5
	ctx2.beginPath();
	ctx2.fillStyle=t5;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0-(tSideSmall),0);
	ctx2.lineTo(0-(tSideSmall/2),0-(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	//6
	ctx2.beginPath();
	ctx2.fillStyle=t6;
	ctx2.moveTo(0,0);
	ctx2.lineTo(0-(tSideSmall),0);
	ctx2.lineTo(0-(tSideSmall/2),0+(tHeightSmall));
	ctx2.lineTo(0,0);
	ctx2.fill();
	
	ctx2.restore();
	ctx2.restore();
	
	//Draw outline
	ctx2.beginPath();
	ctx2.moveTo(x,y);
	ctx2.lineTo(x+(tSide/2),y+(tHeight));
	ctx2.lineTo(x+(tSide/2)-(tSide),y+(tHeight));
	ctx2.lineTo(x,y);
	ctx2.closePath();
	ctx2.lineWidth=3;
	ctx2.stroke();		
}

init();