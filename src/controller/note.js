const note = require('../model/note')
const resultRespon = require('../helper/helper')


exports.listById = (req, res) => {
    const idNote = req.params.idNote;
    note.getListById(idNote)
        .then((resultnote) => {
            resultRespon.response(res, resultnote, 200);
        })
        .catch((err) => {
            console.log(err);
        });
},
    exports.addnote = async (req, res) => {
        // let path = req.file.path
        // let geturl = async (req) => {
        //     cloudinary.config({
        //         cloud_name: process.env.CLOUDNAME,
        //         api_key: process.env.API_KEY,
        //         api_secret: process.env.API_SECRET
        //     })

        //     let data
        //     await cloudinary.uploader.upload(path, (result) => {
        //         const fs = require('fs')
        //         fs.unlinkSync(path)
        //         data = result.url
        //     })

        //     return data
        // }

        let newnote = {
            title: req.body.title,
            description: req.body.description,
            idCat: req.body.idCat,
        }
        note.addnote(newnote)
            .then(() => {
                resultRespon.response(res, newnote, 200);
            })
            .catch((err) => {
                console.log(err);
            })
    },

    exports.updatenote = (req, res) => {
        const note_id = req.params.idNote

        const updatenote = new note(req.body)

        note.updatenote(updatenote, note_id)
            .then((resultUser) => {
                const result = resultUser[0]
                resultRespon.response(res, updatenote, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    exports.deletenote = (req, res) => {
        const note_id = req.params.idNote

        note.deletenote(note_id)
            .then((resultUser) => {
                const result = resultUser[0]
                resultRespon.response(res, note_id, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    exports.getPagination = (req, res) => {
        let limit = parseInt(req.query.limit) || 8
        let page = parseInt(req.query.page) || 1
        note.getPagination(limit, page)
            .then((resultnote) => {
                const result = resultnote
                resultRespon.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    exports.getnotes = (req, res) => {
        var jumlah = 0
        note.getnotes()
            .then((resultnote) => {
                jumlah = resultnote.length
            })
        const search = req.query.search || ''
        const page = req.query.page || ''
        note.getnotes(search, page)
            .then((resultnote) => {
                const result = resultnote
                // console.log(result);
                resultRespon.response(res, result, 200, jumlah)
            })
            .catch((error) => {
                console.log(error)
            })
    }
