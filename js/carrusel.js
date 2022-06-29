var count = 0;

function animation () {
    document.querySelector (".slider-container").style.opacity="0";
    setTimeout("slider()", 500);
}

function slider() {
    count++;
    if (count > 5) count=1;

    document.querySelector (".slider-container").setAttribute("src","./banners/banner" + count + ".jpg");

    document.querySelector (".slider-container").style.opacity="1";

    setTimeout("animation()", 3000);
}


document.body.setAttribute("onload","slider()");

