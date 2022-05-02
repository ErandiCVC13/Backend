const {storageModel} = require("../models")
const PUBLIC_URL = process.env['PUBLIC_URL']

/**
  *Get the list from data base!
  *@param {*} req
  *@param {*} res
  **/
const getItems = async (req, res)=>{
  const data = await storageModel.find({})
  res.send({data})
}
/**
  *Get an item from data base!
  *@param {*} req
  *@param {*} res
  **/
const getItem = (req, res)=>{
  
}
/**
  *Create an item on data base!
  *@param {*} req
  *@param {*} res
  **/
const createItem = async (req, res)=>{

  const { body, file } = req

  const fileData = {
    url: `${PUBLIC_URL}/${file.filename}`,
    filename: file.filename
  }
 
  const data = await storageModel.create(fileData)
  res.send({data})
  
}
/**
  *Update an item on data base!
  *@param {*} req
  *@param {*} res
  **/
const updateItems = (req, res)=>{
   const dataRespose = [" Hello ", "world"]
  res.send({dataRespose})
}
/**
  *Delete an item data base!
  *@param {*} req
  *@param {*} res
  **/
const deleteItems = (req, res)=>{
  
}

module.exports = { getItems, getItem, createItem, updateItems, deleteItems}