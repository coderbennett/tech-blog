const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [{ model: User, model: Comment }]
        });

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/blog/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [{ model: User, model: Comment}]
        });

        if (!blogData) {
            res.status(404).json({ message: 'No blog with this id!'});
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
})