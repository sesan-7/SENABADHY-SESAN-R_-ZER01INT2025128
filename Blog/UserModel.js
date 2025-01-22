import mongoose from 'mongoose'

const Userschema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Bio:{
        type: String,
        required:true
        
    },
    
    Email : {
        type : String,
        required : true,
        unique : true,
        trim  : true,
        lowercase : true

    },
    password: {
        type: String,
        required: true
    },
    contactNo:{
        type:String,
        required:false,
        unique:true,
        trim : true
    },
    DOB : {
        type : Date,
        required:false
    },
    Messagers:{
        type: mongoose.Schema.ObjectId,
        ref:"User"
    },
    Blog : {
        type: mongoose.Schema.ObjectId,
        ref:"Blog"
    },
    
    
    Followerscount:{
        type : Number,
        required:false,
        default: 0
    },

    FollowingsCount : {
        type: Number,
        required:false,
        default: 0
    },
    Follows :[{
        type: mongoose.Schema.ObjectId,
        ref: "User"
}],
    AccountCreatedAt : {
        type : Date,
        default : Date.now
    },
    SavedBlog : {
        type: mongoose.Schema.ObjectId,
        ref: "Blog"
    }
});

const User = mongoose.model('User',Userschema);

export default User;

