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
    followers: [{ user: String, date: Date }],
    followings: [{ user: String, date: Date }],
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
    user_id: String,
    post_media: String,
    caption:String,
    likes:[{user_id:String,date:Date}],
    comments:[{user_id:String,comment:String,data:Date}]
    
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