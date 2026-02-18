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
        this.message = message // stores the error message
        this.success = false   // indicates that the API request failed
        this.errors = errors   // stores the array of detailed errors

        if(stack) {    // if custom stack is provided, use the provided stack trace
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor) // otherwise automatically generate a stack trace showing where the error occurred
        }
    }
}

export {ApiError}

// custom API error created 