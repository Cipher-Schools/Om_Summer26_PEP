let count = 0;

export const loggers= (req, res, next) => {

    console.log(`Request from ${req.method}`)
    count+=1;
    console.log('Request number: ', count);

    next();
}