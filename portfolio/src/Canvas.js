import React from 'react';

import './Canvas.css';

class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.circles = [];
    this.loop = this.loop.bind(this);
    this.update = this.update.bind(this);
    this.draw = this.draw.bind(this);
    this.createCircles = this.createCircles.bind(this);
    window.addEventListener("load", this.createCircles);
    this.lastTimestamp = 0;
  }

  componentDidMount() {
    window.requestAnimationFrame(this.loop);
  }

  createCircles() {
    function Circle(xPos, yPos, radius, velocityX, velocityY) {
      this.x = xPos;
      this.y = yPos;
      this.radius = radius;
      this.velocityX = velocityX;
      this.velocityY = velocityY;
      this.links = 0;
      this.linkedCircles = [];

      this.draw = function(c) {
        var ctx = c.getContext("2d");
        //the color intensity varies depenging on the number of links a circle has
        var colorIntensity = 50 + 205 * this.links / 3;

        console.log(this.links);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "rgb(" + colorIntensity + "," + colorIntensity + "," + colorIntensity + ")";
        ctx.strokeStyle = "rgb(" + colorIntensity + "," + colorIntensity + "," + colorIntensity + ")";
        ctx.stroke();
        ctx.fill();

        for (var i = 0; i < this.linkedCircles.length; i++) {
          var link = this.linkedCircles[i];
          var sqDistance = this.squaredDistance(this, link);
          var lineOpacity = (1 - sqDistance / 90000);
          

          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(link.x, link.y);
          ctx.lineWidth = 5;
          ctx.strokeStyle = "rgba(" + 255 + "," + 255 + "," + 255 + "," + lineOpacity + ")";
          ctx.stroke();
        }
      }

      this.squaredDistance = function(c1, c2) {
        return (c1.x - c2.x) * (c1.x - c2.x) + (c1.y - c2.y) * (c1.y - c2.y);
      }

      this.updatePosition = function(dt, canvasWidth, canvasHeight) {
        this.x += this.velocityX * dt;
        this.y += this.velocityY * dt;
        //if the circles hit any of the edges of the canvas they "bounce" back
        if (this.x <= 0) {
          this.x = 0;
          this.velocityX = -this.velocityX;
        }
        else if (this.x >= canvasWidth) {
          this.x = canvasWidth;
          this.velocityX = -this.velocityX;
        }
        if (this.y <= 0) {
          this.y = 0;
          this.velocityY = -this.velocityY;
        }
        else if (this.y >= canvasHeight) {
          this.y = canvasHeight;
          this.velocityY = -this.velocityY;
        }
      }

      this.updateLinks = function(circles, canvas) {

        for (let i = 0; i < this.linkedCircles.length; i++) {
          let sqDistance = this.squaredDistance(this, this.linkedCircles[i]);

          if (sqDistance > 90000) {
            for (var j = 0; j < this.linkedCircles[i].linkedCircles.length; j++) {
              if (this.linkedCircles[i].linkedCircles[j] === this) {
                this.linkedCircles[i].linkedCircles.splice(j, 1);
                break;
              }
            }
            this.linkedCircles[i].links--;
            this.linkedCircles.splice(i, 1);
            i--;
            this.links--;
          }
        }

        for (let i = 0; i < circles.length; i++) {
          //check that we are not trying to link the circle to itself
          if (circles[i] != this) {  
            let sqDistance = this.squaredDistance(this, circles[i]);
            let alreadyLinked = false;
            
            //check that the circles we are trying to link are not already linked
            for (let j = 0; j < this.linkedCircles.length; j++) {
              if (this.linkedCircles[j] == circles[i]) {
                alreadyLinked = true;
              }
            }

            if (sqDistance <= 90000 && this.links < 3 && circles[i].links < 3 && !alreadyLinked) {
              this.linkedCircles.push(circles[i]);
              circles[i].linkedCircles.push(this);
              this.links++;
              circles[i].links++;
            }
          }
        }
      }
    }
    
    for (let i = 0; i < 30; i++) {
      var x = Math.floor(Math.random() * this.props.width);
      var y = Math.floor(Math.random() * this.props.height);
      var radius = Math.ceil(Math.random() * 9);
      var sign = Math.pow(-1, (Math.floor(Math.random() * 2) + 1));
      var velX = (10 + 50 * Math.random()) * sign;
      sign = Math.pow(-1, (Math.floor(Math.random() * 2) + 1));
      var velY = (10 + 50 * Math.random()) * sign;
      var c = new Circle(x, y, radius, velX, velY);
      this.circles.push(c);
    }
  }

  loop(timestamp) {
    window.requestAnimationFrame(this.loop);
    var deltaTime = timestamp - this.lastTimestamp;
    this.lastTimestamp = timestamp;
    this.update(deltaTime);
    this.draw();
  }

  update(deltaTime) {
    for (var i = 0; i < this.circles.length; i++) {
      this.circles[i].updatePosition(deltaTime / 1000, this.props.width, this.props.height);
    }
  }

  draw() {
    var canvas = this.refs.canv;
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, this.props.width, this.props.height);

    for (var i = 0; i < this.circles.length; i++) {
      this.circles[i].updateLinks(this.circles, canvas);
      this.circles[i].draw(canvas);
    }
  }

  render() {
    return (
      <canvas className="canvas" width={this.props.width} height={this.props.height} ref="canv"></canvas>
    );
  }
};

export default Canvas;