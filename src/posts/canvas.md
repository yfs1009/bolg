---
icon: pen-to-square
date: 2024-11-26
category:
  - canvas

---

# canvas

## canvas 水印

<div>Canvas 对象是 HTML5 中新增的。HTML5 canvas 标签用于绘制图像（通过脚本，通常是 JavaScript）。<br/><br/>代码示例：</div>
<pre>
    var canvas=document.getElementById('canvas');
		var ctx=canvas.getContext('2d');
		var img=new Image();
		img.src='./img/1.jpg';
		img.onload=function(){
		    ctx.drawImage(img,0,0);
		    var logo=new Image();
		    logo.src='./img/z.png';
		    logo.onload=function(){
		        var dimensions={
		            x: canvas.width/2-logo.width/2,
		            y: canvas.height/2-logo.height/2,
		            width: logo.width,
		            height: logo.height
		        };
		        ctx.drawImage(logo,dimensions.x, dimensions.y, dimensions.width, dimensions.height);
		        var imageURL=canvas.toDataURL('image/png');
		    }
		}
</pre>