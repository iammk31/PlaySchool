import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    parentsName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    aadharCard: {
        type: String,
        required: true,
        unique: true
    },
    parentsEmail: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
