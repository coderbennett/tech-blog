const router = require('express').Router();
const apiRoutes = require('./api');
const Blog = require('../models/Blog');

router.use('/api', apiRoutes);

const withAuth = require('../utils/auth');
const session = require('express-session');

router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll();

        const blogs = blogData.map((blog) => blog.get({plain: true}));

        res.render('homepage', {blogs, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
    }
});

module.exports = router;