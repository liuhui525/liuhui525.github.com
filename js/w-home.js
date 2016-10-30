// JavaScript Document
function toDub(n)
{
	return n<10? '0'+n : ''+n;
}
window.onload=function (){
	//首页消失
	var oMask=document.getElementById('mask');
	var oAnimate=document.getElementById('animate');
	setTimeout(function (){
		oMask.style.display='none';	
	},2000);
	

	var str='您好，欢迎您来到我的website，在这里您将看到一个热爱前端工作的小菜鸟为您展示出的个人小作品，无论您是什么职业，我相信，当您看过这些小作品时，您也一定会爱上这个炫酷的前端工作，那，请点击左下角，让我们一起浏览吧......';
      
            var oWite=document.querySelector('.Carousel');
            for(var i=0;i<str.length;i++){
                var oSpan=document.createElement('span');
                oSpan.innerHTML=str.charAt(i);
                oWite.appendChild(oSpan);
            }
            var aSpan=oWite.children;
            var i=0;
            var timer=setInterval(function(){
                aSpan[i].style.opacity=0.8;
                // aSpan[i].style.textShadow='0 0 20px #fefcc9, 10px -10px 30px #feec85,-20px -20px 40px #ffae34, 20px -40px 50px #ec760c';
                i++;
                if(i==str.length){
                    clearInterval(timer);
                }   
                
            },300)
      
	
	//时钟
	var oDiv1=document.getElementById('t1');
	var oDiv2=document.getElementById('t2');
	var oTime=document.querySelector('.time');
	var oT=document.getElementById('time');
	
	function clock(){
		var oDate=new Date();
		var h=oDate.getHours();
		var m=oDate.getMinutes();
		var s=oDate.getSeconds();
		var str=toDub(h)+':'+toDub(m+1)+':'+toDub(s);
		oDiv1.style.transform='rotate('+(h*30+m/60*30)+'deg)';
		oDiv2.style.transform='rotate('+(m*6+s/60*6)+'deg)';
		oT.innerHTML=str;
	}
	
	clock();
	setInterval(clock,1000);
	
	//导航
	var oBtn=document.querySelector('footer .btn');
	var oNav=document.querySelector('footer .nav');
	oBtn.onclick=function (){
		if(oNav.style.left=='100px')
		{
			oNav.style.left='-1300px';
		}
		else
		{
			oNav.style.left='100px';
		}
	};
	
	//左边内容运动
	var oLeftList=document.getElementById('left-list');
	var aLi=oLeftList.children;
	var aA1=oLeftList.getElementsByTagName('a');
	
	//改变h2的字
	var oLtit=document.querySelector('.positive .instruction h2');
	var oLbtn=document.querySelector('.positive .instruction a');
	var oRtit=document.querySelector('.reverse .instruction h2');
	var oRbtn=document.querySelector('.reverse .instruction a');	
	var arr=[
		{'name':'ABOUT','href':'./html/about.html'},
		{'name':'WORKS','href':'./html/w-works.html'},
		{'name':'MOBILES','href':'./html/mobile.html'},
		{'name':'CONTACT US','href':'./html/conect.html'}
	];
	var arr2=[
		{'name':'MOBILES','href':'./html/mobile.html'},
		{'name':'CONTACT US','href':'./html/conect.html'},
		{'name':'WORKS','href':'./html/w-works.html'},
		{'name':'ABOUT','href':'./html/about.html'}
	];
	
	var iNow=0;
	var leftH=aLi[0].offsetHeight;
	setInterval(function (){
		//alert(aLi[iNow]);
		//alert(aLi[iNow].className);
		for(var i=0; i<aLi.length; i++)
		{
			aLi[i].className='';
		}
		aLi[iNow].className='active';
		oLtit.innerHTML=arr[iNow].name;
		oLbtn.href=arr[iNow].href;
		aA1[iNow].href=arr[iNow].href;
		iNow++;
		if(iNow==aLi.length)
		{
			iNow=0;
		}
	},3000);
	
	//右边内容运动
	var oRighttList=document.getElementById('right-list');
	var aLi2=oRighttList.children;
	var aA2=oRighttList.getElementsByTagName('a');
	
	var iNow2=0;
	setInterval(function (){
		//alert(aLi[iNow]);
		//alert(aLi[iNow].className);
		for(var i=0; i<aLi2.length; i++)
		{
			aLi2[i].className='';
		}
		aLi2[iNow2].className='active';
		oRtit.innerHTML=arr2[iNow2].name;
		oRbtn.href=arr2[iNow2].href;
		aA2[iNow2].href=arr2[iNow2].href;
		iNow2++;
		if(iNow2==aLi2.length)
		{
			iNow2=0;
		}
	},3000);
	

	
};















