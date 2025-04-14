const cloudinary = require('../config/cloudinary');
const fs = require('fs');

const uploadOnCloudinary = async (filePath) => {
    try {
        if (!filePath) return null;
        const response = await cloudinary.uploader.upload(
           filePath, {
               resource_type: 'auto',
           }
       )
       fs.unlinkSync(filePath);
        return response.secure_url; // Return the URL of the uploaded image
    } catch (error) {
        fs.unlinkSync(filePath); // Remove the file even if upload fails
        console.log('Error uploading to Cloudinary:', error);
        return null;
        
    }
}

module.exports = {
    uploadOnCloudinary,
};