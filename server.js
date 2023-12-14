const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs'); // Add this line

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// In-memory storage for registered courses
let registeredCourses = [];

// Read faculty details from JSON file
let facultyDetails = JSON.parse(fs.readFileSync('faculty-details.json', 'utf8'));

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

// Course registration middleware
app.post('/register-course', (req, res) => {
  const { name, rollNo, course, semester } = req.body;
  registeredCourses.push({ name, rollNo, course, semester });
  res.json({ success: true, message: 'Course registered successfully.' });
});

// Get registered courses middleware
app.get('/registered-courses', (req, res) => {
  res.json(registeredCourses);
});

// Faculty assigned middleware
app.get('/faculty-assigned', (req, res) => {
  res.json(facultyDetails);
});

// Assign faculty middleware
app.post('/assign-faculty', (req, res) => {
  const { courseCode, facultyName } = req.body;
  // Assign faculty to the course
  facultyDetails[courseCode] = facultyName;

  // Save updated faculty details to the JSON file
  fs.writeFileSync('faculty-details.json', JSON.stringify(facultyDetails));

  res.json({ success: true, message: 'Faculty assigned successfully.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
