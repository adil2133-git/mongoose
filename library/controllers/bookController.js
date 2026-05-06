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


const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.find()

        if (!books) {
            return res.status(404).json({ message: "No book found" })
        }

        res.status(200).json({ message: "BOOKS fetched successfully", books })
    } catch (err) {
        res.status(500).json({ message: "Error while fetching book", Error: err.message })
    }
}

const getBookById = async (req, res) => {
    try {
        const { id } = req.params

        const book = await bookModel.findById(id)

        if (!book) {
            return res.status(404).json({ message: "Book not found" })
        }

        res.status(200).json({ message: "Book fetched successfully", book })
    } catch (err) {
        res.status(500).json({ message: "Error fetching a Book", Error: err.message })
    }
}

const updateBook = async (req, res) => {
    try {
        const { id } = req.params

        const { title, author, genre, publishedYear } = req.body

        const book = await bookModel.findById(id)

        if (!book) {
            return res.status(404).json({ message: "Book not found" })
        }

        const updatedBook = await bookModel.findByIdAndUpdate(
            id,
            {

                title,
                author,
                genre,
                publishedYear
            }
        )

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" })
        }

        res.status(200).json({ message: "Book updated successfully", updatedBook })
    } catch (err) {
        res.status(500).json({ message: "Error updating book", Error: err.message })
    }
}


const deleteBook = async (req, res) => {
    try{
        const {id} = req.params

        const book = await bookModel.findByIdAndDelete(id)

        if(!book){
            return res.status(404).json("Book not found")
        }

        res.status(200).json({message: "Book deleted successfully", })
    }catch(err){
        res.status(500).json({message: "Error in Book deletion", Error: err.message})
    }
}

module.exports = { addBook, getAllBooks, getBookById, updateBook, deleteBook }