class ApiError extends Error{
    constructor(message='something went wrong', statusCode ,errors=[],stack='' ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.errors = errors;
        if(stack){

        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}