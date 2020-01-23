var mongoose = require('mongoose')

// mongoose connection with mongoDB Atlas
mongoose.connect('mongodb+srv://anuj_2901:anuj2901@petbook-88mzn.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection is stablished with mongo atlas')
});

var models = {}

var user_profileSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    profile_pic: String,
    profile_cover_pic: String,
    followers: [String],
    followings: [String],
    popularity_meter: Number,
    pet_name: String,
    pet_species: {
        species:String,
        breed:String,
        origin:String,
        life_span:String
    },
    pet_health:{
        height:Number,
        weight:Number,
        age:Number,
        skin:String,
    }

})

var postschemas = new mongoose.Schema({
    user_id:{
        type:String,
        required:true,
    },
    pet_name:String,
    post_media: String,
    date:Date,
    caption:String,
    likes:[String],
    comments:[{user_id:String,comment:String,date:Date,pet_name:String}]
    
})

var signed_up_userSchema = new mongoose.Schema({
    pet_name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})



models.signed_up_user = mongoose.model('signed_up_user',signed_up_userSchema)
models.user_post = mongoose.model('user_post',postschemas)
models.user_profile = mongoose.model('user_profile',user_profileSchema) 


module.exports = models