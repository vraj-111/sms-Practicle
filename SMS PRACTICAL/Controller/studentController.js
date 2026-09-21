import httpError from "../middleware/httpError.js";
import Student from "../model/studentData.js";

const add = async (req, res, next) => {
  try {
    const { name, email, GRID } = req.body;

    const newStudent = await Student({
      name,
      email,
      GRID,
    });

    await newStudent.save();


    res.status(201).json({
      success: true,
      message: "student data added successfully",
      newStudent,
    });
  } catch (error) {
    return next(error.message, 500);
  }
};

export default add;
