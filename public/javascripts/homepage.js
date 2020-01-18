$(document).ready(function () {

    var latest_post = []



    // function load_posts(){
    //     $.ajax({
    //         type: "get",
    //         url: "/Authusers/gettingpost",
    //         // data: "data",
    //         // dataType: "dataType",
    //         success: function (response) {
    //             console.log(response)
    //             response = post_data
    //             display_post()
                
    //         }
    //     });
    // }
    // load_posts()

    function display_latest_post(){
        
    }


    
    

    $('#share_post').on('click', function () {





        var cap = $('#post_caption').val()
        var petname = $('#petname').val()

        console.log(cap, 'thsi is caption')

        var fil = document.getElementById('attachment1').files[0]
        if (fil == undefined) {
            console.log('no img')
        }
        else {

            $('#share_post').attr("disabled", true);




            var data = new FormData()

            data.append('caption', cap)
            data.append('file', fil)
            data.append('pet_name',petname)

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
                    latest_post = response
                    $('#post_caption').val('')
                    $("#attchment1").val('')
                    $('#share_post').attr("disabled", false);

                }
            });

        }




    })


});