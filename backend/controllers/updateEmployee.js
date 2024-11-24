import Employee from '../models/employeeModel.js';

export const updateEmployee = async (req, res) => {
  try {
    // Get the employee ID from request parameters
    const { id } = req.params;
    
    // Find and update the employee by ID
    const updatedEmployee = await Employee.findOneAndUpdate(
      { f_Id: id }, // Filter by f_Id
      { 
        f_Name: req.body.f_Name,
        f_Email: req.body.f_Email,
        f_Mobile: req.body.f_Mobile,
        f_Designation: req.body.f_Designation,
        f_Gender: req.body.f_Gender,
        f_Course: req.body.f_Course,
        f_Image: req.file ? req.file.path : req.body.f_Image // Image file path (if new file uploaded)
      },
      { new: true } // Return the updated document
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Respond with the updated employee data
    return res.status(200).json({ message: "Employee updated successfully", data: updatedEmployee });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
