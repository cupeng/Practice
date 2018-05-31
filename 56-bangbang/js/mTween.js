function mTween(obj,attr,target,duration,fx,callBack){
	//获取起始位置
	var begin = parseFloat(getComputedStyle(obj)[attr]);
	//算出总距离
	var count = target - begin;
	//var time = new Date().getTime();
	//记录时间
	var time = +new Date();
	//防止定时器冲突，所以每次开启先清除。
	clearInterval(obj[attr])
	obj[attr] = setInterval(function(){
		//获取已过去的时间
		var t = +new Date() - time ;
		// console.log(1);
		//已过去时间超出总时间代表运动结束
		if(t>=duration){
			t = duration;
			//清除定时器
			clearInterval(obj[attr]);
			
		}
		//var value = count*t/duration + begin;
		//根据传入的运动方式算出obj应该运动的值
		var value = Tween[fx](t,begin,count,duration);
		
		obj.style[attr] = value + 'px';
		
		if(t == duration){
			//如果有回调函数就执行回调
			callBack&&callBack();
		}
	},16)
}