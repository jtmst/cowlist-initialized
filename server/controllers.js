const { createCow, retrieveCows } = require("./database/index")


const getCows = (req, res) => {
    console.log(retrieveCows())
    retrieveCows()
        .then((response) => {
            res.json(response)
        })
        .catch(() => {
            res.sendStatus(404)
        })
}

const postCow = (req, res) => {
    let cow = req.body
    createCow(cow)
        .then(console.log('cow saved'))
        .catch((err) => console.log(err))
    res.sendStatus(200)
}

module.exports = {
    getCows,
    postCow
}

