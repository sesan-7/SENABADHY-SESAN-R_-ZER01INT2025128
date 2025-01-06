import mongoose from 'mongoose'

const Userschema = new mongoose.Schema({
    FirstName: {
        type: string,
        required: true,
        trim: true
    },
    LastName:{
        type: string,
        required: true,
        trim: true
    },
    dateOfBirth : {
        type : Date
    },
    CurrentDate : {
        type : Date,
        default : Date.now
    },
    MobileNumber : {
        type : Number,
        required : true,
        unique : true,
        trim : true
    },
    Email : {
        type : string,
        required : true,
        unique : true,
        trim  : true,
        lowercase : true
    }

});

const User = mongoose.model('User',Userschema);

export default User;