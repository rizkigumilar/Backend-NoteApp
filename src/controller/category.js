const category = require('../model/category')
const resultRespon = require('../helper/helper')


exports.listById = (req, res) => {
    const idcategory = req.params.idCat;
    category.getListById(idcategory)
        .then((resultcategory) => {
            resultRespon.response(res, resultcategory, 200);
        })
        .catch((err) => {
            console.log(err);
        });
},
    exports.addcategory = async (req, res) => {
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

        let newcategory = {
            nameCat: req.body.nameCat,
            idCat: req.body.idCat,
        }
        category.addcategory(newcategory)
            .then(() => {
                resultRespon.response(res, newcategory, 200);
            })
            .catch((err) => {
                console.log(err);
            })
    },

    exports.updatecategory = (req, res) => {
        const category_id = req.params.idCat

        const updatecategory = new category(req.body)

        category.updatecategory(updatecategory, category_id)
            .then((resultUser) => {
                const result = resultUser[0]
                resultRespon.response(res, updatecategory, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    exports.deletecategory = (req, res) => {
        const category_id = req.params.idcategory

        category.deletecategory(category_id)
            .then((resultUser) => {
                const result = resultUser[0]
                resultRespon.response(res, category_id, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    exports.getPagination = (req, res) => {
        let limit = parseInt(req.query.limit) || 8
        let page = parseInt(req.query.page) || 1
        category.getPagination(limit, page)
            .then((resultcategory) => {
                const result = resultcategory
                resultRespon.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    exports.getcategory = (req, res) => {
        var jumlah = 0
        category.getcategory()
            .then((resultcategory) => {
                jumlah = resultcategory.length
            })
        const search = req.query.search || ''
        const page = req.query.page || ''
        category.getcategory(search, page)
            .then((resultcategory) => {
                const result = resultcategory
                // console.log(result);
                resultRespon.response(res, result, 200, jumlah)
            })
            .catch((error) => {
                console.log(error)
            })
    }
