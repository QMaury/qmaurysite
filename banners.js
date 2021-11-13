var theImages = new Array()

//Random-loading images
theImages[0] = 'https://qmaury.com/images/banners/1.png'
theImages[1] = 'https://qmaury.com/images/banners/2.png'
theImages[2] = 'https://qmaury.com/images/banners/3.png'
theImages[3] = 'https://qmaury.com/images/banners/4.png'
theImages[4] = 'https://qmaury.com/images/banners/5.png'
theImages[5] = 'https://qmaury.com/images/banners/6.png'
theImages[6] = 'https://qmaury.com/images/banners/7.png'
theImages[7] = 'https://qmaury.com/images/banners/8.png'
theImages[8] = 'https://qmaury.com/images/banners/9.png'
theImages[9] = 'https://qmaury.com/images/banners/10.png'
theImages[10] = 'https://qmaury.com/images/banners/11.png'
theImages[11] = 'https://qmaury.com/images/banners/12.png'

var j = 0
var p = theImages.length;
var preBuffer = new Array()

for (i = 0; i < p; i++){
preBuffer[i] = new Image()
preBuffer[i].src = theImages[i]
}
var whichImage = Math.round(Math.random()*(p-1));

function showImage(){
    if(whichImage==0){
    document.write('<a href ="https://qmaury.com/index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==1){
    document.write('<a href ="https://qmaury.com/index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==2){
    document.write('<a href ="https://qmaury.com/index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==3){
    document.write('<a href ="https://qmaury.com/index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==4){
    document.write('<a href ="https://qmaury.com/index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==5){
    document.write('<a href ="https://qmaury.com/index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==6){
    document.write('<a href ="https://qmaury.com/index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==7){
    document.write('<a href ="https://qmaury.com/index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==8){
    document.write('<a href ="https://qmaury.com/index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==9){
    document.write('<a href ="https://qmaury.com/index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==10){
    document.write('<a href ="https://qmaury.com/index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==11){
    document.write('<a href ="ttps://qmaury.com/index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
}
