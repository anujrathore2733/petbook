var multiparty = require('multiparty')
var express = require('express')
var cloudinary = require('cloudinary').v2
var modals = require('../modals/schemas')
var mongoose = require('mongoose')


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

auth_controller.load_profilepage = function(req,res,next){
    var user_id = mongoose.Types.ObjectId(req.session.user)
     

    modals.user_profile.findOne({user_id:user_id},function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
            res.render('profile.hbs',{user_data:result})
        }
    })

}

auth_controller.editprofile = function(req,res,next){
    var form = new multiparty.Form()
    form.parse(req,function(err,fields,files){
        console.log(err,fields,files)
    })
}


module.exports = auth_controller