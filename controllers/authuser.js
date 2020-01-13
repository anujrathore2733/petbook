var multiparty = require('multiparty')
var express = require('express')
var cloudinary = require('cloudinary').v2
var modals = require('../modals/schemas')


cloudinary.config({
    cloud_name: "anujcloud",
    api_key: '225255248382615',
    api_secret: 'a8REjls0SihK_siC3BMYYrIOKh0'
})

var auth_controller = {}

auth_controller.share_post = function (req,res, next) {
    var form = new multiparty.Form()

    form.parse(req, function (err, fields, files) {

        console.log(fields)
        cloudinary.uploader.upload(files.file[0].path, {timeout:60000},function (err, result) {

            if (err) {
                console.log(err,'cloudinary error')
                res.send('cloudinary error')
                
            }
            else {

                var post = new modals.user_post({ post_media: result.url,caption:fields.caption[0] })
                console.log(post)
                post.save(function (err, book) {
                    if (err) return console.error(err);
                    res.send('post successfull')

                })

            }



        })

    })

}


module.exports = auth_controller