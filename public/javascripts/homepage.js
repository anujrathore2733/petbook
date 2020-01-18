$(document).ready(function () {

    $('#share_post').on('click', function () {
        


        

        var cap = $('#post_caption').val()
        
        console.log(cap,'thsi is caption')
        
        var fil = document.getElementById('attachment1').files[0]
        


        $('#share_post').attr("disabled", true);

        


        var data = new FormData()

        data.append('caption', cap)
        data.append('file', fil)

        console.log(data)



        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "/Authusers/share_post",
            data: data,
            processData: false,
            contentType: false,
            // dataType: "dataType",
            success: function (response) {
                console.log('hello')
                $('#post_caption').val('')
                $("#attchment1").val('')
                $('#share_post').attr("disabled", false);

            }
        });
    })
});