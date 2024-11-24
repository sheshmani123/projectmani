import express from 'express';
import { createEmployee } from '../controllers/employeeController.js';
import { getAllEmployees } from '../controllers/getAllEmployee.js';
import upload from '../config/multer.js';
import { updateEmployee } from '../controllers/updateEmployee.js';
import { deleteEmployee } from '../controllers/deleteEmployee.js';
import { searchTheData  } from '../controllers/searchThedata.js';
const employeeRoutes = express.Router(); // Initialize the router


// Create employee route
employeeRoutes.post('/create', upload, createEmployee);

// Get all employees route
employeeRoutes.get('/all', getAllEmployees);
employeeRoutes.put('/update/:id', upload, updateEmployee);
employeeRoutes.delete('/delete/:id',deleteEmployee);
employeeRoutes.get('/search', searchTheData  );

export default employeeRoutes;
