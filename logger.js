function logger(req, res, next) {
    console.log(req.method, req.originalUrl);

    //call the next middleware in the stack
    next();
}

module.exports = logger;