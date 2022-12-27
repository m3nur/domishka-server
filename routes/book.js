const Book = require('../model/Book');
const { verifyTokenAndAdmin } = require('./verifyJWT');

const router = require('express').Router();

//CREATE
router.post('/', async (req, res) => {
  const newBook = new Book(req.body);

  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json('Book has been deleted!');
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET BOOK
router.get('/find/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL BOOK
router.get('/', async (req, res) => {
  try {
    const products = await Book.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
