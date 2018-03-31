(function(w) {
				function Cycle(options) {
					this.id = options.id;
					this.width = options.width;
					this.height = options.height;
					this.percent = options.percent;
					this.border = options.border;
					this.bgColor = options.bgColor;
					this.barColor = options.barColor;
					this.textColor = options.textColor;
					this.startAngle = options.startAngle ? options.startAngle : 0 - Math.PI/2;
					this.endAngle = options.endAngle ? options.endAngle : 0;
				};
				Cycle.prototype = {
					contructor: Cycle,
					init: function() {
						//创建画布对象
						var html = "<canvas id='canvas_" + this.id + "' width='" + this.width + "' height='" + this.height + "'></canvas>";
						document.getElementById(this.id).innerHTML = html;
						// var time = setInterval(function() {
						// 	this.percent++;
						// 	if(this.percent >= 100) {
						// 		clearInterval(time);
						// 	}
						// 	this.setOptions();
						// }.bind(this), 1000);
						this.setOptions()
					},
					setOptions: function() {
						var degree = this.percent;
						var canvas = document.getElementById('canvas_' + this.id);
						var context = canvas.getContext('2d');
						context.clearRect(0, 0, this.width, this.height);
						//开始绘画
						context.beginPath();
						context.lineWidth = this.border;
						context.strokeStyle = this.bgColor;
						context.arc(this.width / 2, this.height / 2, (this.width / 2 - this.border / 2), 0, 2 * Math.PI);
						context.stroke();
						var deg = degree * 3.6 / 180 * Math.PI
						context.beginPath();
						context.lineWidth = this.border;
						context.strokeStyle = this.barColor;
						context.arc(this.width / 2, this.height / 2, (this.width / 2 - this.border / 2), this.startAngle, this.endAngle ? this.endAngle : deg - Math.PI / 2);
						context.stroke();
						context.beginPath();
						context.fillStyle = this.textColor;
						context.font = "12px 微软雅黑";
						var text = degree + "%";
						var textWidth = context.measureText(text).width;
						context.fillText(text, this.width / 2 - textWidth / 2, this.height / 2 + 4);
					}
				}
				w.Cycle=Cycle;
			}(window))
