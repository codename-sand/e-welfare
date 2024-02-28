function openstudio(evt, num) {
    var i, studio_wrap, cityTab;
    studio_wrap = document.getElementsByClassName("studio_wrap");
    for (i = 0; i < studio_wrap.length; i++) {
        studio_wrap[i].style.display = "none";
    }
    dailyTab = document.getElementsByClassName("cityTab");
    for (i = 0; i < dailyTab.length; i++) {
        dailyTab[i].className = dailyTab[i].className.replace(" active", "");
    }
    document.getElementById(num).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultCity").click();

