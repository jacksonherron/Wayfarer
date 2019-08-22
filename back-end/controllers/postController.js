const db = require('../models');

function getTime() {
    return new Date().toLocaleString();
};

module.exports = {
    index: (req, res) => {
        db.Post.find({}, (err, allPosts) => {
            console.log(allPosts);
            if (err) return res.sendStatus(400).json({
                status: 400,
                message: 'Something went wrong, please try again'
            });
            res.status(200).json({
                status: 200,
                numberOfResults: allPosts.length,
            data: allPosts,
                requestedAt: getTime(),
            });
        });
    },

    show: (req, res) => {
        db.Post.findById(req.params._id, (err, foundPost) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, YOU GOOFED',
                error: err,
            });
            res.status(200).json({
                status: 200,
                data: foundPost,
                requestedAt: getTime()
            });
        });
    },

    new: (req, res) => {
        const newPost = req.body;
        db.Post.create(newPost, (err, createdPost) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again',
            });
            res.status(200).json({
                status: 201,
                data: createdPost,
                requestedAt: getTime(),
            });
        });
    },

    update: (req, res) => {
        db.Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRecipe) => {
            console.log(req.body);
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again',
            });
            res.status(200).json({
                status: 202,
                data: updatedRecipe,
                requestedAt: getTime(),
            });
        });
    },

    delete: (req, res) => {
        db.Post.findOneAndDelete(req.params.name, (err, deletedPost) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again',
            });
            res.status(200).json({
                status: 200,
                message: `Successfully deleted ${deletedPost}`,
                requestedAt: getTime(),
            });
        });
    }, 
};