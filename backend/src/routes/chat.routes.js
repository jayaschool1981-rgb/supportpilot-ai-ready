const express = require("express");
const axios = require("axios");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/", async (req,res)=>{
  const token = req.headers.authorization?.split(" ")[1];
  if(!token) return res.status(401).json({message:"Unauthorized"});
  jwt.verify(token,process.env.JWT_SECRET);

  const {message} = req.body;

  const response = await axios.post(process.env.AI_ENDPOINT,{
    model: process.env.AI_MODEL,
    messages:[{role:"user",content:message}]
  },{
    headers:{Authorization:`Bearer ${process.env.AI_API_KEY}`}
  });

  res.json({reply: response.data.choices[0].message.content});
});

module.exports = router;