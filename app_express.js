const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

//view 경로
app.set('views', __dirname + '/views');

//화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// static 폴더를 /public으로 설정
app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.urlencoded({ extended: false }));

// router 설정
const indexRouter = require('./router/index');
app.use('', indexRouter);

app.use((req, res, next) => {
    res.status(404).send("Sorry cant find that!");
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})