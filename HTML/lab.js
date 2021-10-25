var result = 0;

function pop() {
    changePic();

}

function changePic() {
    if (result == 0) {
        result = 1;
        document.getElementById("result").style.backgroundImage = "url('popcat1.png')";
        time();
    }
    else {
        result = 0;
        document.getElementById("result").style.backgroundImage = "url('popcat2.png')";
    }
}

function time() {
    var check = true;
    let start = Date.now();

    setInterval(function () {
        if (check) {
            let diff = Math.floor((Date.now() - start) / 10);
            console.log(diff);

            if (diff == 10){
                check = false;
                changePic();
            }
        }
    }, 10);
}