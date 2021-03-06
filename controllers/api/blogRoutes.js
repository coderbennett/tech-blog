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
});

router.get('/:id', async (req, res) => {
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
});

router.post('/', async (req, res) => {
    //creating a new blog post
    try {
        const blogData = await Blog.create({
            name: req.body.name,
            content: req.body.content,
            user_id: req.session.userId
        });

        res.status(200).json(blogData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const blogData = await Blog.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        if (!blogData) {
            res.status(404).json({ message: 'No blog could be found with this id.'});
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.userId
            }
        });

        if (!blogData) {
            res.status(404).json({ message: 'No blog could be found with this id.'});
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;