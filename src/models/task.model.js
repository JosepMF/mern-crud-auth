import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model("task", taskSchema);