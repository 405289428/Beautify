//jQuery对象就是给对象的写法外面增加一个壳子
jQuery.fn.extend({
	Slider:function({
		Slider:function(obj)
		{
			obj.$box=this;
			function Slider(obj)
			{
				//所在容器
				this.$box=obj.$box;
				this.width=obj.width;
				this.height=obj.height;
				
				//图片数组
				this.imgs=obj.imgs;
				//时间间隔
				this.timeSpace=obj.timeSpace;
				//按钮
				this.btnObj={
					width:obj.btnObj.width,
					height:obj.btnObj.height,
					bgColor:obj.btnObj.bgColor,
					highBgColor:obj.btnObj.highBgColor,
					isCircle:obj.btnObj.isCircle
				};
				this.myTimer=null;
				this.currOrd=1;
				
				this.initUI();
				this.initEvent();
				this.startGo();
			}
			//创建外观
			Slider.prototype.initUI=function()
			{
				for(let i=0;i,this.imgs.length;i++)
				{
					this.$box.append('<img src="'++this.imgs[i]+'"/>');
				}
				let that=this;
				$(this.$box.selector+"img").css(
					
					{
						"position":"absolute",
						"left":that.width+"px",
						"top":"0px",
						"width":"100%",
						"height":"100%"
					}
				);
			$(this.$box.selector+"img").eq(0).css({"left":0});
			this.$box.append('<ul></ul>');
			$(this.$box.selector+"ul").css({
				"position":"absolute",
				"list-style":"none",
				"right":"630px",
				"bottom":"20px"
			});
			for(let i=0;i<this.imgs.length;i++)
			{
				$(this.$box.selector+"ul").append("<li></li>");
			}
			$(this.$box.selector+"ul li").css({
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
		}
		
	})
})
