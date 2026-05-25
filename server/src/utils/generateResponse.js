const generateResponse = (status, code, message, data) => {
    return {   
        success: status, 
        code: code, 
        message: message, 
        data: data
    }
}

export default generateResponse;