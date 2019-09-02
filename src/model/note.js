const connection = require('../config/db')

//object constructor
var note = function note(data) {
    (this.title = data.title),
        (this.idCat = data.idCat), (this.description = data.description)
};

note.getnotes = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT note.idNote,note.title,category.nameCat,note.idCat,note.description, note.updated_at FROM note INNER JOIN category ON note.idCat = category.idCat ORDER BY idNote desc', (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(new Error(err))
            }
        })

    })
},
    note.getListById = (idNote, result) => {
        return new Promise((resolve, reject) => {
            connection.query(
                `SELECT note.idNote,note.title,category.nameCat,note.description, note.updated_at FROM note INNER JOIN category ON note.idCat = category.idCat
				WHERE note.idNote = ?`,
                Number(idNote),
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

    note.addnote = (newnote, result) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO note SET ?', newnote, (err, result) => {
                if (!err) {
                    console.log(result)
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    note.updatenote = (updatenote, idNote) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE note SET ? WHERE idNote = ?', [updatenote, idNote], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    note.deletenote = (note_id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM note WHERE idNote = ?', note_id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },





    module.exports = note;
