
exports.getExamples = (req,res,next) => {
    if(req.query.examples == "examples"){
        res.json({
            example: "examples"
        })
    }
    else{
        res.json({
            test: "test"
        })
    }
    
}