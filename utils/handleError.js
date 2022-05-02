const handleHttpError = ( res, message = "Happend" , code =403) =>{

  res.status(code)
  res.status({error:message})
  
}

module.exports = {handleHttpError}