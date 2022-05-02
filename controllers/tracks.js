const {tracksModel} = require("../models")
const {handleHttpError} = require("../utils/handleError")

/**
  *Get the list from data base!
  *@param {*} req
  *@param {*} res
  **/
const getItems = async (req, res)=>{

  try{
      const data = await tracksModel.find({})
      res.send({data})
  }catch (err) {
      handleHttpError(res, "ERROR_GET_ITEM")
  }

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
try{  
  const { body } = matchedData(req)
  const data = await tracksModel.create(body)
  res.send({data})
}
catch(err){
  handleHttpError(res, "ERROR_CREATE_ITEM")
}

  
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