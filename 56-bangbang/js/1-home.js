var timer=null;
var data=[
	['科技创新国际化培训班学员参观梆梆安全“新居”','[2016-10-25]'],['揭露物联网攻击断网半个美国背后的秘密！','[2016-10-24]']
];
$('.exploit a img').mouseenter(function () {
	$(this)[0].src="imgs/kfz1.png";
}).mouseleave(function () {
	$(this)[0].src="imgs/kfz.png";
})
messageMove ();
//“梆梆资讯”播放
function messageMove () {
	timer=setInterval(function () {
		mTween($('.mes_specific ul')[0],'top',-60,500,'linear',function () {
			insertAfter($('.mes_specific ul li')[0],$('.mes_specific ul li')[1]);
			$('.mes_specific ul').css({
				top:'0px'
			})
		})
	},1700);
}
$('.mes_specific').mouseenter(function () {
	clearInterval(timer);
	$('.mes_specific ul a').css({
		color:'#fff'
	})
}).mouseleave(function () {
	messageMove ();
	$('.mes_specific ul a').css({
		color:'#c1bfc3'
	})
})

//向列表中一子节点的后面插入一个项目
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
//鼠标移入微信图标，二维码出现，鼠标移出微信图标，二维码消失
for (let i=0;i<3;i++) {
	$('.code').eq(i).mouseenter(function () {
		$('.codeImg').eq(i).css({
			display:'block'
		})
	}).mouseleave(function () {
		$('.codeImg').eq(i).css({
			display:'none'
		})
	})
}
//鼠标移入移出分享图标时页面变化
$('.share').mouseenter(function () {
	$(this).children('span:nth-child(1)').css({
		transform: 'rotateZ(90deg)'
	})
	$(this).children('span:nth-child(1)').children('img')[0].src='imgs/share_btn_h.png';
	$(this).children('span:nth-child(1)').css({
		transform: 'rotateZ(0deg)'
	})
	$(this).css({
		background: 'rgba(1,1,1,0.2)',
		height: '200px'
	})
}).mouseleave(function () {
	$(this).children('span:nth-child(1)').children('img')[0].src='imgs/share_btn.png';
	$(this).css({
		background: 'none',
		height: '39px'
	})
})
//移入“我们的产品”子项时页面中变化
var html='';
var sty='';
$('.hexagon').mouseenter(function () {
	html=$(this).children('.items1_text').html();
	$(this).css({
		transform: 'scale(1.3)'
	})
	$(this).children('.items1_text').html('<dl><dt>反外挂 SDK</dt><dd>智能检测，</dd><dd>安装、运行全面识别</dd><dd>自我记忆、学习</dd><dd>兼容99%设备</dd></dl>');
}).mouseleave(function () {
	$(this).css({
		transform: 'scale(1)'
	})
	$(this).children('.items1_text').html(html);
})
//滚动滚轮时页面变化
$(window).scroll(function () {
	if (window.pageYOffset>0) {
		//头部变化
		$('#header').css({
			height:'80px'
		});
		$('#header .logo').css({
			height: '26px',
			width: '162px',
			margin: '27px 30px 0px 103px'
		});
		$('#header .logo img')[0].src='imgs/14643448981299.png';
		$('#header .nav').css({
			margin: '31px 0px 0px 0px'
		});
		$('#header .exploit a').css({
			marginTop: '7px'
		});
		$('#header .Chinese').css({
			display: 'none'
		});
		//回到顶部按钮变化
		$('.go').css({
			//visibility: 'visible'
			opacity: 1
		});
	}else{
		$('#header').css({
			height:'130px'
		});
		$('#header .logo').css({
			height: '50px',
			width: '120px',
			margin: '40px 68px 0px 106px'
		});
		$('#header .logo img')[0].src='imgs/logo.png';
		$('#header .nav').css({
			margin: '56px 0px 0px 0px'
		});
		$('#header .exploit a').css({
			marginTop: '30px'
		});
		$('#header .Chinese').css({
			display: 'block'
		});
		$('.go').css({
			//visibility: 'hidden'
			opacity: 0
		});
	}
})
//电话图标移入时显示具体电话号码
$('.phone').mouseenter(function () {
	$(this).children('.phone1').css({
		display: 'none'
	})
	$(this).children('.phone2').css({
		display: 'block'
	})
	$(this).animate({
		width: '171px'
	}, 500);
}).mouseleave(function () {
	$(this).animate({
		width: '40px'
	}, 500,function () {
		$(this).children('.phone1').css({
			display: 'block'
		})
		$(this).children('.phone2').css({
			display: 'none'
		})
	});
})
//回到顶部按钮鼠标移入移出和点击处理
$('.go').mouseenter(function () {
	$(this).children('img')[0].src='imgs/top1.png';
}).mouseleave(function () {
	$(this).children('img')[0].src='imgs/top.png';
}).click(function () {
	var timerScroll=null;
	var num=document.body.scrollTop;
	console.log(num)
	timerScroll=setInterval(function () {
		num=num-3;
		window.scrollTo(0,num);
		if (num<=0) {
			num=0;
			clearInterval(timerScroll);
		}
	},16)
	
})