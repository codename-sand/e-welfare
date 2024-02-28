function basketball(evt, num) {
    var i, tabContent3, dailyTab3;
    tabContent3 = document.getElementsByClassName("tabContent3");
    for (i = 0; i < tabContent3.length; i++) {
        tabContent3[i].style.display = "none";
    }
    dailyTab3 = document.getElementsByClassName("dailyTab3");
    for (i = 0; i < dailyTab3.length; i++) {
        dailyTab3[i].className = dailyTab3[i].className.replace(" active", "");
    }
    document.getElementById(num).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultButton2").click();

