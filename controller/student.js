const studentModel=require("../models/student");

class studentRecords
{
    constructor()
    {}
        //Handling post api 
  createData=async(req,res)=>{
    try {
        const insertStudent=new studentModel(req.body);
        console.log(insertStudent);
        const insertRecord=await insertStudent.save();
        res.status(201).send(insertRecord);
    } catch (error) {
        res.status(400).send("Insertion error")
    }
    }
    
    //Getting all students records
    
   getData= async(req,res)=>{
        try {
            const getStudent=await studentModel.find({}).sort({"score":1});
            console.log(getStudent);
            res.status(201).send(getStudent);
        } catch (error) {
            res.status(400).send("Insertion error")
        }
        }
    
        //Getting one student record through their id
    
       getDataThroughId=async(req,res)=>{
            try {
                const _id=req.params.id;
                const getStudent=await studentModel.findById(_id);
                console.log(getStudent);
                res.status(201).send(getStudent);
            } catch (error) {
                res.status(400).send("Insertion error")
            }
            }
    
            //update User's Data one By one using their id's
    
       updateData= async(req,res)=>{
                try {
                    const _id=req.params.id;
                    const updateStudent=await studentModel.findByIdAndUpdate(_id,req.body);
                    console.log(updateStudent);
                    res.status(201).send(updateStudent);
                } catch (error) {
                    res.status(400).send("Insertion error")
                }
                }
    
        removeData= async(req,res)=>{
            try {
                const id=req.params.id;
                const deleteStudent=await studentModel.findByIdAndDelete(id);
                console.log(deleteStudent);
                res.status(201).send(deleteStudent);
            } catch (error) {
                res.status(400).send("Insertion error")
            }
            }


    }

module.exports=new studentRecords();