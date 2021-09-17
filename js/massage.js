(function ($) {
    "use strict";
    var input = $('.validate-input-at .input-at');
    $('#submit-at').on('click',function(){
        var check = true;
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
        // Отправка формы        
        if (check == true) {
            $.post("/send.php", $(".form-at input, .form-at textarea").serialize(),
            function(data){
                if(data.frm_check == 'error'){             
                    $(".result-at").html("<div class='error-at'>Ошибка: " + data.msg + "</div>");                     
                    } else {
                    $(".result-at").html("<div class='success-at'>Ваше сообщение отправлено!</div>"); 
                    $(".form-at").fadeOut(500);
                    $(".input-at").val("");
                }
            }, "json");
            return false;
        }
    });
    $('.form-at .input-at').each(function(){
        $(this).focus(function(){
            hideValidate(this);
        });
    });
    function validate (input) {
        /* Если нужно проверять валидность почты, раскомментируйте строчки ниже */
        /*     if($(input).attr('type') == 'email' || $(input).attr('name') == 'email-at') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            return false;
            }
            }
        */
        if($(input).val().trim() == ''){
            return false;
        }
    }
    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }
    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
})(jQuery);