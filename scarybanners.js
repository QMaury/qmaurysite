var theImages = new Array()

//Random-loading images
theImages[0] = 'https://qmaury.com/images/scarybanners/1.png'
theImages[1] = 'https://qmaury.com/images/scarybanners/2.png'
theImages[2] = 'https://qmaury.com/images/scarybanners/3.png'
theImages[3] = 'https://qmaury.com/images/scarybanners/4.png'
theImages[4] = 'https://qmaury.com/images/scarybanners/5.png'

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
}
