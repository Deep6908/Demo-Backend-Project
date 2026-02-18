class ApiError extends Error {  // ApiError class inheriting features from parent Error class
    constructor(    // this runs when you create a new error
        statusCode,
        message = 'Something went wrong',
        errors = [],
        stack = ''
    ) {
        super(message)  // super calls the parent Error class constructor
        this.statusCode = statusCode
        this.data = null    // placeholder for extra data (not used yet), its like a future storage box
        this.message = message
        this.success = false
        this.errors = errors

        if(stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}

// custom API error created 