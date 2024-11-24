import Employee from '../models/employeeModel.js'; // Import your employee model

// Function to handle search by name, email, f_id, or course
export const searchTheData = async (req, res) => {
    const { name, email, f_id, course } = req.query; // Get search criteria from query params

    // Construct search filters based on the provided query parameters
    const filters = {};

    if (name) {
        filters.f_Name = { $regex: name, $options: 'i' }; // 'i' for case-insensitive search
    }
    if (email) {
        filters.f_Email = { $regex: email, $options: 'i' };
    }
    if (f_id) {
        filters.f_Id = f_id;
    }
    if (course) {
        filters.f_Course = { $regex: course, $options: 'i' };
    }

    try {
        // Search for employees based on the constructed filters
        const employees = await Employee.find(filters);

        if (employees.length === 0) {
            return res.status(404).json({ message: "No employees found matching the search criteria." });
        }

        res.status(200).json(employees); // Return the found employees
    } catch (err) {
        console.error('Error searching employees:', err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};
