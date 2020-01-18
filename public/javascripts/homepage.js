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

        var card = '<div class="card py-2 mt-2" id="'+latest_post._id+'"><div class="card-body"><h4 class="card-title"> <a href="" class="text-dark">'+latest_post.pet_name+'</a></h4><p class="card-text"></p><p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p></div><img src="'+latest_post.post_media+'"class="card-img-top" alt="..."><div class="d-flex justify-content-between mt-1 p-2"><button class="btn btn-primary" > Like </button><button class="btn btn-primary"> Comment </button><button class="btn btn-primary"> Share </button></div></div>'
        

        $('#display_post').prepend(card);

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
                    console.log(latest_post)
                    $('#post_caption').val('')
                    $("#attchment1").val('')
                    $('#share_post').attr("disabled", false);
                    display_latest_post()

                }
            });

        }




    })


});