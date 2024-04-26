// src/data-access/models/register.model.ts
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
var registerSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    default: uuidv4()
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile_number: {
    type: String,
    required: true
  },
  college_name: {
    type: String,
    required: true
  },
  overall_cgpa: {
    type: String,
    required: true
  },
  course: {
    type: String,
    default: "Front end",
    enum: ["Front end", "Python", "My SQL", "Digital Marketing"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
var Register_Model = mongoose.model("Student", registerSchema);

// src/entry-points/http/register/index.ts
var advertisement = async (fastify, opts) => {
  fastify.withTypeProvider().get("/", async (request, reply) => {
    try {
      const response = await Register_Model.find();
      return response;
    } catch (error) {
      return error;
    }
  }).post("/", async (request, reply) => {
    try {
      const { body } = request;
      const new_student = await Register_Model.create(body);
      if (new_student) {
        return {
          message: "Registered successfully",
          data: new_student
        };
      } else {
        return {
          message: "Something went wrong"
        };
      }
    } catch (error) {
      return error;
    }
  });
};
var register_default = advertisement;
export {
  register_default as default
};
//# sourceMappingURL=index.js.map