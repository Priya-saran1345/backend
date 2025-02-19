import mongoose from 'mongoose';
import jwt from 'jwt';
import bcrypt from 'bcrypt';

const UserSchema = mongoose.Schema({
    username: {
        type: 'string',
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullName
        : {
        type: 'string',
        required: true,
        trim: true,
        index: true
    },
    avtar: {
        type: 'string',//url of cloudinary
        required: true,
    },
    coverImage: {
        type: 'string',//url of cloudinary
    },
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video'
        }
    ],
    password: {
        type: 'string',
        required: [true, 'password is required'],
        minlength: 8,
        select: false // to not expose password in response
    },
    refreshToken: {
        type: 'string',
    }
}, {
    timestamps: true,

});

UserSchema.pre("save", async function (req, res,next) {
    if(!this.modified("password"))return next();
this.password=bcrypt.hash(this.password , 10);
next()
})
UserSchema.methods.isPasswordCorrect=async function (password){
 return await bcrypt.compare(password ,this.password)
}

export const User = mongoose.model('User', UserSchema);