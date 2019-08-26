const db = require('../models');


const show = (req, res) => {
    db.User.findById(req.params.id, {password: 0, _v:0}, (err, foundUser) => {
        if (err) return res.status(500).json({ status: 500, message: "Something went wrong, Please try again."})

        res.status(200).json({ status: 200, data: foundUser });
    });
};

const index = (req, res) => {
    db.User.find({}).exec((err, foundUsers) => {
        if (err) return res.status(500).json({ status: 500, message: "Something went wrong, Please try again."})

        res.status(200).json({ status: 200, data: foundUsers });
    })
}

const update = (req, res) => {
    db.User.findByIdAndUpdate(req.params._id, req.body, { new: true }, (error, updatedUser) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, updatedUser);
    });
};


module.exports = {
    show,
    index,
    update
}