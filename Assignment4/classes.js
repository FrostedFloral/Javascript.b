var protocar = new ProtoCar();

function ProtoCar()
{
	this.width = 400;
	this.front = 100;
	this.rear = 100;
	this.roof = 100;
	this.color = "#ff0000"; 
	this.sponsor = {name:"", decal:false};
	this.ft = new ProtoWheel(100);
	this.rt = new ProtoWheel(-100);
	this.topLimit="550";
}

function ProtoWheel(dist)
{
	this.x = canvas.width/2 + dist;
	this.y = 550;
	this.radius = 100; 
	this.color = "#000000"; 
}

function drawWheel(wheel)
{
	ctx.save();
	ctx.translate(wheel.x,wheel.y);
	ctx.fillStyle = wheel.color;
	ctx.beginPath();
	ctx.arc(0,-wheel.radius, wheel.radius, 0, 360*Math.PI/180, true);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
	ctx.save();
	ctx.translate(wheel.x,wheel.y);
	ctx.fillStyle = "#999999";
	ctx.beginPath();
	ctx.arc(0,-wheel.radius, wheel.radius/2, 0, 360*Math.PI/180, true);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}
	
function drawSuspension(wheel, height)
{
	ctx.save();
	ctx.lineWidth = 10;
	ctx.strokeStyle = "#777777";
	ctx.beginPath();
	ctx.moveTo(wheel.x,wheel.y-wheel.radius);
	ctx.lineTo(canvas.width/2,height)
	ctx.closePath();
	ctx.stroke();
	ctx.restore();
}
	
function drawCar(car)
{
	var suspensionHeight = (car.ft.y - car.ft.radius + car.rt.y - car.rt.radius)/2-10;
	drawSuspension(car.ft, suspensionHeight);
	drawSuspension(car.rt, suspensionHeight);
	car.topLimit = (car.ft.y - car.ft.radius + car.rt.y - car.rt.radius)/2-10;
	ctx.save();

	ctx.fillStyle = car.color;
	ctx.beginPath();
	ctx.moveTo(canvas.width/2- car.width/2, car.rear);
	ctx.lineTo(canvas.width/2- car.width/3, car.roof);
	ctx.lineTo(canvas.width/2+ car.width/2, car.front);
	ctx.lineTo(canvas.width/2+ car.width/2, car.ft.y-car.ft.radius);
	ctx.lineTo(canvas.width/2- car.width/2, car.rt.y-car.rt.radius);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle="#ffffff";
	if(car.sponsor.decal == true)
	{
		ctx.save();
			ctx.translate(canvas.width/2 - car.width/3, car.roof + 60);
			ctx.rotate(Math.atan2(car.front - car.roof, ((canvas.width/2+ car.width/2)-(canvas.width/2-car.width/3))));
			ctx.font="60px Arial";
			ctx.fillText(car.sponsor.name, 0, 0);
			ctx.restore();	
	}
	ctx.restore();
	drawWheel(car.ft);
	drawWheel(car.rt);			
}




		

		
