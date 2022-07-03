const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.get("/", (req, res,) => {
    user.find().then(resp => {
        res.json(resp)
    }).catch((err) => {
        console.log(err)
        res.send(err)
    })
})


router.post("/", (req, res) => {
    user.create(
        {
            userName: req.body,




        }
    )
})

module.exports = router