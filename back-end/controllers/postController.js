const db = require('../models');
const { sendErrorResponse, sendSuccessResponse } = require('./response') 

const index = (req, res) => {
    db.Post.find({}).populate('user city', '-password -_id -__v' ).exec({password: 0, _v:0}, (error, foundAllPosts) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, foundAllPosts);
    })
};

const show = (req, res) => {
    db.Post.findById({ _id: req.params._id }, (error, foundOnePost) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, foundOnePost);
    });
};

const create = (req, res) => {
    console.log(req.body)
    db.Post.create(req.body, (error, createdPost) => {
        if (error) return sendErrorResponse(res, error);
        db.User.findById(req.body.userId, {password: 0}, (error,foundUser)=>{
            if (error) return sendErrorResponse(res, error);
            db.Post.user = foundUser
            db.City.findById(req.body.cityId, (error,foundCity)=>{
                if (error) return sendErrorResponse(res, error);
                db.Post.city = foundCity
                createdPost.save();
                sendSuccessResponse(res, createdPost);
            });
        });  
    });
};

const update = (req, res) => {
    db.Post.findByIdAndUpdate(req.params._id, req.body, {new: true }, (error, updatedPost) => {
        if (error) return sendErrorResponse( res, error);
        sendSuccessResponse(res, updatedPost)
    })
};

const del = (req, res) => {
    db.Post.findByIdAndDelete({ _id: req.params._id }, (error, deletedPost) => {
        if (error) return sendErrorResponse( res, error);
        sendSuccessResponse(res, deletedPost);
    })
};

module.exports = {
    index,
    show,
    create,
    update,
    del
};