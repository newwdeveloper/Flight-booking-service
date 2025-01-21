const { StatusCodes } = require("http-status-codes");
const { BookingServices } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createBooking(req, res) {
  try {
    console.log("Request Body:", req.body);
    const response = await BookingServices.createBooking({
      flightId: req.body.flightId,
      userId: req.body.userId,
      noOfSeats: req.body.noOfSeats,
    });
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    // Fallback to INTERNAL_SERVER_ERROR if error statusCode is undefined
    const errorCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

    // Log the error for debugging
    console.error("Error Details:", error);

    // Send error response
    ErrorResponse.error = error.message || "An unexpected error occurred";
    return res.status(errorCode).json(ErrorResponse);
  }
}

module.exports = {
  createBooking,
};
