//import models
const Blog = require('./Blog');
const User = require('./User');
const Comment = require('./Comment');

// Comments belong to a blog
Comment.belongsTo(Blog, {
    foreignKey: 'blog_id'
});

// Comments belong to a user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

//Blogs belong to a user
Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

//Blogs have many comments
Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

//Users have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//Users have many blogs
User.hasMany(Blog, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

module.exports = {
    Blog,
    User,
    Comment
};