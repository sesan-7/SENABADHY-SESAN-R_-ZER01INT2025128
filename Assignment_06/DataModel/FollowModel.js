import mongoose from "mongoose";

const FollowSchema = new mongoose.Schema({
    FollowerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required:true
    },
    FollowingId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required:true
    },
    createdAt : {
        type : Date,
        default : Date.now

    },

    TimeStamp :{
        type:TimeRanges,
        default:Date.now,

    }
});

const Follow = ("Follow", FollowSchema);
export default Follow;