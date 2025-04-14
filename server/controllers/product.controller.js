const Item = require('../models/product.model'); 
const User = require('../models/user.model'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const e = require('express');
const { uploadOnCloudinary } = require('../utils/cloudinary');
dotenv.config();

const createItem = async (req, res) => {
    try {
        const { name, description, price, quantity, location, category} = req.body;
        const image = req.file.path;
        const userId = req.userId;
        console.log(userId)

    // Validate user input
    if (!name || !description || !price || !quantity || !location || !category) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    // Check if item already exists
    const existingItem = await Item.findOne({ name });
    // console.log(existingItem)
    if (existingItem) {
        return res.status(400).json({ message: 'Item already exists' });
    }

    // Create new item
    const imageurl = await uploadOnCloudinary(image); 
    // try {
        
    // } catch (error) {
    //     console.log(error.message);
    // }
    const newItem = await Item.create({ name, description, price, quantity, location, category, image: imageurl, createdBy: userId });
    console.log(newItem)
    
    return res.status(201).json({ 
        success: true,
        message: 'Item created successfully',
        data : newItem,
        error : []

    });
    } catch (error) {
        console.log(error.message);
        return res.status(201).json({ 
            success: false,
            message: 'Item creation failed',
            data : [],
            error : error

        });
    }
}
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find({}).populate('rentedBy', 'name email image');
        return res.status(200).json({
            success: true,
            message: 'Items fetched successfully',
            data : items,
            error : []
        });
    } catch (error) {
        return res.status(201).json({ 
            success: false,
            message: 'Items fetching failed',
            data : [],
            error : error

        });
    }
}
const getItemById = async (req, res) => {
    try {
        const itemId = req.params.id;
        const item = await Item.findById(itemId).populate('rentedBy', 'name email image');
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        return res.status(200).json({
            success: true,
            message: 'Item fetched successfully',
            data : item,
            error : []
        });
    } catch (error) {
        return res.status(201).json({ 
            success: false,
            message: 'Item fetching failed',
            data : [],
            error : error

        });
    }
}
const rentItem = async(req, res) => {
    try {
        const { itemId, totalDays } = req.body;
        const userId = req.userId;
        console.log(itemId, totalDays, userId)

        // Validate user input
        if (!itemId || !userId ) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }

        // Check if item exists
        const existingItem = await Item.findById(itemId);
        console.log(existingItem);
        if (!existingItem) {
            return res.status(400).json({ message: 'Item does not exist' });
        }

        // Check if user exists
        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(400).json({ message: 'User does not exist' });
        }
        console.log(existingUser)
        // Rent the item
        existingItem.isRented = true;
        existingItem.rentedBy = userId;
        existingItem.totalDays = totalDays; // Assuming Item model has a totalDays field
        existingItem.rentedBy = userId; // Assuming Item model has a rentedBy field
        existingItem.rentedAt = Date.now();
        existingUser.rentedItems.push(itemId); // Assuming User model has a rentedItems field
        existingUser.rentedAt = Date.now();
        await existingUser.save();
        await existingItem.save();
        console.log(existingItem)

        return res.status(200).json({
            success: true,
            message: 'Item rented successfully',
            data : existingItem,
            error : []
        });
    } catch (error) {
        return res.status(201).json({ 
            success: false,
            message: 'Item renting failed',
            data : [],
            error : error

        });
    }
}
const userRentedItem = async(req, res) => {
    try {
        const userId = req.userId;

        // Validate user input
        if (!userId) {
            return res.status(400).json({ message: 'Please provide user ID' });
        }

        // Check if user exists
        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        // Get rented items by user
        const rentedItems = await Item.find({ rentedBy: userId }).populate('rentedBy', 'name email image');
        console.log(rentedItems)

        return res.status(200).json({
            success: true,
            message: 'Rented items fetched successfully',
            data : rentedItems,
            error : []
        });
    } catch (error) {
        return res.status(201).json({ 
            success: false,
            message: 'Rented items fetching failed',
            data : [],
            error : error

        });
    }
}
const updateItem = async(req, res) => {
    try {
        const { itemId, name, description, price, quantity, location, category} = req.body;
        const image = req.file.path;

        // Validate user input
        if (!itemId || !name || !description || !price || !quantity || !location || !category) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }

        // Check if item exists
        const existingItem = await Item.findById(itemId);
        if (!existingItem) {
            return res.status(400).json({ message: 'Item does not exist' });
        }

        // Update the item
        const imageurl = await uploadOnCloudinary(image);
        const updatedItem = await Item.findByIdAndUpdate(itemId, { name, description, price, quantity, location, category, image : imageurl }, { new: true });
        
        return res.status(200).json({
            success: true,
            message: 'Item updated successfully',
            data : updatedItem,
            error : []
        });
    } catch (error) {
        return res.status(201).json({ 
            success: false,
            message: 'Item update failed',
            data : [],
            error : error

        });
    }
}
const deleteItem = async(req, res) => {
    try {
        const itemId = req.params.id;

        // Validate user input
        if (!itemId) {
            return res.status(400).json({ message: 'Please provide item ID' });
        }

        // Check if item exists
        const existingItem = await Item.findById(itemId);
        if (!existingItem) {
            return res.status(400).json({ message: 'Item does not exist' });
        }

        // Delete the item
        await Item.findByIdAndDelete(itemId);

        return res.status(200).json({
            success: true,
            message: 'Item deleted successfully',
            data : [],
            error : []
        });
    } catch (error) {
        return res.status(201).json({ 
            success: false,
            message: 'Item deletion failed',
            data : [],
            error : error

        });
    }
}
const getItemByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const items = await Item.find({ category }).populate('rentedBy', 'name email image');
        if (!items) {
            return res.status(404).json({ message: 'No items found in this category' });
        }
        return res.status(200).json({
            success: true,
            message: 'Items fetched successfully',
            data : items,
            error : []
        });
    } catch (error) {
        return res.status(201).json({ 
            success: false,
            message: 'Items fetching failed',
            data : [],
            error : error

        });
    }
}
const getUserItems = async(req, res) => {
    try {
        const userId = req.userId;
        console.log(userId)

        // Validate user input
        if (!userId) {
            return res.status(400).json({ message: 'Please provide user ID' });
        }

        // Check if user exists
        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        // Get items created by user
        const userItems = await Item.find({ createdBy: userId }).populate('rentedBy', 'name email image');
        
        return res.status(200).json({
            success: true,
            message: 'User items fetched successfully',
            data : userItems,
            error : []
        });
    } catch (error) {
        return res.status(201).json({ 
            success: false,
            message: 'User items fetching failed',
            data : [],
            error : error

        });
    }
}

module.exports = {
    createItem,
    getAllItems,
    getItemById,
    rentItem,
    userRentedItem,
    updateItem,
    deleteItem,
    getItemByCategory,
    getUserItems
}