var multiparty = require('multiparty')
var express = require('express')
var cloudinary = require('cloudinary').v2
var modals = require('../modals/schemas')
var bycrptjs = require('bcryptjs')


cloudinary.config({
    cloud_name: "anujcloud",
    api_key: '225255248382615',
    api_secret: 'a8REjls0SihK_siC3BMYYrIOKh0'
})

var user_controller = {}

user_controller.signup = function (req, res, next) {

    var salt = bycrptjs.genSaltSync(10)
    var enc_pass = bycrptjs.hashSync(req.body.password, salt)
    console.log(enc_pass, 'this is hassss')

    var user = new modals.signed_up_user({ pet_name: req.body.pet_name, email: req.body.email, password: enc_pass })
    user.save(function (err, user) {
        if (err) {
            console.log(err)
            if (err.code == 11000) {
                res.redirect('/getin?dup_email=true')
            }
            else {
                res.redirect('/getin?something_wrong=true')
            }
        }
        else {
            console.log(user)
            var user_profile = new modals.user_profile({ user_id: user._id, pet_name: user.pet_name, pet_species: { species: 'no data', breed: 'no data', origin: 'no data', life_span: 'no data' }, pet_health: { height: 0000, weight: 0000, age: 0000, skin: 'no data' }, profile_pic: "https://res.cloudinary.com/anujcloud/image/upload/v1579733754/dummyprofilepic_atqsph.png" })
            user_profile.save(function (err, user_profile) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log(user_profile)
                }
            })

            res.redirect('/getin?signup_success=true')
        }
    })

    console.log(req.body)

}

user_controller.login = function (req, res, next) {
    modals.signed_up_user.findOne({ email: req.body.email }, function (err, result) {
        if (err) {
            console.log(err)
        }
        else {

            if (result == null) {
                res.redirect('/getin?user_not_found=true')
            }
            else {
                bycrptjs.compare(req.body.password, result.password, function (err, ismatch) {
                    if (ismatch) {
                        req.session.user = result._id
                        res.redirect('/Authusers/homepage')

                    }
                    else{
                        res.redirect('/getin?invalid_password=true')
                    }
                    
                });
                
            }
        }
    })

}


module.exports = user_controller