!function(t){var e={};function r(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){"use strict";function i(t){return t<0?-1:t>0?1:0}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e,r,i){var s=this;this.kubik=t,this.sideNumber=e,this.posX=r,this.posY=i,this.el=document.createElement("div"),this.color=t.colors[e],this.el.classList.add("kvadratik"),this.el.onmousedown=function(t){return s.onClickKvadratik(t),!1},this.el.onmousemove=function(t){return s.onMouseMove(t),!1},this.el.onmouseout=function(t){return s.onMouseOut(t),!1},t.sides[e].appendChild(this.el),this.show()}return t.prototype.onMouseMove=function(t){var e=this.posX,r=this.posY;switch(e){case 0:switch(r){case 0:t.offsetX<t.offsetY?this.el.className="kvadratik left":this.el.className="kvadratik up";break;case this.kubik.length-1:t.offsetX<this.el.clientHeight-t.offsetY?this.el.className="kvadratik left":this.el.className="kvadratik down";break;default:this.el.className="kvadratik left"}break;case this.kubik.length-1:switch(r){case 0:t.offsetX>this.el.clientHeight-t.offsetY?this.el.className="kvadratik right":this.el.className="kvadratik up";break;case this.kubik.length-1:t.offsetX>t.offsetY?this.el.className="kvadratik right":this.el.className="kvadratik down";break;default:this.el.className="kvadratik right"}break;default:0==this.posY?this.el.className="kvadratik up":this.posY==this.kubik.length-1&&(this.el.className="kvadratik down")}},t.prototype.onMouseOut=function(t){this.el.classList.remove("left","right","up","down")},t.prototype.onClickKvadratik=function(t){var e=this.posX,r=this.posY;switch(e){case 0:switch(r){case 0:t.offsetX<t.offsetY?this.kubik.rotateLayer(this,"left"):this.kubik.rotateLayer(this,"up");break;case this.kubik.length-1:t.offsetX<this.el.clientHeight-t.offsetY?this.kubik.rotateLayer(this,"left"):this.kubik.rotateLayer(this,"down");break;default:this.kubik.rotateLayer(this,"left")}break;case this.kubik.length-1:switch(r){case 0:t.offsetX>this.el.clientHeight-t.offsetY?this.kubik.rotateLayer(this,"right"):this.kubik.rotateLayer(this,"up");break;case this.kubik.length-1:t.offsetX>t.offsetY?this.kubik.rotateLayer(this,"right"):this.kubik.rotateLayer(this,"down");break;default:this.kubik.rotateLayer(this,"right")}break;default:0==this.posY?this.kubik.rotateLayer(this,"up"):this.posY==this.kubik.length-1&&this.kubik.rotateLayer(this,"down")}},t.prototype.show=function(){var t=this.kubik.kvadrSize,e="left: "+(0+t*this.posX)+"px; top: "+t*this.posY+"px; width: "+t+"px; height: "+t+"px; ";e+=" background-color: "+this.color+"; ",this.el.setAttribute("style",e)},t}(),o=function(){function t(t,e,r){this.vX=t,this.vY=e,this.vZ=r,this.vLen=Math.sqrt(t*t+e*e+r*r)}return t.prototype.rotateX=function(t){if((0!=this.vY||0!=this.vZ)&&0!=t){var e=t/180*Math.PI,r=0==this.vY?-Math.PI/2*Math.abs(this.vZ)/this.vZ:-Math.atan(this.vZ/this.vY);this.vY<0&&(r+=Math.PI);var i=Math.PI/2+r,s=Math.sqrt(this.vY*this.vY+this.vZ*this.vZ);this.vY=parseFloat((Math.cos(e+r)*s).toFixed(5)),this.vZ=parseFloat((Math.cos(e+i)*s).toFixed(5))}},t.prototype.rotateY=function(t){if((0!=this.vX||0!=this.vZ)&&0!=t){var e=t/180*Math.PI,r=Math.sqrt(this.vX*this.vX+this.vZ*this.vZ),s=0==this.vX?Math.PI/2*i(-this.vZ):Math.atan(-this.vZ/this.vX);this.vX<0&&(s+=Math.PI);var o=Math.PI/2+s;this.vX=parseFloat((Math.cos(e+s)*r).toFixed(5)),this.vZ=parseFloat((Math.cos(e+o)*r).toFixed(5))}},t.prototype.rotateZ=function(t){if((0!=this.vX||0!=this.vY)&&0!=t){var e=t/180*Math.PI,r=0==this.vX?-Math.PI/2*Math.abs(this.vY)/this.vY:-Math.atan(this.vY/this.vX);this.vX<0&&(r+=Math.PI);var i=Math.PI/2+r,s=Math.sqrt(this.vX*this.vX+this.vY*this.vY);this.vX=parseFloat((Math.cos(e+r)*s).toFixed(5)),this.vY=parseFloat((Math.cos(e+i)*s).toFixed(5))}},t}(),n=function(){function t(t,e){void 0===e&&(e=3),this.length=e,this.directions=["left","right","up","down"],this.vektorZ=new o(0,0,1e4),this.vektorY=new o(0,1e4,0),this.vektorX=new o(1e4,0,0),this.sides=[],this.copySides=[],this.kvadrArr=[],this.colors=["green","red","blue","darkorange","white","yellow"],this.degX=0,this.degY=0,this.degZ=0,this.rotKubDeg=5,this.rotateTimeIntervalID=0,this.rotRecords=[];var r=document.getElementById(t);this.parentEl=r,this.parentEl.onmousedown=this.parentEl.onselectstart=function(t){if("INPUT"!==t.srcElement.tagName)return!1},r.classList.add("rubik-parent"),this.rubikEl=document.createElement("div"),this.rubikEl.classList.add("rubik"),this.parentEl.appendChild(this.rubikEl),this.el=document.createElement("div"),this.el.classList.add("rubik"),this.copyKubik=document.createElement("div"),this.copyKubik.classList.add("rubik","rubik-copy"),this.kvadrSize=2*Math.round((r.clientWidth+r.clientHeight)/8/this.length),this.sideSize=this.kvadrSize*this.length,this.rubikEl.appendChild(this.el),this.rubikEl.appendChild(this.copyKubik);var i="left: "+(this.parentEl.clientWidth-this.sideSize)/2+"px; top: "+(this.parentEl.clientHeight-this.sideSize)/2+"px;";i+="width: "+this.sideSize+"px; height: "+this.sideSize+"px;",this.rubikEl.setAttribute("style",i),this.rubikEl.classList.add("container");for(var n=0;n<6;n++){(h=document.createElement("div")).classList.add("side"),h.classList.add("side"+n);var a=this.sideStyle(n);h.setAttribute("style",a),this.el.appendChild(h),this.sides.push(h),(h=document.createElement("div")).classList.add("copy-side"),h.setAttribute("style",a),this.copyKubik.appendChild(h),this.copySides.push(h)}for(var h=0;h<6;h++){for(var d=[],l=0;l<e;l++){for(var c=[],p=0;p<e;p++){var u=new s(this,h,l,p);c.push(u)}d.push(c)}this.kvadrArr.push(d)}this.normalize(),this.prepareRotateButtons(),this.rotateKubik("right",30),this.rotateKubik("down",30),this.rotateKubikShow()}return t.prototype.sideStyle=function(t,e){void 0===e&&(e=0);var r=[0,0,0],i=r[0],s=r[1],o=r[2];switch(e){case 0:switch(t){case 0:break;case 1:s=90;break;case 2:s=180;break;case 3:s=270;break;case 4:i=270;break;case 5:i=90}break;case 1:switch(t){case 0:s=-90;break;case 1:break;case 2:s=90;break;case 3:s=180;break;case 4:o=-90,i=-90;break;case 5:o=90,i=90}break;case 5:switch(t){case 0:i=-90;break;case 1:o=-90,s=90;break;case 2:o=180,i=90;break;case 3:o=90,s=-90;break;case 4:i=180}}var n=" rotateX("+i+"deg) rotateY("+s+"deg) rotateZ("+o+"deg) ",a="(-1px, -1px, "+this.sideSize/2+"px); ",h=" transform: "+n+" translate3D"+a+";";return h+=" -webkit-transform: "+n+" translate3D"+a+";",h+=" -moz-transform: "+n+" translate3D"+a+";",h+="width: "+this.sideSize+"px; height: "+this.sideSize+"px; "},t.prototype.onMouseUp=function(){clearInterval(this.rotateTimeIntervalID)},t.prototype.prepareRotateButtons=function(){var t,e=this,r=document.createElement("div");this.inputKolRot=document.createElement("input"),this.inputKolRot.setAttribute("type","number"),this.inputKolRot.setAttribute("value","3"),this.inputKolRot.setAttribute("size","2"),this.inputKolRot.setAttribute("placeholder","случ. ходы"),this.inputKolRot.classList.add("input-kol-rot"),this.parentEl.appendChild(this.inputKolRot),r.setAttribute("style","left:0px; top: 0px"),(t=document.createElement("div")).innerText="Случайно вращать",t.classList.add("rotate-kubik","width-auto"),t.onclick=function(t){return e.randomRotate(parseInt(e.inputKolRot.value)),!1},this.parentEl.appendChild(t),t.setAttribute("style","left:40px; top: 0px"),t.classList.add("hoverInfo"),t.setAttribute("title","кнопка случаного вращения слоёв кубика"),(t=document.createElement("div")).innerText="Автосборка",t.classList.add("rotate-kubik","width-auto"),t.onclick=function(t){return e.autoAssembler(),!1},this.parentEl.appendChild(t),t.setAttribute("style","left:0px; top: 25px"),t.classList.add("hoverInfo"),t.setAttribute("title","кнопка автоматической сборки"),(t=document.createElement("div")).innerText="Назад",t.classList.add("rotate-kubik","width-auto"),t.onclick=function(t){return e.autoAssemblerTik(),!1},this.parentEl.appendChild(t),t.setAttribute("style","left:0px; top: 50px"),t.classList.add("hoverInfo"),t.setAttribute("title","Ход назад"),(t=document.createElement("div")).innerText="<",t.classList.add("rotate-kubik"),t.onmouseup=function(t){e.onMouseUp()},t.onmouseout=function(t){e.onMouseUp()},t.onmousedown=function(t){return e.rotateTimeIntervalID=setInterval(function(){e.rotateKubik("left")},100),!1},this.parentEl.appendChild(t),this.rotKubLeftEl=t,t.setAttribute("style","left:0px; top: "+(this.parentEl.clientHeight/2-10)+"px;"),t.classList.add("hoverInfo"),t.setAttribute("title","держите нажатой для поворота всего кубика влево"),(t=document.createElement("div")).innerText=">",t.classList.add("rotate-kubik"),t.onmouseup=function(t){e.onMouseUp()},t.onmouseout=function(t){e.onMouseUp()},t.onmousedown=function(t){return e.rotateTimeIntervalID=setInterval(function(){e.rotateKubik("right")},100),!1},this.parentEl.appendChild(t),this.rotKubRightEl=t,t.setAttribute("style","left:"+(this.parentEl.clientWidth-25-2)+"px; top: "+(this.parentEl.clientHeight/2-10)+"px;"),t.classList.add("hoverInfo"),t.setAttribute("title","держите нажатой для поворота всего кубика вправо"),(t=document.createElement("div")).innerText="^",t.classList.add("rotate-kubik"),t.onmouseup=function(t){e.onMouseUp()},t.onmouseout=function(t){e.onMouseUp()},t.onmousedown=function(t){return e.rotateTimeIntervalID=setInterval(function(){e.rotateKubik("up")},100),!1},this.parentEl.appendChild(t),this.rotKubUpEl=t,t.setAttribute("style","top:0px; left: "+(this.parentEl.clientWidth/2-10)+"px;"),t.classList.add("hoverInfo"),t.setAttribute("title","держите нажатой для поворота всего кубика вверх"),(t=document.createElement("div")).innerText="v",t.classList.add("rotate-kubik"),t.onmouseup=function(t){e.onMouseUp()},t.onmouseout=function(t){e.onMouseUp()},t.onmousedown=function(t){return e.rotateTimeIntervalID=setInterval(function(){e.rotateKubik("down")},100),!1},this.parentEl.appendChild(t),this.rotKubDownEl=t,t.setAttribute("style","left:"+(this.parentEl.clientWidth/2-10)+"px; top: "+(this.parentEl.clientHeight-20)+"px;"),t.classList.add("hoverInfo"),t.setAttribute("title","держите нажатой для поворота всего кубика вниз")},t.prototype.vektors2Degs=function(t,e){var r=new o(t.vX,t.vY,t.vZ),s=new o(e.vX,e.vY,e.vZ),n=0==r.vZ?90*i(r.vY):180*Math.atan(r.vY/r.vZ)/Math.PI;return r.vZ<0&&(n+=180),this.degX2DegYZ(n,s,r)},t.prototype.degX2DegYZ=function(t,e,r){var s=e,o=r,n=t;o.rotateX(-n),o.vY=0,s.rotateX(-n);var a=0==o.vZ?90*i(o.vX):180*Math.atan(o.vX/o.vZ)/Math.PI;o.vZ<0&&(a+=180),o.rotateY(-a),s.rotateY(-a);var h=0==s.vY?90*i(s.vX):180*Math.atan(s.vX/s.vY)/Math.PI;for(s.vY<0&&(h+=180);Math.abs(this.degX-n)>Math.abs(this.degX-(n+360));)n+=360;for(;Math.abs(this.degX-n)>Math.abs(this.degX-(n-360));)n-=360;for(;Math.abs(this.degY-a)>Math.abs(this.degY-(a+360));)a+=360;for(;Math.abs(this.degY-a)>Math.abs(this.degY-(a-360));)a-=360;for(;Math.abs(this.degZ-h)>Math.abs(this.degZ-(h+360));)h+=360;for(;Math.abs(this.degZ-h)>Math.abs(this.degZ-(h-360));)h-=360;return[n,a,h]},t.prototype.rotateKubik=function(t,e){var r,i,s,o,n,a=e||this.rotKubDeg;switch(t){case"left":this.vektorZ.rotateY(-a),this.vektorY.rotateY(-a),this.vektorX.rotateY(-a);break;case"right":this.vektorZ.rotateY(a),this.vektorY.rotateY(a),this.vektorX.rotateY(a);break;case"up":this.vektorZ.rotateX(a),this.vektorY.rotateX(a),this.vektorX.rotateX(a);break;case"down":this.vektorZ.rotateX(-a),this.vektorY.rotateX(-a),this.vektorX.rotateX(-a)}s=(r=this.vektors2Degs(this.vektorZ,this.vektorY))[0],o=r[1],n=r[2],i=[Math.round(s),Math.round(o),Math.round(n)],this.degX=i[0],this.degY=i[1],this.degZ=i[2],this.rotateKubikShow()},t.prototype.rotateKubikShow=function(){this.el.setAttribute("style",this.kubikStyle())},t.prototype.kubikStyle=function(){var t=" rotateX("+this.degX+"deg) rotateY("+this.degY+"deg) rotateZ("+this.degZ+"deg)",e="transform: "+t+";";return e+="-webkit-transform: "+t+";",e+="-moz-transform: "+t+";",this.parentEl.clientWidth,this.sideSize,this.parentEl.clientHeight,this.sideSize,e+="width: "+this.sideSize+"px; height: "+this.sideSize+"px;"},t.prototype.normalize=function(){for(var t=0;t<6;t++)for(var e=0;e<this.length;e++)for(var r=0;r<this.length;r++)this.kvadrArr[t][e][r].posX=e,this.kvadrArr[t][e][r].posY=r,this.kvadrArr[t][e][r].sideNumber=t,this.kvadrArr[t][e][r].show(),this.sides[t].appendChild(this.kvadrArr[t][e][r].el);this.copyKubik.style.zIndex="1",this.copyKubik.style.display="none"},t.prototype.randomRotate=function(t){void 0===t&&(t=3);for(var e=0;e<t;e++){var r=Math.round(5*Math.random()),i=Math.round(Math.random()*(this.length-1)),s=Math.round(Math.random()*(this.length-1)),o=Math.round(3*Math.random());this.rotateLayer(this.kvadrArr[r][i][s],this.directions[o])}},t.prototype.rotateLayer=function(t,e){var r=this;switch(t.sideNumber){case 0:switch(e){case"up":this.moveSide0Up(t.posX),this.moveCopyKubik(90,0,0);break;case"down":this.moveSide0Down(t.posX),this.moveCopyKubik(-90,0,0);break;case"left":this.moveSide0Left(t.posY),this.moveCopyKubik(0,-90,0);break;case"right":this.moveSide0Right(t.posY),this.moveCopyKubik(0,90,0)}break;case 1:switch(e){case"left":this.moveSide0Left(t.posY),this.moveCopyKubik(0,-90,0);break;case"right":this.moveSide0Right(t.posY),this.moveCopyKubik(0,90,0);break;case"up":this.moveSide5Left(this.length-t.posX-1),this.moveCopyKubik(0,0,-90);break;case"down":this.moveSide5Right(this.length-t.posX-1),this.moveCopyKubik(0,0,90)}break;case 2:switch(e){case"up":this.moveSide0Down(this.length-t.posX-1),this.moveCopyKubik(-90,0,0);break;case"down":this.moveSide0Up(this.length-t.posX-1),this.moveCopyKubik(90,0,0);break;case"left":this.moveSide0Left(t.posY),this.moveCopyKubik(0,-90,0);break;case"right":this.moveSide0Right(t.posY),this.moveCopyKubik(0,90,0)}break;case 3:switch(e){case"left":this.moveSide0Left(t.posY),this.moveCopyKubik(0,-90,0);break;case"right":this.moveSide0Right(t.posY),this.moveCopyKubik(0,90,0);break;case"down":this.moveSide5Left(t.posX),this.moveCopyKubik(0,0,-90);break;case"up":this.moveSide5Right(t.posX),this.moveCopyKubik(0,0,90)}break;case 4:switch(e){case"up":this.moveSide0Up(t.posX),this.moveCopyKubik(90,0,0);break;case"down":this.moveSide0Down(t.posX),this.moveCopyKubik(-90,0,0);break;case"left":this.moveSide5Right(this.length-t.posY-1),this.moveCopyKubik(0,0,90);break;case"right":this.moveSide5Left(this.length-t.posY-1),this.moveCopyKubik(0,0,-90)}break;case 5:switch(e){case"up":this.moveSide0Up(t.posX),this.moveCopyKubik(90,0,0);break;case"down":this.moveSide0Down(t.posX),this.moveCopyKubik(-90,0,0);break;case"left":this.moveSide5Left(t.posY),this.moveCopyKubik(0,0,-90);break;case"right":this.moveSide5Right(t.posY),this.moveCopyKubik(0,0,90)}}setTimeout(function(){r.normalize(),r.checkAssembled()},300)},t.prototype.moveCopyKubik=function(t,e,r){var i,s,n,a,h,d=0,l=this.degX,c=this.degY,p=this.degZ;n=new o(this.vektorY.vX,this.vektorY.vY,this.vektorY.vZ),a=new o(this.vektorZ.vX,this.vektorZ.vY,this.vektorZ.vZ),90==t&&(d=1,a=new o(this.vektorX.vX,this.vektorX.vY,this.vektorX.vZ),h=90),-90==t&&(d=1,a=new o(this.vektorX.vX,this.vektorX.vY,this.vektorX.vZ),h=-90),90==e&&(d=5,a=new o(this.vektorY.vX,this.vektorY.vY,this.vektorY.vZ),n=new o(-this.vektorZ.vX,-this.vektorZ.vY,-this.vektorZ.vZ),h=-90),-90==e&&(d=5,a=new o(this.vektorY.vX,this.vektorY.vY,this.vektorY.vZ),n=new o(-this.vektorZ.vX,-this.vektorZ.vY,-this.vektorZ.vZ),h=90),90==r&&(h=90),-90==r&&(h=-90),i=this.vektors2Degs(a,n),this.degX=i[0],this.degY=i[1],this.degZ=i[2];for(var u=0;u<6;u++){var v=this.sideStyle(u,d);this.copySides[u].setAttribute("style",v)}this.copyKubik.setAttribute("style",this.kubikStyle()+"; z-index: 100;"),this.degZ+=h,this.copyKubik.setAttribute("style",this.kubikStyle()+"; z-index: 100;"),s=[l,c,p],this.degX=s[0],this.degY=s[1],this.degZ=s[2]},t.prototype.moveSide5Left=function(t){this.recordMoves("side5horizontal",t,-1);for(var e=0;e<this.length;e++){this.copySides[5].appendChild(this.kvadrArr[5][e][t].el),this.copySides[1].appendChild(this.kvadrArr[1][this.length-t-1][e].el),this.copySides[4].appendChild(this.kvadrArr[4][this.length-e-1][this.length-t-1].el),this.copySides[3].appendChild(this.kvadrArr[3][t][this.length-e-1].el);var r=this.kvadrArr[5][e][t];this.kvadrArr[5][e][t]=this.kvadrArr[1][this.length-t-1][e],this.kvadrArr[1][this.length-t-1][e]=this.kvadrArr[4][this.length-e-1][this.length-t-1],this.kvadrArr[4][this.length-e-1][this.length-t-1]=this.kvadrArr[3][t][this.length-e-1],this.kvadrArr[3][t][this.length-e-1]=r}0==t&&this.rotateSideRight(2),t==this.length-1&&this.rotateSideLeft(0)},t.prototype.moveSide5Right=function(t){this.recordMoves("side5horizontal",t,1);for(var e=0;e<this.length;e++){this.copySides[5].appendChild(this.kvadrArr[5][e][t].el),this.copySides[3].appendChild(this.kvadrArr[3][t][this.length-e-1].el),this.copySides[4].appendChild(this.kvadrArr[4][this.length-e-1][this.length-t-1].el),this.copySides[1].appendChild(this.kvadrArr[1][this.length-t-1][e].el);var r=this.kvadrArr[5][e][t];this.kvadrArr[5][e][t]=this.kvadrArr[3][t][this.length-e-1],this.kvadrArr[3][t][this.length-e-1]=this.kvadrArr[4][this.length-e-1][this.length-t-1],this.kvadrArr[4][this.length-e-1][this.length-t-1]=this.kvadrArr[1][this.length-t-1][e],this.kvadrArr[1][this.length-t-1][e]=r}0==t&&this.rotateSideLeft(2),t==this.length-1&&this.rotateSideRight(0)},t.prototype.moveSide0Up=function(t){this.recordMoves("side0vertical",t,-1);for(var e=0;e<this.length;e++){this.copySides[0].appendChild(this.kvadrArr[0][t][e].el),this.copySides[4].appendChild(this.kvadrArr[4][t][e].el),this.copySides[2].appendChild(this.kvadrArr[2][this.length-t-1][this.length-e-1].el),this.copySides[5].appendChild(this.kvadrArr[5][t][e].el);var r=this.kvadrArr[0][t][e];this.kvadrArr[0][t][e]=this.kvadrArr[4][t][e],this.kvadrArr[4][t][e]=this.kvadrArr[2][this.length-t-1][this.length-e-1],this.kvadrArr[2][this.length-t-1][this.length-e-1]=this.kvadrArr[5][t][e],this.kvadrArr[5][t][e]=r}0==t&&this.rotateSideLeft(3),t==this.length-1&&this.rotateSideRight(1)},t.prototype.moveSide0Down=function(t){this.recordMoves("side0vertical",t,1);for(var e=0;e<this.length;e++){this.copySides[0].appendChild(this.kvadrArr[0][t][e].el),this.copySides[5].appendChild(this.kvadrArr[5][t][e].el),this.copySides[2].appendChild(this.kvadrArr[2][this.length-t-1][this.length-e-1].el),this.copySides[4].appendChild(this.kvadrArr[4][t][e].el);var r=this.kvadrArr[0][t][e];this.kvadrArr[0][t][e]=this.kvadrArr[5][t][e],this.kvadrArr[5][t][e]=this.kvadrArr[2][this.length-t-1][this.length-e-1],this.kvadrArr[2][this.length-t-1][this.length-e-1]=this.kvadrArr[4][t][e],this.kvadrArr[4][t][e]=r}0==t&&this.rotateSideRight(3),t==this.length-1&&this.rotateSideLeft(1)},t.prototype.moveSide0Left=function(t){this.recordMoves("side0horizontal",t,-1);for(var e=0;e<this.length;e++){this.copySides[0].appendChild(this.kvadrArr[0][e][t].el),this.copySides[1].appendChild(this.kvadrArr[1][e][t].el),this.copySides[2].appendChild(this.kvadrArr[2][e][t].el),this.copySides[3].appendChild(this.kvadrArr[3][e][t].el);var r=this.kvadrArr[0][e][t];this.kvadrArr[0][e][t]=this.kvadrArr[1][e][t],this.kvadrArr[1][e][t]=this.kvadrArr[2][e][t],this.kvadrArr[2][e][t]=this.kvadrArr[3][e][t],this.kvadrArr[3][e][t]=r}0==t&&this.rotateSideRight(5),t==this.length-1&&this.rotateSideLeft(4)},t.prototype.moveSide0Right=function(t){this.recordMoves("side0horizontal",t,1);for(var e=0;e<this.length;e++){this.copySides[0].appendChild(this.kvadrArr[0][e][t].el),this.copySides[1].appendChild(this.kvadrArr[1][e][t].el),this.copySides[2].appendChild(this.kvadrArr[2][e][t].el),this.copySides[3].appendChild(this.kvadrArr[3][e][t].el);var r=this.kvadrArr[3][e][t];this.kvadrArr[3][e][t]=this.kvadrArr[2][e][t],this.kvadrArr[2][e][t]=this.kvadrArr[1][e][t],this.kvadrArr[1][e][t]=this.kvadrArr[0][e][t],this.kvadrArr[0][e][t]=r}0==t&&this.rotateSideLeft(5),t==this.length-1&&this.rotateSideRight(4)},t.prototype.side2CopySide=function(t){for(var e=0;e<this.length;e++)for(var r=0;r<this.length;r++)this.copySides[t].appendChild(this.kvadrArr[t][e][r].el)},t.prototype.rotateSide=function(t,e){for(var r,i=0;i<Math.floor(this.length/2);i++)for(var s=1+i;s<this.length-i;s++){var o=e(s,i),n=o[0],a=o[1],h=e(n,a),d=h[0],l=h[1],c=e(d,l),p=c[0],u=c[1];r=[t[n][a],t[d][l],t[p][u],t[s][i]],t[s][i]=r[0],t[n][a]=r[1],t[d][l]=r[2],t[p][u]=r[3]}},t.prototype.rotateSideRight=function(t){var e=this;this.side2CopySide(t);this.rotateSide(this.kvadrArr[t],function(t,r){return[r,e.length-t-1]})},t.prototype.rotateSideLeft=function(t){var e=this;this.side2CopySide(t);this.rotateSide(this.kvadrArr[t],function(t,r){return[e.length-r-1,t]})},t.prototype.recordMoves=function(t,e,r){var i=this.rotRecords.length;if(0!=i)if(t===this.rotRecords[i-1].sideDirection){for(var s=0,o=[this.length,this.length],n=o[0],a=o[1],h=[],d=0;d<this.length;d++)h[d]=0;for(var l=!1;i>0&&t==this.rotRecords[--i].sideDirection;)e==this.rotRecords[i].pos&&(this.rotRecords[i].rotNumber=this.rotNumberNormalize(r+this.rotRecords[i].rotNumber),l=!0),h[this.rotRecords[i].pos]=this.rotRecords[i].rotNumber,s+=Math.abs(this.rotRecords[i].rotNumber),n+=Math.abs(this.rotRecords[i].rotNumber-1)-1,a+=Math.abs(this.rotRecords[i].rotNumber+1)-1,this.rotRecords.splice(i,1);l||(h[e]=r,s+=Math.abs(r),n+=Math.abs(r-1)-1,a+=Math.abs(r+1)-1);var c=0;n<s&&(c=-1),a<s&&(c=1);for(d=0;d<this.rotRecords.length;d++){if(n<s)switch(t){case"side0horizontal":switch(this.rotRecords[d].sideDirection){case"side0vertical":this.rotRecords[d].sideDirection="side5horizontal",this.rotRecords[d].pos=this.length-this.rotRecords[d].pos-1;break;case"side5horizontal":this.rotRecords[d].sideDirection="side0vertical",this.rotRecords[d].rotNumber=-this.rotRecords[d].rotNumber}break;case"side0vertical":switch(this.rotRecords[d].sideDirection){case"side0horizontal":this.rotRecords[d].sideDirection="side5horizontal",this.rotRecords[d].pos=this.length-this.rotRecords[d].pos-1,this.rotRecords[d].rotNumber=-this.rotRecords[d].rotNumber;break;case"side5horizontal":this.rotRecords[d].sideDirection="side0horizontal"}break;case"side5horizontal":switch(this.rotRecords[d].sideDirection){case"side0horizontal":this.rotRecords[d].sideDirection="side0vertical",this.rotRecords[d].pos=this.length-this.rotRecords[d].pos-1;break;case"side0vertical":this.rotRecords[d].sideDirection="side0horizontal",this.rotRecords[d].rotNumber=-this.rotRecords[d].rotNumber}}if(a<s)switch(t){case"side0horizontal":switch(this.rotRecords[d].sideDirection){case"side0vertical":this.rotRecords[d].sideDirection="side5horizontal",this.rotRecords[d].rotNumber=-this.rotRecords[d].rotNumber;break;case"side5horizontal":this.rotRecords[d].sideDirection="side0vertical",this.rotRecords[d].pos=this.length-this.rotRecords[d].pos-1}break;case"side0vertical":switch(this.rotRecords[d].sideDirection){case"side0horizontal":this.rotRecords[d].sideDirection="side5horizontal";break;case"side5horizontal":this.rotRecords[d].sideDirection="side0horizontal",this.rotRecords[d].rotNumber=-this.rotRecords[d].rotNumber,this.rotRecords[d].pos=this.length-this.rotRecords[d].pos-1}break;case"side5horizontal":switch(this.rotRecords[d].sideDirection){case"side0horizontal":this.rotRecords[d].sideDirection="side0vertical",this.rotRecords[d].rotNumber=-this.rotRecords[d].rotNumber;break;case"side0vertical":this.rotRecords[d].sideDirection="side0horizontal",this.rotRecords[d].pos=this.length-this.rotRecords[d].pos-1}}}for(var p=0;p<this.length;p++)h[p]+c!=0&&(r=this.rotNumberNormalize(h[p]+c),this.rotRecords.push({sideDirection:t,pos:p,rotNumber:r}))}else this.rotRecords.push({sideDirection:t,pos:e,rotNumber:r});else this.rotRecords.push({sideDirection:t,pos:e,rotNumber:r})},t.prototype.rotNumberNormalize=function(t){var e=(t+4)%4;return e>=2&&(e-=4),e},t.prototype.checkAssembled=function(){for(var t=this,e=0;e<5;e++)for(var r=0;r<this.length;r++)for(var i=0;i<this.length;i++)if(this.kvadrArr[e][r][i].color!=this.kvadrArr[e][0][0].color)return;this.rotRecords=[],setTimeout(function(){alert("П О З Д Р А В Л Я Ю !!!  \n \nВы собрали Кубик-Рубика!!!"),t.rubikEl.classList.remove("kubik-assembling")},500)},t.prototype.autoAssembler=function(){var t=this;0!=this.rotRecords.length&&(this.rubikEl.classList.add("kubik-assembling"),this.autoAssemblerID=setInterval(function(){t.autoAssemblerTik()},1e3))},t.prototype.autoAssemblerTik=function(){if(0!=this.rotRecords.length){var t=this.rotRecords.pop();switch(this.rotRecords.push({sideDirection:"temp",pos:0,rotNumber:0}),t.sideDirection){case"side0horizontal":t.rotNumber>0?this.rotateLayer(this.kvadrArr[0][0][t.pos],"left"):this.rotateLayer(this.kvadrArr[0][0][t.pos],"right");break;case"side0vertical":t.rotNumber>0?this.rotateLayer(this.kvadrArr[0][t.pos][0],"up"):this.rotateLayer(this.kvadrArr[0][t.pos][0],"down");break;case"side5horizontal":t.rotNumber>0?this.rotateLayer(this.kvadrArr[5][0][t.pos],"left"):this.rotateLayer(this.kvadrArr[5][0][t.pos],"right")}this.rotRecords.pop(),this.rotRecords.pop(),t.rotNumber=t.rotNumber-i(t.rotNumber),0!=t.rotNumber&&this.rotRecords.push(t),0!=this.rotRecords.length||clearInterval(this.autoAssemblerID)}},t}();e.Rubik=n},function(t,e,r){"use strict";r.r(e);var i=r(0);r(2);new i.Rubik("rubik",4)},function(t,e,r){var i=r(3);"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};r(7)(i,s);i.locals&&(t.exports=i.locals)},function(t,e,r){var i=r(4);(t.exports=r(5)(!1)).push([t.i,"body {\r\n    /*display: flex;*/\r\n}\r\n\r\n@font-face {\r\n    font-family: Description; /* Гарнитура шрифта */\r\n    src: url("+i(r(6))+"); /* Путь к файлу со шрифтом */\r\n}\r\n\r\n.description {\r\n    display: inline-block;\r\n    margin: 1%;\r\n    background: linear-gradient(white, lightgray);\r\n    margin-top: 5%;\r\n    border: beige 1px solid;\r\n    box-shadow: 3px 3px 5px grey;\r\n    padding-right: 2em;\r\n    max-width: 40%;\r\n    font-family: Description, 'Comic Sans MS', cursive;\r\n    font-size: larger;\r\n}\r\n\r\n.description h3 {\r\n    text-align: center;\r\n}\r\n\r\n.description li {\r\n    margin: 0.5em;\r\n}\r\n\r\n.rubik-parent {\r\n    border: solid 2px blue;\r\n    border-radius: 0% 50% 50% 50%;\r\n\r\n    margin-left: 5%;\r\n    margin-top: 5%;\r\n    display: inline-block;\r\n    position: absolute;\r\n\r\n    transform-style: preserve-3d;\r\n    -webkit-transform-style: preserve-3d;\r\n    perspective: 600px;\r\n    -webkit-perspective: 600px;\r\n    -moz-perspective: 600px;\r\n    transform: translateZ(200px);\r\n    /*overflow: hidden;*/\r\n}\r\n\r\n.container {\r\n    z-index: 1;\r\n}\r\n\r\n.rubik {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    transform-style: preserve-3d;\r\n    -webkit-transform-style: preserve-3d;\r\n    /*transform: rotateX(-45deg) rotateY(-45deg) translateX(50%) translateY(50%);*/\r\n    position: absolute;\r\n    transition: 0.325s;\r\n    -webkit-transition: 0.325s;\r\n    -moz-transition: 0.325s;\r\n    z-index: 2;\r\n}\r\n\r\n.rubik-copy {\r\n    transition: 0.3s;\r\n    -webkit-transition: 0.3s;\r\n    -moz-transition: 0.3s;\r\n    z-index: 1;\r\n}\r\n\r\n.side {\r\n    background-color: RGBA(0,0,0,0);\r\n    position: absolute;\r\n    /*backface-visibility: hidden;*/\r\n    /*-webkit-backface-visibility: hidden;*/\r\n    transform-style: flat;\r\n    -webkit-transform-style: flat;\r\n    z-index: 2;\r\n}\r\n\r\n.copy-side {\r\n    position: absolute;\r\n    z-index: 1;\r\n    /*backface-visibility: hidden;*/\r\n}\r\n\r\n.side0 {\r\n    transform: rotateX(0deg) rotateY(0deg) translateZ(100px);\r\n}\r\n\r\n.side1 {\r\n    transform: rotateX(0deg) rotateY(90deg) translateZ(100px);\r\n}\r\n\r\n.side2 {\r\n    transform: rotateX(0deg) rotateY(180deg) translateZ(100px);\r\n}\r\n\r\n.side3 {\r\n    transform: rotateX(0deg) rotateY(270deg) translateZ(100px);\r\n}\r\n\r\n.side4 {\r\n    transform: rotateX(-90deg) rotateY(0deg) translateZ(100px);\r\n}\r\n\r\n.side5 {\r\n    transform: rotateX(90deg) rotateY(0deg) translateZ(100px);\r\n}\r\n\r\n.kvadratik {\r\n    opacity: 0.80;\r\n    position: absolute;\r\n    transform-style: flat;\r\n    -webkit-transform-style: flat;\r\n    border: solid 1px black;\r\n    backface-visibility: hidden;\r\n    -webkit-backface-visibility: hidden;\r\n    /*transform-style: preserve-3d;*/\r\n}\r\n\r\n.kvadratik.left:hover::before {\r\n    position: absolute;\r\n    display: block;\r\n    width: 0px;\r\n    height: 0px;\r\n    color: black;\r\n    left: -40px;\r\n    top: calc(50% - 20px);\r\n    background-color: transparent;\r\n    border: solid 1px black;\r\n    border-left: 0px;\r\n    border-top: 20px  solid transparent;\r\n    border-bottom: 20px  solid transparent;\r\n    border-right: 30px  solid black;\r\n    z-index: 100;\r\n    content: '';\r\n}\r\n\r\n.kvadratik.left:hover::after {\r\n    position: absolute;\r\n    display: block;\r\n    width: 0px;\r\n    height: 0px;\r\n    color: black;\r\n    left: -25px;\r\n    top: calc(50% - 5px);\r\n    background-color: transparent;\r\n    border: solid 1px black;\r\n    border-left: 30px;\r\n    border-top: 5px  solid;\r\n    border-bottom: 5px  solid;\r\n    border-right: 30px  solid black;\r\n    z-index: 100;\r\n    content: '';\r\n}\r\n\r\n.kvadratik.right:hover::before {\r\n    position: absolute;\r\n    display: block;\r\n    width: 0px;\r\n    height: 0px;\r\n    color: black;\r\n    left: calc(100% + 10px);\r\n    top: calc(50% - 20px);\r\n    background-color: transparent;\r\n    border: solid 1px black;\r\n    border-left: 30px  solid black;\r\n    border-top: 20px  solid transparent;\r\n    border-bottom: 20px  solid transparent;\r\n    border-right: 0px;\r\n    z-index: 100;\r\n    content: '';\r\n}\r\n\r\n.kvadratik.right:hover::after {\r\n    position: absolute;\r\n    display: block;\r\n    width: 0px;\r\n    height: 0px;\r\n    color: black;\r\n    left: calc(100% - 5px);\r\n    top: calc(50% - 5px);\r\n    background-color: transparent;\r\n    border: solid 1px black;\r\n    border-left: 30px;\r\n    border-top: 5px  solid;\r\n    border-bottom: 5px  solid;\r\n    border-right: 30px  solid black;\r\n    z-index: 100;\r\n    content: '';\r\n}\r\n\r\n.kvadratik.up:hover::before {\r\n    position: absolute;\r\n    display: block;\r\n    width: 0px;\r\n    height: 0px;\r\n    color: black;\r\n    top: -40px;\r\n    left: calc(50% - 20px);\r\n    background-color: transparent;\r\n    border: solid 1px black;\r\n    border-bottom: 30px  solid black;\r\n    border-left: 20px  solid transparent;\r\n    border-right: 20px  solid transparent;\r\n    border-top: 0px;\r\n    z-index: 101;\r\n    content: '';\r\n}\r\n\r\n.kvadratik.up:hover::after {\r\n    position: absolute;\r\n    display: block;\r\n    width: 0px;\r\n    height: 0px;\r\n    color: black;\r\n    top: -25px;\r\n    left: calc(50% - 5px);\r\n    background-color: transparent;\r\n    border: solid 1px black;\r\n    border-top: 30px;\r\n    border-left: 5px  solid;\r\n    border-right: 5px  solid;\r\n    border-bottom: 30px  solid black;\r\n    z-index: 100;\r\n    content: '';\r\n}\r\n\r\n.kvadratik.down:hover::before {\r\n    position: absolute;\r\n    display: block;\r\n    width: 0px;\r\n    height: 0px;\r\n    color: black;\r\n    top: calc(100% + 10px);\r\n    left: calc(50% - 20px);\r\n    background-color: transparent;\r\n    border: solid 1px black;\r\n    border-top: 30px  solid black;\r\n    border-left: 20px  solid transparent;\r\n    border-right: 20px  solid transparent;\r\n    border-bottom: 0px;\r\n    z-index: 100;\r\n    content: '';\r\n}\r\n\r\n.kvadratik.down:hover::after {\r\n    position: absolute;\r\n    display: block;\r\n    width: 0px;\r\n    height: 0px;\r\n    color: black;\r\n    top: calc(100% - 5px);\r\n    left: calc(50% - 5px);\r\n    background-color: transparent;\r\n    border: solid 1px black;\r\n    border-top: 30px;\r\n    border-left: 5px  solid;\r\n    border-right: 5px  solid;\r\n    border-bottom: 30px  solid black;\r\n    z-index: 100;\r\n    content: '';\r\n}\r\n\r\n.input-kol-rot {\r\n    width: 2.5em;\r\n}\r\n\r\n.rotate-kubik {\r\n    position: absolute;\r\n    z-index: 100;\r\n    display: inline-block;\r\n    background: linear-gradient(lightcyan, cyan, darkcyan);\r\n\r\n    border: solid 1px cyan;\r\n    border-radius: 8px;\r\n    width: 25px;\r\n    text-align: center;\r\n    text-shadow: 2px -1px 1px white;\r\n}\r\n\r\n.rotate-kubik:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0 0 10px cyan;\r\n}\r\n\r\n.width-auto {\r\n    padding-left: 0.3em;\r\n    padding-right: 0.3em;\r\n    width: auto;\r\n    border: gold 1px solid;\r\n    color: darkblue;\r\n    text-shadow: 0 -1px 1px white;\r\n    background: linear-gradient(lightgoldenrodyellow, gold, goldenrod);\r\n}\r\n\r\n.kubik-assembling {\r\n    animation: 30s rotate360 linear infinite;\r\n    /*animation-play-state: paused;*/\r\n}\r\n\r\n@keyframes rotate360 {\r\n    0% { transform: rotateY(0deg)}\r\n    100% { transform: rotateY(360deg)}\r\n}\r\n\r\n",""])},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",i=t[3];if(!i)return r;if(e&&"function"==typeof btoa){var s=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(i),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[r].concat(o).concat([s]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(i[o]=!0)}for(s=0;s<t.length;s++){var n=t[s];"number"==typeof n[0]&&i[n[0]]||(r&&!n[2]?n[2]=r:r&&(n[2]="("+n[2]+") and ("+r+")"),e.push(n))}},e}},function(t,e,r){t.exports=r.p+"ff9dc58c980c0908aa2a437c5ae6cfc3.ttf"},function(t,e,r){var i={},s=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,r);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),n=null,a=0,h=[],d=r(8);function l(t,e){for(var r=0;r<t.length;r++){var s=t[r],o=i[s.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](s.parts[n]);for(;n<s.parts.length;n++)o.parts.push(k(s.parts[n],e))}else{var a=[];for(n=0;n<s.parts.length;n++)a.push(k(s.parts[n],e));i[s.id]={id:s.id,refs:1,parts:a}}}}function c(t,e){for(var r=[],i={},s=0;s<t.length;s++){var o=t[s],n=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[n]?i[n].parts.push(a):r.push(i[n]={id:n,parts:[a]})}return r}function p(t,e){var r=o(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=h[h.length-1];if("top"===t.insertAt)i?i.nextSibling?r.insertBefore(e,i.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),h.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var s=o(t.insertAt.before,r);r.insertBefore(e,s)}}function u(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=h.indexOf(t);e>=0&&h.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return r.nc}();i&&(t.attrs.nonce=i)}return b(e,t.attrs),p(t,e),e}function b(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function k(t,e){var r,i,s,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var h=a++;r=n||(n=v(e)),i=g.bind(null,r,h,!1),s=g.bind(null,r,h,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),p(t,e),e}(e),i=function(t,e,r){var i=r.css,s=r.sourceMap,o=void 0===e.convertToAbsoluteUrls&&s;(e.convertToAbsoluteUrls||o)&&(i=d(i));s&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var n=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(n),a&&URL.revokeObjectURL(a)}.bind(null,r,e),s=function(){u(r),r.href&&URL.revokeObjectURL(r.href)}):(r=v(e),i=function(t,e){var r=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),s=function(){u(r)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else s()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=c(t,e);return l(r,e),function(t){for(var s=[],o=0;o<r.length;o++){var n=r[o];(a=i[n.id]).refs--,s.push(a)}t&&l(c(t,e),e);for(o=0;o<s.length;o++){var a;if(0===(a=s[o]).refs){for(var h=0;h<a.parts.length;h++)a.parts[h]();delete i[a.id]}}}};var f=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}();function g(t,e,r,i){var s=r?"":i.css;if(t.styleSheet)t.styleSheet.cssText=f(e,s);else{var o=document.createTextNode(s),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(o,n[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,i=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var s,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(s=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(s)+")")})}}]);