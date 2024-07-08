import userModel from "../models/userModels.js";

export const registerUser = async(req,res)=>{
    try {
        let {username,email,password,address,city,country,phone} = req.body;
        const newUser = new userModel({username,email,address,city,country,phone});
        const registration = await userModel.register(newUser,password);
        // console.log(registration);
        res.send({
        success:true,
        message:"user successfully register"
      })
      } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error in register API",
            error,
        });
    }
}

export const loginUser = async (req, res) => {
    res.status(200).json({
      success: true,
      message: "User successfully logged in"
    });
};