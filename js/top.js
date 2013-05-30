$(document).ready(init);

var canvas;
var context;
var interval;
var flag = -1;
var flag2 = -1;
var contentArray = [];
var r;

function init(){
	canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext('2d');
	window.addEventListener('resize', windowResizeHandler, false);
	
	var len = $("#menu > li").length;
	i = 0;
	$("#menu > li").each(function(){
		var circleX = ((++i)/(len+1))*canvas.width;
		var circleY = 100+Math.random()*(canvas.height-200);
		var circle = new Circle(circleX, circleY, Math.pow(-1, Math.round(Math.random()))*(Math.random()*5+1));
		contentArray.push(circle);
		$(this).css({ top: circleY-$(this).innerHeight()/2, left: circleX-$(this).innerWidth()/2 });
		$(this).children().attr("class", i);
	});
	$("#menu > li a").mouseover(mouseOverHandler);
	$("#menu > li a").mouseout(mouseOutHandler);
	interval = setInterval(loop, 50);
	$("#copyright").css("top", canvas.height-80);
	r = Math.sqrt((canvas.width*canvas.width+canvas.height*canvas.height)/4)/2;
}

function windowResizeHandler(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	var len = contentArray.length;
	for(var i = 0; i < len; i++)
		delete contentArray[i];
	contentArray = [];
	window.removeEventListener('resize', windowResizeHandler, false);
	clearInterval(interval);
	$("*").unbind();
	init();
}

function mouseOverHandler(e){
	flag = e.target.className-1;
	contentArray[flag].omega *= 2.5;
}

function mouseOutHandler(e){
	contentArray[flag].omega /= 2.5;
	contentArray[flag].radius = contentArray[flag].width = 0;
	flag2 = flag;
	flag = -1;
}

function loop(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = 'rgb(76, 204, 20)';
	for(var i = 0; i < 8; i++){
		context.beginPath();
		context.moveTo(0, 0);
		context.arc(0, 0, r, Math.PI/15*i, Math.PI/15*i+Math.PI/30, false);
		context.closePath();
		context.fill();
	}
	context.fillStyle = 'rgb(105, 64, 225)';
	for(i = 15; i < 23; i++){
		context.beginPath();
		context.moveTo(canvas.width, canvas.height);
		context.arc(canvas.width, canvas.height, r, Math.PI/15*i, Math.PI/15*i+Math.PI/30, false);
		context.closePath();
		context.fill();
	}
	
	var len = contentArray.length;
	for(i = 0; i < len; i++){
		contentArray[i].rotation += contentArray[i].omega;
		if(flag == i){
			contentArray[i].width -= (40+contentArray[i].width)/3.5;
			contentArray[i].drawSector(60, 300, contentArray[i].width);
			//contentArray[i].radius += (70-contentArray[i].radius)/3;
			//contentArray[i].drawSector(contentArray[i].radius, 300, 35);
		}
		else if(flag2 == i){
			contentArray[i].radius += (60-contentArray[i].radius)/5;
			contentArray[i].width += (25-contentArray[i].width)/8;
			contentArray[i].drawSector(contentArray[i].radius, 300, contentArray[i].width);
		}
		else
			contentArray[i].drawSector(60, 300, 25);
	}
}

var Circle = function(x, y, omega){
	this.x = x;
	this.y = y;
	this.omega = omega;
	this.rotation = 0;
	this.radius;
	this.width;
	
	this.drawSector = function(radius, arc, width){
		this.radius = radius;
		this.width = width;
		
		context.fillStyle = 'rgb(225, 225, 0)';
		context.beginPath();
		context.arc(this.x, this.y, radius+width, this.rotation*Math.PI/180, (this.rotation+arc)*Math.PI/180, false);
		context.arc(this.x, this.y, radius-width, (this.rotation+arc)*Math.PI/180, this.rotation*Math.PI/180, true);
		context.closePath();
		context.fill();
		
		context.fillStyle = 'rgb(204, 204, 0)';
		context.beginPath();
		context.arc(this.x, this.y, radius+width, this.rotation*Math.PI/180, (this.rotation+arc)*Math.PI/180, true);
		context.arc(this.x, this.y, radius-width, (this.rotation+arc)*Math.PI/180, this.rotation*Math.PI/180, false);
		context.closePath();
		context.fill();
	}
}