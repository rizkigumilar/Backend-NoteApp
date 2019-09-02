const express = require('express')
const Route = express.Router()

const note = require('../controller/note')
const category = require('../controller/category')
// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './src/uploads/images')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// })
// let upload = multer({ storage: storage, limits: { fileSize: 100000000 } })


Route
    .get('/note', note.getnotes)
    .get('/note/:idNote', note.listById)
    // .get('/note/page', note.getPagination)
    .post('/note', note.addnote)
    .patch('/note/:idNote', note.updatenote)
    .delete('/:idNote', note.deletenote)

    .get('/category', category.getcategory)
    .get('/category/:idCat', category.listById)
    // .get('/category/page', category.getPagination)
    .post('/category', category.addcategory)
    .patch('/category', category.updatecategory)
    .delete('/:idCat', category.deletecategory)


module.exports = Route