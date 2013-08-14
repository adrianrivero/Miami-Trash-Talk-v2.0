/* If installing in the footer, you won't need $(function() {} */

    $(function(){
     $('#slider-1').liquidSlider();
    });

    $(function(){
     $('#slider-2').liquidSlider();
    });

    $(function(){
     $('#slider-3').liquidSlider();
    });

    $(function(){
     $('#slider-4').liquidSlider();
    });

    $(function(){
     $('#slider-5').liquidSlider();
    });
    </script>
    <script>

    $(document).ready(function() {

    $('a.panel').click(function () {

        $('a.panel').removeClass('selected');
        $(this).addClass('selected');
        
        current = $(this);
                
        $('#wrapper').scrollTo($(this).attr('href'), 800);      
        
        return false;
    });

    $(window).resize(function () {
        resizePanel();
    });

    });

    function resizePanel() {

    width = $(window).width();
    height = $(window).height();

    mask_height = height * $('.item').length;
        
    $('#debug').html(width  + ' ' + height + ' ' + mask_height);

    $('#wrapper, .item').css({width: width, height: height});
    $('#mask').css({width: width, height: mask_height});
    $('#wrapper').scrollTo($('a.selected').attr('href'), 0);
        
    }

    </script>