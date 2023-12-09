import { Router } from "express";
import bcrypt from "bcrypt";
import { Users } from "../models/database.js";

const userRouter = Router();

userRouter.post("/register", (req, res) => {
    const saltRounds = 10;

    // Hash the user's password and save it to the database
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        } else {
            // Save the hashed password to the database
            const newUser = new Users({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                email: req.body.email,
                password: hash, // Store the hashed password
                // other user data
            });
            newUser.save()
                .then(() => {
                    res.status(201).send("User registered successfully");
                })
                .catch((saveError) => {
                    console.error(saveError);
                    res.status(500).send("Failed to register user");
                });
        }
    });
});

userRouter.post("/login", (req, res) => {
    // Replace the hard-coded hash with the hash stored in your database
    const storedHash = "$2b$10$36e92PEdD99Xq7XsbeokdO/7lkcafxZ0fvxYeoY5kP0g2s2.FXm1S";

    Users.findOne({email:req.body.email}).then((result) => {
        
    }).catch((err) => {
        
    });

    // Compare the user's password with the stored hash
    bcrypt.compare(req.body.password, storedHash, function(err, result) {
        if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        } else {
            if (result) {
                res.status(200).send("Login successful");
            } else {
                res.status(401).send("Login failed");
            }
        }
    });
});

userRouter.get('/:username',(req,res)=>{
    const username = req.params.username  
    Users.find({username:`${username}`}).then((result) => {
        result.length ? res.send(result) : res.status(404).send("No such user found")
    }).catch((err) => {
        console.error(err)
    });
})
export default userRouter;
