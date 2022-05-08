const router = require('express').Router();
const Blog = require('../models/Blog');

const session = require('express-session');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll();

        const blogs = blogData.map((blog) => blog.get({plain: true}));

        res.render('homepage', {blogs, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;