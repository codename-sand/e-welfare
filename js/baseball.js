function openbaseball(evt, num) {
    var i, tabContent, dailyTab;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    dailyTab = document.getElementsByClassName("dailyTab");
    for (i = 0; i < dailyTab.length; i++) {
        dailyTab[i].className = dailyTab[i].className.replace(" active", "");
    }
    document.getElementById(num).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultDay").click();

