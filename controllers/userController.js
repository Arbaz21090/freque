/** @format */

const userModel = require("../models/userModel");

const usersubmitController = async (req, res) => {
  try {
    const user = await userModel(req.body);
    user.save();
    res.status(200).send({
      success: true,
      message: "Data saved successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Login Failed",
    });
  }
};
const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("Error", error);
    res.status(500).send({
      success: false,
      message: "Unable to Fetch Data",
      error,
    });
  }
};

module.exports = { usersubmitController, getAllUsersController };
