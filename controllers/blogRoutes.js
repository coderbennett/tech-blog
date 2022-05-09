const router = require('express').Router();
const { Blog, User, Comment } = require('../models');

router.get('/new', async (req, res) => {
    res.render('newblogpost', { loggedIn: req.session.loggedIn });
});

router.get('/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                { 
                    model: User,
                    attributes: ['name']
                }
            ]
        });

        const commentData = await Comment.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ],
            where: {
                blog_id: req.params.id
            }
        });

        const comments = commentData.map((comment) => comment.get({plain: true}));

        if(!blogData) {
            res.status(404).json({message: 'No blog with this id!'});
            return;
        }
        const blog = blogData.get({ plain: true });

        const userOwned = (req.session.userId === blog.user_id) ? true : false;

        res.render('blog', {blog, loggedIn: req.session.loggedIn, userOwned, comments});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id/edit', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            where: {
                user_id: req.session.userId
            }
        });

        if(!blogData) {
            res.status(400).json({message: 'No blog to update, or you are not the author of this post!'});
            return;
        }

        const blog = blogData.get({ plain: true });

        res.render('updateblogpost', { blog, loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;