import Employee from '../models/employeeModel.js';

export const createEmployee = async (req, res) => {
  try {
    // File handling (uploaded image)
    // const f_Image = req.file ? `/uploads/${req.file.filename}` : null;
    
    const { f_Id, f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course ,f_Image} = req.body;

    // Duplicate email check
    const existingEmployee = await Employee.findOne({ f_Email });
    if (existingEmployee) {
      return res.status(400).json({ error: 'Employee with this email already exists' });
    }

    // Create new employee
    const newEmployee = new Employee({
      f_Id,
      f_Image,
      f_Name,
      f_Email,
      f_Mobile,
      f_Designation,
      f_Gender,
      f_Course,
    });

    await newEmployee.save();

    res.status(201).json({ message: 'Employee created successfully', employee: newEmployee });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
