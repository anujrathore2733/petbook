$(document).ready(function () {
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');
    // newly pastes code--------------------------------------------------------------------------------------------
    
    $('#register').on('click',signup_validation)

    function signup_validation(){
        var email_valid =false
        var pet_name_valid= false
        var pass_valid = false
        var pet_name = $('#inputUserame').val()
        var email = $('#inputEmailsignup').val()
        var pass = $('#inputPasswordsignup').val()
        var cnf_pass = $('#inputConfirmPassword').val()
        var pattern_petname = /^[a-zA-Z\s]+$/
        var pattern_email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        console.log(pattern_email.test(email))

        if(!pattern_petname.test(pet_name)){
            $('#error_petname').text('Enter valid name')
            pet_name_valid = false
        }
        else{
            $('#error_petname').text('')
            pet_name_valid = true
        }
        if(!pattern_email.test(email)){
            $('#error_email').text('Enter valid Email')
            email_valid = false
        }
        else{
            $('#error_email').text('')
            email_valid = true
        }
        if(pass != cnf_pass){
            $('#error_pass').text('password didnt match')
            pass_valid = false
        }
        else{
            $('#error_pass').text('')
            pass_valid = true
        }
        if(email_valid==true&&pass_valid==true&&pet_name_valid==true){
            $('#signup_form').submit()
        }
    }

});

$('.login-reg-panel input[type="radio"]').on('change', function () {
    if ($('#log-login-show').is(':checked')) {
        $('.register-info-box').fadeOut();
        $('.login-info-box').fadeIn();

        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');

    }
    else if ($('#log-reg-show').is(':checked')) {
        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();

        $('.white-panel').removeClass('right-log');

        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');
    }
});