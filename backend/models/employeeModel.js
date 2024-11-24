import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  f_Id: { type: String, required: true, unique: true },
  f_Name: { type: String, required: true },
  f_Email: { type: String, required: true, unique: true },
  f_Mobile: { type: String, required: true },
  f_Designation: { type: String, required: true },
  f_Gender: { type: String, required: true },
  f_Course: { type: String, required: true },
  f_Image: { type: String, required: false}, // Image file path
}, { timestamps: true });

const Employee = mongoose.models.Employee || mongoose.model('Employee', employeeSchema);

export default Employee;
