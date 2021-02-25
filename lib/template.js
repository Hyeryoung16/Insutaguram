module.exports = {
    html : function (title, stories, contents, myprofile){
        return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="CSS/global.css">
    <link rel="stylesheet" href="CSS/mainpage.css">
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/ce8307420b.js" crossorigin="anonymous"></script>
</head>
<body>
    <section class="header">
        <div class="header__logo">
            <i class="fab fa-instagram"></i>
            <h3>Insutaguram</h3>
        </div>
        <div class="header__search">
            <form action="" class = "search-form">
                <input type="text" name="search" id="search">
                <label for="search">검색</label>
            </form>
        </div>
        <div class="header__nav">
            <i class="fas fa-home"></i>
            <i class="far fa-paper-plane"></i>
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-user"></i>
        </div>
    </section>
    <section class="container">
        <div class="container__contents">
            <div class="stories">
                ${stories}
            </div>
            <div class="contents">
                ${contents}
            </div>
        </div>
        <div class="container__rightside">
            ${myprofile}
        </div>
    </section>
</body>
</html>
        `;
    }
}