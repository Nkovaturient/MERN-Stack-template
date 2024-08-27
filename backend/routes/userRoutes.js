const express=require('express');
const router=express.Router();

router.route("/categories")
.get((req,res)=>{ res.json(`GET Request from categories!`)});

module.exports= router;