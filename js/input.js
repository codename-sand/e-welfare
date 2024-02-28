$(function(){

    /* number btn */
    jQuery('<div class="num-nav"><div class="num-button num-up">+</div><div class="num-button num-down">-</div></div>').insertAfter('.num input');
    jQuery('.num').each(function() {
        var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.num-up'),
        btnDown = spinner.find('.num-down'),
        min = input.attr('min'),
        max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

});








