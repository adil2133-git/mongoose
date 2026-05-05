const express = require("express")
const bookModel = require("../models/bookModel")

const addBook = async (req, res) => {
    try {
        const { title, author, genre, publishedYear } = req.body

        if (!title || !author || !genre || !publishedYear) {
            return res.status(400).json("All fields required")
        }

        const titleCheck = await bookModel.findOne({ title })


        if (titleCheck) {
            return res.status(401).json({ message: "Book already exists" })
        }

        const newBook = await bookModel.create({
            title,
            author,
            genre,
            publishedYear
        })

        res.status(200).json({ message: "Book added successfully", Book: newBook })
    } catch (err) {
        res.status(500).json({ message: "Error while adding a book", Error: err.message })
    }
}

module.exports = { addBook }