import Student from '../models/student.js';


export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        console.log('Fetched students:', students); 
        res.json({ students });
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};



export const addStudent = async (req, res) => {
    const { studentName, parentsName, dob, gender, aadharCard, parentsEmail } = req.body;
    try {
        const newStudent = new Student({ studentName, parentsName, dob, gender, aadharCard, parentsEmail });
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        console.error('Error adding student:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


export const deleteStudent = async (req, res) => {
    try {
        const result = await Student.deleteOne({ _id: req.params.id });
        if (result.deletedCount > 0) {
            res.json({ message: 'Student deleted' });
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
