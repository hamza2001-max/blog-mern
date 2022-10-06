const Blog = require('../models/blogModel');
const mongoose = require('mongoose');

const getAllBlogs = async (req, res) => {
    const allBlogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(allBlogs);
}

const getSingleBlog = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Wrong Format for id" });
    }
    const singleBlog = await Blog.findById(id);
    if (!singleBlog) {
        return res.status(400).json({ error: "No such blog" });
    }
    res.status(200).json(singleBlog);
}

const createBlog = async (req, res) => {
    const { title, description, blogBody } = req.body;
    let emptyFields = [];
    if (!title) {
        emptyFields.push('title');
    }
    if (!description) {
        emptyFields.push('description');
    }
    if (!blogBody) {
        emptyFields.push('blogBody');
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "Please fill all of the fields", emptyFields });
    }
    try {
        const blog = await Blog.create({
            title, description, blogBody
        });
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteBlog = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Wrong format for id" });
    }
    const erase = await Blog.findOneAndDelete({ _id: id });
    if (!erase) {
        return res.status(400).json({ error: "no such blog" })
    }
    res.status(200).json(erase);
}

const pageNotFound = async (req, res) => {
    return res.status(404).json({ error: "404, Page not found" });
}

module.exports = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    deleteBlog,
    pageNotFound
}