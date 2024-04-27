const { registerModel } = require("../model/registerModel");

module.exports.getStudents = async (req, res) => {
  try {
    const response = await registerModel.find();
    return response;
  } catch (error) {
    return error;
  }
};

module.exports.CreateStudents = async (req, res) => {
  try {
    const { body } = req;
    const new_student = await registerModel.create(body);
    if (new_student) {
      return {
        message: "Registered successfully",
        data: new_student,
      };
    } else {
      return {
        message: "Something went wrong",
      };
    }
  } catch (error) {
    return error;
  }
};
