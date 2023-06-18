const { Router } = require('express');
const BookApiController = require('../controllers/bookApi.controller');
const BookController = require('../controllers/book.controller');

const { getDetailBook, addBook, deleteBook, editBook, getBook } = BookApiController;

const router = Router();


router.get("/api/book", getBook);
router.get("/api/book/:id", getDetailBook);
router.post("/api/book", addBook);
router.put("/api/book/:id", editBook);
router.delete("/api/book/:id", deleteBook);

module.exports = router;
