const router = require('express').Router();
const upload = require('../middleware/multer.middleware');
const {createItem, getAllItems, rentItem, userRentedItem, updateItem, deleteItem, getItemById, getItemByCategory, getUserItems} = require('../controllers/product.controller');
const auth = require('../middleware/auth.middleware');
router.post('/',upload.single('image'),auth, createItem);
router.get('/', getAllItems);
router.get('/:token', auth, getUserItems);
router.get('/:id', getItemById);
router.get('/category/:category', getItemByCategory);
router.post('/rent/:token',auth, rentItem);
router.get('/isrented/:token',auth, userRentedItem);
router.put('/:id',upload.single('image'), updateItem);
router.delete('/:id', deleteItem);


module.exports = router;