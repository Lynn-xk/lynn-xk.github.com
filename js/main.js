window.onload = function(){
	var oFather = document.querySelector('.father');
	var oHead = document.querySelector('.header_content');
	var oUp = document.querySelector('.upbutton');
	//预加载
	var oLoadding = document.querySelector('.loadding');
	var oLoad = document.querySelector('.load');
	var oNum = document.querySelector('.num');
	var oNav = document.querySelector('.navigationbar');
	var oName = document.querySelector('.namein');
	var oEng1 = document.querySelector('.english1');
	var oEng2 = document.querySelector('.english2');
	var num = 450;
	var loadtimer = null;

	loadtimer = setInterval(function(){
		num--;
		if(num>=250 && num<450){
			oName.style.background = 'url(image/redname.png)';
			// oEng1.style.background = 'url(image/redenglish1.png)';
			// oEng2.style.background = 'url(image/redenglish2.png)';
			// oEng1.style.width = (450-num)*(482/200)+'px';
			oName.style.opacity = (num-250)/200;
			oEng1.style.opacity = (450-num)/200;
			// oEng2.style.opacity = (num-250)/200;
		}
		if(num >=0 && num<250){
			oName.style.background = 'url(image/greenname.png)';
			// oEng1.style.background = 'url(image/greenenglish.png)';
			// oEng2.style.background = 'url(image/greenenglish2.png)';
			// oEng2.style.width = (250-num)*(482/250)+'px';
			oName.style.opacity = (num)/250;
			// oEng1.style.opacity = (num)/250;
			oEng2.style.opacity = (250-num)/250;
		}
		// if(num>0 && num<=450){
		// 	oEng1.style.opacity = (450-num)/450;
		// }
		
		if(num == -100){
			clearInterval(loadtimer);
			oLoadding.style.display = 'none';
			oFather.style.display = 'block';
			oHead.style.animation='hc 0.8s cubic-bezier(1, 2.41, 0.24,-0.45)';
			backLoad();
		}

	},10)

	function backLoad(){
		//回到顶部
		
		oUp.onclick = function(){
			var start = document.documentElement.scrollTop || document.body.scrollTop;
			var dis = 0 - start;
			var count = Math.floor(1000/60);
			var n = 0;
			var timer = null;
			clearInterval(timer);
			timer = setInterval(function(){
				n++;
				var a = 1-n/count;
				document.documentElement.scrollTop = document.body.scrollTop = start+dis*(1-a*a*a);
				if(n == count){
					clearInterval(timer);
				}
			},60)
		}

		//导航条
		window.onscroll = function(){
			var navtop = document.documentElement.scrollTop || document.body.scrollTop;
			if(navtop>=50){
				oNav.style.opacity = 0;	
			}else{
				oNav.style.opacity = 1;
			}
			oNav.style.transition = '1s opacity ease';
			if(navtop>600){
				oBtn.style.right ='20px';
				oUp.style.right = 0;
			}else{
				oBtn.style.right ='-60px';
				oUp.style.right = -46+'px';
			}
			oBtn.style.transition = '1s right ease';
			oUp.style.transition = '1s right ease';
			var oCont1 = document.querySelector('.about .cont1_title');
			var oCont2 = document.querySelector('.products .cont1_title');
			var oCont3 = document.querySelector('.contact .cont1_title');
			var oCont4 = document.querySelector('.games .cont1_title');
			var oPc = document.querySelector('.pc');
			var oAndroid = document.querySelector('.android');
			var oIos = document.querySelector('.ios');
			var oPccir = document.querySelector('.pc_cir');
			var oAncir = document.querySelector('.android_cir');
			var oIoscir = document.querySelector('.ios_cir');
			var oFix = document.querySelector('.fix');

			if(navtop<=823){
				oFix.style.background='url(image/tk.jpg) no-repeat';
			}
			if(navtop>823 && navtop<=1646){
				oFix.style.background='url(image/st.jpg) no-repeat';}
			if(navtop>0 && navtop<=623){
				oCont1.style.left = 50+'px';
				oCont1.style.transition='1s left cubic-bezier(1, 1.96, 0.65, 0.43)';
				oPc.style.right = 660+'px';
				oPc.style.transition='1s right cubic-bezier(0.35, 0.88, 0.71, 1.68)';
				oAndroid.style.right = 410+'px';
				oAndroid.style.transition='1s right cubic-bezier(0.35, 0.88, 0.71, 1.68)';
				oIos.style.right = 160+'px';
				oIos.style.transition='1s right cubic-bezier(0.35, 0.88, 0.71, 1.68)';
				oPccir.style.opacity = '0.8';
				oPccir.style.transition = '3s opacity ease';
				oAncir.style.opacity = '0.8';
				oAncir.style.transition = '3s opacity ease';
				oIoscir.style.opacity = '0.8';
				oIoscir.style.transition = '3s opacity ease';
			}
			 if(navtop>1646 && navtop<2469){
			 	oFix.style.background='url(image/bk.jpg) no-repeat';
			 	
			 }
			 if(navtop>2469){
			 	oFix.style.background='url(image/hg.jpg) no-repeat';
			 	
			 }
			 if(navtop>823 && navtop<1466){
		 	 	oCont2.style.left = 50+'px';
		 		oCont2.style.transition='1s left cubic-bezier(1, 1.96, 0.65, 0.43)';
			 }
			 if(navtop>1466 && navtop<2470){
			 	// oFix.style.background='url(image/letter.jpg) no-repeat';
			 	oCont4.style.left = 50+'px';
				oCont4.style.transition='1.2s left cubic-bezier(1, 1.96, 0.65, 0.43)';
			 }
			 if(navtop>=2470){
			 	// oFix.style.background='url(image/letter.jpg) no-repeat';
			 	oCont3.style.left = 50+'px';
				oCont3.style.transition='1s left cubic-bezier(1, 1.96, 0.65, 0.43)';
			 }
			
		}

		//折纸侧边导航

			var oBtn=document.getElementById("btn");
			var oWrap=document.getElementById("wrap");
			var aDiv=oWrap.getElementsByTagName("div");
			var aSpan=oWrap.getElementsByTagName("span");
			var i=0;
			var oTimer=null;
			var iDelay=200;
			var Boff=true;
			
			oBtn.onclick=function(){
				oBtn.style.right="-300px";
				if(Boff){
					i=0;
					oTimer=setInterval(function(){
							aDiv[i].className="open";
							aDiv[i].style.display = 'block';
							aSpan[i].style.display = 'block';

							if(i==aDiv.length-1){
								clearInterval(oTimer);
								oBtn.style.right="20px";
								// oBtn.value="关闭";
							}
							i++;
					},iDelay);
				}else{
					i=aDiv.length-1;
					oTimer=setInterval(function(){
							aDiv[i].className="clos";
							aDiv[i].style.display = 'none';
							aSpan[i].style.display = 'none';
							if(i==0){
								clearInterval(oTimer);
								oBtn.style.right="20px";
								// oBtn.value="展开";
							}
							i--;
					},100);
				}
				Boff=!Boff;
			};
	}

	

	
}