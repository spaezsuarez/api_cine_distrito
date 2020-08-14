exports.succes = (request,response,message,status = 200) => {
    response.status(status).json({
        "status":status,
        "data":message
    });
}

exports.error = (request,response,error,status = 500) => {
    response.status(status).json({
        "status":status,
        "error":error
    });
}