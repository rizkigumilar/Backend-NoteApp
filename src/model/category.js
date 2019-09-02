const connection = require('../config/db')

//object constructor
var category = function category(data) {
    (this.nameCat = data.nameCat),
        (this.idCat = data.idCat)
};

category.getcategory = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT category.idCat,category.nameCat FROM category ORDER BY idCat desc', (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(new Error(err))
            }
        })
    }

    )
}
category.getListById = (idcategory, result) => {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT category.idCat,category.nameCat FROM category WHERE category.idCat = ?`,
            Number(idcategory),
            (err, res) => {
                if (!err) {
                    resolve(res);
                } else {
                    reject(new Error(err));
                }
            }
        );
    })
},

    category.addcategory = (newcategory, result) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO category SET ?', newcategory, (err, result) => {
                if (!err) {
                    console.log(result)
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    category.updatecategory = (updatecategory, category_id) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE category SET ? WHERE idCat = ?', [updatecategory, Number(category_id)], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    category.deletecategory = (category_id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM category WHERE idCat = ?', category_id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },





    module.exports = category;
