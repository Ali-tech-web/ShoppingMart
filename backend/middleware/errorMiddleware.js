import asyncHandler from 'express-async-handler'
const notFound = asyncHandler(async (req, res, next) => {
    // const error = new Error(`Not Found -- ${req.originalUrl}`)
    // res.status(404)
    // next(error)
})

const errorHandler = (err, req, res, next) => {
    console.log('I am in error handler: res : ', res.statusCode)
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode).json({
       message : err.message,
       stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
 }


export {notFound, errorHandler }