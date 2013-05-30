onload = init;

var canvas;
var context;
var interval;
var interval2;
var array = [];
var N = 4000;
var mouseX = 0;
var mouseY = 0;

function init(){
	canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext('2d');
	window.addEventListener('resize', windowResizeHandler, false);
	document.addEventListener('mousedown', mouseDownHandler, false);
	document.addEventListener('mouseup', mouseUpHandler, false);
	document.addEventListener('mousemove', mouseMoveHandler, false);
	
	for(var i = 0; i < N; i++){
		var ball = new Ball(0, Math.random() * 10 + 1);
		ball.x = Math.random()*canvas.width;
		ball.y = -Math.random()*100-10;
		array.push(ball);
	}
	interval = setInterval(loop, 60);
	context.fillStyle = 'rgb(0, 0, 0)';
}

function windowResizeHandler(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	var len = array.length;
	for(var i = 0; i < len; i++)
		delete array[i];
	array = [];
	window.removeEventListener('resize', windowResizeHandler, false);
	document.removeEventListener('mousedown', mouseDownHandler, false);
	document.removeEventListener('mouseup', mouseUpHandler, false);
	document.removeEventListener('mousemove', mouseMoveHandler, false);
	clearInterval(interval);
	clearInterval(interval2);
	init();
}

function mouseMoveHandler(e){
	mouseX = e.clientX;
	mouseY = e.clientY;
}

function mouseDownHandler(){
	clearInterval(interval);
	for(var i = 0; i < N; i++)
		array[i].v = Math.random()*10+15;
	interval2 = setInterval(loop2, 50);
}

function mouseUpHandler(){
	clearInterval(interval2);
	for(var i = 0; i < N; i++){
		var rad = Math.random()*2*Math.PI;
		array[i].vx = Math.sin(rad)*Math.random()*50
		array[i].vy = Math.cos(rad)*Math.random()*50;
	}
	interval = setInterval(loop, 60);
}

function loop(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	for(var i = 0; i < N; i++){
		array[i].x += array[i].vx;
		array[i].y += array[i].vy;
		array[i].vy++;
		
		if(array[i].x > canvas.width){
			array[i].x = canvas.width;
			array[i].vx = -array[i].vx*0.7;
		} else if(array[i].x < 0) {
			array[i].x = 0;
			array[i].vx = -array[i].vx*0.7;
		}
		if(array[i].y > canvas.height){
			array[i].y = canvas.height;
			array[i].vy = -array[i].vy*0.6;
		}
		
		array[i].draw();
	}
}

function loop2(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	for(var i = 0; i < N; i++){
		var arc = Math.atan2(mouseY-array[i].y, mouseX-array[i].x);
		array[i].vx = Math.cos(arc)*array[i].v;
		array[i].vy = Math.sin(arc)*array[i].v;
		
		array[i].x += array[i].vx;
		array[i].y += array[i].vy;
		
		if((array[i].vx < 0 && array[i].x < mouseX) || (array[i].vx > 0 && array[i].x > mouseX))
			array[i].vx = -array[i].vx;
		if((array[i].vy < 0 && array[i].y < mouseY) || (array[i].vy > 0 && array[i].y > mouseY))
			array[i].vy = -array[i].vy;
		
		array[i].draw();
	}
}

var Ball = function(vx, vy){
	this.x;
	this.y;
	this.vx = vx;
	this.vy = vy;
	this.v;
	
	this.draw = function(){
		context.fillRect(this.x, this.y, 2, 2);
	}
};