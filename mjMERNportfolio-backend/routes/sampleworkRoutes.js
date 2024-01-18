const express = require('express')
const {
  getallSW, 
  getSW, 
  createSW, 
  deleteSW, 
  updateSW
} = require('../controllers/sampleworkController')

const router = express.Router()

// GET all sample works
router.get('/', getallSW)

// GET a single sample works
router.get('/:id', getSW)

// POST a new sample works
router.post('/', createSW)

// DELETE a sample works
router.delete('/:id', deleteSW)

// UPDATE a sample works
router.patch('/:id', updateSW)

module.exports = router