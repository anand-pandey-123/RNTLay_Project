const router = require('express').Router();
const {registerUser, loginUser, updateUser, deleteUser, getUser} = require('../controllers/user.controller');
const upload = require('../middleware/multer.middleware');
router.post('/register',upload.single('image'), registerUser);
router.post('/login', loginUser);
router.get('/:id', getUser);
router.post('/update',upload.single('image'), updateUser);
router.post('/delete', deleteUser);



module.exports = router;