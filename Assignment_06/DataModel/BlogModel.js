import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    userId :{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    BlogId: {
            type:String,
            required:true
    },
    Content: {
        type:String,
        required: true
    },
    Comments :{
        type:String,
        required: false
    },
    CreatedAt: {
        type : Date,
        default : Date.now
    },
    Likes :{
        type : Number,
        required:true,
        default:0
    },
    views:{
        type:Number,
        required:true,
        default:0
    }

})

const Blog = mongoose.model('Blog',BlogSchema);
export default Blog;