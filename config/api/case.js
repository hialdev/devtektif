//import database
const connection = require('../db')
const express = require('express')
const router = express()

// API routes

// Get
router.get('/cases', (req, res) => {
    let limit = req.query.limit || ''
    let order = req.query.order || ''
    let search = req.query.search || ''
    let query = 'SELECT * FROM cases'
    if (search) {query += ` WHERE title LIKE "%${search}%"`}
    if (order !== "latest") {query += ` ORDER BY created asc`} else {query += ` ORDER BY created desc`}
    if (limit) {
        query += ` LIMIT ${limit}`
    }
    connection.query(query, (error, results) => {
        if (error) throw error
        res.send(results)
    })
})

module.exports = router