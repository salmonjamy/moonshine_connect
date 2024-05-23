const  validateRegistration  = require("../validations");
const Users = require("../models/users");
const {hashPassword, comparePassword} = require("../utils");
const { v4: uuidv4 } = require('uuid');


  const register = async (req, res) => { 
        const { surname, othernames, email, password, username } = req.body;
        try {
            const { error } = validateRegistration(req.body);
            if (error != undefined) throw new Error(error.details[0].message);
        
            const checkIfUserExists = await Users.findOne({ $or: [{ username: username }, { email: email }] })
            if (checkIfUserExists != null) throw new Error("User already exists");
            const { hash, salt } = await hashPassword(password);
            const createnewUser = new Users({
                user_id: uuidv4(),
                surname,
                othernames,
                username,
                email,
                passwordHash: hash, 
                passwordSalt: salt
            })
            await createnewUser.save();
            res.status(201).json({
                status: "success",
                message: "User created successfully"
            })
        } catch (err) { 
            
            res.status( 500).json({
                status: "error",
                error: err.message
            });
        }
  }

  module.exports = register
