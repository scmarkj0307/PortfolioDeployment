const express = require('express')
const {
  getAllPersonalInfo, 
  getPersonalInfo, 
  createPersonalInfo, 
  deletePersonalInfo, 
  updatePersonalInfo
} = require('../controllers/personalInfoController')

const router = express.Router() 

// GET all personal information
router.get('/', getAllPersonalInfo)

// GET a single piece of personal information
router.get('/:id', getPersonalInfo)

// POST new personal information
router.post('/', createPersonalInfo)

// DELETE personal information
router.delete('/:id', deletePersonalInfo)

// UPDATE personal information
router.patch('/:id', updatePersonalInfo)

module.exports = router
