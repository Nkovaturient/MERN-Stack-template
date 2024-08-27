const express=require("express")
const app=express();
const cors=require("cors");
require('dotenv').config();
const userRouter=require('./routes/userRoutes');

const PORT= process.env.PORT || 6600;
app.use(cors());
app.use(express.json());

app.use('/api', userRouter);

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`);
})