// 使用 Mock
var Mock = require('mockjs')
// 这句的意思就是引入 `express` 模块，并将它赋予 `express` 这个变量等待使用。
var express = require('express');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
var app = express();

// app 本身有很多方法，其中包括最常用的 get、post、put/patch、delete，在这里我们调用其中的 get 方法，为我们的 `/` 路径指定一个 handler 函数。
// 这个 handler 函数会接收 req 和 res 两个对象，他们分别是请求的 request 和 response。
// request 中包含了浏览器传来的各种信息，比如 query 啊，body 啊，headers 啊之类的，都可以通过 req 对象访问到。
// res 对象，我们一般不从里面取信息，而是通过它来定制我们向浏览器输出的信息，比如 header 信息，比如想要向浏览器输出的内容。这里我们调用了它的 #send 方法，向浏览器输出一个字符串。
app.get('/classic/latest', function (req, res) {
    var data = Mock.mock({
        "content": "新说唱第三季Jack最喜欢的选手就是福克斯",
        "fav_nums": 0,
        "img": "http://127.0.0.1:5000/images/movie.7.png",
        "index": 7,
        "like_status": 0,
        "pubdate": "2019-09-01",
        "title": "新说唱第三季",
        "type": 100
    })
    res.send(data);
});

// 定义好我们 app 的行为之后，让它监听本地的 8000 端口。
// 这里的第二个函数是个回调函数，会在 listen 动作成功后执行，我们这里执行了一个命令行输出操作，告诉我们监听动作已完成。
app.listen(8000, function () {
    console.log('app is listening at port 8000');
});