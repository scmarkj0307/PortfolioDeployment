const SampleWork = require('../models/sampleworkSchema')
const mongoose = require('mongoose')

// get all sample works
const getallSW = async (req, res) => {
  const sw = await SampleWork.find({}).sort({createdAt: -1})

  res.status(200).json(sw)
}

// get a single sample works
const getSW = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such work'})
  }

  const sw = await SampleWork.findById(id)

  if (!sw) {
    return res.status(404).json({error: 'No such work'})
  }

  res.status(200).json(sw)
}

// create a new sample work
const createSW = async (req, res) => {
  const {title, description, tech, image} = req.body

  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!description) {
    emptyFields.push('description')
  }
  if (!tech) {
    emptyFields.push('tech')
  }
  if (!image) {
    emptyFields.push('image')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const sw = await SampleWork.create({ title, description, tech, image })
    res.status(200).json(sw)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
const deleteSW = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such sample work'})
  }

  const sw = await SampleWork.findOneAndDelete({_id: id})

  if(!sw) {
    return res.status(400).json({error: 'No such sample work'})
  }

  res.status(200).json(sw)
}

// update a workout
const updateSW = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such sample work'})
  }

  const sw = await SampleWork.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!sw) {
    return res.status(400).json({error: 'No such sample work'})
  }

  try {
    const sw = await SampleWork.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true } // Return the updated document
    );

    res.status(200).json(sw);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getallSW, 
  getSW, 
  createSW, 
  deleteSW, 
  updateSW
}