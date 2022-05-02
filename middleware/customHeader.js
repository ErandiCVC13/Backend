const customHeader = (req, res, next) => {
  try{
    console.log(req.headers.api_key)
    const apiKey = req.headers.api_key

    if ( apiKey === "Erandi") {
      next()
    } else {
      res.status(401)
      res.send({error: "CONTENT_FORBBIDEN"})
      next()
    }
    
  }catch(e){
    res.status(404)
    res.send({error: "SOMETHING_GONE_WRONGE"})
     next()
  }
}

module.exports = customHeader