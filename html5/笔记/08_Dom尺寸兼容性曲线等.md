###尺寸位置兼容性
	1.Dom关于位置和尺寸的api
		parentNode
			直接父级
		offsetParent
			a.有点类型于css中包含块（css中的概念）的概念
			b.offsetLeft 和 offsetTop都是参照于offsetParent的内边距边界
			c.规则（html和body之间的margin被清除）
				本身定位为fiexd，不管你父级有没有定位
					火狐的offsetParent --> body
					非火狐offsetParent --> null
				非fiexd
					父级没有定位
						offsetParent --> body
					父级有定位
						offsetParent --> 定位父级
	
	2.js的兼容性问题
		ev||event
		offsetParent
		事件绑定（事件流的机制;事件委托）
		鼠标滚轮事件
			非火狐：onmousewhell（dom0）
				ev.whellDelta
					上：正
					下:负
			火狐：   DOMMouseScroll（dom2）
				ev.detail
					上：负
					下:正
			怎么取消事件的默认行为
				dom0：return false
				dom2：ev.preventDefault()
		视口尺寸的获取
		滚动条滚动的距离
	
	3.绝对位置，相对位置
		绝对位置：到body的距离（html和body之间的margin被清除）
			原生实现：while循环不断去的累加
				body的offsetParent --> null
				body的offsetLeft --> 0
				body的 offsetTop --> 0
				原生实现的缺点：没有办法兼容border和margin
		相对位置：到视口的距离
			原生实现：绝对位置的实现上减去滚动条滚动的距离
									(滚动条滚动时元素滚动的距离)
									document.documentElement.scrollLeft||document.body.scrollLeft;
					原生实现的缺点：没有办法兼容border和margin
	
	4.getBoundingClientRect(兼容性极好)
		返回值：对象
				{
					width:	border-box的宽
					height: border-box的高
					//元素border-box的左上角的相对位置
					top:	y:
					left:	x:
					//元素border-box的右下角的相对位置
					bottom:
					right:
				}
	
	5.clientWidth/Height，offsetWidth/Height
		clientWidth/Height：可视区（padding box）
		offsetWidth/Height：border-box
	
	6.怎么获取视口的尺寸
		document.documentElement.clientWidth;
	
	7.曲线运动
		三角函数图像，怎么将三角函数图像运用到js中
	

	8.结合canvas实现气泡效果
		第二个循环定时器：
			维护一个数组(随机圆的信息)
				圆心
				半径
				rgba值
				初始位置
				波峰 波谷的值
				度数
		
		第一个循环定时器：
			在canvas上实现动画
				第一个for循环（canvas上需要动画的元素不止一个）
					将随机圆数组中需要动画的参数拿出来进行平滑的累加
				第一个for循环（canvas上需要动画的元素不止一个）
					使用canvas api进行绘制

####offsetParent（如果body和html直接的margin被清掉）
 		本身定位为fixed
					==> offsetParent:null（不是火狐）
					==> offsetParent:body（火狐）
			
		本身定位不为fixed
				父级没有定位
					==> offsetParent:body
				父级有定位
					==> offsetParent:定位父级			

####haslayout
	ie7以下,如果当前元素的某个父级触发了haslayout，
		那么offsetParent就会被指向到这个触发了layout特性的父节点上

####注意点
	1.分清parentNode和offsetParent的区别
		parentNode：直接父级
		offsetParent：类似于css的包含块
	
	2.offsetParent的作用
		offsetLeft 和 offsetTop 是参照于offsetParent的内边距边界的
	
	3.dom里所有的元素都是有offsetLeft 和 offsetTop的



###曲线运动
	---勾股定理
			a*a + b*b =c*c
			
	---三角函数
		正弦 : sin
		余弦 : cos
		正切 : tan
		余切 : cot
		正弦定理
			a/sinA = b/sinB =c/sinC = 2r（r为外接圆半径）
		余弦定理
			cosA = b*b + c*c - a*a / 2bc
			cosB = c*c + a*a - b*b / 2ca
			cosC = a*a + b*b - c*c / 2ab
				
	
	---什么是弧度	
		一个角度到底代表多少弧度：这个角度所包含的外接圆的弧长/外接圆的半径
		
		360 角度 = 2*PI*r/r 弧度(360角度  = 2*PI 弧度)   		
			===> （单位换算）
				1角度 = PI/180  弧度 
				1弧度 = 180/PI 角度
			
	---角度转弧度				弧度转角度
		弧度值 = 角度值*PI/180			角度值 = 弧度值*180/PI
			
									   
	---三角函数图像
		曲线运动
		
	---完成曲线运动
	
	---与canvas结合
		人眼能接收的最好频率为一秒钟60次,这样的体验是比较好的




###鼠标滚轮事件
	ie/chrome : onmousewheel(dom0)
				event.wheelDelta
					上：120
					下：-120
				
	firefox : DOMMouseScroll 必须用(dom2的标准模式)
				event.detail
					上：-3
					下：3


####阻止dom2的默认行为
	if(e.preventDefault){
		e.preventDefault();
	}


####阻止dom0的默认行为
	return false;




