import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: 'string',
        required: true,
        unique: true,
        lowercase: true,
    }

    
}, { timeseries: true });



export const User = new mongoose.Model('User', userSchema)