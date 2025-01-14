import mongoose from 'mongoose'

const LikesSchema = new mongoose.Schema({
    UserId :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    BlogId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog",
        required:true
    },
    LikedAt :{
        type:Date,
        default:Date.now
        
    }

})

const Likes = mongoose.model('Likes',LikesSchema);

export default Likes;