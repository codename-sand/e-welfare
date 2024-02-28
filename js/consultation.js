function openpopup(evt, num) {
    var i, three_contents, tabbutton;
    three_contents = document.getElementsByClassName("three_contents");
    for (i = 0; i < three_contents.length; i++) {
        three_contents[i].style.display = "none";
    }
    tabbutton = document.getElementsByClassName("tabbutton");
    for (i = 0; i < tabbutton.length; i++) {
        tabbutton[i].className = tabbutton[i].className.replace(" active", "");
    }
    document.getElementById(num).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("default_button").click();


$(function() {
    $('.modal').hide();

    $(".openModal").click(function() {
        $('.modal').show(0);
    })

    $(".close").click(function(){
        $(".modal").hide();
        return false;
    })
});