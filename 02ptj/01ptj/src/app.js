const express = require("express");
const app = express(); 
// server is create but not started yet
app.use(express.json()); // server json data ko read krne ke liye middleware use krna padta hai
const notes = [];
// user will give title and description in frontend
app.post("/notes",(req,res)=>{
    notes.push(req.body);
    res.status(201).json({
        message:"note created successfully",
        notes:notes
    }); // send back the updated note array with status 201 (created)
    
});

app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:"notes retrieved successfully",
        notes:notes
    })
})

app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index;
    delete notes[index] // get the note at the given index}

    res.status(200).json({
        message:"note deleted successfully"
       
    })
     

});

app.patch("/notes/:index",(req,res)=>{
 const index = req.params.index;
 const description = req.body.description;
 notes[index].description = description; // update the description of the note at the given index
 res.status(200).json({
    message:"note updated successfully"
  
 })
})



module.exports = app;