const handleHttpError = ( res, message = "Happend" , code =403) =>{

  res.status(code)
  res.send({error:message})
  
}

module.exports = {handleHttpError}