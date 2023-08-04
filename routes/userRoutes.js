/** @format */

const express = require("express");
const {
  usersubmitController,
  getAllUsersController,
} = require("../controllers/userController");

const router = express.Router();

router.post("/submit", usersubmitController);
router.get("/getAllUsers", getAllUsersController);

module.exports = router;
