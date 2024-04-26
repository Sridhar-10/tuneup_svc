const mongoose = require("mongoose");

const registerSchema = {
  student_id: {
    type: String,
    required: true,
    default: Math.floor(Math.random() * 1000),
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile_number: {
    type: String,
    required: true,
  },
  college_name: {
    type: String,
    required: true,
  },
  overall_cgpa: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    default: "Front end",
    enum: ["Front end", "Python", "My SQL", "Digital Marketing"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
};

const registerModel = mongoose.model("Students", registerSchema);

module.exports = { registerModel };
