const router = require('express').Router();
const { Comment } = require('../models');

router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
            content: req.body.content,
            blog_id: req.body.blog_id,
            user_id: req.session.userId
        });

        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});