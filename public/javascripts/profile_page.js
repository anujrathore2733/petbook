$(document).ready(function () {

    $('#share_post').on('click', function () {
        $('#share_post').attr("disabled", true);

        var cap = $('#post_caption').val()
        var fil = document.getElementById("attchment1").files[0];

        


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