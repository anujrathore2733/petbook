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
        var user_id = mongoose.Types.ObjectId(fields.user_id[0])
        if(files.cover_pic[0].size == 0 && files.profile_pic[0].size == 0){

            modals.user_profile.updateOne({user_id:user_id},{pet_name:fields.pet_name[0],pet_species:{species:fields.species[0],breed:fields.breed[0],origin:fields.origin[0],life_span:fields.life_span[0]},pet_health:{height:fields.height[0],weight:fields.weight[0],age:fields.age[0],skin:fields.skin_condition[0]}},function(err,profile){
                if(err){
                    console.log(err)
                }
                else{
                    console.log(profile)
                    res.redirect('/Authusers/profile?profileupdate=true')
                }
            })
        }
        if(files.cover_pic[0].size == 0 && files.profile_pic[0].size != 0){
            cloudinary.uploader.upload(files.profile_pic[0].path,function(err,result){
                if(err){
                    console.log(err)
                }
                else{
                    console.log(result)
                    modals.user_profile.updateOne({user_id:user_id},{pet_name:fields.pet_name[0],pet_species:{species:fields.species[0],breed:fields.breed[0],origin:fields.origin[0],life_span:fields.life_span[0]},profile_pic:result.url,pet_health:{height:fields.height[0],weight:fields.weight[0],age:fields.age[0],skin:fields.skin_condition[0]}},function(err,profile){
                        if(err){
                            console.log(err)
                        }
                        else{
                            console.log(profile)
                            res.redirect('/Authusers/profile?profileupdate=true')
                        }

                    })
                }
                
            })
        }
        if(files.cover_pic[0].size != 0 && files.profile_pic[0].size == 0){
            cloudinary.uploader.upload(files.cover_pic[0].path,function(err,result){
                if(err){
                    console.log(err)
                }
                else{
                    console.log(result)
                    modals.user_profile.updateOne({user_id:user_id},{pet_name:fields.pet_name[0],pet_species:{species:fields.species[0],breed:fields.breed[0],origin:fields.origin[0],life_span:fields.life_span[0]},profile_cover_pic:result.url,pet_health:{height:fields.height[0],weight:fields.weight[0],age:fields.age[0],skin:fields.skin_condition[0]}},function(err,profile){
                        if(err){
                            console.log(err)
                        }
                        else{
                            console.log(profile)
                            res.redirect('/Authusers/profile?profileupdate=true')
                        }
                    })
                }
                
            })
        }
        if(files.cover_pic[0].size != 0 && files.profile_pic[0].size != 0){
            cloudinary.uploader.upload(files.cover_pic[0].path,function(err,cp_result){
                if(err){
                    console.log(err)
                }
                else{
                    console.log(cp_result)
                    cloudinary.uploader.upload(files.profile_pic[0].path,function(err,pp_result){
                        if(err){
                            console.log(err)
                        }
                        else{
                            console.log(pp_result)
                            modals.user_profile.updateOne({user_id:user_id},{pet_name:fields.pet_name[0],pet_species:{species:fields.species[0],breed:fields.breed[0],origin:fields.origin[0],life_span:fields.life_span[0]},profile_cover_pic:cp_result.url,profile_pic:pp_result.url,pet_health:{height:fields.height[0],weight:fields.weight[0],age:fields.age[0],skin:fields.skin_condition[0]}},function(err,profile){
                                if(err){
                                    console.log(err)
                                }
                                else{
                                    console.log(profile)
                                    res.redirect('/Authusers/profile?profileupdate=true')
                                }
                            })
                        }
                        
                    })

                    
                }
                
            })

        }


    })
}

auth_controller.load_homepage = function(req,res,next){
    res.render('homepage.hbs')
}


module.exports = auth_controller