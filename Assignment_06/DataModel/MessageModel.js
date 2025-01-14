import mongoose from "mongoose";

const MessagerSchema = new mongoose.Schema({
    SenderId : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    RecieverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    Messages:{
        type:String,
        required:true,

    },
    Date:{
        type:Date,
        default:Date.now,
        },

    Status:{
            type:Boolean,
            default:false
            },
    Seen:{
        type:Boolean,
        default:false
            },
    SeenDate:{
        type:Date,
        default:null
    },
    TimeStamp :{
        type:TimeRanges,
        default:Date.now,

        }
    });




const Messager = ("Messager",MessagerSchema);
export default Messager;