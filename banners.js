var theImages = new Array()

//Random-loading images
theImages[0] = 'https://github.com/QMaury/qmaurysite/blob/main/images/banners/1.png?raw=true'
theImages[1] = 'https://github.com/QMaury/qmaurysite/blob/main/images/banners/2.png?raw=true'
theImages[2] = 'https://github.com/QMaury/qmaurysite/blob/main/images/banners/3.png?raw=true'
theImages[3] = 'https://github.com/QMaury/qmaurysite/blob/main/images/banners/4.png?raw=true'
theImages[4] = 'https://github.com/QMaury/qmaurysite/blob/main/images/banners/5.png?raw=true'
theImages[5] = 'https://github.com/QMaury/qmaurysite/blob/main/images/banners/6.png?raw=true'
theImages[6] = 'https://github.com/QMaury/qmaurysite/blob/main/images/banners/7.png?raw=true'
theImages[7] = 'https://github.com/QMaury/qmaurysite/blob/main/images/banners/8.png?raw=true'
theImages[8] = 'https://github.com/QMaury/qmaurysite/blob/main/images/banners/9.png?raw=true'
theImages[9] = 'https://github.com/QMaury/qmaurysite/blob/main/images/banners/10.png?raw=true'

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
    document.write('<a href ="index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==1){
    document.write('<a href ="index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==2){
    document.write('<a href ="index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==3){
    document.write('<a href ="index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==4){
    document.write('<a href ="index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==5){
    document.write('<a href ="index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==6){
    document.write('<a href ="index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==7){
    document.write('<a href ="index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==8){
    document.write('<a href ="index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
    else if(whichImage==9){
    document.write('<a href ="index.html"><img src="'+theImages[whichImage]+'" border=0 width=452 height=181></a>');
    }
}

