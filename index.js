const express = require("express")
const app= express();
const  userSignup= require("./Models/userSignup")
const mongoose= require("mongoose");
const cors= require("cors");
const addDoctors = require("./Models/addDoctors");
app.use(express.json())
app.use(cors())

const PORT = 6000;


//Api for Signup Function
app.post("/signup", async(req, res)=>{
    const userDetails = await userSignup(req.body)

    try{
        const userExist=await userSignup.findOne({
            email: req.body.email
        })
        //If email already exist_
        if(userExist){
            res.json("Email Already Exist. Please Enter Unique Email")
        }else{
        //If New User Comes
        userDetails.save();
        res.json("User Created Successfully") 
        }
    }
    catch{
        console.log("Api Fetch Failed")
    }
})
// API For Login
app.post("/Login", async(req,res)=>{
    try{
        const loginUser = await userSignup.findOne({
            email:req.body.eamil,
            passwrod:req.body.passwrod
        })
        //asume condition true
        if(loginUser){
            res.json({message:"Login Successfuly",
            loginUser:loginUser
        })
        }else{
            res.json("userName or password is invalid")
        }
    }
    catch{console.error();}
})

//For Creating the API
app.post("/doctors", (req, res) => {
    const data = addDoctors(req.body);
    data
      .save()
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  });

//for getting the data from database
app.get("/doctors", async (req, res) => {
    try {
      const data = await addDoctors.find();
      res.status(200).send(data);
    } catch {
      res.status(500).send("Api Failed To fetch");
    }
  });

  //for getting selected id
app.get("/doctors/:id", (req, res) => {
    const id = req.params.id;
  
    addDoctors.findById(id, (err, user) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(user);
      }
    });
  });

  app.delete("/doctors/:id", (req, res) => {
    const id = req.params.id;
    addDoctors.findByIdAndRemove(id, (err, user) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("Deleted Succesffuly");
      }
    });
  });

  // for updating the Api

app.put("/doctors/:id", (req, res) => {
    const id = req.params.id;
    addDoctors.findById(id, (err, user) => {
      if (err) {
        console.log("api failed");
      } else {
        user.title = req.body.title;
        user.desc = req.body.desc;
        user.price = req.body.price;
        user
          .save()
          .then((user) => {
            res.status(200).send(user);
          })
          .catch((err) => {
            res.status(500).send(err.message);
          });
      }
    });
  });

//for connecting the Database
mongoose.connect("mongodb://127.0.0.1:27017/hms",{useNewUrlParser:true})
// for checking database connection
mongoose.connection.once("open",()=>{
    console.log("Database Connected Succesfully")
});
app.listen(PORT,()=>{
    console.log("PORT is connected at "+ PORT)
});
