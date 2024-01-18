const PersonalInfo = require('../models/personalInfoSchema')
const mongoose = require('mongoose')

// get all personal information
const getAllPersonalInfo = async (req, res) => {
  const personalInfo = await PersonalInfo.find({}).sort({createdAt: -1})

  res.status(200).json(personalInfo)
}

// get a single piece of personal information
const getPersonalInfo = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such personal information'})
  }

  const personalInfo = await PersonalInfo.findById(id)

  if (!personalInfo) {
    return res.status(404).json({error: 'No such personal information'})
  }

  res.status(200).json(personalInfo)
}

// create new personal information
const createPersonalInfo = async (req, res) => {
  const {name, details, category, image} = req.body

  let emptyFields = []

  if (!name) {
    emptyFields.push('name')
  }
  if (!details) {
    emptyFields.push('details')
  }
  if (!category) {
    emptyFields.push('category')
  }
  if (!image) {
    emptyFields.push('image')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const info = await PersonalInfo.create({ name, details, category, image })
    res.status(200).json(info)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete personal information
const deletePersonalInfo = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such personal information'})
  }

  const info = await PersonalInfo.findOneAndDelete({_id: id})

  if(!info) {
    return res.status(400).json({error: 'No such personal information'})
  }

  res.status(200).json(info)
}

// update personal information
const updatePersonalInfo = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such personal information'})
  }

  const info = await PersonalInfo.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!info) {
    return res.status(400).json({error: 'No such personal information'})
  }

  try {
    const updatedInfo = await PersonalInfo.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true } // Return the updated document
    );

    res.status(200).json(updatedInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllPersonalInfo, 
  getPersonalInfo, 
  createPersonalInfo, 
  deletePersonalInfo, 
  updatePersonalInfo
}
