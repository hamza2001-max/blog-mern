const express = require('express');
const router = express.Router();
const { createBlog, getAllBlogs, getSingleBlog, deleteBlog, pageNotFound } = require('../controllers/blogControllers');

router.get('/', getAllBlogs);
router.get('/:id', getSingleBlog);
router.post('/', createBlog);
// router.patch('/:id', (req, res) => {
//     res.json({ msg: 'update' })
// });
router.delete('/:id', deleteBlog);
router.get('/404', pageNotFound);

module.exports = router;