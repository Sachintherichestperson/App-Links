const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-models.js")

if(process.env.NODE_ENV === "development"){
    router.post("/create",async function(req, res){
          let owner = await function(req, res){
            if(owner.length > 0){
                return res
                .status(503)
                .send("You Don't Have Access")
            }
            let{fullname, email, Password} = req.body;
            let createdowner =  ownerModel.create({
                fullname,
                email,
                Password
            })
            res.send("You Have Access")
          }
    })
}


router.get("/", function(req, res){
    res.send("hey it is owners route");
});




module.exports = router;
