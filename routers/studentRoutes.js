const express= require("express");
const router=express.Router();
const studentModel=require("../models/student")
const studentRecords=require("../controller/student")

router.route("/student").post(studentRecords.createData);
router.route("/student").get(studentRecords.getData);
router.route("/student/:id").get(studentRecords.getDataThroughId);
router.route("/student/:id").patch(studentRecords.updateData);
router.route("/student/:id").delete(studentRecords.removeData);

module.exports=router;