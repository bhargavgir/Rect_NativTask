
const btnclick = document.getElementById("btnImageChange");

btnclick.addEventListener("click", function () {
    var imageAreay = [{
        src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    }, {
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    }, {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }];

    var imagelist = [];
    for (var i = 0, j = imageAreay.length; i < j; i++) {
        imagelist[i] = new Image();

        imagelist[i].src = imageAreay[i].src;
        imagelist[i].width = imageAreay[i].width;
        imagelist[i].height = imageAreay[i].height;
    }

    function getImageRandomNo(minimum, maximum) {
        imagerandomNO = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        console.log("imagerandomNO  " + imagelist[imagerandomNO])
        return imagelist[imagerandomNO];
    }

    var newImage = getImageRandomNo(0, imagelist.length - 1);
    var images = document.getElementsByTagName('img');
    console.log(images)
    var imagelangth = images.length;
    console.log(imagelangth);
    for (var i = 0; i < imagelangth; i++) {
        images[0].parentNode.removeChild(images[0]);
    }
    document.body.appendChild(newImage);
})


