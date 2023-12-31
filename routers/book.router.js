const { Router } = require("express");

const BookController = require("../controllers/book.controller");
const BookApiController = require("../controllers/bookApi.controller");

const upload = require("../middlewares/upload");

const { getDetailBook, addBook, deleteBook, editBook, getBook } =
  BookApiController;
const {
  listpage,
  detailpage,
  editPage,
  aboutPage,
  createPage,
  deletePage,
  store,
  update,
} = BookController;

const router = Router();
router.get("/book", listpage);
router.get("/book/create", createPage);
router.post("/book", upload.single("img"), store);
router.get("/book/:id", detailpage);
router.get("/book/:id/edit", editPage);
router.post("/book/:id/edit", upload.single("img"), update);
router.post("/book/:id/delete", deletePage);

// About Page
router.get("/book/about", aboutPage);

// API routes
router.get("/api/book", getBook);
router.get("/api/book/:id", getDetailBook);
router.post("/api/book", addBook);
router.put("/api/book/:id", editBook);
router.delete("/api/book/:id", deleteBook);

module.exports = router;
