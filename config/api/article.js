//import database
const connection = require('../db')
const express = require('express')
const router = express()

// API routes

// Get
router.get('/articles', (req, res) => {
    let limit = req.query.limit || ''
    let query = 'SELECT * FROM articles'
    if (limit) {
        query += ` LIMIT ${limit}`
    }
    connection.query(query, (error, results) => {
        if (error) throw error
        res.send(results)
    })
})

module.exports = router