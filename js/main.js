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
	var oCent = document.querySelector('#center')
	var num = 9;
	var loadtimer = null;
	var imgArr = ['bk','hg','st','tk','xk1','xk3','xk4','xk7','xk8'];
	// loadtimer = setInterval(function(){
		for(var k = 0;k<imgArr.length;k++){
			var oImg = new Image();
			oImg.src = 'https://lynn-xk.github.io/image/'+imgArr[k]+'.jpg';
			oImg.onload = function(){
				num--;
				oNum.innerHTML = (((9-num)/9)*100).toFixed(2)+'%';
				console.log(oName.innerHTML)
				if(num>=4 && num<9){
					oName.style.background = 'url(image/redname.png)';
					oName.style.opacity = (num-4)/5;
					oEng1.style.opacity = (9-num)/5;
				}
				if(num >=0 && num<4){
					oName.style.background = 'url(image/greenname.png)';
					oName.style.opacity = (num)/4;
					oEng2.style.opacity = (4-num)/4;
				}
				if(num == 0){
					oLoadding.style.display = 'none';
					oFather.style.display = 'block';
					oHead.style.animation='hc 0.8s cubic-bezier(1, 2.41, 0.24,-0.45)';
					backLoad();
				}
			}
			oImg.onerror = function(){
				alert('请重新加载');
			}
		}
		
		
		
		// if(num>0 && num<=450){
		// 	oEng1.style.opacity = (450-num)/450;
		// }
		
		// if(num == -100){
		// 	clearInterval(loadtimer);
		// 	oLoadding.style.display = 'none';
		// 	oFather.style.display = 'block';
		// 	oHead.style.animation='hc 0.8s cubic-bezier(1, 2.41, 0.24,-0.45)';
		// 	backLoad();
		// }

	// },0.1)

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
			
			if(navtop>=100){
				oNav.style.transition = '1s opacity ease';
				oNav.style.opacity = '0';
				oNav.addEventListener('transitionend',function(){
						oNav.style.display = 'none';
				},false)
				oNav.removeEventListener('transitionend',function(){
						oNav.style.display = 'none';
				},false)
					
			}else{
				
				oNav.style.transition = '1s opacity ease';
				oNav.style.opacity = '1';	
				oNav.style.display = 'block';
				oNav.addEventListener('transitionend',function(){
					oNav.style.display = 'block';
				},false)
				oNav.removeEventListener('transitionend',function(){
					oNav.style.display = 'block';
				},false)
			}
			
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
			if(navtop>0 && navtop<=623 || navtop == 643){
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
		//center按钮
			oCent.onclick = function(){
				var k = 0;
				var timerk = setInterval(function(){
					k+=15;
					document.body.scrollTop = k;
					if(k == 645){
						clearInterval(timerk)
					}
				},30)
				
				
			}
		//折纸侧边导航

			var oBtn=document.getElementById("btn");
			var oWrap=document.getElementById("wrap");
			var aDiv=oWrap.getElementsByTagName("div");
			var aSpan=oWrap.getElementsByTagName("a");
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

			//星座
			var aStar = document.querySelectorAll('.star');
			var oContbg = document.querySelector('.contbg');
			var oProtit = document.querySelector('.protit ul');
			var oProp = document.querySelector('.prop ul');
			var aNa =  document.querySelectorAll('.prop a');
			var aPli = oProtit.children;
			// var aPimg = document.querySelectorAll('.prop li');
			for(var i = 0;i<aStar.length;i++){
				aStar[i].index = i;
				aStar[i].onclick = function(){
					oContbg.style.opacity = 1;
					oContbg.style.transition = '1.6s opacity ease';
					
					oProtit.style.right = (this.index*-177)+'px';
					oProtit.style.transition = '1s all ease';
					oProp.style.left = (this.index*-276)+'px';
					oProp.style.transition = '1s all ease';
					oContbg.addEventListener('transitionend',function(){
						for(var j = 0;j<aNa.length;j++){
							aNa[j].style.display = 'block';
						}
					},false)
					oContbg.removeEventListener('transitionend',function(){
						for(var j = 0;j<aNa.length;j++){
							aNa[j].style.display = 'block';
						}
					},false)
				}
				
			}



    //backLoad函数结尾
	}
//window.onload函数结尾 
}