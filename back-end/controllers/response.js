
const sendSuccessResponse = (res, data) => {
	res.status(200).json({
		status: 201,
		data: data
	});
};


const sendErrorResponse = (res, error) => {
	console.log({ error });
	res.status(400).json({
		status: 400,
		message: 'Something went wrong, please try again'
	});
};

module.exports = {
    sendSuccessResponse,
    sendErrorResponse,
};