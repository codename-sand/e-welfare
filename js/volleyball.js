function volleyball(evt, num) {
    var i, tabContent4, dailyTab4;
    tabContent4 = document.getElementsByClassName("tabContent4");
    for (i = 0; i < tabContent4.length; i++) {
        tabContent4[i].style.display = "none";
    }
    dailyTab4 = document.getElementsByClassName("dailyTab4");
    for (i = 0; i < dailyTab4.length; i++) {
        dailyTab4[i].className = dailyTab4[i].className.replace(" active", "");
    }
    document.getElementById(num).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultButton3").click();

