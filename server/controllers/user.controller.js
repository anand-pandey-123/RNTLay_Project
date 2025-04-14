const User = require('../models/user.model'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { uploadOnCloudinary } = require('../utils/cloudinary');
dotenv.config();

const registerUser = async (req, res) => {
    try {
        const image = req.file.path; 
        const { name, email, password } = req.body;

    // Validate user input
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    if (!image) {
        return res.status(400).json({ message: 'Please upload an image' });
    }


    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const imageurl = await uploadOnCloudinary(image);
    const newUser = await User.create({ name, email, password : hashedPassword, image: imageurl });
    
    return res.status(201).json({ 
        success: true,
        message: 'User registered successfully',
        data : newUser,
        error : []

    });
    } catch (error) {
        return res.status(201).json({ 
            success: false,
            message: 'User registration failed',
            data : [],
            error : error.message
    
        });
    }
}
const loginUser = async (req, res) => {
    try {
        console.log(req.body)
        const { email, password } = req.body;

        // Validate user input
        if (!email || !password) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const data = {
            email : existingUser.email,
            id : existingUser._id,
        }
        const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.cookie("token", token).status(200).json({ 
            success: true,
            message: 'User logged in successfully',
            data : token,
            error : []

        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            success: false,
            message: 'User login failed',
            data : [],
            error : error
    
        });
    }
}
const getUser = async (req, res) => {
    try {
        const userId = req.params.id;

        // Check if user exists
        const existingUser = await User.findById(userId).populate('rentedItems');
        if (!existingUser) {
            return res.status(400).json({ message: 'User does not exist' });
        }
        // existingUser.;
        return res.status(200).json({ 
            success: true,
            message: 'User fetched successfully',
            data : existingUser,
            error : []

        });
    } catch (error) {
        return res.status(500).json({ 
            success: false,
            message: 'User fetching failed',
            data : [],
            error : error
    
        });
    }
}
const updateUser = async (req, res) => {
    try {
        const { name, email, password} = req.body;
        const image = req.file.path;
        const userId = req.params.id;

        // Validate user input
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }

        // Check if user exists
        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Update user
        const imageurl = await uploadOnCloudinary(image);
        const updatedUser = await User.findByIdAndUpdate(userId, { name, email, password : hashedPassword, image: imageurl }, { new: true });
        
        return res.status(200).json({ 
            success: true,
            message: 'User updated successfully',
            data : updatedUser,
            error : []

        });
    } catch (error) {
        return res.status(500).json({ 
            success: false,
            message: 'User update failed',
            data : [],
            error : error
    
        });
    }
}
const deleteUser = async (req, res) => {
    try {
        const userId = req.body.id;

        // Check if user exists
        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        // Delete user
        await User.findByIdAndDelete(userId);
        
        return res.status(200).json({ 
            success: true,
            message: 'User deleted successfully',
            data : [],
            error : []

        });
    } catch (error) {
        return res.status(500).json({ 
            success: false,
            message: 'User deletion failed',
            data : [],
            error : error
    
        });
    }
}


module.exports = {
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
    getUser
}