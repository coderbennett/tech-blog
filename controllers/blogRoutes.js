const router = require('express').Router();
const { Blog, User, Comment } = require('../models');

router.get('/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                { 
                    model: User,
                    attributes: ['name']
                },
                {
                    model: Comment
                }
            ]
        });

        if(!blogData) {
            res.status(404).json({message: 'No blog with this id!'});
            return;
        }
        const blog = blogData.get({ plain: true });

        res.render('blog', {blog, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;