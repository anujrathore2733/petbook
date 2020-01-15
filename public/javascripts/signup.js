$(document).ready(function () {

    $("#signup_button").prop("disabled", true);

    $('#customCheck1').click(function() {


        $("#pet_name").toggle(this.checked);
    });

    var petnamevalid = true
    var emailvalid = true
    var pass_match = true

    $('#inputUserame').on('blur',function(){
        console.log('hello')
        var value = $('#inputUserame').val()
        var pattern = /^[a-zA-Z\s]+$/
        if(!pattern.test(value)){
            $('#petname_small').attr('class','text-danger')
            $('#petname_small').text('pet should have letters only')
            petnamevalid = false
        }
        else{
            petnamevalid = true
        }
       
    })

    $('#inputEmail').on('blur',function(){
        var email = $('#inputEmail').val()
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        if(!pattern.test(email)){
            $('#email_small').attr('class','text-danger')
            $('#email_small').text('Enter valid email')
            emailvalid = false
        }
        else{
            emailvalid = true
        }
        
    })

    $('#inputConfirmPassword').on('blur',function(){
        var pass = $('#inputPassword').val()
        var pass_cnf = $('#inputConfirmPassword').val()
        if(pass != pass_cnf){
            $('#pass_small').attr('class','text-danger')
            $('#pass_small').text('Oops! password didnt match')
            pass_match = false
        }
        else{
            pass_match = true
        }
    })

    if(pass_match != true||emailvalid != true||petnamevalid != true){

        $('#signup_button').attr('disabled',true)
    }
    else{
        $('#signup_button').attr('disabled',false)
    }











    
});
