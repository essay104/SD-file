const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let triangle = new Path2D();
triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();

let circle = new Path2D();
circle.arc(200, 155, 50, 0, (Math.PI / 180) * 360);

ctx.fillStyle = "green";
ctx.stroke(triangle);
ctx.stroke(circle);

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// ctx.stroke();

// ctx.strokeStyle = "red";

// ctx.beginPath;()

// ctx.ellipse(200, 70)

// ctx.stroke();
// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, Math.PI / 100) * 180, true;
// ctx.arc(200, 100, 50, 0, (Math.Pi / 180) * 180, false);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(120, 200, 50, (Math.PI/180));

// ctx.fillStyle = "yellow";
// ctx.strokeStyle = "red";

// ctx.beginPath();
// ctx.arc(200, 150, 0, Math.PI * 2, true);

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.linTo(200, 200);
// ctx.stroke();

// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "rgb(200,0,0)";
// ctx.stroke = "black";

// ctx.fillRect(10, 10, 50, 100);
// ctx.strokeRect(10, 10, 200, 100);

// ctx.fillStyle = "blue";
// ctx.fillRect(50, 50, 120, 100);

// ctx.clearRect(70, 80, 80, 45);
