import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const registerSchema = new mongoose.Schema<any>({
  student_id: {
    type: String,
    required: true,
    default: uuidv4(),
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
});

export const Register_Model = mongoose.model<any>("Student", registerSchema);
