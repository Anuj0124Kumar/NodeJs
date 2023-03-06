function ageDetector(req,res,next){

    if(req.query.age>18){
        next();
        res.send("yor are great you can enter inthis website");
    }
    else{
        res.send("u can not access this wbbsite");
    }
}

module.exports = ageDetector;