import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        enum: ['tnc', 'pp'],
        default: 'tnc',
        required: true,
    },
}, { timestamps: true, strict: false });

export const Content = mongoose.models.Content || mongoose.model('Admin', contentSchema);
