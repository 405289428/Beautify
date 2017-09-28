//jQuery对象就是给面向对象的写法外面增加了一个壳子

jQuery.fn.extend({
	Slider:function(obj){
		obj.$box = this;
		function Slider(obj){
				//所在容器
				this.$box = obj.$box;
				this.width = obj.width;
				this.height = obj.height;
				
				//图片数组
				this.imgs = obj.imgs;
				
//				//超链接数组
				this.urls = obj.urls;
				
				//时间间隔
				this.timeSpace = obj.timeSpace;
				
				//按钮：
				this.btnObj = {
					width:obj.btnObj.width,
					height:obj.btnObj.height,
					bgColor:obj.btnObj.bgColor,
					highBgColor:obj.btnObj.highBgColor,
					isCircle : obj.btnObj.isCircle
				};
				
				this.myTimer =null;
				this.currOrd=1;//0出，1进
				
				this.initUI();
				this.initEvent();
				this.startGo();
			}
			
			//创建外观
			Slider.prototype.initUI = function(){
				for(let i=0;i<this.imgs.length;i++){
					this.$box.append('<img src="'+this.imgs[i]+'"/>');
				}
				let that = this;
				$(this.$box.selector+" img").css(
					{
						"position":"absolute",
						"left":that.width+"px",
						"top":"0px",
						"width":"100%",
						"height":"100%"
					}
				);
				$(this.$box.selector+" img").eq(0).css({"left":0});
				
				
				$(this.$box.selector+" img").click(function(){
				    location.href=urls[currOrd];
				});
				
				
				this.$box.append('<ul></ul>');
				$(this.$box.selector+" ul").css({
							"position":"absolute",
							"list-style":"none",
							"right":"630px",
							"bottom":"20px"			
				});
				
				for(let i=0;i<this.imgs.length;i++){
					$(this.$box.selector+" ul").append("<li></li>");	
				}
				$(this.$box.selector+" ul li").css({
						"float":"left",
						"margin-left":"10px",
						"width":that.btnObj.width+"px",
						"height":that.btnObj.height+"px",
						"background-color":that.btnObj.bgColor	
				});
				$(this.$box.selector+" ul li:eq(0)").css({
						"background-color":that.btnObj.highBgColor	
				});
				if(this.btnObj.isCircle){
					$(this.$box.selector+" ul li").css({
							"border-radius":"50%"
					});	
				}
			}
			
			Slider.prototype.initEvent = function(){
				let that = this;
				this.$box.mouseover(function(){
					that.stopChange();
				});
				
				this.$box.mouseout(function(){
					that.startGo();
				});
				
				$(this.$box.selector+" ul li").click(function(){
					that.goImg($(that.$box.selector+" ul li").index(this)+1);
				});	
			}
			
			//启动定时器
			Slider.prototype.startGo = function(){
				let that = this;
			   	this.myTimer = setInterval(function(){
				   	//1、数据处理
					let currOutOrd = that.currOrd;
					that.currOrd++;
					if(that.currOrd>that.imgs.length){
						that.currOrd=1;		
					}
					//2、外观
					//1）、滑动的方式切换图片
					$(that.$box.selector+" img").eq(currOutOrd-1).animate({left:-1*that.width},500);
					$(that.$box.selector+" img").eq(that.currOrd-1).css({"left":that.width});
					$(that.$box.selector+" img").eq(that.currOrd-1).animate({left:0},500);
					//2）、改变按钮的外观
					$(that.$box.selector+" ul li").eq(that.currOrd-1).css({"backgroundColor":that.btnObj.highBgColor}).siblings().css({"backgroundColor":that.btnObj.bgColor});
			   	},this.timeSpace);
			}
			
			//停止定时器
			Slider.prototype.stopChange = function(){
				window.clearInterval(this.myTimer);	
			}
			
			//跳转到对应的图片上
			Slider.prototype.goImg = function(ord){
				//1、数据处理
				let currOutOrd = this.currOrd;
				this.currOrd = ord;
				
				//2、外观
				//1）、滑动的方式切换图片
				$(this.$box.selector+" img").eq(currOutOrd-1).animate({left:-1*this.width},500);
				$(this.$box.selector+" img").eq(this.currOrd-1).css({"left":this.width});
				$(this.$box.selector+" img").eq(this.currOrd-1).animate({left:0},500);
				//2）、改变按钮的外观
				$(this.$box.selector+" ul li").eq(this.currOrd-1).css({"backgroundColor":this.btnObj.highBgColor}).siblings().css({"backgroundColor":this.btnObj.bgColor});
			}	
			new Slider(obj);
		
	}
});
