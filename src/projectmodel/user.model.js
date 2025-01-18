import  mongoose from 'mongoose';

const UserSchema=mongoose.Schema({

    username:{
        type: 'string',
        required: true,
        unique: true,
        lowercase: true,
        trim:true,
        index:true
    },
    email:{
        type: 'string',
        required: true,

    }
})


 export const User=mongoose.model('User',UserSchema);