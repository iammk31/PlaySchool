import Student from '../models/student.js';


const registerStudent = async (req, res) => {
    const { studentName, parentsName, dob, gender, aadharCard, parentsEmail } = req.body;

    try {
        const existingStudent = await Student.findOne({ aadharCard });
        if (existingStudent) {
            return res.status(400).json({ message: 'Aadhar card already registered' });
        }

        const newStudent = new Student({
            studentName,
            parentsName,
            dob,
            gender,
            aadharCard,
            parentsEmail
        });

        await newStudent.save();

        res.status(201).json({ message: 'Registration successful', student: newStudent });
    } catch (error) {
        console.error('Error registering student:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }

};

export default registerStudent;
