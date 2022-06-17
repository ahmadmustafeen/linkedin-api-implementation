const apiResponse = (data={},message="",status=true) => {
    return {
        data:data,
        message:message,
        status:status
    }
}


module.exports = {
    apiResponse
}