$(document).ready(function () {

    

    $('#customCheck1').click(function() {


        $("#pet_name").toggle(this.checked);
    });

    var petnamevalid = false
    var emailvalid = false
    var pass_match = false

    $('#inputUserame').on('blur',function(){
        var value = $('#inputUserame').val()
        var pattern = /^[a-zA-Z\s]+$/
        if(!pattern.test(value)){
            $('#petnamelabel').attr('class','text-danger')
            $('#petnamelabel').text('pet name should have letters only')
            petnamevalid = false
            checkvalidsation()
        }
        else{
            petnamevalid = true
            $('#petnamelabel').attr('class','')
            $('#petnamelabel').text("Your pet's name")
            checkvalidsation()
        }
       
    })

    $('#inputEmail').on('blur',function(){
        var email = $('#inputEmail').val()
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        if(!pattern.test(email)){
            $('#email_label').attr('class','text-danger')
            $('#email_label').text('Enter valid email')
            emailvalid = false
            checkvalidsation()
        }
        else{
            $('#email_label').attr('class','')
            $('#email_label').text('Email')
            emailvalid = true
            checkvalidsation()
        }
        
    })

    $('#inputConfirmPassword').on('blur',function(){
        var pass = $('#inputPassword').val()
        var pass_cnf = $('#inputConfirmPassword').val()
        if(pass != pass_cnf){
            $('#cnfpasslabel').attr('class','text-danger')
            $('#cnfpasslabel').text('Oops! password didnt match')
            pass_match = false
            checkvalidsation()
        }
        else{
            $('#cnfpasslabel').attr('class','')
            $('#cnfpasslabel').text('Confim password')
            pass_match = true
            checkvalidsation()
            
        }
    })

    function checkvalidsation(){
        if(pass_match == true && emailvalid == true && petnamevalid == true){

            $('#signup_button').prop('disabled',false)
        }
        else{
            $('#signup_button').prop('disabled',true)
        }
    }


    
    $('#signup_button').on('click',function(){

        $('#signupform').submit()

    })
    












    
});
