const express = require("express");
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = ( fileName) =>{
  return fileName.split(".").shift()
}

fs.readdirSync(PATH_ROUTES).filter((file)=>{
  const pathName = removeExtension(file)

  if(pathName !== "index"){
    console.log("Cargando ruta", pathName)
    router.use(`/${pathName}`, require( `./${file}`))
  }
})


module.exports = router
