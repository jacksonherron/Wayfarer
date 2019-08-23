// NOTE access to database in models directory
const db = require('../models');
//NOTE  acquires refractored functions for error and success responses
const { sendErrorResponse, sendSuccessResponse } = require('./response');

const cities = {
    london: "London",
    sydney: "Sydney",
    gibraltar: "Gibraltar",
    tokyo: "Tokyo",
    sanfrancisco: "San Francisco",
    seattle: "Seattle"
}

const index = (req, res) => {
    db.City.find({}).exec((error, foundAllCities) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, foundAllCities);
    });
};

const show = (req, res) => {
    db.City.find({ name: cities[req.params.name] }, (error, foundCity) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, foundCity);
    });
};

const create = (req, res) => {
    db.City.create(req.body, (error, createdCity) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, createdCity);
    });
};

const update = (req, res) => {
    db.City.findByIdAndUpdate(req.params._id, req.body, { new: true }, (error, updatedCity) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, updatedCity);
    });
};

const del = (req, res) => {
    db.City.findByIdAndDelete({ _id: req.params._id }, (error, deletedCity) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, deletedCity);
    })
}


module.exports = {
    index,
    show,
    create,
    update,
    del
}