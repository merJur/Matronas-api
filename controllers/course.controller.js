const createError = require('http-errors');
const Course = require('../models/Course.model');


//CRUD
//READ
module.exports.list = (req, res, next) => {
    Course.find()
    
    .then( courses => {
        console.log('✔️................course created');
        res.status(200).json(courses)
    })
    .catch( err => next(err))
}

//DETAIL
module.exports.detail = (req, res, next) => {
    Course.findById(req.params.id)   
    .then(course => {
        if (!course) {
            next(createError(404, 'Course not found'))
        } else {
            res.json(course)
        }
    })
    .catch( err => next(err))
}

//CREATE
module.exports.create = (req, res, next) => {
    Course.create(req.body)
    .then( course => {
        console.log('.......................course created');
        res.status(201).json(course)
    })
    .catch( err => next(err))
}

//UPDATE
module.exports.update = (req, res, next) => {
    const { id } = req.params

    Course.findByIdAndUpdate(id, req.body, {new: true})
    .then(course => {
        console.log('✔️.............. course updated!')
        res.status(201).json(course)
    })
    .catch( err => next(err))
}

//DELETE
module.exports.delete = (req, res, next) => {
    const { id } = req.params
    Course. findByIdAndDelete(id)
    .then(() => {
        console.log('👎..............course deleted');
       res.status(204)
    })
    .catch( err => next(err))
}

