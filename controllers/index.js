const router = require('express').Router();
const apiRoutes = require('./api');
const blogRoutes = require('./blogRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const Blog = require('../models/Blog');
const User = require('../models/User');

router.use('/api', apiRoutes);
router.use('/blog', blogRoutes);
router.use('/dashboard', dashboardRoutes);

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll();

        const blogs = blogData.map((blog) => blog.get({plain: true}));

        res.render('homepage', {blogs, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    res.render('login', { loggedIn: req.session.loggedIn});
});

module.exports = router;