let express = require('express');
let router = express.Router();
let template = require('../lib/template.js');
//let db = require('../lib/db.js');

router.get("/", (req, res, next) =>{
    res.render('index.html');
});

router.get("/login", (req, res, next) => {
    res.render('login.html');
});

router.post("/login_process", (req, res)=>{
    let post = req.body;
    /*db.query(
        `SELECT * FROM user WHERE userId=? and pwd=?`,
        [post.userID, post.pwd],
        (err, result) => {
            if(err){
                next(err);
            }
            else if (result == ""){
                console.log(result);
                response.redirect("/login_fail");
            }
            else{
                console.log(result);
                response.redirect("/mainpage");
            }
        }
    );*/
});

module.exports = router;