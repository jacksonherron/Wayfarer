// NOTE access to database in models directory
const db = require('../models');
//NOTE  acquires refractored functions for error and success responses
const responseMessage = require('./response');


const index = (req, res) => {
    db.City.find({}).exec((error, foundAllCities) => {
        if (error) return responseMessage.sendErrorResponse(res, error);
        responseMessage.sendSuccessResponse(res, foundAllCities);
    });
};

const show = (req, res) => {
    db.City.findById({ _id: req.params._id }, (error, foundOneCity) => {
        if (error) return responseMessage.sendErrorResponse(res, error);
        responseMessage.sendSuccessResponse(res, foundOneCity);
    });
};

const create = (req, res) => {
    db.City.create(req.body, (error, createdCity) => {
        if (error) return responseMessage.sendErrorResponse(res, error);
        responseMessage.sendSuccessResponse(res, createdCity);
    });
};

const update = (req, res) => {
    db.City.findByIdAndUpdate(req.params._id, req.body, { new: true }, (error, updatedCity) => {
        if (error) return responseMessage.sendErrorResponse(res, error);
        responseMessage.sendSuccessResponse(res, updatedCity);
    });
};

const del = (req, res) => {
    db.City.findByIdAndDelete({ _id: req.params._id }, (error, deletedCity) => {
        if (error) return responseMessage.sendErrorResponse(res, error);
        responseMessage.sendSuccessResponse(res, deletedCity);
    })
}


module.exports = {
    index,
    show,
    create,
    update,
    del
}