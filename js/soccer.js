function soccer(evt, num) {
    var i, tabContent2, dailyTab2;
    tabContent2 = document.getElementsByClassName("tabContent2");
    for (i = 0; i < tabContent2.length; i++) {
        tabContent2[i].style.display = "none";
    }
    dailyTab2 = document.getElementsByClassName("dailyTab2");
    for (i = 0; i < dailyTab2.length; i++) {
        dailyTab2[i].className = dailyTab2[i].className.replace(" active", "");
    }
    document.getElementById(num).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultButton").click();

