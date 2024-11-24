import Employee from '../models/employeeModel.js';

export const deleteEmployee = async (req, res) => {
    const { id } = req.params; // Extract ID from request parameters
    
    try {
        const employee = await Employee.findById(id); // Find the employee by ID

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        // Delete the employee
        await Employee.findByIdAndDelete(id);

        return res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error('Error deleting employee:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
