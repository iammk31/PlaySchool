import Student from '../models/student.js';

// Controller to handle student registration
const registerStudent = async (req, res) => {
    const { studentName, parentsName, dob, gender, aadharCard, parentsEmail } = req.body;

    try {
        // Check if Aadhar card is already registered
        const existingStudent = await Student.findOne({ aadharCard });
        if (existingStudent) {
            return res.status(400).json({ message: 'Aadhar card already registered' });
        }

        // Create new student entry
        const newStudent = new Student({
            studentName,
            parentsName,
            dob,
            gender,
            aadharCard,
            parentsEmail
        });

        // Save the student to the database
        await newStudent.save();

        res.status(201).json({ message: 'Registration successful', student: newStudent });
    } catch (error) {
        console.error('Error registering student:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

export default registerStudent;
