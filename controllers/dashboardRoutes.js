const router = require('express').Router();
const { Blog, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll( {
            where: {
                user_id: req.session.userId
            }
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('dashboard', {blogs, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;