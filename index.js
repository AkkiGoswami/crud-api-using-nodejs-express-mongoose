const express =require("express");
const connectDB=require("./db/conn");
const studentModel = require("./models/student");
const router=require("./routers/studentRoutes")
const app = express();
app.use(express.json());
app.use(router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

