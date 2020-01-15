$(document).ready(function () {

    $('#customCheck1').click(function() {

        console.log('hello')
        $("#pet_name").toggle(this.checked);
    });
    
});
