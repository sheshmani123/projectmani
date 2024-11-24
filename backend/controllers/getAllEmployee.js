import Employee from '../models/employeeModel.js'; // Import Employee model

// Fetch all employees
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find(); // Fetch all employees
    
    // Log the employees to the terminal
    console.log('Fetched Employees:', employees);

    res.status(200).json(employees); // Send employees as response
  } catch (error) {
    console.error('Error fetching employees:', error); // Log error in terminal
    res.status(500).json({ message: 'Error fetching employees', error });
  }
};
